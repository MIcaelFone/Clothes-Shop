import React from "react";
import './Header.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

    {/* const getFilteredItens = {query, itens} =>
        {
            if(!query){
                return itens;
            }
            return itens.filter(modas => modas.name.includes(query))
        } */
    }

const Header = () => {

    const Header_Info = [
        {
            path: '/Cadastro',
            name: "Cadastrar"
        },

        
        {
            path: '/Perfil',
            name: "Perfil"
        },
        
    ]

    {/* 
       const {modas} = modas;
       const {itens} = itens;

      const filteredItens = getFilteredItens(query, itens)
    */}

    const [query, setQuery] = useState('')

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
              <Navbar.Brand href="/home">Clothes Shop</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
  
                  <Form className="d-flex" style={{marginLeft:'22rem'}}>
                      <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                  </Form>
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px', marginLeft:'30rem' }}
                      navbarScroll
                  >  
                      <NavDropdown title="Entrar" id="basic-nav-dropdown">
                          {Header_Info.map((item) => {
                              return (
                                  <NavDropdown.Item href={item.path}>{item.name}</NavDropdown.Item>
                              );
                          })}
                      </NavDropdown>
                      <FaShoppingCart size={26} style={{ marginLeft: '10px', marginTop:'0.5rem',gap:'4rem' }} />
                      <MdFavorite size={26} style={{ marginLeft: '10px' ,marginTop:'0.5rem',gap:'4rem'}} />
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    );
  }
  
export default Header;
  