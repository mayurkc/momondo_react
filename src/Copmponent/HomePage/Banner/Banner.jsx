import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import './Banner.css';

function Banner() {
  return (
    <>
        <section className="banner" height={500}>
       <h1 className='text-dark .col-md-fs-1'>"The Best Place To find  The cheapest airfare</h1>
       <h2 className='text-dark .col-md-fs-1'>-every  single time</h2 >
        <Form action="" className='form' >
            <Button type="button" className='mt-1 ms-4 btn bg-danger shadow border-0'><i className="fa fa-plane me-2"></i>
                Flight</Button>
            <Button type="button" className='me-1 btn bg-transparent shadow border-0'><i className="fa fa-hotel me-2"></i>
                Hotels</Button>
            <Button type="button" className='btn bg-transparent shadow border-0'><i className="fa fa-car me-2"></i>
                Cars</Button>
        <div className=' d-xl-flex ms-3 position-relative mb-1 inp-div'>
            <Form.Group className=" ms-1 mt-2 me-3 input">
            <Form.Label className='d-none'>Origin city</Form.Label>
            <Form.Control type="text" placeholder="Enter Origin City" />
            </Form.Group>
            <i className="fa fa-arrow-right icon ms-2 text-white"></i>
            {/* <i className="fa fa-arrow-left  mt-4 text-white"></i> */}

            <Form.Group className=" ms-2 mt-2 input text-white">
            <Form.Label className='d-none'>Destination City</Form.Label>
            <Form.Control type="text" placeholder="Enter Destination City"/>
            </Form.Group>

            <Form.Group className=" ms-2 mt-2 input">
            <Form.Label className='d-none'>Trav Start Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Start Date" />
            </Form.Group>

            <Form.Group className=" ms-2 mt-2 input">
            <Form.Label className='d-none'>Trav End Date</Form.Label>
            <Form.Control type="date" placeholder="Enter End Date" />
            </Form.Group>

            <label for="select" className='d-none form-control'>Select Passenger</label>
            <select id="disabledSelect" className=" ms-2 mt-2 md-input">
            <option selected>Select Passenger</option>
            <option value='1pass'>1 Passenger</option>
            <option value='2pass'>2 Passenger</option>
            

             </select>
            <Button type="button" className=' ms-4 border-0 bg-danger search '>
                Search</Button>
            </div>

                
         
            <div className='d-xl-flex ms-3  trip-detail'>
            <i className="fa fa-suitcase ms-1 mt-2 text-white ">   Trip type :</i>
            {/* <p className="ms-1 mt-2 text-white"> Trip Type</p> */}
            <label className="d-none">Select</label>
                <select as="select" className="ms-2 me-1 mt-1 select text-white border-0 bg-transparent outline-none">
                    <option selected>Return Trip</option>
                    <option value='1pass'>Return Trip</option>
                    <option value='2pass'>Return Trip</option>
                      <option value='3pass'>Option 3</option>
                 </select>

                 <i className="fa fa-suitcase ms-1 mt-2 text-white "> Ticket  class:</i>
            {/* <p className="ms-1 mt-2 text-white"> Trip Type</p> */}
            <label className="d-none">Select</label>
                <select as="select" className="ms-1 mt-1  me-1 select text-white border-0 bg-transparent outline-none">
                    <option selected>Economy</option>
                    <option value='1pass' >Buisiness class</option>
                    <option value='2pass'>Option 3</option>
                 </select>

          <label className='ms-1 mt-1 me-2 text-white bg-transparent '>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  className='ms-1  me-2 text-white bg-transparent ' />

                 Direct Flight Only
          </label>

          <label className='ms-1 mt-1 me-2 text-white bg-transparent '>
          <input type="checkbox" checked={false} className='ms-1  me-2 text-white bg-transparent '  />
                 Include nearby airport
          </label>
            </div>



        </Form>
    </section>
    </>
  )
}

export default Banner;