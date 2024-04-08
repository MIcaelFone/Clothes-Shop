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
                                        <h3>Atendimento ao cliente</h3>
                                        <p>clotheshop@gmail.com</p>
                                    </div>
                            </div>
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
                                    <h3>Ajuda e suporte</h3>
                                    <ul class="list-unstyled">
                                        <li>Pagamento</li>
                                        <li>Garantia, trocas e devoluções</li>
                                        <li>Como comprar seu clothes shop</li>
                                    </ul>
                                </div>
                            </div>
    
                            <div class="footer-bottom">
                                <p class="text-xs-center col-md-4 col-sm-4 d-flex align-items-center">
                                    ©2024 Todos os direitos reservados CLOTHES SHOP
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
