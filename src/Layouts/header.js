import React from "react";
import './Header.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { useState } from "react";



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
            path: '/Home',
            name: "Home"
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


    return(
        <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/home"  style={{marginLeft:'-7.5rem'}} className="Brand">Clothes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
                <div className="Searchbar">
                    <label>Pesquisa</label>
                    <input type="text" onChange={e => setQuery(e.target.value)}/>

                    {/* <ul>
                            {filteredItens.map(value => <h1 key={value.name}>{value.name}</h1>)}
                    </ul> */}

                </div>
            </Nav>

            <Nav className="ms-auto">
                {
                    Header_Info.map((item)=>
                        <NavLink to={item.path} key={item.name}>
                            <div className="list_item">
                                {item.name}
                            </div>
                        </NavLink>
                    )   
                }  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header