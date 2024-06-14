import React, { useContext, useEffect, useState } from "react";
import '../styles/Header.component.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";
import { CartContext } from '../../Components/Carrinhoprodutos/config/Cartprovider'
import Cart  from '../../Components/Carrinhoprodutos/component/Page/Cart'
import axios from "axios";

const Header = () => {
    const [idusuario, setID] = useState("");
    const [nome, setNome] = useState("");
    const navigate = useNavigate();
    const [showModal, setshowModal] = useState(false);
    const { cartItems, addToCart } = useContext(CartContext)
    const toggle = () => {
      setshowModal(!showModal);
    };
    const auth = () => {
        var token = localStorage.getItem("token");
        if(token === null) return false;
        if(token !== null) return true;
    };
    const logout = () => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            localStorage.removeItem('token');
            toast.success("Sessão encerrada");
            window.location.href = "/Login";
        }
    };

    const header_autenticado = [
        {
            path: '/Perfil',
            name: "Perfil"
        },
        {
            path: '/cadastrocartao',
            name: "Adicionar Cartão"
        },
        {
            path: '/minhascompras',
            name: "Minhas compras"
        },
        {
            onClick:logout,
            name: "Logout"
        }
    ]
    const Header_naoautenticado = [
        {
            path: '/Cadastro',
            name: "Cadastro"
        }         
    ]
    
    useEffect(() => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const decodedToken = jwtDecode(token);
                const { idusuario } = decodedToken;
                setID(idusuario);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);
    useEffect(() => {
        const buscandousuario = async()=>{
            try {
                 await axios.post("http://localhost:8080/usuario/buscandousuario",{ idusuario })
                .then((response)=>{
                    if(response.status===200){
                        const nome=response.data.data[0].nome
                        const first_name=nome.split(" ")[0]
                        setNome(first_name)
                        localStorage.setItem('nome', nome);                           
                    }
                })
            } catch (error) {
                console.error(error)
            }
           
        }
        buscandousuario()
       
    }, [idusuario]);
    return (
        <Navbar expand="lg" className="navbar navigation">
            <Container fluid>
                <Navbar.Brand href="/home" className="Brand">Clothes Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex mx-auto search-form Searchbar">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    {auth() ? (
                        <Nav className="nav-menu ms-auto" style={{marginRight:"2.5rem"}}>
                            <NavDropdown title={`Olá ${nome}`} id="basic-nav-dropdown" className="list_item">
                                {header_autenticado.map((item, index) => (
                                    <NavDropdown.Item key={index} href={item.path} onClick={item.onClick}>
                                        {item.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    ) : (
                        <Nav className="nav-menu ms-auto">
                            <NavDropdown title="Entrar" id="basic-nav-dropdown" className="list_item" style={{marginRight:"2.5rem"}}>
                                {Header_naoautenticado.map((item) => (
                                    <NavDropdown.Item key={item.path} href={item.path}>
                                        {item.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    )}
                    {!showModal && <FaShoppingCart
                        size={26}
                        className="icon list_item"
                        style={{ cursor: "pointer" }}
                        onClick={toggle}>Cart ({cartItems.length})</FaShoppingCart>}
                </Navbar.Collapse>
            </Container>
            <div id="cart-modal" className={`cart-modal ${showModal ? 'show' : ''}`}>
                <Cart showModal={showModal} toggle={toggle} />
            </div>
      </Navbar>
    );
}

export default Header;

