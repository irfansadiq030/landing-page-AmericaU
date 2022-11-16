import React from 'react'
import './SeasonPass.css'
import PageTitle from '../PageTitle/PageTitle'
import MobileHeader from '../MobileHeader/MobileHeader'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSeasons } from '../../../store/slices/season'
import { useState } from 'react'
// import ModalImage from "react-modal-image";
import { RiCloseCircleFill } from 'react-icons/ri'
import Modal from 'react-modal';

const SeasonPass = () => {
    const [modalShow, setModalShow] = useState(false);
    const seasons = useSelector(getSeasons);
    console.log(seasons);
    return (
        <div className='seasonPs-container'>
            <MobileHeader />
            <PageTitle customColor="#FF8500" title="Season pass" />
            <div className="seasonPs-content-container">
                <div className="seasonPs-sidebar">
                    <h1 className="season-title">
                        S{seasons.season_num}: {seasons.main_title}
                    </h1>
                    <div className="seasonPs-desc-container">
                        <p className='seasonPs-descrp'>
                            {seasons.main_content}
                        </p>
                        {/* <p className='seasonPs-descrp'>
                            Lord DarkStar is hiding somewhere in the pirate caves. It’s up to you and your classmates to search pirates caves for his secret base.
                            Complete the season pass to earn the Cap of Light and Justice!
                            Only available until August 20th!
                        </p> */}
                    </div>
                </div>
                <div className="seasonPs-main">
                    <h2 className="seasonPs-newTag">
                        New
                    </h2>
                    <div className="activeSeasonPs-data">
                        <h2 className="active-seasonPs-title">Slide Title</h2>
                        <span className="seasonPs-date"> Mar,20,2022</span>
                    </div>
                    <img src="images/blog Detail.png" alt="" className="seasonPs-main-img" />
                    <div className="latestSeasonStories-container">
                        <div className="seasonBox1">
                            {/* <ModalImage
                                small={'images/Week 1 Story 2.png'}
                                large={'images/blog Detail.png'}
                                className="seasonItme-img"
                            /> */}
                            <img onClick={() => setModalShow(!modalShow)} className='seasonItme-img' src="images/Week 1 Story 2.png" alt="" />
                            <div className="latestSeasonPs-data">
                                <h2 className="seasonPs-item-title">Slide Title</h2>
                                <span className="seasonPs-item-date"> Mar,20,2022</span>
                            </div>
                        </div>

                        <div className="seasonBox1">

                            <img className='seasonItme-img' src="images/Week 1 Story 2.png" alt="" />
                            <div className="latestSeasonPs-data">
                                <h2 className="seasonPs-item-title">Slide Title</h2>
                                <span className="seasonPs-item-date"> Mar,20,2022</span>
                            </div>
                        </div>

                        <div className="seasonBox1">
                            {/* <ModalImage
                                small={'images/Week 1 Story 2.png'}
                                large={'images/blog Detail.png'}
                                className="seasonItme-img"
                            /> */}
                            <img className='seasonItme-img' src="images/Week 1 Story 2.png" alt="" />
                            <div className="latestSeasonPs-data">
                                <h2 className="seasonPs-item-title">Slide Title</h2>
                                <span className="seasonPs-item-date"> Mar,20,2022</span>
                            </div>
                        </div>

                    </div>
                    <Link to="/seasonpass-list" className="readmore-seasonStories-btn">
                        Read More
                    </Link>
                </div>
                
                {/* Modal */}
                <div className={modalShow ? 'modal' :  `hide_modal`}>
                    <div className="modal_container">
                        <div className="modal-header">
                            <span onClick={() => setModalShow(!modalShow)} className='modal_close_span'><RiCloseCircleFill color='#000' className='modalClose' /></span>
                        </div>
                        <div className="p-3 min-h-full min-w-full mx-auto flex justify-center">
                            <img className='object-contain' src="images/blog Detail.png" alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default SeasonPass
