import React from 'react';
import ListCards from '../InformationsCards.json'


const CardOpenned = () => {
    return (
        ListCards.map((infos => {

            <ul>
                <li key={infos.id}>
                    <img src={infos.cover} alt="" />

                </li>
            </ul>
        }))
    );
};

export default CardOpenned;