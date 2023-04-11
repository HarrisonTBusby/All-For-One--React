import { ReverseIt } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function ReverseItComponent() {
    const [ReverseItText, setReverseItText] = useState('');
    const [displayText, setDisplayText] = useState('');


    const ReverseItEndpoint = async () =>{
        var numbers = /^[A-Za-z&&0-9&&-&&]+$/;

            if (ReverseItText.match(numbers)){
                let result = await ReverseIt(ReverseItText);
                setDisplayText(result);
            }else{
                setDisplayText('Enter a valid Response');
            }
        }

  
  return (
    <div className='backgroundImg4 paddingBottom3'>
    <Container className='alignRight'>
        <Button className='btnBackground2' as={Link} to='/'>Home</Button>{" "}
    </Container>

    <div className='paddingBottom2'></div>
    <Row>
        <Col className='center paddingBottom2'>
            <h2 className='center textBackground2'>All For One: Reverse It!</h2>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter a phrase' type='text' onChange={(e) => setReverseItText(e.target.value)} />
        </Col>
    </Row>
    <Row>
        <Col className='center paddingBottom2'>
            <Button onClick={ReverseItEndpoint} className='btnBackground4'>Lets get it!</Button>{" "}
        </Col>
    </Row>


    <Row className='paddingBottom3'>
<Col className='center'>
<p className='textBackground3 center'>{displayText}</p>
</Col>
</Row>

</div>
  );

}