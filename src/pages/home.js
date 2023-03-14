import React, { useState } from 'react';
import { Navbar1 } from '../pages/Navbar';
import { Hero } from '../components/home/Hero/hero';
import { ParentFoodTypes } from '../components/home/FoodTypes/ParentFoodTypes';
import { Serve } from '../components/home/serve/serve';
import { ParentFoodWayes } from '../components/home/FoodWays/foodways';
import { PopulerFoods } from '../components/home/populerFoods/populerFoods';
import { HomeCardList } from '../components/home/cardList/HomeCardList';
import pro1 from '../components/home/cardList/product_01.jpg';
import pro2 from '../components/home/cardList/product_2.1.jpg';
import pro3 from '../components/home/cardList/product_3.1.jpg';
import pro4 from '../components/home/cardList/product_4.1.jpg';
import pro5 from '../components/home/cardList/product_04.jpg';
import pro7 from '../components/home/cardList/product_2.2.jpg';
import pro8 from '../components/home/cardList/product_3.2.jpg';
import pro9 from '../components/home/cardList/product_4.2.jpg';
import pro10 from '../components/home/cardList/product_01.1.jpg';
import pro11 from '../components/home/cardList/bread(1).png';
import pro12 from '../components/home/cardList/bread(2).png';
import pro13 from '../components/home/cardList/bread(3).png';

import imgP1 from '../components/home/populerFoods/hamburger.png';
import imgP2 from '../components/home/populerFoods/pizza.png';
import imgP3 from '../components/home/populerFoods/bread.png';
import { HomeTastyTreat } from '../components/home/TastyTreat/TastyTreat';
import { HotPizza } from '../components/home/HotPizza/HotPizza';
import { CustomerPart } from '../components/home/CustomarPart/CustomarPart';
import { Footer } from './footer/footer';



var foods = [{ img: pro1, name: 'Chicken Burger', price: '$24', catogery: 'Burger' }, { img: pro2, name: 'Vegetarian Pizza', price: '$115', catogery: 'Pizza' },
{ img: pro3, name: 'Double Cheese Margherita', price: '$110', catogery: 'Pizza' }, { img: pro4, name: 'Maxican Green Wave', price: '$110', catogery: 'Pizza' },
{ img: pro5, name: 'Cheese Burger', price: '$24', catogery: 'Burger' }, { img: pro1, name: 'Royal Cheese burger', price: '$24', catogery: 'Burger' },
{ img: pro7, name: 'Seafood Pizza', price: '$115', catogery: 'Pizza' }, { img: pro8, name: 'Thin Cheese Pizza', price: '$110', catogery: 'Pizza' },
{ img: pro9, name: 'Pizza With Mushroom', price: '$110', catogery: 'Pizza' }, { img: pro10, name: 'Classic Humburger', price: '$24', catogery: 'Burger' },
{ img: pro11, name: 'Crunchy Bread', price: '$35', catogery: 'Bread' }, { img: pro12, name: 'Delicious Bread', price: '$35', catogery: 'Bread' },
{ img: pro13, name: 'Loaf Bread', price: '$35', catogery: 'Bread' }];

var populerfoods = [{ name: 'All' }, { img: imgP1, name: 'Burger' }, { img: imgP2, name: 'Pizza' }, { img: imgP3, name: 'Bread' }];

export const Home = () => {
    const [items, setItems] = useState(foods);
    const [populerFoods, setpopulerFoods] = useState(populerfoods);
    const [isActive, setIsActive] = useState(false);
    console.log(populerFoods);
    const filter = (populerFoods) => {
        if (populerFoods.name === 'All') {
            setItems(foods);
            return;
        }

        const filterData = foods.filter(food => food.catogery === populerFoods.name);
        setItems(filterData);
    }

    return (
        <>
            <Navbar1 />
            <Hero />
            <ParentFoodTypes />
            <Serve />
            <ParentFoodWayes />
            <PopulerFoods populerFoods={populerFoods} filter={filter} isActive={isActive} />
            <HomeCardList items={items} />
            <HomeTastyTreat />
            <HotPizza />
            <CustomerPart/>
           <Footer/>
        </>
    )
}