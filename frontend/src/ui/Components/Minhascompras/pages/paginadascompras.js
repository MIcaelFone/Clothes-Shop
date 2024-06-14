import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {jwtDecode} from 'jwt-decode';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/compras.css';  // Import the CSS file

function Minhascompras() {
  const [compras, setCompras] = useState([]);
  const [idusuario, setId] = useState('');
  
  const verproduto = (idcompra) => {
    window.location.href = `/minhascompras/${idcompra}`;
  };

  useEffect(() => {
    const buscandoCompras = async () => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
            const decodedToken = jwtDecode(token);
            const { idusuario } = decodedToken;
            setId(idusuario);

            const response = await axios.post("http://localhost:8080/pedido/pedidosrealizados", { idusuario });
            if (response.status === 200) {
                setCompras(response.data.data);
            }
            }
        } catch (error) {
            toast.error("Erro ao buscar compras.");
            console.log(error);
        }
    };
    
    buscandoCompras();
  }, [idusuario]);

  return (
    <div className="minhas-compras-container">
      <h1 className="minhas-compras-header">Minhas compras</h1>
      {compras.length > 0 ? (
        compras.map((compra) => (
          <Card key={compra.idcompra} className="compra-card">
            <Card.Body>
              <Card.Title className="compra-card-title">Compra</Card.Title>
              <Card.Text className="compra-card-text">
                <p>Endereço para entrega: {compra.enderenco}</p>
                <p>Cidade: {compra.cidade}</p>
                <p>CEP: {compra.CEP}</p>
                <p>Estado: {compra.estado}</p>
                <p>País: {compra.pais}</p>
                <p>Valor total: {compra.valortotal}</p>
              </Card.Text>
              <Button 
                variant="primary" 
                className="compra-card-button" 
                onClick={() => verproduto(compra.idcompra)}
              >
                Ver Produtos comprados
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1 className="minhas-compras-header">Não há compras realizadas</h1>
      )}
    </div>
  );
}

export default Minhascompras;
