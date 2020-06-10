import React from 'react';
import './card.css';


const Card = ({name,email,id})=> {
    return(
        <div className='divi grow'>
            <div>
            <img src={`https://robohash.org/${id}`} style={{width: '10rem', height: '10rem'}} alt='photos' />
            </div>
            <div>
                <h1 className='details'>{name}</h1>
                <h2 className='details'>{email}</h2>
            </div>
        </div>
    );
}

export default Card;