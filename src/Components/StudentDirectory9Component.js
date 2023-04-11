import { StudentDirectory, StudentDirectory2, StudentDirectory3, StudentDirectory4} from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function StudentDirectoryComponent() {
    const [StudentDirectoryText, setStudentDirectoryText] = useState('');
    const [StudentDirectoryText2, setStudentDirectoryText2] = useState('');
    const [StudentDirectoryText3, setStudentDirectoryText3] = useState('');
    const [StudentDirectoryText4, setStudentDirectoryText4] = useState('');
    const [displayText, setDisplayText] = useState('');


    const StudentDirectoryEndpoint = async () =>{

                if(StudentDirectoryText){
                let result = await StudentDirectory(StudentDirectoryText.charAt(0).toUpperCase() + StudentDirectoryText.slice(1));
                setDisplayText(result);
                }else if(StudentDirectoryText2){
                let result2 = await StudentDirectory2(StudentDirectoryText2.charAt(0).toUpperCase() + StudentDirectoryText2.slice(1));
                setDisplayText(result2);
                }else if(StudentDirectoryText3){
                let result3 = await StudentDirectory3(StudentDirectoryText3.charAt(0).toUpperCase() + StudentDirectoryText3.slice(1));
                setDisplayText(result3);
                }else{
                let result4 = await StudentDirectory4(StudentDirectoryText4);
                setDisplayText(result4);
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
            <h2 className='center textBackground2'>All For One: Student Directory!</h2>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <Form.Control className='formWidth1 textBackground' placeholder='Enter a first name' type='text' onChange={(e) => setStudentDirectoryText(e.target.value)} />
        </Col>
        <Col className='center'>
         <Form.Control className='formWidth1 textBackground' placeholder='Enter a last name' type='text' onChange={(e) => setStudentDirectoryText2(e.target.value)} /> 
        </Col> 
        <Col className='center'>
         <Form.Control className='formWidth1 textBackground' placeholder='Enter a slack name' type='text' onChange={(e) => setStudentDirectoryText3(e.target.value)} /> 
        </Col> 
        <Col className='center'> 
         <Form.Control className='formWidth1 textBackground' placeholder='Enter an email' type='text' onChange={(e) => setStudentDirectoryText4(e.target.value)} /> 
        </Col> 
    </Row>
    <Row>
        <Col className='center paddingTop paddingBottom2'>
            <Button onClick={StudentDirectoryEndpoint} className='btnBackground4'>Lets get it!</Button>{" "}
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