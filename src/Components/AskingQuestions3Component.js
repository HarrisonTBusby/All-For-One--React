import { AskingQuestions } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function AskingQuestionsComponent() {
    const [AskingQuestionsText, setAskingQuestionsText] = useState('');
    const [AskingQuestionsText2, setAskingQuestionsText2] = useState('');
    const [displayText, setDisplayText] = useState('');


    const AskingQuestionsEnpoint = async () =>{

        var letters = /^[A-Za-z]+$/;
        var numbers = /^[0-9]+$/;
        

        if(AskingQuestionsText2 > 12 || AskingQuestionsText2 === 0){
            setDisplayText('Enter a valid number');
        }else{

            if (AskingQuestionsText.match(letters) && AskingQuestionsText2.match(numbers)){
                let result = await AskingQuestions(AskingQuestionsText, AskingQuestionsText2);
                console.log(result);
                setDisplayText(result);
            }else{
                setDisplayText('Enter a valid Response');
            }
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
            <h1 className='center textBackground'>All For One: Asking Questions!</h1>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter your name' type='text' onChange={(e) => setAskingQuestionsText(e.target.value)} />
        </Col>

        <Col className='center paddingBottom2'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter a number' type='number' onChange={(e) => setAskingQuestionsText2(e.target.value)} />
        </Col>
    </Row>
    <Row>
        <Col className='center paddingBottom2'>
            <Button onClick={AskingQuestionsEnpoint} className='btnBackground4'>Lets get it!</Button>{" "}
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