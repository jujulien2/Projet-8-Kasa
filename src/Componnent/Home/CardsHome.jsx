import React from 'react';
import ListCards from '../../informationsCards.json'
import '../../Styles/HomePage/CardsHome.css'
import { Link } from 'react-router-dom';

const CardsHome = () => {
    return (


        <ul className='cardsOfHome'>
            {ListCards.map((infos) => (
                <li key={infos.id}> <Link to={`/CardOpenned/${infos.id}`}>
                    <img src={infos.cover} alt="imageOfCards" />
                    <p className='titleCards'>{infos.title}</p>
                </Link>
                </li>
            ))}
        </ul>

    )
};

export default CardsHome;
