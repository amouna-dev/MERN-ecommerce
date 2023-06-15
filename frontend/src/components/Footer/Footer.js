import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import './Footer.css'
import { useSelector } from 'react-redux'

const Footer = () => {
    const userLogin = useSelector(state => state.AuthReducer)
    const { isAuth, user } = userLogin
    return (
        <div className="footer">
        <Container>
            <Row>
                <Col lg={3} md={6} sm={6}>
                    <div className="footer-about">
                        <div className="footer-logo">
                            <Link to="/"><h4>BestShop</h4></Link>
                        </div>
                        <p>The Customer is at the heart of our unique bussiness model, which include design.</p>
                        <h6>Social Media</h6>
                        <div className="footer-social">
                        <Link to="#"><i className="fa fa-facebook" arial-hidden="true"></i></Link>
                        <Link to="#"><i className="fa fa-twitter" arial-hidden="true"></i></Link>
                        <Link to="#"><i className="fa fa-instagram" arial-hidden="true"></i></Link>
                        <Link to="#"><i className="fa fa-youtube" arial-hidden="true"></i></Link>
                        </div>
                    </div>
                </Col>

                <Col lg={2} md={3} sm={6}>
                    <div className="footer-widget">
                        <h6>Shopping</h6>
                        {(isAuth && user.role === "admin")? 
                                <ul>
                                <li><Link to="/products">Smartphone</Link></li>
                                <li><Link to="/products">Laptop</Link></li>
                                <li><Link to="/products">Game</Link></li>
                                <li><Link to="/products">Accessories</Link></li>
    
                            </ul>
                             : 
                             <ul>
                             <li><Link to="/productlist">Smartphone</Link></li>
                             <li><Link to="/productlist">Laptop</Link></li>
                             <li><Link to="/productlist">Game</Link></li>
                             <li><Link to="/productlist">Accessories</Link></li>
 
                         </ul>
                            }
                    </div>
                </Col>

                <Col lg={2} md={3} sm={6}>
                    <div className="footer-widget">
                        <h6>Links</h6>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            {(isAuth && user.role === "admin")? 
                                <li><Link to="/products">Products</Link></li>
                             : 
                                <li><Link to="/productlist">Products</Link></li>
                            }
                            
                            <li><Link to="/">Informations</Link></li>

                        </ul>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={6}>
                    <div className="footer-widget">
                        <h6>NewsLetter</h6>
                        <div className="footer-newslatter">
                            <p>Be the first to know about new arrivals, look catalogs, sales & promos!</p>
                            <form action="#">
                                <input type="text" placeholder="Your Email" />
                                <button type="submit"><span><i className="fa fa-envelope"
                                            arial-hidden="true"></i></span></button>
                            </form>
                        </div>

                    </div>
                </Col>


            </Row>

            <Row>
                <div className="col-lg-12 text-center">
                    <div className="footer-copyright-text">
                        <p>Copyright &copy; 2021 All rights reserved | This App is made with 
                            <i className="fa fa-heart-o" arial-hidden="true"> </i>
                            and Coding by <Link to="#"> Ameni</Link></p>
                    </div>
                </div>
            </Row>


        </Container>

    </div>
    )
}

export default Footer
