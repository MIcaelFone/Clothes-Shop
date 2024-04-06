import React from 'react'; 
import Col from 'react-bootstrap/Col';
import '../ui/styles/home.css'; 
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
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
      <section class="banner-sections">
          <Container>
            <Col style={{ display: 'flex', justifyContent: 'center' ,gap:'3rem' }}>
                <div style={{ marginRight: '10px' }}>
                  <Image src="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2019/05/moda-masculina-destaque-usa-se-quiser.jpg?resize=564%2C705" style={{ height: '50vh', borderRadius: '50%' }} roundedCircle />
                 <center> <h4>Moda Masculina</h4></center>
                </div>
                <div style={{ marginRight: '10px' }}>
                  <Image src="https://images.tcdn.com.br/img/img_prod/919154/short_saia_2037_1_06f0bb5affc8f4d67b2ca7573f4bdd4a.jpg" style={{ height: '50vh', borderRadius: '50%' }} roundedCircle />
                  <center><h4>Moda Feminina</h4></center>
                </div>
                <div>
                  <Image src="https://img.elo7.com.br/product/main/3DE8EE4/vestido-longo-tricoline-bolinha-poa-azul-moda-infantil-2021.jpg" style={{ height: '50vh', borderRadius: '50%' }} roundedCircle />
                  <center> <h4>Moda Infantil</h4> </center>
                </div>
            </Col>
          </Container>
      </section>

      <br></br>
     <h1 style={{textAlign: 'center'}}>AS MELHORES MARCAS</h1>
      <div>
          <Container>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'center', gap:'4rem' }}>
                <Image src="https://cdn-icons-png.flaticon.com/512/731/731962.png" style={{ height: '25vh',border:'2px solid black'  }} rounded/>
                <Image src="https://provinciamarcas.com.br/wp-content/uploads/2017/03/Nike-logo-wordmark.png" style={{ height: '25vh', border:'2px solid black' }} rounded/>
                <Image src="https://i.pinimg.com/originals/6c/41/c0/6c41c0cef416f3796a9f02632f4a2dfa.jpg" style={{ height: '25vh', border:'2px solid black' }} rounded/>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
  );  
}

export default Home;
