import React from 'react';
import '../../Styles/HomePage/Main.css'
import PictureMainHome from '../../Assets/PictureMainHome.png'
import CardsHome from '../CardsHome';


const Body = () => {
    return (
        <div className='containMain'>
            <div className='pictureHome'>
                <img src={PictureMainHome} alt="pictureHome" />
                <div className='textPicture'>Chez vous, partout et ailleurs</div>
            </div>

            <div className='backCards'>
                <CardsHome />
            </div>


        </div>
    );
};

export default Body;