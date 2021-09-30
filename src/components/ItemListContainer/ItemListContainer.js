import React from 'react'
import './ItemListContainer.css'; 

const ItemListContainer = (props) => {
    return (
        <div className='ItemListContainer'>
            <h2 style= {{color:'${props.color}' }}> {props.title} </h2>
            
        </div>
    );
};

export default ItemListContainer
