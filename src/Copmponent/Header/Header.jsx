import React from 'react';
import {  Container, Nav, Navbar, } from 'react-bootstrap';
import nav_menu from "../../Json_Api/nav_menu_api.json";
import {Link} from 'react-router-dom';
import './Header.css';
import logo1 from '../../Images/Logo.png'
import logo2 from '../../Images/united-states-flag-icon.svg'

function Header() {

    
    function Navmenu({data}) {

        if(data.islogo)
        {
          return (
            <Link to={data.logo} className="position-absolute end-0 us-logo text-white" >
              <img src={logo2} width="25px"  className='logo' height="25px"/>  English
             </Link>
          )
        }
        else{
          return (
          <Link to={data.Link} className={data.isButton ?
            " text-warning position-absolute login end-0 ": 
            "nav-link  text-white"}>{data.label}</Link>
          )
        }
        
        
    }
    
    return (
        <>

<Navbar className='bg-blue navb' >
        <Container>
          <Navbar.Brand href="/">
          <img src= {logo1} classname="" width="100px" height="40px" />
        </Navbar.Brand>
          <Nav className="me-auto ">

          {
                nav_menu.map((item, ind) => {
                    {
                    return<Navmenu data={item} key={ind}/> ;
                    }
                }
                )
            }
           
          </Nav>
        </Container>
      </Navbar>
           
        </>
    )
}

export default Header;