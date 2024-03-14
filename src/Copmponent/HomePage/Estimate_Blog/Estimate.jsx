import React from 'react'
import './Estimate.css';
import { Button, Form, } from 'react-bootstrap';
import im from '../../../Images/col.png';


function Estimate() {
  return (
    <>
     <section className="sect">
       <h1 className='text-white  ms-5 pt-5'>GET A QUICK ESTIMATE</h1>
       <h4 className='text-white ms-5'>GET A PROFESSIONAL TRIP</h4>

        <Form className='pb-5 '>
          <div className='d-xl-flex form-estimate'>
        <label for="select" className='d-none'>Select Passenger</label>
            <select id="disabledSelect" className=" ms-2 mt-2  input">
            <option selected>Select Passenger</option>
            <option value='1pass'>1 Passenger</option>
            <option value='2pass'>2 Passenger</option>
            </select>

            <Form.Group className=" ms-3 mt-2 input">
            <Form.Label className='d-none'>Trav Start Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Start Date" />
            </Form.Group>

            <Form.Group className=" ms-3 mt-2 me-3 input">
            <Form.Label className='d-none'>Origin city</Form.Label>
            <Form.Control type="text" placeholder="Enter Origin City" />
            </Form.Group>

            <label for="select" className='d-none'>Number of People</label>
            <select id="disabledSelect" className=" ms-2 mt-2  input">
            <option selected>Number of People</option>
            <option value='1pass'>1 Passenger</option>
            <option value='2pass'>2 Passenger</option>
            <option value='3pass'>3 Passenger</option>
            </select>
            
            <Button type="button" className=' ms-4 '>Calculate  Now</Button>
            <img src={im} alt=""  className='cls' height={200} width={150} />
            </div>
        </Form>
        <div>
          
        </div>
    </section>
    </>
 )
}

export default Estimate;