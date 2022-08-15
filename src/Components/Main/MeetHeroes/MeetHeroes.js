import React from 'react'
import './MeetHeroes.css'
import MobileHeader from '../MobileHeader/MobileHeader'
import PageTitle from './PageTitle/PageTitle'

const MeetHeroes = () => {
    return (
        <div className='meetHeroes-container'>
            <MobileHeader />
            <PageTitle title="Meet the Heroes"/>
            <img className='meetHeroes-main-img' src="images/vector.png" alt="" />
            <div className="heroes-data-container">
                <img className='heroes-img-collection' src="images/meet-heroes/ARKSEED.png" alt="" />
                <div className="heroes-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JuW25j47v-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default MeetHeroes
