import axios from "axios"

export default async function trackEvent(event_name, object = null) {
    // await woogievent(event_name, object ?? {});
    // console.log("Woogi event sent");

    // await americauevent(event_name, object ?? {});
    // console.log("AmericaU event sent");
}

function woogievent(event, object) {
    object.name = event;

    return axios.post("https://portal.americau.com/woogi/0.1/actor/cgi.php", {
        'cmd': 'WcTrackActivitySkillManage.saveHLPortal',
        'event': event,
        'source_version': 'v3',
        'props': object
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function americauevent(event, object) {
    object.name = event;

    let act_session = getCookie('activity_session');

    if (act_session)
        object.userCode = "cookie-" + act_session;

    return axios.post("https://api.americau.com/data", { 'data': object }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
        return parts.pop().split(';').shift();
    else
        return null;
}