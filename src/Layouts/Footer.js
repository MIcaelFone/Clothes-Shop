import React from "react";
import styled from 'styled-components'
import './Footer.module.css'

function Footer(){
    return(
        <>
           <FooterContainer className="main-footer">
                <div class="footer-middle row justify-content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h4>Informações da Empresa</h4>
                                    <ul class="list-unstyled">
                                        <li>
                                            <p>Clothes Shop: moda online fácil e elegante. Encontre seu estilo em um clique.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h4>Onde nos encontrar</h4>
                                    <ul class="list-unstyled">
                                        <li>
                                            <p className="Links"><a href="https://www.instagram.com">Instagram</a></p>
                                        </li>
                                        <li>
                                            <p className="Links"><a href="https://pt-br.facebook.com/login/device-based/regular/login/">Facebook</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <h4>Ajuda e suporte</h4>
                                    <ul class="list-unstyled">
                                        <li>Politica de Frete</li>
                                        <li>Devolução</li>
                                        <li>Contate-nos</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-bottom">
                                <p class="text-xs-center col-md-4 col-sm-4 d-flex align-items-center">
                                    ©2021-2024 Todos os direitos reservados CLOTHES
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        </>
    )
}

export default Footer

const FooterContainer  = styled.footer`
    .footer-middle{
        background: var(--mainDark);
        padding-top: 3rem;
        color: #fff
    }

    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
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
