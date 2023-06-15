import React, {useState} from 'react';
//import Filter from './Filter';
//import ProductList from './ProductList';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import '../../App.css'


const Home = () => {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <div> 
            <div className = "filter">
            
             </div>  


        <div>
            {/* <ProductList  /> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img 
          className="d-block w-100" height={350}
          src="https://lapshop.files.wordpress.com/2013/07/best_computer_stores.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
          className="d-block w-100" height={350}
          src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/439ac63f0bb9171e079e5e6cbd70839d9ec9b022_IdeaPad Gaming 3_Banniere_1580x460_FR_TUNISIANET (1).jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100" height={350}
          src="https://m.media-amazon.com/images/S/aplus-media/vc/3acad832-f5bb-4ded-8645-72db7c42e079.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100" height={350}
          src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/963a245e234ea5bb98b903312a293bb38f2ec192_band6.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100" height={350}
          src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/bb1c2d4f3bb3b3939672ac80b1e31b76e78188c4_Dell_XPS_HR1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>   
        <div className="services">
        <Container>
        <h4>Services</h4>
        <Row>
            <Col md={4}>
            <div className="box">
                <div className="img-box">
                <img src="./images/s1.png" alt="" />
                </div>
                <div className="detail-box">
                <h5>Fast Delivery </h5>
                <p>You receive your order in 48 hours </p>
                </div>
            </div>
            </Col>
            <Col md={4}>
            <div className="box">
                <div className="img-box">
                <img src="./images/s2.png" alt="" />
                </div>
                <div className="detail-box">
                <h5>Fast Shipping </h5>
                <p>You receive your order in 5 days </p>
                </div>
            </div>
            </Col>
            <Col md={4}>
            <div className="box">
                <div className="img-box">
                <img src="./images/s3.png" alt="" />
                </div>
                <div className="detail-box">
                <h5>Best Quality </h5>
                <p>Our products are wrantly</p>
                </div>
            </div>
            </Col>
        </Row>

        </Container>
        </div>

    </div>
    );
};

export default Home;