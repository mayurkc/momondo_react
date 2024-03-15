import React from 'react'
import { Col, Row } from 'react-bootstrap';
import funmenu from "../../../Json_Api/Destination.json";
import './Destination.css';


function Destination() {
    const Box=({data})=>{
        return(

        <Col xs={12} md={3} className=' border border-white bg-white hw pt-2 ' >

            <img src={data.path} alt="" width={200} height={150} className='text-center'/>
            <p className='text-dark fw-bold' style={{fontSize:"12px"}}>{data.title}</p> 
            <p className='text-dark ' style={{fontSize:"13px"}}>{data.description}</p> 

        </Col>
        )}



  return (<>
  

    <div style={{backgroundColor:'#281a3e'}} >
    <h2 className='text-center text-white pt-2'>POPULAR DESTINATION</h2>

       <Row className='row1'>
      {
        
        funmenu.map((item, index)=>
        {
            return <Box data={item} key={index}/>

        })
      }
     
      </Row>

    </div>        

    
    </>
  )
}

export default Destination;