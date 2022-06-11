import React, { useEffect, useState } from 'react';
import '../Styles/Episodes.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Episodes({ episodes }) {

    const [selectedSeason, setSelectedSeason] = useState("1");
    let navigate = useNavigate();


    return (
        <div className='episodes'>
            <div className='selectByEpisode'>
                <select onChange={
                    (e) => {
                        setSelectedSeason(e.target.value);
                    }
                }>
                    <option value="1">Season 1</option>
                    <option value="2">Season 2</option>
                    <option value="3">Season 3</option>
                    <option value="4">Season 4</option>
                    <option value="5">Season 5</option>
                </select>
            </div>
            <div className='episodeslist'>
                {
                    episodes.filter((val) => {
                        return val.season == selectedSeason
                    }).map((eps, index) => {
                        return (
                            <div className='episodeCard' key={index}>
                                <div className='span'>
                                    <label>Title : </label>
                                    <label>{eps.title}</label>
                                </div>
                                <div className='span date'>
                                    <label>Air Date : </label>
                                    <label>{eps.air_date}</label>
                                </div>
                                <div className='span ep'>
                                    <label>Episode : </label>
                                    <label>{eps.episode}</label>
                                </div>
                                <button onClick={() => {
                                    navigate(`/episodes/${eps.episode_id}`)
                                }}>
                                    Detail
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Episodes