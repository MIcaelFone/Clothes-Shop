import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './Components_Cadastro_Login/Cadastro'
import Login from './Components_Cadastro_Login/Login';
import Header from './Layouts/header';
import Footer from './Layouts/Footer';
import Perfil from './Perfil_Usuario/Perfil';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (    
    <>
      <BrowserRouter>
        <Header/> 
        <Routes>
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