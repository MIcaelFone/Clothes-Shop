import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro'
import Login from './pages/Login';
import Header from './ui/partials/header';
import Footer from './ui/partials/Footer';
import Perfil from './pages/Perfil';
import InfoPagamento from './pages/Info_pagamento'
import PrazosEnvios from './pages/prazos_envios'
import ComoComprar from './pages/como_comprar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/home'
import NavLink from './ui/partials/NavLinkks.js';
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
          <Route path='/Info_pagamento' element={<InfoPagamento />}></Route>
          <Route path='/prazos_envios' element={<PrazosEnvios />}></Route>
          <Route path='/como_comprar' element={<ComoComprar/>}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;