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
import { useIntl, FormattedMessage } from "react-intl";


const Header = () => {
    const [idusuario, setID] = useState("");
    const [nome, setNome] = useState("");
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const { cartItems } = useContext(CartContext);
    const intl = useIntl();

    const toggle = () => {
        setShowModal(!showModal);
    };

    const auth = () => {
        var token = localStorage.getItem("token");
        return token !== null;
    };

    const logout = () => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            localStorage.removeItem('token');
            toast.success("Sessão encerrada");
            window.location.href = "/Login";
        }
    };

    const headerAutenticado = [
        {
            path: '/Perfil',
            name: intl.formatMessage({ id: "header.profile", defaultMessage: "Profile" })
        },
        {
            path: '/cadastrocartao',
            name: intl.formatMessage({ id: "header.addCard", defaultMessage: "Add Card" })
        },
        {
            path: '/minhascompras',
            name: "Minhas compras"
        },
        {
            onClick: logout,
            name: intl.formatMessage({ id: "header.logout", defaultMessage: "Logout" })
        }
    ];

    const headerNaoAutenticado = [
        {
            path: '/Cadastro',
            name: intl.formatMessage({ id: "header.register", defaultMessage: "Register" })
        }
    ];

    useEffect(() => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const decodedToken = jwtDecode(token);
                setID(decodedToken.idusuario);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        const buscarUsuario = async () => {
            try {
                const response = await axios.post("http://localhost:8080/usuario/buscandousuario", { idusuario });
                if (response.status === 200) {
                    const nome = response.data.data[0].nome;
                    const firstName = nome.split(" ")[0];
                    setNome(firstName);
                    localStorage.setItem('nome', nome);
                }
            } catch (error) {
                console.error(error);
            }
        }
        if (idusuario) buscarUsuario();
    }, [idusuario]);

    return (
        <>
            <Navbar expand="lg" className="navbar navigation">
                <Container fluid>
                    <Navbar.Brand href="/home" className="Brand">Clothes Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex mx-auto search-form Searchbar">
                            <Form.Control
                                type="search"
                                placeholder={intl.formatMessage({ id: "header.searchPlaceholder", defaultMessage: "Search" })}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">
                                <FormattedMessage id="header.searchButton" defaultMessage="Search" />
                            </Button>
                        </Form>

                        {auth() ? (
                            <Nav className="nav-menu ms-auto" style={{ marginRight: "2.5rem" }}>
                                <NavDropdown title={`${intl.formatMessage({ id: "header.greeting", defaultMessage: "Hello" })} ${nome}`} id="basic-nav-dropdown" className="list_item">
                                    {headerAutenticado.map((item, index) => (
                                        <NavDropdown.Item key={index} href={item.path} onClick={item.onClick}>
                                            {item.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>
                        ) : (
                            <Nav className="nav-menu ms-auto">
                                <NavDropdown title={intl.formatMessage({ id: "header.login", defaultMessage: "Login" })} id="basic-nav-dropdown" className="list_item" style={{ marginRight: "2.5rem" }}>
                                    {headerNaoAutenticado.map((item, index) => (
                                        <NavDropdown.Item key={index} href={item.path}>
                                            {item.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>
                        )}
                        <FaShoppingCart
                            size={26}
                            className="icon list_item"
                            style={{ cursor: "pointer" }}
                            onClick={toggle}
                        >
                            Cart ({cartItems.length})
                        </FaShoppingCart>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={`overlay-modal ${showModal ? 'show' : ''}`} onClick={toggle}></div>
            <div id="cart-modal" className={`cart-modal ${showModal ? 'show' : ''}`}>
                <Cart showModal={showModal} toggle={toggle} />
            </div>
        </>
    );
};

export default Header;