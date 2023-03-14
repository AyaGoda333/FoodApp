import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import img1 from "../assets/images/res-logo.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import styles from './css/Navbar.scss';

export const Navbar1 = () => {
  const [fix,setfix]=useState(false);
 useEffect(()=>{
  const handleScroll=()=>{
    setfix(window.scrollY >40);
    console.log(window.scrollY);
  };
  window.addEventListener('scroll',handleScroll);
  return()=> window.removeEventListener('scroll', handleScroll);});
  return (
    <Navbar collapseOnSelect expand="lg" className={fix ? 'navbar fixed' : 'navbar'}>
      <Container>
        <Link className="navbar-brand" to="/home">
          <div>
            <img src={img1} />
            <h1>Tasty Treat</h1>
          </div>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navCenter">
            <NavLink
              
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Foods"
            >
              Foods
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Cart"
            >
              Cart
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/Contact"
            >
              Contact
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              <div className="basket-icon">
                <RiShoppingBasketLine />
                <div className="lchild"><AiFillEye /></div>
              </div>
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/products"
            >
              <BsPerson />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
