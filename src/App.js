import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro'
import Login from './pages/Login';
import Header from './UI/partials/header';
import Footer from './UI/partials/Footer';
import Perfil from './pages/Perfil';
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
          <Route path='/info_pagamento' element={<Info_pagamento />}></Route>
          <Route path='/prazos_envios' element={<Prazos_envios />}></Route>
          <Route path='/como_comprar' element={<Como_comprar/>}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;