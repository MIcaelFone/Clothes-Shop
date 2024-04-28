import React from "react"
import styled from 'styled-components'
import '../styles/Footer.component.css'
import { Link } from "react-router-dom";
function Footer(){
    return(
           <FooterContainer className="main-footer">
                <div className="justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
                                    <div>
                                        <h3>Atendimento ao cliente</h3>
                                        <p>clotheshop@gmail.com</p>
                                    </div>
                            </div>
                            <div className="col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
                                <div>
                                    <h4>Informações da Empresa</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <p>Clothes Shop: moda online fácil e elegante. Encontre seu estilo em um clique.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                             
                            <div className="col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h3>Ajuda e suporte</h3>
                                    <ul className="list-unstyled">
                                        <li><Link to="/info_pagamento">Pagamento</Link></li>
                                        <li><Link to="/prazos_envios">Prazo e envios</Link></li>
                                        <li><Link to="/como_comprar">Como comprar seu clothes shop </Link></li>
                                    </ul>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </FooterContainer>
    )
}

export default Footer

const FooterContainer  = styled.footer`
    .footer-middle{
        background: rgb(248 249 250) ;
        padding-top: 1rem;
        color: black;
    }

    .footer-bottom{
        padding-top: 1.5rem;
        margin-left: 5.5rem;
       
    }

    .Links{
        color: #fff;
        transition: transform .2s;
    }

    .Links:hover{
        color: tomato !important;
        transform: scale(1.2);
    }
`;
