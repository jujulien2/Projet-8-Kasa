import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ErrorPage.css'


const ErrorUrl = () => {
    return (
        <div className='errorWrapper'>
            <p className='numberError'>404</p>
            <p className='textError'>Oups! La page que vous demandez n'existe pas</p>
            <Link to={'/'}> Retourner sur la page d'accueil</Link>
        </div>
    );
};




export default ErrorUrl;