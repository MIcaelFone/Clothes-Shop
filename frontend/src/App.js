import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from '../src/ui/Components/Usuario/pages/Cadastro.js'
import Login from '../src/ui/Components/Usuario/pages/Login.js';
import Header from '../src/ui/partials/pages/header.js';
import Footer from '../src/ui/partials/pages/Footer.js';
import Perfil from '../src/ui/Components/Usuario/pages/Perfil.js';
import InfoPagamento from '../src/ui/Components/ajudausuario/pages/info_pagamento.js'
import PrazosEnvios from '../src/ui/Components/ajudausuario/pages/prazos_envios.js'
import ComoComprar from '../src/ui/Components/ajudausuario/pages/como_comprar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import Home from '../src/ui/Components/Home/pages/home.js'
import NavLink from '../src/ui/partials/pages/NavLinkks.js';
import Cadastroproduto from '../src/ui/Components/Roupas/pages/cadastroproduto.js'
import { ToastContainer } from 'react-toastify';  
import Pagamento from './ui/Components/Usuario/pages/Pagamento.js';
function App() { 

//alem de iniciar o projeto, tem que dar run no backend usando o "npm run backend" se não não irá salvar o cadastro no back

  return (    
    <>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Header/> 
  
        <NavLink/>
       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Perfil' element={<Perfil />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Cadastro' element={<Cadastro />}></Route>
          <Route path='/Info_pagamento' element={<InfoPagamento />}></Route>
          <Route path='/prazos_envios' element={<PrazosEnvios />}></Route>
          <Route path='/como_comprar' element={<ComoComprar/>}></Route>
          <Route path='/cadastroproduto' element={<Cadastroproduto/>}></Route>
          <Route path='/Pagamento' element={<Pagamento/>}></Route>
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;