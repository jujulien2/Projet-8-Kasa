import React from 'react';
import '../../Styles/logementContain/logementContain.css'


const DescriptionCard = ({ items }) => {
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
                <div className='rate'></div>


            </div>
        </div>


    );
};

export default DescriptionCard;
// {/* <div className='rating'>
//             <i class="fa-solid fa-star"></i>
//         </div> */}