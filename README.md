# Clothes-Shop

Este é um projeto de e-commerce de roupas desenvolvido para a disciplina de Experiência Criativa na faculdade. O objetivo é criar uma plataforma online para a venda de roupas, onde os usuários podem se cadastrar, navegar por produtos de diferentes gêneros, adicionar itens ao carrinho e efetuar compras.
## Tecnologias Utilizadas

- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Sequelize (ORM)
- **Banco de Dados:** MySQL
- **Ferramentas de Organização:** Trello
- **Outros:** Nodemon (para desenvolvimento), JWT (autenticação), Boostrap CSS (design), Webpack(empacotamento de pacotes)

## Funcionalidades

1. **Cadastro e Login:** 
   - Usuários podem se registrar e fazer login utilizando autenticação JWT.
   - Validação de credenciais e gerenciamento de sessão.
   - ***TELA LOGIN:***
     ![Tela login](https://github.com/MIcaelFone/Clothes-Shop/assets/104805213/0d48133c-e50a-4ff6-a9c5-33a9688b568e)
   - ***TELA CADASTRO:***   
     ![Tela de cadastro](https://github.com/MIcaelFone/Clothes-Shop/assets/104805213/55a7e224-e026-4066-9949-20f2215bcbef)
2. **Landing page:**
   - Exibição de categorias de roupas (por gênero).
   - Exibição de marcas disponíveis.
    - ***TELA HOME:***   
   ![Tela Home](https://github.com/MIcaelFone/Clothes-Shop/assets/104805213/a341627b-bb55-4efb-a888-99c09ef21314)
3. **Carrinho de Compras:**
   - Adicionar produtos ao carrinho.
   - Aumentar ou diminuir a quantidade de itens no carrinho.
   - Finalizar compras ou esvaziar o carrinho.
   - ***TELA CARRINHO COMPRAS***
   ![Carrinho de compras](https://github.com/MIcaelFone/Clothes-Shop/assets/104805213/5a4fd6e9-b053-47fe-aea0-2c4ae5c9a938)
4. **Cadastrar Cartão:**
   - Possibilidade de adicionar informações de cartão de crédito.
   - - ***TELA PARA ADICIONAR CARTÃO***
   ![image](https://github.com/MIcaelFone/Clothes-Shop/assets/104805213/bf5bab69-7737-4e7b-9ad4-d338cbdbfa5b)
5. **Tela de Produtos:**
   - Detalhamento de produtos com opção para adicionar ao carrinho.
 ![Página de produtos](https://github.com/MIcaelFone/Clothes-Shop/assets/104805213/a6200765-7c60-4235-a5f1-2ddcd8157a4d)
6. **Gerenciamento:(Fase melhorias)**
   - Design responsivo para diferentes tamanhos de tela, utilizando Bootstrap.

## Pré-requisitos

- **Node.js**
- **MySQL**
  
## Estrutura do projeto
```bash
Clothes-Shop/
├──frontend/
│   ├── build/                    # Diretório gerado automaticamente após o build para produção.
│   ├── node_modules/             # Diretório com os pacotes e dependências instaladas via npm.  
│   ├── public/                   # Arquivos estáticos e públicos acessíveis diretamente pelo navegador.
│   ├── index.html                # Ponto de entrada do app React, onde o código JS é injetado.   
│   ├── src/                      # Código-fonte principal do projeto React.
│   ├── assets/                   # Arquivos de mídia, como imagens, ícones, fontes, etc. 
│   ├── lang/                     # Arquivos de tradução,serve para criar a internacionalização.
│   ├── Styles/                   # Arquivos de estilização (CSS, SCSS, etc.) do projeto.
│   └── ui/                       # Diretório com os componentes de UI (interface de usuário).
│       └── Components/           # Onde ficam os componentes React reutilizáveis.

├── backend/               # Contém o código do backend
│   ├── database/         # Configurações do banco de dados
│   ├── models/           # Modelos Sequelize
│   ├── routes/           # Rotas da API
│   ├── controllers/      # Lógica de negócios
│   ├── server.js         # Arquivo principal para rodar o servidor
│   └── package.json
│
├── README.md
└── ...
```
## Configuração do Projeto

### Clonando o Repositório

```bash
git clone https://github.com/MIcaelFone/Clothes-Shop.git
```
## Inicializando o projeto

### 1. Inicializando o servidor
```bash
cd backend
cd server
npm install
nodemon start server.js
```
### 2. Inicializando o frontend
```bash
cd frontend/src
npm install
npm start
```
## Aviso sobre o projeto
***Aviso: O projeto ainda está em fase de melhorias e estruturação, o que significa que novas funcionalidades estão sendo adicionadas e a arquitetura do código está sendo aprimorada.***

