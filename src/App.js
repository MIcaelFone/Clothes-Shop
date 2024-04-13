import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './Components_Cadastro_Login/Cadastro'
import Login from './Components_Cadastro_Login/Login';
import Header from './partials/header';
import Footer from './partials/Footer';
import Perfil from './Perfil_Usuario/Perfil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Info_pagamento  from './pages/info_pagamento';
import Como_comprar from './pages/como_comprar';
import Prazos_envios from './pages/prazos_envios';
import NavLink from './partials/NavLinkks';
import "core-js";
import "regenerator-runtime/runtime";
import "@babel/polyfill";
function App() { 

  return (    
    <>
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