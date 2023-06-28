import React from 'react';

const Caroussel = (props) => {
    return (
        <div className='wrapperCaroussel'>
            <div className='caroussel'>
                {props.children}
                <i className="fa-solid fa-chevron-right"></i>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
        </div>
    );
};

export default Caroussel;