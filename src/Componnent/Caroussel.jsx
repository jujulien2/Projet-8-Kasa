import React from 'react';
import '../Styles/cardContain/caroussel.css'


const Caroussel = (props) => {
    return (
        <div className='wrapperCaroussel'>
            <div className='caroussel'>
                {props.children}
            </div>
        </div>
    );
};

export default Caroussel;