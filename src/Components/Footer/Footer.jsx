import NewSletter from "../NewsLetter/NewsLetter";
import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { AiFillTikTok } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Footer = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 }); // مدة الأنيميشن بـ milliseconds
  }, []);
  return (
    <footer className="bg-light text-dark pt-4 mt-4 border-top" data-aos="fade-up">
      <NewSletter/>
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-between">

          {/* Column 1 */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold">INFORMATION</h6>
            <ul className="list-unstyled">
              <li>Stores</li>
              <li>Login</li>
              <li>My Account</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-2 mb-3 ">
            <h6 className="fw-bold">OUR COMPANY</h6>
            <ul className="list-unstyled">
              <li>Prices Drop</li>
              <li>New Products</li>
              <li>Stores</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold">QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li>New Products</li>
              <li>Best Sales</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="fw-bold">POLICIES&INFO</h6>
            <ul className="list-unstyled">
              <li>Delivery</li>
              <li>Terms And Conditions Of Use</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        {/* Social Icons + Payment */}
        <div className="d-flex justify-content-between align-items-center m-2 pt-3 border-top">
          <div className="mb-md-0 ">
            <span className="fw-bold me-2">
            <FaFacebook className="text-primary" size={20}/>
            </span>
            <span className="fw-bold me-2">
            <FiInstagram className="text-dark" size={20}/>
            </span>
            <span className="fw-bold me-2">
            <FcGoogle size={20}/>
            </span>
            <span className="fw-bold me-2">
            <AiFillTikTok className="text-dark" size={20}/>
            </span>
          </div>

          <div className="text-center">
            <img
              src="https://avatars.mds.yandex.net/get-marketpic/3735263/pic443b9881bfb3be90f3e6e4eebeaad14c/orig"
              alt="Payment Methods"
              className="img-fluid"
              width={150}
            />
            </div>  
        </div>

        {/* Bottom */}
        <div className="text-center py-3 small text-muted">
          © 2025 - Ecommerce software by sa3oor™
        </div>
      </div>
    </footer>
  );
};

export default Footer;
