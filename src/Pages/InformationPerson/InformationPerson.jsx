import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InformationPerson = () => {
  return (
    <div className="container py-5">
      <div className="mb-4">
        <h6 className="text-primary fw-bold">Step 01</h6>
        <h2 className="fw-bold">Shipping</h2>
      </div>

      <form>
        <div className="row g-3 col-lg-8">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" defaultValue="John" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" defaultValue="Terner" />
          </div>

          <div className="col-12">
            <label className="form-label">Destination Region</label>
            <select className="form-select">
              <option>United States (USD$)</option>
              <option>Egypt (EGP)</option>
              <option>Saudi Arabia (SAR)</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              defaultValue="380–394 11th Ave, New York, NY 10001"
            />
            <small className="text-primary d-block mt-1" style={{ cursor: 'pointer' }}>
              Add another line
            </small>
          </div>

          <div className="col-md-6">
            <label className="form-label">City</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Select State</label>
            <select className="form-select">
              <option>Select State</option>
              <option>New York</option>
              <option>California</option>
              <option>Texas</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Postal or zip code</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="billingAddress" defaultChecked />
              <label className="form-check-label" htmlFor="billingAddress">
                Use as billing address
              </label>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-5">
        <h6 className="text-muted">Step 02</h6>
        <h5 className="text-muted">Payment</h5>
        <h6 className="text-muted mt-3">Step 03</h6>
        <h5 className="text-muted">Review</h5>
      </div>
    </div>
  );
};

export default InformationPerson;
