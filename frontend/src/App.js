import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Cadastro from '../src/ui/Components/Cadastrousuario/pages/Cadastro.js';
import Login from './ui/Components/Login/pages/Login.js';
import Header from '../src/ui/partials/pages/header.js';
import Footer from '../src/ui/partials/pages/Footer.js';
import Perfil from '../src/ui/Components/Perfil/pages/Perfil.js';
import InfoPagamento from '../src/ui/Components/ajudausuario/pages/info_pagamento.js';
import PrazosEnvios from '../src/ui/Components/ajudausuario/pages/prazos_envios.js';
import ComoComprar from '../src/ui/Components/ajudausuario/pages/como_comprar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import Home from '../src/ui/Components/Home/pages/home.js';
import Cadastroproduto from '../src/ui/Components/Roupas/pages/cadastroproduto.js';
import { ToastContainer, toast } from 'react-toastify';
import Pagamento from './ui/Components/Pagamentoviacartao/pages/Pagamento.js';
import ProductPage from './ui/Components/Roupas/pages/ProductPage.js';
import Navpages from './ui/partials/pages/Navpages.js';
import Cart from './ui/Components/Roupas/pages/cart.js';
import { Provider } from 'react-redux';
import { cartReducer } from './ui/Components/Roupas/pages/ConfigCarrinho/Reducer.js';
import { createStore } from 'redux';

const store = createStore(cartReducer);

function App() { 

  const Authentication = () => {
    
    var token = localStorage.getItem("token")
    if(token===null) return false;
    if (token !==null){
      try {
        const { exp } = jwtDecode(token);
        if (exp * 1000 < Date.now()) {
          toast.error("Sessão inspirada")
          localStorage.removeItem("token")
          window.location.href="Login"
         
          return false;
        }
        return true;
      } catch (error) {
        return false;
      }
    };
  }
  
  return (
    <>
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Provider store={store}> {}
          <Header />
          <Navpages />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={Authentication() ? <Home /> : <Navigate to="/Login" />} />
            <Route path='/Perfil' element={Authentication() ? <Perfil /> : <Navigate to="/Login" />} />
            <Route path='/Cadastro' element={<Cadastro />} ></Route>
            <Route path='/Info_pagamento' element={Authentication() ? <InfoPagamento /> : <Navigate to="/Login" />} />
            <Route path='/prazos_envios' element={Authentication() ? <PrazosEnvios /> : <Navigate to="/Login" />} />
            <Route path='/como_comprar' element={Authentication() ? <ComoComprar /> : <Navigate to="/Login" />} />
            <Route path='/cadastroproduto' element={Authentication() ? <Cadastroproduto /> : <Navigate to="/Login" />} />
            <Route path='/Pagamento' element={Authentication() ? <Pagamento /> : <Navigate to="/Login" />} />
            <Route path='/ProductPage' element={Authentication() ? <ProductPage /> : <Navigate to="/Login" />} />
            <Route path='/Cart' element={Authentication() ? <Cart /> : <Navigate to="/Cart" />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

