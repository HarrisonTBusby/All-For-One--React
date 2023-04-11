import { SayHello } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useState, } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



export default function SayHelloComponent() {
  const [sayHelloText, setSayHelloText] = useState('');
  const [ displayText, setDisplayText] = useState('');
  
  
  const SayHelloEndpoint = async () => {
    let letters = /^[A-Za-z&& ]+$/;
    if(sayHelloText.match(letters)){
        
      let result = await SayHello(sayHelloText);
      console.log(result);
      setDisplayText(result);
    }else{
        setDisplayText('Enter a Valid Response');
    }
    console.log(sayHelloText);
    
  }

  
  return (
    <div className='backgroundImg2 paddingBottom2'>
      <Container className='alignRight'>
        <Button className='btnBackground2' as={Link} to='/'>Home</Button>{" "}
      </Container>
      <div className='paddingBottom2'></div>
      <Row>
      <Col className='center paddingBottom2'>
      <h1 className='center textBackground'>All For One: Say Hello!</h1>
      </Col>
      </Row>
      
      <Row className='paddingBottom3'>

      <Col className='center'>
      <Form.Control placeholder='Please enter your name' className='formWidth1 textBackground' type='text' onChange={(e) => setSayHelloText(e.target.value)}/>
      <Button onClick={ SayHelloEndpoint } className='btnBackground3'>Say Hello</Button>{" "}
      
      </Col>
      </Row>
    <Row className='paddingBottom2'>
      <Col className='center paddingBottom3'>
        <p className='textBackground3 center'>{displayText}</p>
      </Col>
    </Row>
    </div>
  );
}

