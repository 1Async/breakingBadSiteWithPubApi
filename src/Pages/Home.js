import React from 'react'
import '../Styles/Home.css'
import bblogo from '../Assets/bb logo.png'

function Home() {
    return (
        <div className='home'>
            <img src={bblogo} />
            <p>Breaking Bad is an American neo-Western crime drama television series created and produced
                by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29,
                2013, consisting of five seasons for a total of 62 episodes. It was set and filmed
                in Albuquerque, New Mexico, and tells the story of Walter White Bryan Cranston.</p>
            <button>WATCH NOW</button>
        </div>
    )
}

export default Home