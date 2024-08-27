import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ourwork.css';
import axios from 'axios';
import { CombSpinner } from 'react-spinners-kit';
import Error from '../Error/Error';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Ourwork = () => {
    const [category, setCategory] = useState(localStorage.getItem('category') || 'show all');

    const handleCategoryClick = useCallback((e) => {
        const newCategory = e.target.getAttribute('data-category');
        setCategory(newCategory);
        localStorage.setItem('category', newCategory);
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('.ourwork-second-sec-links');
        links.forEach(link => link.classList.remove('active-link'));
        const activeLink = document.querySelector(`[data-category="${category}"]`);
        activeLink?.classList.add('active-link');
    }, [category]);

    const getData = async () => {
        const response = await axios.get(`http://localhost:5000/api/images/${category}`);
        return response.data;
    };

    const { data: allImages, isError, isLoading } = useQuery(['getImages', category], getData, {
        keepPreviousData: true,
    });

    if (isError) return <Error />;
    if (isLoading) return  <Loading />;

    return (
        <>
            <div id="ourwork-main-section" className="py-5">
                <div className="container py-5">
                    <div className="ourwork-main-content d-flex justify-content-center flex-column align-items-center">
                        <h1 className="pb-2">Our Work</h1>
                        <div className="service-main-link">
                            <Link to="/" className="text-decoration-none">Home</Link><span> / Our Work</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ourwork-second-section" className="py-5 ">
                <div className="container py-5">
                    <ul className="container d-flex justify-content-center pb-3">
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="show all"
                            onClick={handleCategoryClick}
                        >
                            Show All
                        </li>
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="design"
                            onClick={handleCategoryClick}
                        >
                            Design
                        </li>
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="graphics"
                            onClick={handleCategoryClick}
                        >
                            Graphics
                        </li>
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="mockups"
                            onClick={handleCategoryClick}
                        >
                            Mockups
                        </li>
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="other"
                            onClick={handleCategoryClick}
                        >
                            Other
                        </li>
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="photography"
                            onClick={handleCategoryClick}
                        >
                            Photography
                        </li>
                        <li
                            className="ourwork-second-sec-links px-3"
                            data-category="planning"
                            onClick={handleCategoryClick}
                        >
                            Planning
                        </li>
                    </ul>
                    <div className="row g-4">
                        {allImages && allImages.length > 0 ? (
                            allImages.map(image => (
                                <div className="col-lg-4 col-md-6 col-sm-12"  key={image._id.toString()} data-aos="fade-out" data-aos-delay="500">
                                    <div className="card">
                                        <img src={image.img.url} className="card-img w-100" alt={image.img.title} />
                                        <div className="card-img-overlay text-white h-100 opacity-0 d-flex justify-content-center align-items-center">
                                            <h3 className="card-title">{image.img.title ?? null}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No images available for this category.</p>
                        )}
                    </div>
                    <button className="btn btn-primary mt-4 mx-auto rounded-pill d-block p-3">LOAD MORE</button>
                </div>
            </div>
        </>
    );
};

export default Ourwork;
