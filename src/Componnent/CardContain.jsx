import React from 'react';
import '../Styles/cardContain/cardDetails.css'

const DescriptionCard = (props) => {
    return (
        <div className='textOfCardWrapper'>
            {props.children}
        </div>
    );
};

export default DescriptionCard;