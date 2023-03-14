import React from 'react';
import { HomeCard } from '../../../shared/homeCard';
import carListStyle from './HomeCardList.module.scss';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const HomeCardList=({items})=>{
   
return(
    <>
        <Container>
            <div className={carListStyle.Homecardlist}>
                {
                    items.map((food) => {
                        return (
                            <div className={carListStyle.Homecardlistchild} >
                                <HomeCard className={carListStyle.HomeCard} img={food.img} price={food.price} name={food.name}/>
                            </div>
                        )
                    })
                }


            </div>
        </Container>
    </>
)
}