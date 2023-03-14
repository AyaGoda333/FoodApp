import React from 'react';
import StyleCard from './homeCard.module.scss'
import Button from 'react-bootstrap/Button';
export const HomeCard=({img,price,name})=>{
    return(
        <div className={StyleCard.ParentCard}>
              <img src={img}/>
              <h2>{name}</h2>
              <div>
                <h5>{price}</h5>
                <Button variant="danger">Add to Card</Button>
              </div>
        </div>
    )
}