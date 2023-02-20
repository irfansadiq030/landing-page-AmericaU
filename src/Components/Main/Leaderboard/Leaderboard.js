import React from "react";
import "./Leaderboard.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import PageTitle from "../PageTitle/PageTitle";
import { Scrollbar } from "react-scrollbars-custom";
import Loader from "./Loader";
import "./App.css";

const tabs = [
  {
    id: 0,
    title: "Student Leaderboard",
    link: "https://heroesleaguegameday.com/students/",
    linkTitle: "Go to Student's Page",
  },
  {
    id: 1,
    title: "School Leaderboard",
    linkTitle: "Go to School's Page",
    link: "https://heroesleaguegameday.com/teachers-schools/",
  },
  {
    id: 2,
    title: "Representative Districts Leaderboard",
    linkTitle: "Go to Lawmaker's Page",
    link: "https://heroesleaguegameday.com/government/",
  },
  {
    id: 3,
    title: "Senatorial Districts Leaderboard",
    linkTitle: "Go to Senatorial's Page",
    link: "https://heroesleaguegameday.com/government/",
  },
];

const SEARCH_QUERIES = {
  0: "100",
  1: "200",
  2: "300",
  3: "400",
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [studentData, setStudentData] = React.useState([]);
  const [schoolData, setSchoolData] = React.useState([]);
  const [representatievData, setRepresentatievData] = React.useState([]);
  const [senatorialData, setSenatorialData] = React.useState([]);

  const [loading, setLoading] = React.useState(false);
  const [inputData, setInputData] = React.useState("");

  const [isDataSearchding, setIsDataSearching] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (!inputData.length) searchData();
  }, [inputData.length]);

  const getTabData = (index) => {
    switch (index) {
      case 0:
        return studentData;
      case 1:
        return schoolData;
      case 2:
        return representatievData;
      case 3:
        return senatorialData;
      default:
        return studentData;
    }
  };

  const setTabData = (index) => {
    switch (index) {
      case 0:
        return setStudentData;
      case 1:
        return setSchoolData;
      case 2:
        return setRepresentatievData;
      case 3:
        return setSenatorialData;
      default:
        return setStudentData;
    }
  };

  const fetchData = async () => {
    setLoading(true);

    const resp = await Promise.all([
      (
        await fetch("https://mainbackend.woogiu.com/woogi/0.1/actor/cgi.php", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            cmd: "gms_ui_GmsUserInfo.getLeaderBoard",
          }),
        })
      ).json(),
      (
        await fetch("https://mainbackend.woogiu.com/woogi/0.1/actor/cgi.php", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            cmd: "gms_ui_GmsUserInfo.getLeaderBoardTopSchool",
          }),
        })
      ).json(),
      (
        await fetch("https://mainbackend.woogiu.com/woogi/0.1/actor/cgi.php", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            cmd: "gms_ui_GmsUserInfo.getLeaderBoardTopRep",
          }),
        })
      ).json(),
      (
        await fetch("https://mainbackend.woogiu.com/woogi/0.1/actor/cgi.php", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            cmd: "gms_ui_GmsUserInfo.getLeaderBoardTopSena",
          }),
        })
      ).json(),
    ]);

    setStudentData(resp[0]);
    setSchoolData(resp[1]);
    setRepresentatievData(resp[2]);
    setSenatorialData(resp[3]);

    setLoading(false);
  };

  const generateRandom = (min = 0, max = 100) => {
    // find diff
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor(rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
  };

  const makeNewObject = () => {
    const obj = {
      "Senator's Name": "--",
      "School Name": "--",
      "Representative's Name": "--",
      ranking: "66",
      Score: 0,
    };

    switch (activeTab) {
      case 0:
        return { ...obj, username: inputData, ranking: 0, Score: 0 };
      case 1:
        return {
          ...obj,
          "School Name": inputData,
          ranking: generateRandom(150, 200),
          Score: 0,
        };
      case 2:
        return {
          ...obj,
          "Representative's Name": inputData,
          ranking: 99,
          Score: 0,
        };
      case 3:
        return { ...obj, "Senator's Name": inputData, ranking: 33, Score: 0 };

      default:
        break;
    }
  };

  const searchData = async () => {
    setIsDataSearching(true);

    let data = [];

    data = await (
      await fetch("https://mainbackend.woogiu.com/woogi/0.1/actor/cgi.php", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          cmd: "gms_ui_GmsUserInfo.searchLeaderboard",
          txt: inputData.trim(),
          type: SEARCH_QUERIES[activeTab],
        }),
      })
    ).json();

    const dataSetter = setTabData(activeTab);

    if (+data.code === 200) {
      dataSetter(data.data);
    } else if (+data.code === 201) {
      dataSetter((data) => [makeNewObject(), ...data.slice(0, 4)]);
    }

    setIsDataSearching(false);
  };

  const handlKeyDown = (event) => {
    const isEnter = event.key === "Enter";

    if (isEnter) searchData();

    return !isEnter;
  };

  return (
    <div className="leaderBoard-container">
      <MobileHeader />
      <PageTitle title="Leaderboard" />

      {tabs.map((t, index) => {
        const isActive = t.id === activeTab;
        const content = getTabData(index);

        return (
          <div
            key={t.id}
            onClick={() => {
              setActiveTab(t.id);
            }}
          >
            <div className="c-row tab-title-container">
              <div className="c-col-10">
                <img
                  alt="shield"
                  src={
                    isActive
                      ? "https://heroesleaguegameday.com/wp-content/uploads/2023/01/Small-Shields-1.webp"
                      : "https://heroesleaguegameday.com/wp-content/uploads/2023/01/Small-Shields-2.webp"
                  }
                />
              </div>
              <div className="c-col-70">
                <p className="tab-title">{t.title}</p>
              </div>
              <div className="c-col-20">
                <a
                  href={t.link}
                  rel="noreferrer"
                  className="rank-btn"
                  target="_blank"
                >
                  {t.linkTitle}
                </a>
              </div>
            </div>

            {isActive && (
              <div className="container-rank">
                <div className="c-row" style={{ marginBottom: 20 }}>
                  <div className="c-col-80">
                    <div className="search-box-container">
                      <input
                        placeholder="Search..."
                        className="input-box"
                        onChange={(e) => setInputData(e.currentTarget.value)}
                        value={inputData}
                        onKeyDown={handlKeyDown}
                      />
                    </div>
                  </div>
                  <div className="c-col-10">
                    {
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a onClick={searchData} className="search-btn">
                        {isDataSearchding ? "Loading..." : "Search"}
                      </a>
                    }
                  </div>
                </div>
                <div className="c-row">
                  <div className="c-col-10">
                    <p className="col-title">RANK</p>
                  </div>
                  <div className="c-col-80">
                    <p className="col-title">NAME</p>
                  </div>
                  <div className="c-col-10">
                    <p className="col-title">POINTS</p>
                  </div>
                </div>

                {!isDataSearchding && (
                  <TabData content={content} index={index} />
                )}
                {isDataSearchding && (
                  <div className="loader-container">
                    <Loader />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const TabData = ({ content, index }) => {
  return (
    <div className="tab-data">
      <Scrollbar minimalThumbYSize={25} maximalThumbSize={25}>
        {content.map((row, innerIndex) => (
          <div className="c-row data-row" key={innerIndex}>
            <div className="c-col-10">
              <p className="data-rank">{row?.ranking || 0}</p>
            </div>
            <div className="c-col-80">
              <p className="data-title">
                {index === 0 && row.username + " (" + row["School Name"] + ")"}
                {index === 1 && row["School Name"]}
                {index === 2 && row["Representative's Name"]}
                {index === 3 && row["Senator's Name"]}
              </p>
            </div>
            <div className="c-col-10">
              <p className="data-score">{Math.trunc(row.Score)}</p>
            </div>
          </div>
        ))}
      </Scrollbar>
    </div>
  );
};

export default Leaderboard;
