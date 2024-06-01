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
import { FormattedMessage } from 'react-intl';
function Home() {

  return (
    
    <div>
      <div style={{border:'1px solid black'}}>
          <Container fluid>
            <Row>
              <Col style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FormattedMessage id='home_frete_gratis' defaultMessage="Frete Gratis para todos os produtos"></FormattedMessage>
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                <FormattedMessage id='home_devolução_gratis' defaultMessage="Devolução gratis para todos os produtos"></FormattedMessage>
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                <FormattedMessage id='home_descoto_10_porcentos' defaultMessage=" 10% de desconto em todos os produtos"></FormattedMessage>
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                <FormattedMessage id='home_desconto_30_porcentos' defaultMessage="Desconto de 30% para pagamento em dinheiro"></FormattedMessage>
                <div style={{width: '2px', height: '50px', backgroundColor: 'black'}}></div>
                <FormattedMessage id='home_parcela' defaultMessage=" Parcela em até 10X em vários tipos de cartão"></FormattedMessage>
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
                 <center> <h4> <FormattedMessage id='home_moda_Masculina' defaultMessage="Moda Masculina"></FormattedMessage></h4></center>
                </div>
                <div style={{ marginRight: '40px' }}>
                  <Link to={'/Moda_Feminina'}><Image src={Moda_Feminina} style={{ height: '50vh', borderRadius: '50%' }} roundedCircle /></Link>
                  <center><h4> <FormattedMessage id='home_moda_Feminina' defaultMessage="Moda Feminina"></FormattedMessage></h4></center>
                </div>
            </Col>
          </Container>
      </section>
      <br></br>
      <br></br>

     <h1 style={{textAlign: 'center'}}> <FormattedMessage id='home_melhores_marcas' defaultMessage="AS MELHORES MARCAS"></FormattedMessage></h1>
    
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

      

      <br></br>      

    </div>
   
  );  
}

export default Home;
