import'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Copmponent/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Copmponent/HomePage/HomePage';
import data from './Destination.json'

function App() {
  return (
   <>
   
 <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/flight' element={<h1>flight</h1>}/>
      <Route path='/hotel' element={<h1>Hotel</h1>}/>
      <Route path='/carhire' element={<h1>CarHire</h1>}/> 
      <Route path='/TripFinder' element={<h1>TripFinder</h1>}/>  
      <Route path='/Inspiration' element={<h1>Inspiration</h1>}/>  
      </Routes>
    </BrowserRouter>
        </>

  );
}

export default App;
