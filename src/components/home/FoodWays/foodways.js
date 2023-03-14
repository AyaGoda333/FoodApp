import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgS1 from './service-01.png';
import imgS2 from './service-02.png';
import imgS3 from './service-03.png';
import styles3 from './foodway.module.scss';
export const ParentFoodWayes = () => {
    var means = [{ img: imgS1, name: 'Quick delivery' }, { img: imgS2, name: 'super dine in' }, { img: imgS3, name: 'easy pick up' }];
    return (
        <Container>
            <Row>
                {
                    means.map((mean) => {
                        return (
                            <Col>
                                <div key={mean.name} className={styles3.Delivery}>
                                    <img src={mean.img} />
                                    <h5>{mean.name}</h5>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.</p>
                                </div>
                            </Col>
                        )
                    })
                }


            </Row>
        </Container>
    )
}