import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../ui/styles/home.css'; 


function Home(){

  return (
    <Container>
        <Row>
            <Col xs={5} md={4}>
                <Image   src="https://img.freepik.com/fotos-premium/lindo-modelo-moreno-feminino-em-roupas-brancas_149155-2919.jpg?" roundedCircle />
            </Col>
        </Row>
    </Container>
)
  }
export default Home;