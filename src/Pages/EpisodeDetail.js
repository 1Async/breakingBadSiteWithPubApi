import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/EpisodeDetail.css';
import { NameContext } from '../Contexts/charContext';
import Axios from 'axios';

function EpisodeDetail({ episodes, charList }) {

    let { id } = useParams();

    const navigate = useNavigate();

    const { setName } = useContext(NameContext);

    const passName = (id, name) => {
        navigate(`/characters/${id}`);
        setName(name);
    }

    return (
        <div className='epDetail'>
            {
                episodes.filter((eps) => {
                    return eps.episode_id == id
                }).map((eps, index) => {
                    return <>
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
                            <div className='span ep'>
                                <label>season : </label>
                                <label>{eps.season}</label>
                            </div>
                        </div>
                        {
                            eps.characters.map((char) => {
                                return <>
                                    {
                                        charList.filter((val) => {
                                            return val.name == char
                                        }).map((chars) => {
                                            return <div className='charCard'
                                                onClick={() => passName(chars.char_id, chars.name)}
                                            >
                                                <img src={chars.img} alt='image' />
                                                {chars.name}
                                            </div>
                                        })
                                    }
                                </>
                            })}
                    </>
                })}
        </div>
    )
}

export default EpisodeDetail