import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import palavrasingles from "../src/lang/en.json"
import palavrasportugues from "../src/lang/pt.json"
const root = ReactDOM.createRoot(document.getElementById('root'));
var Language
var dicionario_palavras_traduzido
let userLanguage  = navigator.language || 'pt-BR';

if (userLanguage === "pt-BR") {
  Language = "pt-BR";
  dicionario_palavras_traduzido = palavrasportugues;
} else {
  Language = "en-US";
  dicionario_palavras_traduzido = palavrasingles;
}

root.render( 
  <IntlProvider locale={userLanguage} messages={dicionario_palavras_traduzido}>
   <App />
  </IntlProvider>
);

reportWebVitals();
