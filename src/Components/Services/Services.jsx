import React from 'react';
import './services.css'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
        <div id="service-main-section" className='py-5'>
            <div className="container py-5">
                <div className="service-main-content d-flex justify-content-center flex-column align-items-center">
                    <h1 className='pb-2'>services</h1>
                    <div className="service-main-link">
                    <Link to="/" className='text-decoration-none'>Home</Link><span> / services</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="service-second-section" className='py-5'>
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-4 col-xs-12" data-aos="fade-in" data-aos-delay="500">
                        <div className="service-second-sec-content">
                        <i class="fa-solid fa-sliders fa-rotate-90"></i>
                            <h4>Powerful Options</h4>
                            <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12" data-aos="fade-in" data-aos-delay="500">
                        <div className="service-second-sec-content">
                        <i class="fa-solid fa-desktop"></i>
                            <h4>Responsive Design</h4>
                            <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12" data-aos="fade-in" data-aos-delay="500">
                        <div className="service-second-sec-content">
                        <i class="fa-solid fa-pencil"></i>
                            <h4>Page Builder</h4>
                            <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="service-final-sec" className='py-5'>
            <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
                <h2>Feeling convinced?</h2>
                <p className='text-white h5 py-4'>I am a subtitle, feel free to change me!</p>
                <button className=' btn btn-outline-white text-white border-white rounded-pill p-3'>BUY ENGAGE NOW</button>
            </div>
        </div>
        </>
    );
}

export default Services;
