import { RestaurantPicker } from '../Services/DataService.js';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 


export default function RestaurantPickerComponent() {
    const [RestaurantPickerText, setRestaurantPickerText] = useState('');
    const [displayText, setDisplayText] = useState('');


    const RestaurantPickerEndpoint = async () =>{
       let result = await RestaurantPicker(RestaurantPickerText);
        setDisplayText(result);
    }

        const RestaurantPickerTest = (e) => setRestaurantPickerText(e.target.value)
        

  
  return (
    <div className='backgroundImg4 paddingBottom3'>
    <Container className='alignRight'>
        <Button className='btnBackground2' as={Link} to='/'>Home</Button>{" "}
    </Container>

    <div className='paddingBottom2'></div>
    <Row>
        <Col className='center paddingBottom2'>
            <h2 className='center textBackground2'>All For One: Restaurant Picker!</h2>
        </Col>
    </Row>

    <Row>
        <Col className='center'>
            <select className='formWidth1 textBackground' type='text' onChange={RestaurantPickerTest}>
                <option value="Fast Food">Fast Food</option>
                <option value="Asian">Asian</option>
                <option value="Sit Down">Sit Down</option>
                
            </select>
        </Col>
    </Row>
    <Row>
        <Col className='center paddingBottom2'>
            <Button onClick={RestaurantPickerEndpoint} className='btnBackground4'>Lets get it!</Button>{" "}
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