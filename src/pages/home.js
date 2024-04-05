import React from 'react'; 
import Col from 'react-bootstrap/Col';
import '../ui/styles/home.css'; 
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
function Home() {
  return (
    
    <div>
      
      <br></br>

      <div style={{border:'2px solid black'}}>
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
          <Col>
            <Image src="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2019/05/moda-masculina-destaque-usa-se-quiser.jpg?resize=564%2C705" style={{height:'50vh', borderRadius:'100%', margin:'10px'}} roundedCircle />
            <h3>Moda Masculina</h3>
          </Col>
          <Col>
            <Image src="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2019/05/moda-masculina-destaque-usa-se-quiser.jpg?resize=564%2C705" style={{height:'50vh', borderRadius:'100%', margin:'10px'}} roundedCircle />
            <h3>Moda Feminina</h3>
          </Col>
          <Col>
            <Image src="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2019/05/moda-masculina-destaque-usa-se-quiser.jpg?resize=564%2C705" style={{height:'50vh', borderRadius:'100%', margin:'10px'}} roundedCircle />
            <h3>Moda Infantil</h3>
          </Col>
        </Container>
      </section>
      <br></br>
   
    </div>
  );  
}

export default Home;
