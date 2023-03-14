import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../../assets/images/res-logo.png";
import { useFormik } from 'formik';
import footerStyle from './footer.module.scss'
import { RiSendPlaneLine } from "react-icons/ri";

const validate = (values) => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}
export const Footer=()=>{
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })
return(
        <Row className={footerStyle.containerFooter}>
                <Col>
                <div>
                    <img src={img1} style={{ width: "70px", height: "auto" }} />
                    <h6>Tasty Treat</h6>
                <p className={footerStyle.Loream}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        text.{" "}
                    </p>
                </div>
                </Col>
                <Col>
                <h3>
                    Delivery Time
                </h3>
                <p>Sunday thursday
                    <br/>
                    10:00 PM - 11:00 PM
                </p>
                <p>
                    Friday saturday
                    <br/>
                    off day
                </p>
                </Col>
                <Col>
                <h3>
                    Contact
                </h3>
                <p>Location: Egypt - Mansouruh</p>
                <p>01102050619</p>
                <p>Email: ahmed@gmail.com</p>
                </Col>
                <Col>
                <h3>
                    Newsletter
                </h3>
            <p className={footerStyle.subscribe}>subscribe our newsletter</p>
                <form onSubmit={formik.handleSubmit}>
                <div className={footerStyle.send} >
                    <input type="email" name="email" id="email" placeholder='Enter Email' className={footerStyle.email}
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email && (
                            <span>{formik.errors.email}</span>
                        )}
                        <button type='submit'><RiSendPlaneLine/></button>
                    </div>
                </form>
                </Col>
             </Row>
   
)
}