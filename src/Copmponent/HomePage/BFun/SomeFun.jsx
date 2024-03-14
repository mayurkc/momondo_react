import React from 'react'
import './SomeFun.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import funmenu from "../../../Json_Api/SomeFun.json";


function SomeFun() {


    const Box=({data})=>{
        return(

          <Col className='text-center text-white bg-dark bg-opacity-75  p-1 shadow border-white me-1 my-2 mx-1 colm'xs={6} md={4}>
            <div className="text-white icon-box py-4 px-1">
              <i className={data.Icon} ></i>
            </div>
            <p className='text-white'>{data.Distance_Met}</p>
            <p className='text-white'>{data.Dist_Type}</p>
            </Col>
        )}


  return (
    <>
       <div className="bg-image pt-3">
        <h2 className='text-center text-white'>SOME FUN WE COVERED</h2>
       <Row>
      {
        funmenu.map((item, index)=>
        {
          return <Box data={item} key={index}/>
        })
      }
     
      </Row>
    </div>

    <div className="bg-img pt-3 text-white">
       <div className='para'>
       <h2>SUBSCRIBE FOR OUR NEWS LETTER</h2>
        <p>Join our communityof over 300,000 global readerss who recived emails filled with news</p>
       <p>promotion and othe good stuff from G adventures</p>
       <div className='d-flex'>
       <Form.Group className=" w-75 text-white">
            <Form.Label className='d-none'>Destination City</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Eamil Adress.."/>
        </Form.Group>
        <Button type="button" className='ms-2 bg-white text-dark  '>Search</Button>
       </div>
       </div>
    </div>
    </>
  )
}

export default SomeFun;