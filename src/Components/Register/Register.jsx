import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RegisterThunk } from "../../Redux/Slice/Register/Register";
import toast from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.register.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
       await dispatch(RegisterThunk({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        addresses: data.address
      })).unwrap();
      toast.success('Email is created success');
      setTimeout(() => {
        navigate('/Login')
      }, 2000);

    } catch (err) {
      console.error('error:', err);
      toast.error(err.message || 'opp,s error the server Place try again');
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدة الأنيميشن بـ milliseconds
  }, []);
  return (
    <>
      <div className='container' data-aos="slide-right">
        <div className='row'>

          <div className='col-12 d-flex col-md-12 w-75 m-auto mt-3 bg-white border-0 rounded-4 shadow'>

            <div className='col-lg-7 col-sm-12 col-md-12'>
              <div className='mt-3' >
                <div className='m-auto d-flex flex-column align-items-center justify-content-center'>
                  <h2>Sign In</h2>
                  <div className='row'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="form-floating m-1">
                        <input
                          type="text"
                          {...register('name', { required: 'Name is Required' })}
                          className="form-control m-1"
                          id="floatingFirst Name"
                          placeholder="First Name"
                        />
                        <label htmlFor="floatingFirst Name">Full Name</label>
                        {errors.name && <p className="m-1" style={{ color: 'red' }}>{errors.name.message}</p>}
                      </div>

                      <div className="form-floating m-1">
                        <input
                          type="email"
                          {...register('email', { required: 'Email is Required' })}
                          className="form-control m-1"
                          id="floatingEmail"
                          placeholder="Email"
                        />
                        <label htmlFor="floatingEmail">Email</label>
                        {errors.email && <p className="m-1" style={{ color: 'red' }}>{errors.email.message}</p>}
                      </div>

                      <div className="form-floating m-1">
                        <input
                          type="password"
                          {...register('password', {
                            required: 'Place Enter The Password', minLength: {
                              value: 6,
                              message: 'Password must be at least 6 characters'
                            }
                          })}
                          className="form-control m-1"
                          id="floatingPassword2"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword2">Password</label>
                        {errors.password && <p className="m-1" style={{ color: 'red' }}>{errors.password.message}</p>}
                      </div>

                      <div className="d-flex">
                        <div className="form-floating m-1">
                          <input
                            type="text"
                            {...register('phone', {
                              required: 'Phone is Required',
                              pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: 'most be phone number in 10 to 15 number',
                              },
                            })}
                            className="form-control m-1"
                            id="floatingPhone"
                            placeholder="Phone"
                          />
                          <label htmlFor="floatingPhone">Phone</label>
                        {errors.phone && <p className="m-1" style={{ color: 'red' }}>{errors.phone.message}</p>}
                        </div>
                        <div className="form-floating m-1">
                          <input
                            type="text"
                            className="form-control m-1"
                            id="floatingAddress"
                            placeholder="Address"
                            {...register('address')}
                          />
                          <label htmlFor="floatingAddress">Address</label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-dark w-100 mb-1 mt-3 d-flex justify-content-center align-items-center"
                        style={{ height: "45px" }} 
                      >
                        {isLoading ? (
                          <PropagateLoader color="#fff" size={10} />
                        ) : (
                          "Register"
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