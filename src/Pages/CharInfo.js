import React, { useContext, useEffect, useState } from 'react';
import { NameContext } from '../Contexts/charContext';
import { useParams } from 'react-router-dom';
import { MyApi } from '../Helpers/constants';
import Axios from 'axios';
import '../Styles/CharInfo.css';


function CharInfo({ charList }) {

    let { id } = useParams();
    const { name } = useContext(NameContext);
    const [quoteListByAutor, setQuoteListByAutor] = useState([]);
    const [deathInfo, setDeathInfo] = useState([]);

    useEffect(() => {
        Axios.get(`${MyApi}/quote?author=${name}`).then((response) => {
            setQuoteListByAutor(response.data);
        });
        Axios.get(`${MyApi}/death?name=${name}`).then((response) => {
            setDeathInfo(response.data);
        })
    }, []);


    return (
        <div className='charInfo'>
            {
                charList.filter((val) => {
                    return val.char_id == id
                }).map((char, index) => {
                    return (
                        <div className='cradOne' key={index}>
                            <div className='image-section'>
                                <img src={char.img} alt='pic' />
                            </div>
                            <div className='info-section'>
                                <div className='section'>
                                    <div className='lbl'>Name :</div>
                                    <div className='val'>{char.name}</div>
                                </div>
                                <div className='section'>
                                    <div className='lbl'>Nickname :</div>
                                    <div className='val'>{char.nickname}</div>
                                </div>
                                <div className='section'>
                                    <div className='lbl'>Birthday :</div>
                                    <div className='val'>{char.birthday}</div>
                                </div>
                                <div className='section'>
                                    <div className='lbl'>Portrayed :</div>
                                    <div className='val'>{char.portrayed}</div>
                                </div>
                                <div className='section'>
                                    <div className='lbl'>Status :</div>
                                    <div className='val'>{char.status}</div>
                                </div>
                                <div className='section col'>
                                    <div className='lbl'>Occupation:</div>
                                    <div className='val'>{char.occupation.map((occ, index) => {
                                        return (
                                            <ul key={index}>
                                                <li>{occ}</li>
                                            </ul>
                                        )
                                    })}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {deathInfo.length != 0 && name &&
                deathInfo.map((death) => {
                    return (
                        <div className='deathInfo'>
                            <h1>Death detail</h1>
                            <p><span>{death.death} </span>dead in <span>season {death.season} </span>
                                <span>episode {death.episode}</span>  becouse of
                                a <span>{death.cause} </span> last word was <span>"{death.last_words}"</span>
                            </p>
                        </div>
                    )
                })
            }
            {name && quoteListByAutor.length != 0 &&
                <div className='quotes'>
                    <h1>Quotes list</h1>
                    <div className='quotesList'>
                        {
                            quoteListByAutor.map((quote, index) => {
                                return (
                                    <div className='quoteCard' key={index}>
                                        <p>&ldquo;{quote.quote}&rdquo;</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default CharInfo