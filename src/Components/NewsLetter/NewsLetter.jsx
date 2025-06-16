// Newsletter.jsx
import { useState } from 'react';

const NewSletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
    // هنا ممكن تبعت البيانات لسيرفر أو API
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container-fluid">
      <div className="pb-4">
        <form onSubmit={handleSubmit} className="row">
        <h5 className="mb-3 fw-bold">Subscribe to our Newsletter</h5>
          <div className="col-md-3 col-lg-3">
            <input
              type="email"
              className="form-control mt-2 mt-md-0"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3 col-lg-3">
            <input
              type="text"
              className="form-control mt-2 mt-md-0"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" style={{backgroundColor:'#ED4D2B'}} className="btn text-white w-100 w-md-auto mt-2 mt-md-0">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewSletter;
