import React from 'react';
import network from './network.png'
import person from './ava-2.jpg'
import Container from "react-bootstrap/Container";
import CustomerStyle from './CustomerPart.module.scss'
export const CustomerPart = () => {
    return (
        <Container>
            <div className={CustomerStyle.ParentCustomerPart}>
                <div className={CustomerStyle.leftCustomerPart}>
                    <h6>Testimonials</h6>
                    <h1>What our <span>customer</span> are saying?</h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.Lorem Ipsum has been the industry's standard dummy
                        text.{" "}</p>
                    <div className={CustomerStyle.person}>
                        <img src={person} style={{ width: "60px", height: "auto" }} />
                      
                        <h5> Aya Goda</h5>
                    </div>
                </div>
                <img src={network} style={{ width: "100%", height: "auto" }} />
            </div>
        </Container>
    )
}