import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    const location = useLocation();
    const currPath = location.pathname;

    // Check if the current path is one of the specified paths
    if (currPath === '/about' || currPath === '/services' || currPath === '/ourwork') {
        return (
            <> 
            <div id='footer-first-section'>
                <div className="container py-5" id='footer-first-section'>
                    <div className="row g-5 py-3">
                        <div className="col-xl-3 col-md-6">
                            <h3 className='text-white py-2'>About us</h3>
                            <p className='h6 footer-about-us-text pe-3 py-2'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex flex-column ">
                            <h3 className='text-white py-2'>Opening Hours</h3>
                            <p>Mon-Thu: 8:00 – 17:00</p>
                            <p>Fri: 8:00 – 19:00</p>
                            <p>Sat: 11:00 – 14:00</p>
                            <p>Sun: Closed</p>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex flex-column ">
                            <h3 className='text-white py-2'>Pages</h3>
                            <ul className='p-0'>
                                <li className='list-unstyled py-3'> <Link to="/about" className='text-decoration-none' >About</Link></li>
                                <li className='list-unstyled py-3'> <Link to="/services" className='text-decoration-none'>Services</Link></li>
                                <li className='list-unstyled py-3'> <Link to="/ourwork" className='text-decoration-none'>Our Work</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex flex-column ">
                            <h3 className='text-white py-2'>Contact Details</h3>
                            <p><i className="fa-solid fa-location-dot pe-2"></i> Manchester Road 123-78B, Silictown 7854MD, Great Country</p>
                            <p><i className="fa-solid fa-phone pe-2"></i> +46 123 456 789</p>
                            <p><i className="fa-solid fa-envelope pe-2"></i> hello@sitename.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-second-section">
                <div className="container d-flex justify-content-between align-items-center py-5">
                    <p className='w-100 w-sm-70'>Copyright 2017. All rights reserved.</p>
                    <div className='footer-logos w-xl-100 w-sm-70'>
                        <a href="https://www.facebook.com/profile.php?id=100007781251288"><i className="logo-1 fa-brands fa-facebook-f p-3 rounded-circle mx-1"></i></a>
                        <a href="https://www.instagram.com/abdalrhman.khaled76/"><i className="logo-2 fa-brands fa-instagram p-3 rounded-circle mx-1"></i></a>
                        <a href="https://github.com/AbdelrhmanKhaled76"><i className="logo-3 fa-brands fa-github-alt p-3 rounded-circle mx-1"></i></a>
                        <a href="https://www.linkedin.com/in/abdelrhman-khaled-mohammed-b39273265/"><i className="logo-4 fa-brands fa-linkedin-in p-3 rounded-circle mx-1"></i></a>
                    </div>
                </div>
            </div>
            </>
            
        );
    }

    return null;
}

export default Footer;
