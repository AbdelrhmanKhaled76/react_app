import './Home.css'
import React from 'react';

const Home = () => {


    return (
        <>
        <div id='home'>
            <div id="main-content" className='d-flex align-items-center justify-content-center flex-column text-white h-100' data-aos="fade-in" data-aos-delay="500">
                <h1>Creative Agency</h1>
                <p className='h3 py-3'>Welcome to the home of world's brightest ideas.</p>
                <div>
                <button className='btn-p btn rounded-pill bg-light text-black me-2 px-lg-4  px-sm-2 py-lg-2 py-sm-1'>about us</button> 
                <button className='btn-p btn rounded-pill bg-primary text-white ms-2 px-lg-4 px-sm-2 py-lg-2 py-sm-1'>portofolio</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
