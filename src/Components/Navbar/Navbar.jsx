import styles from './Navbar.module.css';
import SearchName from "../SearchName/SearchName";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CgProfile } from "react-icons/cg";
import { TbLogin2 } from "react-icons/tb";
import { GoSignIn } from "react-icons/go";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const Navigate= useNavigate()
    const [ShowMenu, setShowMenu] = useState(false)
    const menuRef = useRef();
    const [scrolled, setScrolled] = useState(false);

    const LinkNav =
     <ul className={`d-flex list-unstyled justify-content-center w-100`}       >
        <li className=' me-5'>Home</li>
        <li  className=' me-5'>Contact Us</li>
        <li  className=' me-5'>About</li>
        <li  className=' me-5'>Blog</li>
     </ul>;

    useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);
    const profile =
        <li className={`${styles.iconCircle}`}>
            <img
                className="rounded-circle shadow-sm"
                width="35"
                height="35"
                src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                alt="avatar"
            />
        </li>;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };


        if (ShowMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ShowMenu]);

    return <>
        <nav className={`navbar navbar-expand-lg ${scrolled ? 'shadow-sm bg-light fixed-top' : ' sticky-top '}`}>
            <div className='container-fluid'>
                <nav className="navbar bg-transparent w-100" >
                    <div className="container-fluid ">
                        {/* زر البرجر */}
                        <button
                            className="navbar-toggler d-block d-lg-none bg-transparent"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='col-lg-3'>
                            <img width={'140px'} height={'25px'} src="https://avatars.mds.yandex.net/get-marketpic/3735263/pic443b9881bfb3be90f3e6e4eebeaad14c/orig" alt="" />
                        </div>
                        <div className="col-lg-9 d-flex " >
                            <div className="col-lg-8 d-lg-block d-none">
                                <SearchName />
                            </div>
                            <div className='d-lg-flex d-none col-lg-2 justify-content-end pe-4'>
                                <MdAddShoppingCart onClick={()=>Navigate('/ShoppingCart')}
                                 size={40} color='#ED4D2B' className='border rounded-circle p-2 m-0' />
                                <FiHeart size={40} color='#ED4D2B' className='border rounded-circle p-2 ms-2' />
                            </div>
                            <div >
                                {/* profile div */}
                                <div className="p-1 d-flex text-muted justify-content-center align-items-center rounded-3 shadow-sm"
                                    onClick={() => setShowMenu(true)}
                                    style={{cursor:'pointer'}}
                                >
                                    {
                                        profile
                                    }
                                    <span className='ps-2 d-lg-block d-none'>abdelrhamnddd</span>
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                        </div>
                        {/* show menu */}
                        {
                            ShowMenu &&
                            <div className="col-12" style={{ position: 'relative' }} >
                                <ul className="list-unstyled bg-white rounded-bottom shadow-sm p-2" ref={menuRef} data-aos="fade-up"
                                    style={{ position: "absolute", right: '9px',
                                         zIndex: '100', bottom: '-165px', width: '185px' ,
                                         cursor:'pointer'
                                        }}
                                >
                                    <div className='d-flex  align-items-center'>
                                        <CgProfile className='me-2 mb-1'/>
                                    <li className="mb-1  py-1 text-muted">Profile</li>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <GoSignIn className='me-2 mb-1'/>
                                    <li className="mb-1 py-1 text-muted">Login</li>
                                    </div>
                                    <div  className='d-flex align-items-center'>
                                        <TbLogin2 className='me-2 mb-1'/>
                                    <li className="mb-1 py-1 text-muted">Register</li>
                                    </div>
                                    <div  className='d-flex align-items-center'>
                                        <BiLogOutCircle className='me-2 mb-1'/>
                                    <li className="mb-1 py-1 text-muted">Logout</li>
                                    </div>
                                </ul>
                            </div>
                        }
                        {/* link  */}
                        
                        {/* القائمة الجانبية */}
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex="-1"
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            {/* Mobile */}
                            <div className="offcanvas-header">

                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>

                                </div>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    </>
}

export default Navbar