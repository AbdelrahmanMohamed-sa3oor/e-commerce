import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدة الأنيميشن بـ milliseconds
  }, []);
  return (
    
    <>
      <div className='container ' data-aos="slide-left">
        <div className='row'>

          <div className='col-12 d-flex col-md-12 w-75 m-auto mt-3 bg-white border-0 rounded-4 shadow'>
            <div className='col-6 d-none d-md-block col-md-6 col-lg-6'>
              <div className='m-3'>
                <img className='w-100 border rounded-4' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?semt=ais_hybrid&w=740" alt="" />

              </div>
            </div>
            <div className='col-lg-6 col-sm-12 col-md-6'>
              <div className='m-3' >
                <div className='m-auto d-flex flex-column align-items-center justify-content-center'>
                  <h2>Login</h2>
                  <div className='w-75 mt-2'>
                    <form>
                      <div className="form-floating m-1">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingFirstName"
                          placeholder="FirstName"
                        />
                        <label className="" htmlFor="floatingFirstName">First Name</label>
                      </div>
                      <div className="form-floating m-1">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingLastName"
                          placeholder="Last Name"
                        />
                        <label htmlFor="floatingLastName">Last Name</label>
                      </div>
                      <p>
                        <a href="#" className='text-decoration-none'>Forgot Password?</a>
                      </p>

                      <button type="submit" className="btn btn-dark w-100 mb-1">Login</button>

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
                    Don't have an account? <Link to={'/register'} className='text-decoration-none'>Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login