import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Hero.module.scss";
import heroimg from "./hero.png";
import { AiOutlineCar } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";
export const Hero = () => {
  return (
    <>
      <Container className={styles.Container}>
        <Row >
          <Col sm={8} lg={5} md={5}>
            <div>
              <h6 className={styles.h6}>Easy Way to make an order</h6>
              <h1 className={styles.h1}>
                HUNGRY?{" "}
                <span className={styles.spanclass}>just wait food at</span> your
                door
              </h1>
              <p className={styles.loream}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy
                text.{" "}
              </p>
              <div className={styles.btns}>
                <Button variant="danger">Order Now</Button>
                {"        "}
                <Button variant="outline-danger">See All Foods</Button>{" "}
              </div>
            </div>
            <div className={styles.securediv}>
              <div className={styles.securedivd1}>
                <AiOutlineCar />
                <p> No Shipping Fees</p>
              </div>
              <div className={styles.securedivd2}>
                <BiCheckShield />
                <p> 100% secure checkout</p> 
              </div>
            </div>
          </Col>
          <Col sm={8} lg={7} md={7}>
            <img src={heroimg} style={{ width: "100%", height: "auto" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
