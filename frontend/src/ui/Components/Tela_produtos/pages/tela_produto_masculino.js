import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de que você tenha Bootstrap importado
import { FormattedMessage } from 'react-intl';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../Carrinhoprodutos/config/Cartprovider';
import { toast } from 'react-toastify';
import '../styles/tela_produtos.css'; // Importe o arquivo CSS

function CardProductMasculino() {
    const [produtos, setProdutos] = useState([]);
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);    

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };   
    
      
    const notifyAddedToCart = (item) => toast.success( <> {item.nome} <FormattedMessage id='adicao_produto' /> </>, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: {
          backgroundColor: '#fff',
          color: '#000',
        }
    });
    
    const notifyRemovedFromCart = (item) => toast.error( <>{item.nome} <FormattedMessage id='removendo_produto'></FormattedMessage> </>, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: {
            backgroundColor: '#000',
            color: '#fff',
        }
    });

    const detailproduct = (nome) => {
        window.location.href = `/roupa/${nome}`;
    };

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
        notifyRemovedFromCart(product);
    };

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get("http://localhost:8080/produto/produtosmasculino");
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
            <center>
                <h1><FormattedMessage id="produtosmasculino_title"></FormattedMessage></h1>
            </center>
            <div className="card-container">
                {produtos.map((produto) => (
                    <Card className="card-product" key={produto.idproduto}>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{truncateText(produto.nome, 20)}</Card.Title>
                            <Card.Text className="card-text">
                                <h3 style={{ fontSize: '1.3rem' }}> <FormattedMessage id='money'></FormattedMessage> {produto.preco}</h3>
                            </Card.Text>
                            <div className="button-container">
                                <Button className="button button-primary" onClick={() => {detailproduct(produto.nome);}}>
                                    <FormattedMessage id='about_produto'></FormattedMessage>
                                </Button>
                                {
                                    cartItems.find(item => item.idproduto === produto.idproduto) ? (
                                        <div className="quantity-container">
                                            <button
                                                className="button button-secondary"
                                                onClick={() => {
                                                    addToCart(produto);
                                                }}
                                            >
                                                +
                                            </button>
                                            <p className='quantity-text'>
                                                {cartItems.find(item => item.idproduto === produto.idproduto)?.quantity}
                                            </p>
                                            <button
                                                className="button button-secondary"
                                                onClick={() => {
                                                    const cartItem = cartItems.find((item) => item.idproduto === produto.idproduto);
                                                    if (cartItem.quantity === 1) {
                                                        handleRemoveFromCart(produto);
                                                    } else {
                                                        removeFromCart(produto);
                                                    }
                                                }}
                                            >
                                                -
                                            </button>
                                        </div>
                                    ) : (
                                        <FaShoppingCart 
                                            size={35} 
                                            style={{ marginLeft: '10px', color: 'black', cursor: 'pointer' }} 
                                            onClick={() =>{ addToCart(produto)
                                            notifyAddedToCart(produto)}} 
                                        />
                                    )
                                }
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default CardProductMasculino;


