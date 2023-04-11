import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './Components/HomePageComponent';
import SayHelloComponent from './Components/SayHelloComponent';
import Add2NumbersComponent from './Components/Add2Numbers2Component';
import AskingQuestionsComponent from './Components/AskingQuestions3Component';
import GreaterThanLessThanComponent from './Components/GreaterThanLessThan4Component';
import MadLibComponent from './Components/MadLib5Component';
import OddOrEvenComponent from './Components/OddOrEven6';
import ReverseItComponent from './Components/ReverseIt7Component';
import RestaurantPickerComponent from './Components/RestaurantPicker8Component';
import StudentDirectoryComponent from './Components/StudentDirectory9Component';



function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePageComponent />} />
    <Route path='/SayHello' element={<SayHelloComponent/>}/>
    <Route path='Add2Numbers' element={< Add2NumbersComponent/>} />
    <Route path='AskingQuestions' element={<AskingQuestionsComponent/>}/>
    <Route path='GreaterThanLessThan' element={<GreaterThanLessThanComponent/>}/>
    <Route path='MadTime' element={<MadLibComponent/>}/>
    <Route path='OddOrEven' element={<OddOrEvenComponent/>}/>
    <Route path='ReverseIt' element={<ReverseItComponent/>}/>
    <Route path='RestaurantPicker' element={<RestaurantPickerComponent/>}/>
    <Route path='StudentDirectory' element={<StudentDirectoryComponent/>}/>
  </Routes>
  
  
  </BrowserRouter>



  </>
  );
}

export default App;
