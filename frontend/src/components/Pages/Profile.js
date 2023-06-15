import React, { useEffect } from 'react';
import {  Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../JS/actions/userActions';
import { useParams, Link } from 'react-router-dom';
import '../../App.css'

const Profile = () => {
    const dispatch = useDispatch();
    const  user = useSelector(state => state.userReducer.user)

    const { id } = useParams();
    useEffect(() => {
       dispatch(getUser(id)) 

    }, [dispatch, id])
     

    return (
        <div>    
          
        <Row>    
      <Col md={4}>
        <h2>Profile</h2>
        <Card>
        <Card.Img variant="top" style={{width: "50%"}} src="https://www.guichetemplois.gc.ca/themes-jb/images/match/profile-image-add.svg" />
          
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Name:</Col>
                <Col>
                  <strong>{user.firstName}</strong> {' '}
                  <strong>{user.lastName}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Email:</Col>
                <Col>
                  <strong>{user.email}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Address:</Col>
                <Col>
                  <strong>{user.address}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Phone:</Col>
                <Col>
                  <strong>{user.phone}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Role:</Col>
                <Col>
                  <strong>{user.role}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
     
    </Row>
    <Row>
       
    <Button style={{width: 100, margin: 100}} variant="success" > <Link to={`/profile/edit/${user._id}`} className='link' >  Edit </Link> </Button> 
        
    </Row>
    </div>  
    );
};

export default Profile;