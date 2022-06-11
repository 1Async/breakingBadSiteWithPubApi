import React from 'react'
import '../Styles/Topbarr.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Topbarr() {
    return (
        <div className='topBarr'>
            <div className='socialMedia'>
                <a href='#'><GitHubIcon /></a>
                <a href='#'><TwitterIcon /></a>
                <a href='#'><LinkedInIcon /></a>
                <a href='#'><InstagramIcon /></a>
            </div>
        </div>
    )
}

export default Topbarr