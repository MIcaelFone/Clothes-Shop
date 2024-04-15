import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './Components_Cadastro_Login/Cadastro'
import Login from './Components_Cadastro_Login/Login';
import Header from './partials/header';
import Footer from './partials/Footer';
import Perfil from './Perfil_Usuario/Perfil';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/home'
import NavLink from './partials/NavLinkks';
import { ToastContainer } from 'react-toastify';
function App() { 

  return (    
    <>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Header/> 
  
        <NavLink/>
        <Routes>

          <Route path='' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Perfil' element={<Perfil />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Cadastro' element={<Cadastro />}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;