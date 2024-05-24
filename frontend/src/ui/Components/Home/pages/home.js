import React, { useEffect } from 'react'; 
import Col from 'react-bootstrap/Col';
import '../styles/home.component.css'; 
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from "react-router-dom";
import Moda_Masculina from "../../../../assests/moda-masculina-destaque-usa-se-quiser.webp";
import Moda_Feminina from "../../../../assests/short_saia_2037_1_06f0bb5affc8f4d67b2ca7573f4bdd4a.webp";
import Adidas from "../../../../assests/adidas.png";
import Nike from "../../../../assests/Nike.webp";
import Lacoste from "../../../../assests/Lacoste.jpg";
function Home() {

  return (
    
    <div>
      <div style={{border:'1px solid black'}}>
          <Container fluid>
            <Row>
              <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                Frete Gratis para todos os produtos
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                Devolução gratis para todos os produtos
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                10% de desconto em todos os produtos
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                Desconto de 30% para pagamento em dinheiro
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                Parcela em até 10X em vários tipos de cartão
              </Col>
            </Row>
          </Container>
      </div>
    <br></br>
      <section className="banner-sections">
          <Container>
            <Col style={{ display: 'flex', justifyContent: 'center' ,gap:'3rem' }}>
                <div style={{ marginRight: '10px' }}>
                  <Link to={'/Moda_Masculina'}><Image src={Moda_Masculina} style={{ height: '50vh', borderRadius: '50%' }} roundedCircle /></Link>
                 <center> <h4>Moda Masculina</h4></center>
                </div>
                <div style={{ marginRight: '40px' }}>
                  <Link to={'/Moda_Feminina'}><Image src={Moda_Feminina} style={{ height: '50vh', borderRadius: '50%' }} roundedCircle /></Link>
                  <center><h4>Moda Feminina</h4></center>
                </div>
  
            </Col>
          </Container>
      </section>
      <br></br>
      <br></br>

     <h1 style={{textAlign: 'center'}}>AS MELHORES MARCAS</h1>
     <br></br>
      <div>
          <Container>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', gap:'4rem' }}>
                <Image src={Adidas} style={{ height: '25vh',border:'2px solid black'  }} rounded/>
                <Image src={Nike} style={{ height: '25vh', border:'2px solid black' }} rounded/>
                <Image src={Lacoste} style={{ height: '25vh', border:'2px solid black' }} rounded/>
              </Col>
            </Row>
          </Container>
      </div>

      <br></br>
      <br></br>

      <div className='email_conpum'>
        <div style={{marginTop:'0.5rem', display:'flex',justifyContent:'center'}}>
          <h3 style={{marginRight:'2rem', marginTop:'1rem'}}>Ganhe um copum de 15% desconto</h3>
          <InputGroup className="mb-3" style={{width:'25vw', marginTop:'1rem'}}>
            <Form.Control
              placeholder="Insira seu email"
              aria-label="email"
              aria-describedby="email_copum"
            />
            <Button variant="primary" id="cadastro_email">
              Cadastrar
            </Button>
          </InputGroup>
        </div>  
      </div>

      <br></br>      

    </div>
   
  );  
}

export default Home;
