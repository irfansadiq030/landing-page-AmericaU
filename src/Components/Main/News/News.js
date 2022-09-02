import React from 'react'
import './News.css';
import MobileHeader from '../MobileHeader/MobileHeader';
import PageTitle from '../PageTitle/PageTitle';

const News = () => {
    return (
        <div className='newsPage-container'>
            <MobileHeader />
            <PageTitle title="News" />
            <div className="newspg-main">
                <div className="newspg-content-container">
                    <div className="newspg-main-imgcontainer">
                        <img className='newspg-main-img' src="images/chinese new year.jpg" alt="news main image" />
                    </div>
                    <div className="newspg-description-container">
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                        <p className="newspg-dscrp">
                            This week we want to celebrate Chinese New Year! Find the secret Tiger icons all
                            over The Wilds to earn bonus experience points! Most importantly, think about the
                            kind of hero you want to be this year.
                        </p>
                    </div>
                </div>
                <div className="moreNews-sidebar-container">
                    <img className='moreNews-sidebar-img' src="images/moreNewsSidebar.png" alt="" />
                    <div className="moreNews-listContainer">
                        <h3 className="morenews-title">More</h3>
                        <div className="moreNewsitemContainer">
                            <div className="moreNews-item">
                                <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                            </div>
                            <div className="moreNews-item">
                                <img className='moreNewsImg' src="images/Heroes News copy.png" alt="" />
                            </div>
                            <div className="moreNews-item">
                                <img className='moreNewsImg' src="images/slide - hero of the week - master dreamyearth.png" alt="" />
                            </div>
                            <div className="moreNews-item">
                                <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                            </div>
                            <div className="moreNews-item">
                                <img className='moreNewsImg' src="images/4-29 heroes news.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
