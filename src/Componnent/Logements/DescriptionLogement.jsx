import React from 'react';
import '../../Styles/logementContain/logementContain.css'

const DescriptionCard = ({ items }) => {

    return (
        <div className='textOfCardWrapper'>
            <div className='textLeftSide'>
                <p>{items.title}</p>
                <p>{items.location}</p>
                <p>{items.tags}</p>
                <div className='descriptionCollapse'></div>
            </div>
            <div className='textRightSide'>
                <p>{items.host.name}</p>
                <img src={items.host.picture}></img>
                <div className='rate'></div>
                <div className='equipementCollapse'></div>

            </div>
        </div>
    );
};

export default DescriptionCard;