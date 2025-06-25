import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { LoginThunk } from "../../Redux/Slice/Login/Login";
import { setCredentials } from "../../Redux/Slice/auth";
import { GetWishlistThunk } from "../../Redux/Slice/wishlist/getWishlist";
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.Login.isLoading);
  
  
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(LoginThunk({
        email: data.email,
        password: data.Password
      })).unwrap();
      localStorage.setItem("token", response.token);
      toast.success('Welcome to my website');
      const tkn = dispatch(setCredentials({
        token:response.token,
        user:response.user
      }))
      console.log(tkn);
      setTimeout(() => {
        navigate('/')
      }, 2000);
      dispatch(GetWishlistThunk())

    } catch (err) {
      console.error('error:', err);
      toast.error(err.message || 'opp,s error the server Place try again');
    }
  };


  useEffect(() => {
    AOS.init({ duration: 1000 }); 
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-floating m-1">
                        <input
                          type="text"
                          {...register('email', { required: 'Email is Required' })}
                          className="form-control"
                          id="floatingEmail"
                          placeholder="Email"
                        />
                        <label className="" htmlFor="floatingEmail">Email</label>
                        {errors.email && <p className="m-1" style={{ color: 'red' }}>{errors.email.message}</p>}
                      </div>
                      <div className="form-floating m-1">
                        <input
                          type="text"
                          {...register('Password', { required: 'Password is Required' })}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {errors.Password && <p className="m-1" style={{ color: 'red' }}>{errors.Password.message}</p>}
                      </div>
                      <p>
                        <a href="#" className='text-decoration-none'>Forgot Password?</a>
                      </p>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-dark w-100 mb-1 mt-3 d-flex justify-content-center align-items-center"
                        style={{ height: "45px" }} 
                      >
                        {isLoading ? (
                          <PropagateLoader color="#fff" size={10} />
                        ) : (
                          "Login"
                        )}
                      </button>

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