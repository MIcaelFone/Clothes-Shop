import styled from "styled-components";
import React, { useEffect, useState } from "react";
import '../styles/Header.component.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";
import { FormattedMessage } from "react-intl";
const Header = () => {
    const [nome, setNome] = useState("");
    const auth = () => {
        var token = localStorage.getItem("token");
        if(token === null) return false;
        if(token !== null) return true;
    };
    const logout = () => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            localStorage.removeItem('token');
            toast.success(<FormattedMessage id="session_ended"/>);
            window.location.href = "/Login";
        }
    };
    const header_autenticado = [
        {
            path: '/Perfil',
            name: <FormattedMessage id="profile"></FormattedMessage>
        },
        {
            onClick:logout,
            name: "Logout"
        }
    ]
   
    const Header_naoautenticado = [
        {
            path: '/Cadastro',
            name: <FormattedMessage id="signup"></FormattedMessage>
        }         
    ]
    useEffect(() => {
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const decodedToken = jwtDecode(token);
                const { nome } = decodedToken;
                const nome_inicial=nome.split(" ")[0]
                console.log(nome_inicial);
                setNome(nome_inicial);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);
   
    return (
      <Navbar expand="lg" className="">
          <Container fluid>
              <Navbar.Brand href="/home" style={{color: 'black'}}>Clothes Shop</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Form className="d-flex" style={{marginLeft:'22rem'}}>
                      <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="outline-success"><FormattedMessage id="search_placeholder"/></Button>
                  </Form>
                  
                    {auth() ? (
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginLeft:'30rem', color: 'white' }} navbarScroll > 
                              <NavDropdown title={<><FormattedMessage id="greeting_user" /> {nome}</>} id="basic-nav-dropdown" className="Entrar">
                                    {header_autenticado.map((item, index) => (
                                        <NavDropdown.Item key={index} href={item.path} onClick={item.onClick}>
                                            {item.name}
                                        </NavDropdown.Item>
                                    ))}
                            </NavDropdown>
                            </Nav>
                        ) : <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginLeft:'30rem', color: 'black' }} navbarScroll > 
                            {Header_naoautenticado.map((item) => {
                                return (
                                    <NavDropdown.Item key={item.path} href={item.path}>{item.name}</NavDropdown.Item>
                                );
                            })}
                       
                    </Nav>
                    }
                    <FaShoppingCart size={26} style={{ marginLeft: '10px', marginTop:'0.5rem',gap:'4rem', color: 'white' }} />
                </Navbar.Collapse>
          </Container>
      </Navbar>
    );
}

export default Header;

