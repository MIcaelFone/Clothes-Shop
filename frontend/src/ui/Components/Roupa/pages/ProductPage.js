import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from 'react-toastify';
import { FormattedMessage } from "react-intl";
import { FaShoppingCart } from "react-icons/fa";
const ProductPage = ({ cart }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [produto, setProduto] = useState(null);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = decodeURIComponent(window.location.href);
    const tamanho = url.split("/");
    const nomeProdutoFromUrl = tamanho[tamanho.length - 1];
    console.log(nomeProdutoFromUrl);
    setNomeProduto(nomeProdutoFromUrl);
  }, []);

  useEffect(() => {
    if (nomeProduto) {
      const fetchProduto = async () => {
        try {
          const response = await axios.post("http://localhost:8080/produto/buscandoprodutoespecifico", {nome: nomeProduto });
          if (response.status === 200) {
            setProduto(response.data.data[0]);  // Assuming the backend returns an array of products
            console.log("Produto voltou para o frontend");
            console.log(response.data.data);
          }
        } catch (error) {
          toast.error("Não foi possível buscar o produto");
        }
      };
      fetchProduto();
    }
  }, [nomeProduto]);

  const handleAddToCart = () => {
    if (produto) {
      console.log("Adicionando ao carrinho:", produto);
      dispatch({ type: "ADD_TO_CART", payload: { ...produto, qty: amount } });
    }
  };

  const handleRemoveFromCart = () => {
    if (produto) {
      console.log("Removendo do carrinho:", produto);
      dispatch({ type: "REMOVE_FROM_CART", payload: produto });
    }
  };

  return (
    <div className="d-flex flex-column flex-lg-row gap-4 mt-2 " style={{marginLeft:"2rem"}}>
      {produto ? (
        <div className="d-flex flex-column">
          <div>
            <span className="text-primary fw-semibold">{produto.marca}</span>
            <h1 className="fs-1 fw-bold">{produto.nome}</h1>
          </div>
          <p className="text-muted">{produto.descricao}</p>
          <div>
            <h6 className="fs-4 fw-semibold"><FormattedMessage id="money">R$</FormattedMessage> {produto.preco}</h6>
          </div>
          <div className="d-flex flex-row align-items-center gap-3">
            <div className="d-flex flex-row align-items-center ">
              <button
                className="bg-light px-4 text-dark fs-3"style={{height:"3rem", marginTop:"0.5rem"}} 
                onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="py-2 px-3 rounded">{amount}</span>
              <button
                className="bg-light px-4 text-dark fs-3" style={{height:"3rem", marginTop:"0.5rem"}}
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <FaShoppingCart size={35} style={{ marginLeft: '10px', color: 'black' }} />
          </div>
        </div>
      ) : (
        <p>Carregando produto...</p>
      )}
    </div>
  );
};

export default ProductPage;

