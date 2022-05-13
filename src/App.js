
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Component/Appointment/Appointment';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';
import Footer from './Component/Section/Footer/Footer';
import Header from './Component/Section/Header/Header';
import Contact from './Component/ContactUs/Contact';
import Login from './Component/Login/Login';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
