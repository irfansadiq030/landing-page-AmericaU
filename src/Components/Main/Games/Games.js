import React from 'react'
import './Games.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from '../PageTitle/PageTitle'
import { useSelector } from 'react-redux'
import { getGames } from '../../../store/slices/games'

// const gamesData = [
//     {
//         title: 'Race',
//         icon: 'Game_Icon_Race.png'
//     },
//     {
//         title: 'KRISPER KRUSH',
//         icon: 'Game_Icon_Krisper.png'
//     },
//     {
//         title: 'VOLLEYBALL',
//         icon: 'Game_Icon_HLG-Volleyball.png'
//     },
//     {
//         title: 'SKATE',
//         icon: 'Game_Icon_HLG-SpeedSkating.png'
//     },
//     {
//         title: 'SOCCER',
//         icon: 'Game_Icon_HLG-Soccer.png'
//     },
//     {
//         title: 'SKI JUMP',
//         icon: 'Game_Icon_HLG-SkiRace.png'
//     },
//     {
//         title: 'POLE VAULT',
//         icon: 'Game_Icon_HLG-Pole.png'
//     },
//     {
//         title: 'OBSTACLES',
//         icon: 'Game_Icon_HLG-Obstacle.png'
//     },
//     {
//         title: 'LONG JUMP',
//         icon: 'Game_Icon_HLG-LongJump.png'
//     },
//     {
//         title: 'SHOT PUT',
//         icon: 'Game_Icon_HLG-Hammer.png'
//     }
// ]

// const iconBaseURL = 'images/games-icons/';

const Games = () => {
    const games = useSelector(getGames);
    // console.log(games);
    return (
        <div className='gamesPg-container'>
            <MobileHeader />
            <PageTitle title="Games" />
            <div className="gamesContentContainer">
                <div className="gamesDataContainer">
                    {
                        games.map((game, index) => {
                            return (
                                <div key={index} className="gameIcon">
                                    {/* <img src={iconBaseURL+game.icon} alt="games race icon" /> */}
                                    {/* <h2 className='gameTitle'>{game.title}</h2> */}
                                    <img src={game.img} alt="games race icon" />
                                    <a rel="noreferrer" target="_blank" href={game.play_url}><h2 className='gameTitle'>{game.name}</h2></a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="games-pagintaion">
                    <img className='blog-left-arrow' src="images/blog-left-arrow.png" alt="" />
                    <img className='blog-right-arrow' src="images/blog-right-arrow.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Games
