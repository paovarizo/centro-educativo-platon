import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import Profile from './components/Profile/Profile';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/recover' element={<RecoverPassword/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/info' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
