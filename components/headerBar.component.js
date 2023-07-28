"use client";
import logHelper from "@/utils/logHelper";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect  } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Offcanvas, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


export const HeaderBar = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cartCount, setCartCount] = useState("");

    useEffect(() => {
      // Perform localStorage action
      const existing  = (JSON.parse(localStorage.getItem("cart")) !== null) ? JSON.parse(localStorage.getItem("cart")).cartItems.length : false;
      setCartCount(existing)
    }, [])



    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Nav>
                    <Navbar.Brand href="/"><Image
                        src="/images/YP-logo.svg"
                        width={75}
                        height={75}
                        style={{
                            objectFit: "contain",
                            width: "75px",
                            // height: "100%",
                        }}
                        alt="YPStudio logo"
                    />
                    </Navbar.Brand>
                    <div className="site-name">
                        <Link href="/" className="text-white">
                            <h1>
                                design studio
                                <br />
                                Yulia Perezhogina
                            </h1>
                        </Link>
                    </div>
                </Nav>
                <Nav>
                    <Button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleShow}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} placement='top' responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>YPStudio</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav.Link href="/contacts">Написать мне</Nav.Link>
                            <Nav.Link href="/cart"><FaShoppingCart /> Корзина {cartCount} </Nav.Link>
                            
                            { children }

                        </Offcanvas.Body>
                    </Offcanvas>
                </Nav>
            </Container>
        </Navbar>


    )
};