import React from 'react';
import Logo from '../../Assets/LOGO.png'
import '../../Styles/header/HeaderHome.css'
import { Link } from 'react-router-dom';
const headerHome = () => {
    return (

        <div className='header'>
            <div>
                <img src={Logo} alt="Logo Kasa" />
            </div>
            <div className='nav'>
                <ul>
                    <li className='homeLink'><Link to={'/'}>Accueil</Link></li>
                    <li className='aboutLink'><Link to={'/About'}>À propos !</Link></li>


                </ul>
            </div>
        </div>

    );
};

export default headerHome;