import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tastyimg from './location.png'
import TastyStyle from './TastyTreat.module.scss';
import { AiOutlineCheckCircle } from "react-icons/ai";
export const HomeTastyTreat=()=>{
    return(
        <Container className={TastyStyle.TastyContainer} >
            <Row>
                <Col className={TastyStyle.Tastyimg}>
                    <img src={Tastyimg} style={{ width: "100%", height: "auto" }} />
                </Col>
                <Col>
                <div className={TastyStyle.TastyRightParentDiv}>
                    <h1>Why <span>Tasty Treat?</span></h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.Lorem Ipsum has been the industry's standard dummy
                            text.{" "}</p>
                            <div className={TastyStyle.SmallParentDiv}>
                            <div className={TastyStyle.SmallChildDiv}>
                                    <div>
                                      <AiOutlineCheckCircle />
                                      <h3>Fresh and tasty Foods</h3>
                                    </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</p>
                                    
                                </div>

                            <div className={TastyStyle.SmallChildDiv}>
                                <div>
                                    <AiOutlineCheckCircle />
                                    <h3>Fresh and tasty Foods</h3>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</p>

                            </div>

                            <div className={TastyStyle.SmallChildDiv}>
                                <div>
                                    <AiOutlineCheckCircle />
                                    <h3>Fresh and tasty Foods</h3>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</p>

                            </div>
                            </div>

                </div>
                </Col>
            </Row>
        </Container>
    )
}