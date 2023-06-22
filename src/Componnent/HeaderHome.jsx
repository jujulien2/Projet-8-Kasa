import React from 'react';
import Logo from '../Assets/LOGO.png'
import '../Styles/HeaderHome.css'
const headerHome = () => {
    return (

        <div className='header'>
            <div>
                <img src={Logo} alt="Logo Kasa" />
            </div>
            <div className='nav'>
                <ul>
                    <li className='homeLink'><a href='http://localhost:3000/'>Accueil</a></li>
                    <li className='aboutLink'><a href='http://localhost:3000/About'>À propos</a></li>
                </ul>
            </div>
        </div>

    );
};

export default headerHome;