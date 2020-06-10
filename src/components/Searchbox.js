import React from 'react';
import './card.css';

 const pa2 = {
    height: '3rem',
    width: '15rem',
    padding:'0.1rem',
    border:'5px solid black',
    borderRadius:'0.5rem',
    marginBottom:'0.5rem',
    backgroundColor:'lightBlue'
}

const Searchbox = ({searchfield,searchChange})=>{
    return(
    <div>
    <input style={pa2} type='search' placeholder='search robots' onChange={searchChange}/>
    </div>
    );
}

export default Searchbox;