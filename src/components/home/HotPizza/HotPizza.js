import React from 'react';
import Container from "react-bootstrap/Container";
import pro2 from '../../home/cardList/product_2.1.jpg';
import pro3 from '../../home/cardList/product_3.1.jpg';
import pro4 from '../../home/cardList/product_4.1.jpg';
import pro7 from '../../home/cardList/product_2.2.jpg';
import HotPizzaStyle from './HotPizza.module.scss'
import { HomeCard } from '../../../shared/homeCard';
var Foods = [{ img: pro2, name: 'Vegetarian Pizza', price: '$115', catogery: 'Pizza' },
{ img: pro3, name: 'Double Cheese Margherita', price: '$110', catogery: 'Pizza' }, { img: pro4, name: 'Maxican Green Wave', price: '$110', catogery: 'Pizza' },
{ img: pro7, name: 'Seafood Pizza', price: '$115', catogery: 'Pizza' }
];
export const HotPizza = () => {
    return (
        <Container className={HotPizzaStyle.ContainerHotPizza}>
            <h1>Hot Pizza</h1>
            <div className={HotPizzaStyle.HotPizzaParentDiv}>
                {
                    Foods.map((food) => {
                        return (
                            <div >
                                <HomeCard img={food.img} price={food.price} name={food.name} />
                            </div>
                        )
                    })
                }


            </div>
        </Container>
    )
}