import React from 'react';
import '../../Styles/logementContain/caroussel.css'


const Caroussel = ({ itemData, arrayPictures }) => {
    console.log(itemData);
    return (

        <div className='caroussel'>
            {arrayPictures.length > 1 ? (
                <>
                    <i className="fa-solid fa-chevron-left fa-6x"></i>
                    <i className="fa-solid fa-chevron-right fa-6x"></i>
                </>

            ) : null}
            <img src={itemData} alt='images' />
        </div>

    );
};

export default Caroussel;