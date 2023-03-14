import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgC1 from './category-01.png';
import imgC2 from './category-02.png';
import imgC3 from './category-03.png';
import imgC4 from './category-04.png';
import styles2 from './foodTypes.module.scss';
export const ParentFoodTypes = () => {
    var Foods = [{ img: imgC1, name: 'Fast Food' }, { img: imgC2, name: 'Pizza' }, { img: imgC3,name: 'Asian Food' }, { img: imgC4,name: 'Row Meat' }];
    return (
        <Container>
           <Row>
            {
              Foods.map((Food)=> {
              return(
                  <Col className={styles2.foodCol}>
                      <div key={Food.name} className={styles2.fooddiv}>
                          <img src={Food.img} />
                          <h2>{Food.name}</h2>
                      </div>
                  </Col>
              )
              })
            }
              
               
         </Row>
        </Container>
    )
}