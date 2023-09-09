import React from 'react';
import Logo from '../../Assets/LOGO.png'
import '../../Styles/header/HeaderHome.css'
const headerHome = () => {
    return (

        <div className='header'>
            <div>
                <img src={Logo} alt="Logo Kasa" />
            </div>
            <div className='nav'>
                <ul>
                    <li className='homeLink'><a href='/'>Accueil</a></li>
                    <li className='aboutLink'><a href='/About'>À propos</a></li>
                </ul>
            </div>
        </div>

    );
};

export default headerHome;