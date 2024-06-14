import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/telapagamento.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

function FormExample() {
  // Estados relacionados ao formulário
  const [validated, setValidated] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pais, setPais] = useState("");
  const [cep, setCep] = useState("");
  const [userid, setUserId] = useState("");
  const [idcartao,setIdcartao]=useState(null);
  // Estados e funções de validação para cada campo
  const [erroCidade, setErroCidade] = useState("");
  const [erroEstado, setErroEstado] = useState("");
  const [erroEndereco, setErroEndereco] = useState("");
  const [erroPais, setErroPais] = useState("");
  const [erroCep, setErroCep] = useState("");
  const [isvalidoCidade, setIsvalidCidade] = useState(false);
  const [isvalidoEstado, setisvalidEstado] = useState(false);
  const [isvalidoEndereco, setisvalidEndereco] = useState(false);
  const [isvalidoPais, setisvalidPais] = useState(false);
  const [isvalidoCEP, setisvalidCep] = useState(false);

  // Estados relacionados aos cartões
  const [cartao, setCartao] = useState([]);
  const [selectedCartao, setSelectedCartao] = useState(null);

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    enviaCompra();
  };

  // Redirecionar para a página de cadastro de cartão
  const cadastrarcartao = () => {
    window.location.href = "/cadastrocartao";
  };

  // Obter o ID do usuário do token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const { idusuario } = decodedToken;
        setUserId(idusuario);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  // Funções de validação genéricas
  const isValidTexto = (texto, setErro) => {
    const pattern = /^[A-Za-z\s]+$/;
    if (texto !== "" && !pattern.test(texto)) {
      setErro("Este campo deve conter apenas letras.");
      return false;
    }
    if (texto === "") {
      setErro("Este campo não pode ficar vazio.");
      return false;
    }
    setErro("");
    return true;
  };

  const isValidEnderenco = (texto, setErro) => {
    const pattern = /^[A-Za-z0-9\s.,]+$/;
    if (texto !== "" && !pattern.test(texto)) {
      setErro("Este campo deve conter apenas letras e números.");
      return false;
    }
    if (texto === "") {
      setErro("Este campo não pode ficar vazio.");
      return false;
    }
    setErro("");
    setisvalidEndereco(true);
    return true;
  };

  const isValidCep = (cep, setErro) => {
    const patternCep = /^\d{5}-?\d{3}$/;
    if (cep === "") {
      setErro("CEP não pode ficar vazio.");
      return false;
    }
    if (!patternCep.test(cep)) {
      setErro("Formato de CEP inválido.");
      return false;
    }
    setErro("");
    setisvalidCep(true);
    return true;
  };

  const cadastrarpedido = async () => {
    try {
      const response = await axios.post("http://localhost:8080/pedido/cadastrarpedido", {
        enderenco: endereco,
        idusuario: userid,
        cidade: cidade,
        CEP: cep,
        estado: estado,
        pais: pais,
        idcartao: idcartao,
        valortotal: total
      });
      if (response.status === 200) {
        const maxIdCompra = response.data.data;
        const adicionarItens = produtos.map((produto) => 
          axios.post("http://localhost:8080/pedido/adicionaritem", { idcompra: maxIdCompra, idproduto: produto.idproduto,quantidade:produto.quantity })
        );
        const resultados = await Promise.all(adicionarItens);
        const todosSucesso = resultados.every(result => result.status === 201);
        if (todosSucesso) {
          toast.success("Pedido cadastrado com sucesso.");
          localStorage.removeItem("cartItems");
          localStorage.removeItem("total");
          setTimeout(() => {window.location.href = "/home";}, 3500);
        }
      }
    }
       catch (error) {
        toast.error("Deu erro");
      }
  };
  const enviaCompra = () => {
    if (selectedCartao || cartao.length === 0) {
      const isvalido = isvalidoCEP && isvalidoCidade && isvalidoEstado && isvalidoEndereco && isvalidoPais;
      console.log(isvalido)
      if (isvalido===true) {
           cadastrarpedido()
         
      } else {
        toast.error("Por favor, preencha todos os campos corretamente.");
      }
    } else {
      toast.error("Por favor, selecione um cartão cadastrado ou cadastre um novo cartão.");
    }
  };

  // Obter os cartões do usuário
  const obtendocartao = async () => {
    try {
      const response = await axios.post("http://localhost:8080/cartao/buscarcartao", { idusuario: userid });
      if (response.status === 200) {
        const responseData = response.data.data; // Certifique-se de que é um array
        setCartao(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userid) {
      obtendocartao();
    }
  }, [userid]);

  // Handlers de mudança para os campos do formulário
  const handleCidadeChange = (event) => {
    const value = event.target.value;
    setCidade(value);
    if (isValidTexto(value, setErroCidade)) {
      setIsvalidCidade(true);
    }
  };

  const handleEstadoChange = (event) => {
    const value = event.target.value;
    setEstado(value);
    if (isValidTexto(value, setErroEstado)) {
      setisvalidEstado(true);
    }
  };

  const handleEnderecoChange = (event) => {
    const value = event.target.value;
    setEndereco(value);
    isValidEnderenco(value, setErroEndereco);
  };

  const handlePaisChange = (event) => {
    const value = event.target.value;
    setPais(value);
    if (isValidTexto(value, setErroPais)) {
      setisvalidPais(true);
    }
  };

  const handleCepChange = (event) => {
    const value = event.target.value;
    setCep(value);
    isValidCep(value, setErroCep);
  };

  // Efeitos para carregar produtos e total
  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) {
      setProdutos(JSON.parse(items));
  
    }
  }, []);

  useEffect(() => {
    const valorTotal = localStorage.getItem("total");
    if (valorTotal) {
      setTotal(valorTotal);
    }
  }, []);

  return (
    <div className="checkout-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="checkout-mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={handleEnderecoChange}
              required
              isInvalid={!!erroEndereco}
              className="checkout-form-control"
            />
            <Form.Control.Feedback type="invalid">{erroEndereco}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>País</Form.Label>
            <Form.Control
              type="text"
              placeholder="País"
              value={pais}
              onChange={handlePaisChange}
              required
              isInvalid={!!erroPais}
              className="checkout-form-control"
            />
            <Form.Control.Feedback type="invalid">{erroPais}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={handleCepChange}
              required
              isInvalid={!!erroCep}
              className="checkout-form-control"
            />
            <Form.Control.Feedback type="invalid">{erroCep}</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="checkout-mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cidade"
              value={cidade}
              onChange={handleCidadeChange}
              required
              isInvalid={!!erroCidade}
              className="checkout-form-control"
            />
            <Form.Control.Feedback type="invalid">{erroCidade}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              placeholder="Estado"
              value={estado}
              onChange={handleEstadoChange}
              required
              isInvalid={!!erroEstado}
              className="checkout-form-control"
            />
            <Form.Control.Feedback type="invalid">{erroEstado}</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="button" onClick={enviaCompra} className="checkout-button">Finalizar compra</Button>
      </Form>

      <div className="checkout-total-price">Total: R$ {total}</div>
      <br></br>
      <center><h1>Cartão</h1></center>
      {cartao.length > 0 ? (
        cartao.map((cart, index) => (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Body>
              <Form.Check
                type="radio"
                onChange={() => {
                  setSelectedCartao(cart.idcartao);
                  setIdcartao(cart.idcartao);
                }}
                aria-label={`radio ${index + 1}`}
                name="cartao"
                key={cart.idcartao}
              />
              
              <Card.Text> Número cartão: {cart.numerocartao}</Card.Text>
              <Card.Text> Expiry data: {cart.expiry}</Card.Text>
              <Card.Text> CVC: {cart.cvc}</Card.Text>
            </Card.Body>
          </Card>
        ))
        ) : (
          <div className="checkout-form-container">
            <Button type="button" onClick={cadastrarcartao} className="checkout-button">Cadastrar cartão</Button>
          </div>
        )}
       {}
      <center><h2>Produtos selecionado</h2></center>
      <div className="checkout-product-list">
        {produtos.map((item) => (
          <Card key={item.idproduto} className="checkout-card">
            <Card.Body className="checkout-card-body">
              <Card.Title className="checkout-card-title">{item.nome}</Card.Title>
              <Card.Text className="checkout-card-text">Quantidade:{item.quantity}</Card.Text>
              <Card.Text className="checkout-card-text">
                Preço: R$ {item.preco}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FormExample;
