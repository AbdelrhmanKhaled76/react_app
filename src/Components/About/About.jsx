import React from 'react';
import './about.css'



const About = () => {
    return (
        <>
        <div className='container'>
            <div className='about-first-section my-4'>
                <div id="about-main" className='text-center py-5 '>
                    <h1 className='py-3' data-aos="fade-down" data-aos-delay="500">about</h1>
                    <p className='h6' data-aos="fade-up" data-aos-delay="1000">Learn a bit more about us and see how things started 10 years ago when John and Alice started our incredible company.</p>
                </div>

                <div id="about-who-we-are" className='py-5 row g-2'>
                    <div className="col-lg-6 d-lg-block dNone" data-aos="fade-right" data-aos-delay="500">
                        <figure className="about-img-text p-5" >
                            <img src="/images/download.jpg" alt="" className='w-100'/>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-sm-12" data-aos="fade-left" data-aos-delay="1000">
                        <div className="about-img-text d-flex  flex-column justify-content-center h-100 text-start" >
                            <h3 className='py-3 h1'>who we are ?</h3>
                            <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme.</p>
                        </div>
                    </div>
                </div>

                <div id="about-how-did-it-start" className='row py-5 g-2'>
                    <div className="col-lg-6 col-sm-12" data-aos="fade-right" data-aos-delay="500">
                        <div className="d-flex  flex-column justify-content-center h-100 text-start" >
                            <h3 className='py-3 h1'>How did it start?</h3>
                            <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-block dNone" data-aos="fade-left" data-aos-delay="1000">
                        <figure className="about-img-text p-5">
                            <img src="/images/main3-700x600.jpg" alt="" className='w-100' />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-second-section py-5 ">
            <div className="container text-center">
                <h2 className='text-white py-3'>Video Overview</h2>
                <p className='h6 py-2 video-text'>Watch our introductory video to learn more about us even quicker!</p>
                <video className='w-100 my-3 rounded' controls data-aos="fade-in" data-aos-delay="500">
                    <source src="https://www.example.com/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div className="about-final-section py-5">
            <div className="container py-5">
                <div className="row g-5" data-aos="fade-in" data-aos-delay="500">
                    <div className="col-xl-3 col-sm-12 " >
                    <div className='d-flex justify-content-between align-items-center flex-column'>
                    <i class="fa-regular fa-thumbs-up"></i>
                        <p className='h1 py-3 text-white  about-count'>1430</p>
                        <p className='h4'>Page Likes</p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 " >
                    <div className='d-flex justify-content-between align-items-center flex-column'>
                    <i class="fa-solid fa-location-dot"></i>
                        <p className='h1 py-3 text-white about-count'>64</p>
                        <p className='h4'>Locations</p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 " >
                    <div className='d-flex justify-content-between align-items-center flex-column'>
                    <i class="fa-regular fa-lightbulb"></i>
                        <p className='h1 py-3 text-white about-count'>960</p>
                        <p className='h4'>Great Ideas</p>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-12 " >
                    <div className='d-flex justify-content-between align-items-center flex-column'>
                    <i class="fa-regular fa-comment"></i>
                        <p className='h1 py-3 text-white about-count'>420</p>
                        <p className='h4'>Comments</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        </>
    );
}

export default About;
