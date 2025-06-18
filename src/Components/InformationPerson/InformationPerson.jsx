import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InformationPerson = () => {
  return (
    <div className="container">
      <div className="mb-4">
        <h6 className="fw-bold"
        style={{color: '#ED4D2B',}}
        >Step 01</h6>
        <h2 className="fw-bold">Shipping</h2>
      </div>

      <form>
        <div className="row g-3 col-lg-8">
          <div className="col-md-6">
            <label className="form-label">First Name*</label>
            <input type="text" className="form-control" placeholder='First name' />
          </div>

          <div className="col-md-6">
            <label className="form-label">Last Name*</label>
            <input type="text" className="form-control" placeholder='Last name' />
          </div>

          <div className="col-12">
            <label className="form-label">Destination Region *</label>
            <select className="form-select">
              <option>United States (USD$)</option>
              <option>Egypt (EGP)</option>
              <option>Saudi Arabia (SAR)</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Address *</label>
            <input
              type="text"
              className="form-control"
              placeholder='enter your Address'
            />
            <small className="text-primary d-block mt-1" style={{ cursor: 'pointer' }}>
              Add another line
            </small>
          </div>

          <div className="col-md-6">
            <label className="form-label">City*</label>
            <input type="text" className="form-control" placeholder='القاهرة / تجمع الخامس' />
          </div>

          <div className="col-md-6">
            <label className="form-label">Select State*</label>
            <select className="form-select">
              <option>Select State</option>
              <option>Sohag</option>
              <option>Qena</option>
              <option>Cairo</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Postal or zip code (option)</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone *</label>
            <input type="text" className="form-control" placeholder='01xxxxxxxxx'/>
          </div>

          <div className="col-12 d-flex justify-content-between">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="billingAddress" defaultChecked />
              <label className="form-check-label" htmlFor="billingAddress">
                Use as billing address
              </label>
            </div>

            <button className='btn btn-dark px-5'>Next</button>
          </div>
        </div>
      </form>

      
    </div>
  );
};

export default InformationPerson;
