import React from 'react'
import './Footer.css';
import footerdata from "../../Json_Api/Footer.json";


import { Col, Container, Row } from 'react-bootstrap';

function Footer() {

  
  
  return (
 <section className='bg-dark p-3  bg-opacity py-5'>
        <Container>
            <Row className='shadow rounded text-white ms-5 '>
                    
                    {
                        footerdata.map((item, index)=>{
                            return<Col md  key ={index} >

                              <h5>{item.title}</h5>

                              <div><p>{item.contries.country1}</p></div>
                              <div><p>{item.contries.country2}</p></div>
                              <div><p>{item.contries.country3}</p></div>
                              <div><p>{item.contries.country4}</p></div>
                              <div><p>{item.contries.country5}</p></div>
                              <div><p>{item.contries.country6}</p></div>

                              </Col>

                            
                        })
                    }


            
            </Row>
        </Container>
        </section>
   
  )
}

export default Footer;

