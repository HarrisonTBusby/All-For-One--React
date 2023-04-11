import { OddOrEven } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function OddOrEvenComponent() {
    const [OddOrEvenText, setOddOrEvenText] = useState('');
    const [displayText, setDisplayText] = useState('');


    const OddOrEvenEndpoint = async () =>{
        var numbers = /^[0-9&&-]+$/;

            if (OddOrEvenText.match(numbers)){
                let result = await OddOrEven(OddOrEvenText);
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
            <h2 className='center textBackground2'>All For One: Odd Or Even!</h2>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter a number' type='number' onChange={(e) => setOddOrEvenText(e.target.value)} />
        </Col>
    </Row>
    <Row>
        <Col className='center paddingBottom2'>
            <Button onClick={OddOrEvenEndpoint} className='btnBackground4'>Lets get it!</Button>{" "}
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
