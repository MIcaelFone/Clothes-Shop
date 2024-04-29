import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/tela_venda.css'
function TelaVenda(props){
    return(
        
        <div>
            <div className='filtro'>

                <h4>{props.titulo}</h4>
                   
                <Form>
                    {props.options.map((option, index) => (
                        <div key={index} className="mb-3">
                        <Form.Check type={option} id={`check-api-${option}`}>
                            <Form.Check.Input type={option} isValid />
                            <Form.Check.Label>{option}</Form.Check.Label>
                        </Form.Check>
                        </div>
                    ))}
                </Form>
                
            </div>

            <div className='cards'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{props.nome_produto}</Card.Title>
                        <Card.Text>
                            {props.descricao}
                        </Card.Text>
                        <Button variant="primary">Ver detalhes</Button>
                    </Card.Body>
                </Card>
            </div>  
        </div>
    )
    
}

export default TelaVenda;
