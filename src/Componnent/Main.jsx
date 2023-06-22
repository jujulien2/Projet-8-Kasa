import React from 'react';
import '../Styles/Main.css'
import PictureHome from '../Assets/sectionHome.png'

const Body = () => {
    return (
        <div className='containMain'>
            <img src={PictureHome} alt="pictureHome" />
            <div className='cards'>
                <ul>
                    <li></li>
                </ul>
            </div>


        </div>
    );
};

export default Body;