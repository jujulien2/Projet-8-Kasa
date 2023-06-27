import React, { useState } from 'react';
import PictureAbout from '../../Assets/PictureAbout.png'
import '../../Styles/AboutPage/About.css'
import AboutDetails from '../AboutDetails';

const About = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <div className='containMainAbout'>

            <div className='pictureAbout'>
                <img src={PictureAbout} alt="picture-about-page" />
            </div>
            <div className="wrapper">

                <div className="accordion">
                    <ul>
                        {AboutDetails.map((items, index) => (
                            <li key={index}>
                                <div className='titleAboutDetails'> <h2>{items.title}</h2>
                                    <i className={`${clicked === index ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"}`} onClick={() => toggle(index)}></i>


                                </div>
                                <div className={`${clicked === index ? 'content' : 'hide'}`}>  <p>{items.text}</p></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;