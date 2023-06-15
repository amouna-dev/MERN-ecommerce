import React, { useRef, useState } from 'react'
//import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_varynsb', 
            'template_mi4459g', 
            form.current, 
            'gWY0fUIg9pP8d4_EQ'
            )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
   
    return (
        <div>
            <Container>
                <h2 style={{color: "#e53637", textAlign: "center", fontWeight: "bold", margin: "40px 0px"}}>Contact Us</h2>
                <Row>
                <Col>
                <div className="contact-text">
                <p>  
                Do you want help? Our team is at your disposal to answer your questions and requests. 
                From customer service to experts in our company, our teams are always at your disposal. 
                You can contact us by email or phone.
                </p>
                </div>
                <div className="contact-text">
                <ul> 
                <li>
                <i className="fa fa-home"></i>
                <span>Jasmins building first floor City center ، Nabeul 8060</span>
                </li> 
                <li>
                <i className="fa fa-phone"></i>
                <span>Phone: 72488655 / Fax: 72113113</span>
                </li> 
                <li>
                <i className="fa fa-envelope"></i>
                <span><Link to="#">amenidevtest@gmail.com</Link></span>
                </li> 
                </ul>
                </div>
                </Col>
                <Col>
                <Form ref={form} onSubmit={handleSubmit}>
                <h3 className="title">Send your comments</h3>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="your name" required name="user_name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" required name="user_subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" required name="user_email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter your Comment"  name="message" required/>
                    </Form.Group>
                    
                    <Button type="submit" variant="dark" >Send Email</Button>
                    {done?  <h5 style={{color: "green"}}> Thank you for contacting us... </h5> : ""}
                </Form>
                </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contact
