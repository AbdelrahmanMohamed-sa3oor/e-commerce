import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Register = () => {
 useEffect(() => {
  AOS.init({ duration: 1000 }); // مدة الأنيميشن بـ milliseconds
}, []);
  return (
    <>
      <div className='container ' data-aos="slide-right">
        <div className='row'>

          <div className='col-12 d-flex col-md-12 w-75 m-auto mt-3 bg-white border-0 rounded-4 shadow'>

            <div className='col-lg-7 col-sm-12 col-md-12'>
              <div className='mt-3' >
                <div className='m-auto d-flex flex-column align-items-center justify-content-center'>
                  <h2>Sign In</h2>
                  <div className='w-75'>
                    <form>
                      <div className="d-flex">
                        <div className="form-floating m-1">
                          <input
                            type="text"
                            className="form-control m-1"
                            id="floatingFirst Name"
                            placeholder="First Name"
                          />
                          <label htmlFor="floatingFirst Name">First  Name</label>
                        </div>
                        <div className="form-floating m-1">
                          <input
                            type="text"
                            className="form-control m-1"
                            id="floatingLast Name"
                            placeholder="Last Name"
                          />
                          <label htmlFor="floatingLast Name">Last Name</label>
                        </div>
                      </div>
                      <div className="form-floating m-1">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="Email"
                          />
                          <label htmlFor="floatingEmail">Email</label>
                        </div>
                      <div className="d-md-block d-lg-flex">
                        <div className="form-floating m-1">
                          <input
                            type="password"
                            className="form-control m-1"
                            id="floatingPassword2"
                            placeholder="Re Password"
                          />
                          <label htmlFor="floatingPassword2">Password</label>
                        </div>

                        <div className="form-floating m-1">
                          <input
                            type="password"
                            className="form-control m-1"
                            id="floatingPassword"
                            placeholder="Enter your password"
                          />
                          <label htmlFor="floatingPassword">Re Password</label>
                        </div>

                      </div>
                      

                      <button type="submit" className="btn btn-dark w-100 mb-1 mt-3">Login</button>

                      <span className='text-secondary '>
                        your are agreeing to the <a href="#" className='text-decoration-none'>Terms of Services</a> and <a href="#" className='text-decoration-none'>Privacy Policy</a>
                      </span>

                    </form>

                  </div>
                  <div className="d-flex align-items-center justify-content-center  mt-3">
                    <span className='d-flex align-items-center justify-content-center w-100 border rounded-4 p-2 text-secondary me-3'>
                      <FaGoogle size={25} color="red" />
                    </span>

                  </div>
                </div>
                <div className='m-auto d-flex flex-column align-items-center justify-content-center'>
                  <p className='mt-2'>
                    Don't have an account? <Link to={'/login'} className='text-decoration-none'>Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-6 d-none d-lg-block col-md-0 col-lg-5 mt-5'>
              <div className='m-3 d-flex align-items-center justify-content-center'>
                <img className='w-100 border rounded-4' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?semt=ais_hybrid&w=740" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register