import { madTime } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function MadLibComponent() {
    const [MadLibText, setMadLibText] = useState('');
    const [MadLibText2, setMadLibText2] = useState('');
    const [MadLibText3, setMadLibText3] = useState('');
    const [MadLibText4, setMadLibText4] = useState('');
    const [MadLibText5, setMadLibText5] = useState('');
    const [MadLibText6, setMadLibText6] = useState('');
    const [MadLibText7, setMadLibText7] = useState('');
    const [MadLibText8, setMadLibText8] = useState('');
    const [MadLibText9, setMadLibText9] = useState('');
    const [MadLibText10, setMadLibText10] = useState('');
    const [displayText, setDisplayText] = useState('');


    const MadLibEnpoint = async () =>{
        var letters = /^[A-Za-z]+$/;

            if(MadLibText.match(letters)&& 
            MadLibText2.match(letters)&& 
            MadLibText3.match(letters)&& 
            MadLibText4.match(letters)&& 
            MadLibText5.match(letters)&& 
            MadLibText6.match(letters)&& 
            MadLibText7.match(letters)&& 
            MadLibText8.match(letters)&& 
            MadLibText9.match(letters)&& 
            MadLibText10.match(letters)){
                let result = await madTime(MadLibText, MadLibText2, MadLibText3, MadLibText4, MadLibText5, MadLibText6, MadLibText7, MadLibText8, MadLibText9, MadLibText10);
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
            <h2 className='center textBackground2'>All For One: MadLib!</h2>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a noun (place)' type='text' onChange={(e) => setMadLibText(e.target.value)} />
        </Col>

        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a proper-noun' type='text' onChange={(e) => setMadLibText2(e.target.value)} />
        </Col>
        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a verb (singular)' type='text' onChange={(e) => setMadLibText3(e.target.value)} />
        </Col>
    </Row>
    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input an adjective' type='text' onChange={(e) => setMadLibText4(e.target.value)} />
        </Col>

        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a noun (place)' type='text' onChange={(e) => setMadLibText5(e.target.value)} />
        </Col>
        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a proper-noun' type='text' onChange={(e) => setMadLibText6(e.target.value)} />
        </Col>
    </Row>
    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a verb-ED' type='text' onChange={(e) => setMadLibText7(e.target.value)} />
        </Col>

        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input an adjective' type='text' onChange={(e) => setMadLibText8(e.target.value)} />
        </Col>
        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a noun (place)' type='text' onChange={(e) => setMadLibText9(e.target.value)} />
        </Col>
        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Input a noun (place)' type='text' onChange={(e) => setMadLibText10(e.target.value)} />
        </Col>
    </Row>

    
    <Row>
        <Col className='center paddingBottom2'>
            <Button onClick={MadLibEnpoint} className='btnBackground4'>Lets get it!</Button>{" "}
        </Col>
    </Row>


    <Row className='paddingBottom3'>
<Col className='center'>
<p className='textBackground5 center'>{displayText}</p>
</Col>
</Row>

</div>
  );

}