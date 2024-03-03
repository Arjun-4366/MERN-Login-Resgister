import React, { useState } from 'react'
import { Container, Card, CardBody, Row, Col, Button } from "react-bootstrap";
import axios from 'axios'
import {   useNavigate } from 'react-router-dom';
function Register() {
 let [name,setName] = useState('')
 let [email,setEmail] = useState('')
 let [password,setPassword] = useState('')

 let navigate = useNavigate()

 

  let handleRegister = async(event)=>{
     event.preventDefault()
     try{
        const result =  await axios.post('http://localhost:3006/register',{name,email,password})
        navigate('/')
        console.log(result)
     }
    catch(error){
        console.log(error)
    }
  }
  return (
    <Container className="my-5">
    <Card className="border border-primary border-1 shadow">
      <Row className=" d-flex justify-content-center">
        <Col md="6">
          <CardBody className="d-flex flex-column justify-content-center ">
            <h5
              className="fw-normal my-4 pb-3"
              style={{ letterSpacing: "1px" }}>
              Create  your account here
            </h5>
             <label htmlFor="name" className='d-flex justify-content-start'>Name</label>
            <input
              className="wrapperClass mb-4 lg "
              
              type="text"
              name='name'
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
             <label htmlFor="email" className='d-flex justify-content-start'>Email</label>
            <input
              className="wrapperClass mb-4 lg "
              label="Email address"
              name='email'
              type="text"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
              <label htmlFor="password" className='d-flex justify-content-start'>Password</label>
            <input
              className="wrapperClass mb-4 lg "
              label="Password"
            
              type="password"
              name='password'
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />

            <Button onClick={handleRegister} className="mb-4 px-5 " color="dark">
              Register
            </Button>
            
            <div className="d-flex justify-content-center align-items-center ">
              <a href="#!" className="small text-muted me-1">
                Terms of use.
              </a>
              <a href="#!" className="small text-muted">
                Privacy policy
              </a>
            </div>
          </CardBody>
        </Col>
      </Row>
    </Card>
  </Container>
  )
}

export default Register
