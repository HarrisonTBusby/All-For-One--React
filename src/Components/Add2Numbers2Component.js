import { Add2Numbers } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Add2NumbersComponent() {
    const [AddNumbersText, setAddNumbersText] = useState('');
    const [AddNumbersText2, setAddNumbersText2] = useState('');
    const [displayText, setDisplayText] = useState('');


    const AddNumbersEndpoint = async () => {
        var numbers = /^[0-9&&-]+$/;
      
        if (AddNumbersText.match(numbers) && AddNumbersText2.match(numbers)) {

            let result = await Add2Numbers(AddNumbersText, AddNumbersText2);
            console.log(result);
            setDisplayText(result);
        } else {
            setDisplayText('Enter a Valid Response');
        }
        

    }


    return (
        <div className='backgroundImg2 paddingBottom3'>
            <Container className='alignRight'>
                <Button className='btnBackground2' as={Link} to='/'>Home</Button>{" "}
            </Container>

            <div className='paddingBottom2'></div>
            <Row>
                <Col className='center paddingBottom2'>
                    <h1 className='center textBackground'>All For One: Add 2 Numbers!</h1>
                </Col>
            </Row>

            <Row>
                <Col className='center'>
                    <Form.Control className='formWidth1 textBackground' placeholder='Enter a number' type='number' onChange={(e) => setAddNumbersText(e.target.value)} />
                </Col>

                <Col className='center paddingBottom2'>
                    <Form.Control className='formWidth1 textBackground' placeholder='Enter another number' type='number' onChange={(e) => setAddNumbersText2(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col className='center paddingBottom2'>
                    <Button onClick={AddNumbersEndpoint} className='btnBackground4'>Add Some Numbers!</Button>{" "}
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