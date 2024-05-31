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
            <Col className="promo-text">
              Frete Gratis para todos os produtos
              <div className="divider"></div>
              10% de desconto em todos os produtos
              <div className="divider"></div>
              Desconto de 30% para pagamento em dinheiro
              <div className="divider"></div>
              Parcela em até 10X em vários tipos de cartão
            </Col>
          </Row>
        </Container>
      </div>
    <br></br>
      <section className="banner-sections">
          <Container>
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <div style={{ marginBottom: '20px' }}>
                        <Link to={'/Moda_Masculina'}><Image src={Moda_Masculina} className="banner-image" roundedCircle /></Link>
                        <h4>Moda Masculina</h4>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <div>
                        <Link to={'/Moda_Feminina'}><Image src={Moda_Feminina} className="banner-image" roundedCircle /></Link>
                        <h4>Moda Feminina</h4>
                    </div>
                </Col>
            </Row>
          </Container>
      </section>
      <br></br>
      <br></br>

     <h1 className="text-center">AS MELHORES MARCAS</h1>
     <br></br>
      <div>
          <Container>
            <Row className="justify-content-center">
                <Col md={4} className="text-center">
                    <Image src={Adidas} className="brand-image" rounded/>
                </Col>
                <Col md={4} className="text-center">
                    <Image src={Nike} className="brand-image" rounded/>
                </Col>
                <Col md={4} className="text-center">
                    <Image src={Lacoste} className="brand-image" rounded/>
                </Col>
            </Row>
          </Container>
      </div>

      <br></br>
      <br></br>

      <div className='email_conpum'>
          <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h3 style={{ marginTop: '1rem' }}>Ganhe um cupom de 15% desconto</h3>
              <div style={{ marginBottom: '1rem', width: '100%', maxWidth: '25rem' }}>
                  <InputGroup className="mb-3">
                      <Form.Control
                          placeholder="Insira seu email"
                          aria-label="email"
                          aria-describedby="email_cupom"
                          style={{ width: '100%' }}
                      />
                      <Button variant="primary" id="cadastro_email">
                          Cadastrar
                      </Button>
                  </InputGroup>
              </div>
          </div>
      </div>


      <br></br>      

    </div>
   
  );  
}



export default Home;
