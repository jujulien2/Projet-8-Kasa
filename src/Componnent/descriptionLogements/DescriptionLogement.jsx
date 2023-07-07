import React from 'react';
import '../../Styles/logementContain/logementContain.css'


const DescriptionCard = ({ items }) => {
    const ratingValue = parseInt(items.rating)
    const stars = []
    const starsEmpty = []
    for (let i = 0; i < ratingValue; i++) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>)
    }
    for (let i = 0; i < 5; i++) {
        starsEmpty.push(<i key={i} className="fa-solid fa-star"></i>)
    }


    return (

        <div className='descriptionLogement'>
            <div className='textLeftSide'>

                <h1>{items.title}</h1>
                <p>{items.location}</p>
                <div className='tagCardWrapper'>
                    {items.tags.map((tag, index) => (
                        <div className='tagCard' key={index}>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className='textRightSide'>
                <div className='hostDescription'>
                    <p>{items.host.name}</p>
                    <img src={items.host.picture} alt='hostDetails'></img>
                </div>
                <div className='ratingWrapper'>

                    <div className='ratingEmpty'>
                        {starsEmpty.map((star, index) => (
                            <div key={index}>{star}</div>
                        ))}
                    </div>

                    <div className='rating'>
                        {stars.map((star, index) => (
                            <div key={index} >{star}</div>
                        ))}
                    </div>
                </div>


            </div>
        </div>


    );
};

export default DescriptionCard;
