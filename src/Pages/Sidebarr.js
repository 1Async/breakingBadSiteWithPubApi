import React from 'react'
import '../Styles/Sidebarr.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function Sidebarr() {
    return (
        <div className='sidebarr'>

            <div className='logo-area' id="logo">
                <img src={logo} alt='logo' />
            </div>
            <div className='Links'>
                <div className='Link'>
                    <Link to='/'>
                        <HomeIcon />
                        <span>Home</span>
                    </Link>
                </div>
                <div className='Link'>
                    <Link to='/characters'>
                        <FormatListBulletedIcon />
                        <span>Menu</span>
                    </Link>
                </div>
                <div className='Link'>
                    <Link to='/episodes'>
                        <PlaylistAddCheckIcon />
                        <span>Episodes</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebarr