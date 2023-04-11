import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function HomePageComponent() {
  return (
  

  <div  className='backgroundImg1'>
    <div className='paddingBottom2'></div>
  <Container>
    <Row>
      <Col className='center paddingBottom'>
      <h1 className='text-center textBackground'>Harrison Busby: All For One</h1>
      </Col>
    </Row>
    <Row className='center'>
      <Col>
        <Button as={Link} to='/SayHello' className='btnBackground1 d-grid' size="lg">Mini Challenge 1: Say Hello!</Button>
      </Col>
      <Col>
        <Button as={Link} to='Add2Numbers' className='btnBackground1 d-grid' size="lg">Mini Challenge 2: Adding 2 Numbers!</Button>
      </Col>
      <Col>
        <Button as={Link} to='AskingQuestions' className='btnBackground1 d-grid' size="lg">Mini Challenge 3: Asking Questions!</Button>
      </Col>
    </Row>
    <Row className='center mt-5'>
      <Col>
        <Button as={Link} to='GreaterThanLessThan' className='btnBackground1 d-grid' size="lg">Mini Challenge 4: GTLT!</Button>
      </Col>
      <Col>
        <Button as={Link} to='MadTime' className='btnBackground1 d-grid' size="lg">Mini Challenge 5: MadLib! </Button>
      </Col>
      <Col>
        <Button as={Link} to='OddOrEven' className='btnBackground1 d-grid' size="lg">Mini Challenge 6: Odd Or Even!</Button>
      </Col>
    </Row>
    <Row className='center mt-5'>
      <Col>
        <Button as={Link} to='ReverseIt' className='btnBackground1 d-grid' size="lg">Mini Challenge 7: Reverse It!</Button>
      </Col>
      <Col>
        <Button as={Link} to='RestaurantPicker' className='btnBackground1 d-grid' size="lg">Mini Challenge 8: Restaurant Picker!</Button>
      </Col>
      <Col>
        <Button as={Link} to='StudentDirectory' className='btnBackground1 d-grid' size="lg">Mini Challenge 9: Student Directory!</Button>
      </Col>
    </Row>
    <Row className='paddingBottom2'></Row>


  </Container>
  
  

  


  </div>
  );
}



