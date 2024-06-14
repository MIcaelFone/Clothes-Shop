import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/gerenciamentoroupas.css'; // Importando o CSS

function GerenciamentoRoupa() {
    const [roupas, setRoupas] = useState([]);
    const editproduto =(nome)=>{
      window.location.href=`/gerenciamentoprodutos/${nome}`
    }
    useEffect(() => {
        axios.get('http://localhost:8080/produto/cadastroprodutolistar')
            .then(response => {
                setRoupas(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="gerenciamento-roupa-container">
            {roupas.length > 0 ? (
                roupas.map((roupa) => (
                    <div className="gerenciamento-roupa-card-container" key={roupa.idroupa}>
                        <Card className="gerenciamento-roupa-card">
                            <Card.Body>
                                <Card.Text>Nome: {roupa.nome}</Card.Text>
                                <Card.Text>Marca: {roupa.marca}</Card.Text>
                                <Card.Text>Preço: {roupa.preco}</Card.Text>
                                <Card.Text>Moda: {roupa.moda}</Card.Text>
                                <Button variant="primary" onClick={()=>editproduto(roupa.nome)}>Editar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            ) : (
                <h1>Não possui nenhum produto cadastrado</h1>
            )}
        </div>
    );
}

export default GerenciamentoRoupa;