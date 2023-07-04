import React from 'react';
import '../../Styles/footer/footer.css'
import LogoBlack from '../../Assets/LogoBlack.png'
import Anotation from '../../Assets/Anotation.png'

const footer = () => {
    return (
        <div className='footer'>
            <div className='containFooter'>
                <div> <img src={LogoBlack} alt="Logo black" /></div>

                <div >    <img className='anotationFooter' src={Anotation} alt="Anotation" /></div>


            </div>
        </div>
    );
};

export default footer;