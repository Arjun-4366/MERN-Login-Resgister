import axios from "axios";
import React, { useState } from "react";
import { Container, Card, CardBody, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
      let navigate = useNavigate()
    const handleSubmit = async(e)=>{
      try{
        e.preventDefault()
      const result = await axios.post('http://localhost:3006/',{email,password})
        if(result.data.message ==='Success'){
            
          navigate('/home',{state:{name:result.data.name}})
        }
      
      }
      catch(error){
        console.log(error.message)
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
                Sign into your account
              </h5>
              <label htmlFor="email" className="d-flex justify-content-start">
                Email
              </label>

              <input
                className="wrapperClass mb-4 lg "
                label="Email address"
              
                name="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label
                htmlFor="password"
                className="d-flex justify-content-start">
                Password
              </label>

              <input
                className="wrapperClass mb-4 lg "
                label="Password"
              
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <Button className="mb-4 px-5 " color="dark" onClick={handleSubmit}>
                Login
              </Button>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <Link to={"/register"} className="text-primry ">
                  Register here
                </Link>
              </p>

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
  );
}

export default Login;
