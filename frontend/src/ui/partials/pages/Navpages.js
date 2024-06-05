import Nav from 'react-bootstrap/Nav';
import { FormattedMessage } from 'react-intl';
function NavLink() {

    const Header_Info = [
           {
            path: '/Home',
            name: "Home"
            },
            {
                path: '/moda_masculina',
                name: <FormattedMessage id='home_moda_Masculina'></FormattedMessage>
            },
            {
                path: '/moda_feminina',
                name: <FormattedMessage id='home_moda_Feminina'></FormattedMessage>
            }, 
                      
    ]
    return(
        <Nav variant="tabs" defaultActiveKey="/Home" style={{backgroundColor:'rgb(248 249 250)'}}>
           {Header_Info.map((item) => {
            return (
            <Nav.Item>
              <Nav.Link style={{color:'black'}}  eventKey="link-1" key={item.path} href={item.path}>{item.name}</Nav.Link>
            </Nav.Item>
           );
          })}
         
        </Nav>
   );
}
export default NavLink;