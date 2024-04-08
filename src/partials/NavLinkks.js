import Nav from 'react-bootstrap/Nav';

function NavLink() {

    const Header_Info = [
           {
            path: '/home',
            name: "Home"
            },
            {
                path: '/Moda_Masculina',
                name: "Moda Masculina"
            },
            {
                path: '/Moda_Feminina',
                name: "Moda Feminina"
            },
        
    ]
    return(
        <Nav variant="tabs" defaultActiveKey="/home" style={{backgroundColor:'rgb(248 249 250)'}}>
           {Header_Info.map((item) => {
            return (
            <Nav.Item>
              <Nav.Link style={{color:'black'}}  eventKey="link-1" href={item.path}>{item.name}</Nav.Link>
            </Nav.Item>
           );
          })}
         
        </Nav>
   );
}
export default NavLink;