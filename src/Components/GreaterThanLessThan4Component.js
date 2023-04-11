import { GreaterThanLessThan } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function GreaterThanLessThanComponent() {
    const [GreaterThanLessThanText, setGreaterThanLessThanText] = useState('');
    const [GreaterThanLessThanText2, setGreaterThanLessThanText2] = useState('');
    const [displayText, setDisplayText] = useState('');


    const GreaterThanLessThanEnpoint = async () =>{
        var numbers = /^[0-9&&-]+$/;

            if (GreaterThanLessThanText.match(numbers) && GreaterThanLessThanText2.match(numbers)){
                let result = await GreaterThanLessThan(GreaterThanLessThanText, GreaterThanLessThanText2);
                setDisplayText(result);
            }else{
                setDisplayText('Enter a valid Response');
            }
        }

  
  return (
    <div className='backgroundImg3 paddingBottom3'>
    <Container className='alignRight'>
        <Button className='btnBackground2' as={Link} to='/'>Home</Button>{" "}
    </Container>

    <div className='paddingBottom2'></div>
    <Row>
        <Col className='center paddingBottom2'>
            <h2 className='center textBackground2'>All For One: Greater Than Less Than!</h2>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter a number' type='number' onChange={(e) => setGreaterThanLessThanText(e.target.value)} />
        </Col>

        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter another number' type='number' onChange={(e) => setGreaterThanLessThanText2(e.target.value)} />
        </Col>
    </Row>
    <Row>
        <Col className='center paddingBottom2'>
            <Button onClick={GreaterThanLessThanEnpoint} className='btnBackground4'>Lets get it!</Button>{" "}
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
