import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FormattedMessage } from 'react-intl';

function NavLink() {
  const isAdmin = () => {
    var admin = localStorage.getItem("IsAdmin");
    return admin === "true";
  }

  const Header_Info = [
    {
      path: '/Home',
      name: "Home"
    },
    {
      path: '/moda_masculina',
      name: <FormattedMessage id='home_moda_Masculina' />
    },
    {
      path: '/moda_feminina',
      name: <FormattedMessage id='home_moda_Feminina' />
    },
  ];

  const Header_Info_admin = [
    {
      path: '/gerenciamentoprodutos',
      name: 'Gerenciamento produtos'
    },
    {
      path: '/cadastroproduto',
      name: 'Cadastro produtos'
    },
    {
      path: '/gerenciamentousuarios',
      name: "Gerenciamento de usuarios"
    },
    {
      path: '/produto-chart',
      name: <FormattedMessage id='home_grafico' />
    }
  ];

  const headerItems = isAdmin() ? Header_Info_admin : Header_Info;

  return (
    <Nav variant="tabs" defaultActiveKey="/Home" style={{ backgroundColor: 'rgb(248 249 250)' }}>
      {headerItems.map((item) => {
        return (
          <Nav.Item key={item.path}>
            <Nav.Link style={{ color: 'black' }} eventKey={item.path} href={item.path}>{item.name}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default NavLink;

