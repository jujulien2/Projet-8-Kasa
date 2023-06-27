import React from 'react';
import { Link, useParams } from 'react-router-dom'


const CardOpenned = () => {
    const { CardOpennedId } = useParams();
    return (

        <div>
            <h2>{CardOpennedId}</h2>
            <Link to='/'>Back</Link>
        </div>



    );
};

export default CardOpenned;