import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

    const currentPath = useLocation().pathname;
    let navigate = useNavigate();
    let [user , setUser] = useState(null);
    
    useEffect(() => {
        const updateUserState = () => {
            setUser(localStorage.getItem('user'));
        };

        window.addEventListener('storage', updateUserState);

        return () => {
            window.removeEventListener('storage', updateUserState);
        };
    }, []);

    useEffect(() => {
        setUser(localStorage.getItem('user'));
    }, [currentPath]);


    useEffect(()=>{
        const myNav = document.getElementById('myNav');
        if(currentPath === '/'){
            myNav.classList.remove('bg-dark');
            myNav.classList.add('bg-transparent');
            myNav.setAttribute('data-bs-theme', 'dark');
            document.body.style.paddingTop = 0;
        }
        else if (currentPath === '/about' || currentPath === '/services' || currentPath === '/ourwork'){
            myNav.classList.remove('navbar-dark');
            myNav.classList.remove('bg-transparent');
            myNav.setAttribute('data-bs-theme', 'light');
            myNav.classList.add('navbar-light');
            myNav.classList.add('bg-white');
            document.body.style.paddingTop = `${myNav.offsetHeight}px`;
        }
        else {
            myNav.setAttribute('data-bs-theme', 'dark');
            myNav.classList.remove('bg-transparent');
            myNav.classList.remove('bg-white');
            myNav.classList.remove('navbar-light');
            myNav.classList.add('bg-dark');
            document.body.style.paddingTop = 0;
        }
    }, [currentPath])

    return (
        <>
            <nav id='myNav' data-bs-theme="dark"
                className="navbar navbar-expand-md navbar-dark bg-transparent p-3"
            >
                <div className="container px-0 gx-sm-0">
                    <Link className="navbar-brand" to=""><img  src={currentPath === '/about' || currentPath === '/services' || currentPath === '/ourwork' ? "/images/logo-dark.png" : "/images/logo-light.png"} className='w-50' alt="" /></Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        bs-gutter-x="0"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    {user ? 
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="services">services</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="ourwork">ourwork</Link>
                            </li>
                            <li className="nav-item">
                                <button id='logout' className="nav-link px-xl-4 bg-white rounded-pill text-black " onClick={()=>{
                                    navigate('/');
                                    localStorage.clear();
                                    setUser(null);
                                }}>Log Out</button>
                            </li>
                    </ul> :
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="signup">sign up</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" to="login">log in</Link>
                            </li>
                    </ul>
                    }
                    </div>
                </div>
            </nav>
            
        </>
    );
}

export default Nav;
