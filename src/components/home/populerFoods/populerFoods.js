import React, { useState } from 'react';
import './populerFoods.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const PopulerFoods = ({ populerFoods, filter, isActive })=>{
  
    return(
        <>
        <div>
            <h1 className='h11'>
                Populer Foods
            </h1>
        </div>
            <Container>
                <Row className='rowPopuler'>
                    <Col className='deleteCol'></Col>
                    <Col className='deleteCol'></Col>
                    <Col className='deleteCol'></Col>
                    <Col className='deleteCol'></Col>
                    {
                        populerFoods.map((populerFood) => {
                            return (
                                <Col>
                                    <div key={populerFood.name}    
                                             onClick={() => filter(populerFood)}
                                        className='Populer'>
                                        <img src={populerFood.img} />
                                        <p>{populerFood.name}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    <Col className='deleteCol'></Col>
                    <Col className='deleteCol'></Col>
                    <Col className='deleteCol'></Col>
                    <Col className='deleteCol'></Col>


                </Row>
            </Container>
        </>
    )
}