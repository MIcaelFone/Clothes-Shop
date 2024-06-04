import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you have Bootstrap styles imported
import { FormattedMessage } from 'react-intl';
import { FaShoppingCart } from "react-icons/fa";


function CardProductFeminino() {
    const [produtos, setProdutos] = useState([]);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };
     
    const detailproduct=(nome)=>{
        window.location.href=`/roupa/${nome}`
    }
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get("http://localhost:8080/produto/produtosfeminino");
                if (response.status === 200) {
                    setProdutos(response.data);
                }
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            <center> <h1><FormattedMessage id="produtosfeminino_title"></FormattedMessage></h1></center>
            <div className="grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop:"2rem" }}>
                {produtos.map((produto) => (
                    <Card style={{ width: '15rem' }} key={produto.id}>
                        <Card.Body>
                            <Card.Title>{truncateText(produto.nome, 20)}</Card.Title>
                            <Card.Text>
                                <h3 style={{fontSize:'1.3rem'}}>  <FormattedMessage id='money'></FormattedMessage> {produto.preco}</h3>
                            </Card.Text>
                            <div className={{gap:'4rem'}}>
                                <Button variant="primary" onClick={()=>detailproduct(produto.nome)}><FormattedMessage id='about_produto'></FormattedMessage></Button>
                                <FaShoppingCart size={35} style={{ marginLeft: '10px', color: 'black' }} />
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>    
    );
}

export default CardProductFeminino;