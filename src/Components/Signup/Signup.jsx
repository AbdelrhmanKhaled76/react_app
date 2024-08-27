import React from 'react';
import './Signup.css'
import axios from 'axios';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import {  useMutation} from 'react-query';
import ClipLoader from "react-spinners/ClipLoader";
import toast from 'react-hot-toast';



const Signup = () => {
    
    const getData = async (values)=> await axios.post('http://localhost:5000/api/signup', values)
    .then(res=>{
        console.log("this is the res : ", res);
        toast.success('user is added successfully !!', {position: 'top-center',duration:2000});
    })
    .catch(err=>{
        console.log("an error has occured : ", err);
        toast.error(err.response.data , {position: 'top-center', duration:2000});
    })

    const mutation = useMutation('getData', getData);

    const myForm = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : '',
            repassword : '',
            desc : ''
        },
        validationSchema : Yup.object({
            name : Yup.string().min(3, "canno't be or less than 3 characters").required('Required'),
            email : Yup.string().email().required('Required'),
            password : Yup.string().min(5, "canno't be or less than 5 characters").required('Required'),
            repassword : Yup.string().min(5, "canno't be or less than 5 characters").oneOf([Yup.ref('password')],"passwords must match").required('Required'),
            desc : Yup.string(),
        }),
        onSubmit : (values)=>{
            mutation.mutate(values)
        }
    });

    return (

        <div className='main-form-page container d-flex align-items-center my-5 '>
            <div className="main-signup row g-5">
                <div className="col-xxl-9 col-lg-12 pt-lg-5">
                    <div className="signup-form pt-5">
                        <form onSubmit={myForm.handleSubmit}>
                        <h2 className='pb-3'>contact form</h2>
                        <div className='d-flex justify-content-between mb-2 '>
                            <input type="text" className='form-control  half-form' placeholder='Name ...' {...myForm.getFieldProps('name')} name="name"/>
                            <input type="email" className='form-control half-form' placeholder='Email ...' {...myForm.getFieldProps('email')}  name="email"/>
                        </div>
                        <div className='d-flex justify-content-between mb-2 error-div'>
                        {myForm.touched.name && myForm.errors.name ? (
                            <div className='alert alert-danger half-form mt-2'>{myForm.errors.name}</div>
                            ) : null}
                            {myForm.touched.email && myForm.errors.email ? (
                            <div className='alert alert-danger half-form mt-2'>{myForm.errors.email}</div>
                            ) : null}
                        </div>
                            
                        <input type="password" className='form-control mb-4' placeholder='password...' {...myForm.getFieldProps('password')}  name="password"/>
                        {myForm.touched.password && myForm.errors.password ? (
                        <div className='alert alert-danger'>{myForm.errors.password}</div>
                        ) : null}
                        <input type="password" className='form-control mb-4' placeholder='retype password...' {...myForm.getFieldProps('repassword')}  name="repassword"/>
                        {myForm.touched.repassword && myForm.errors.repassword ? (
                            <div className='alert alert-danger'>{myForm.errors.repassword}</div>
                            ) : null}
                        <textarea placeholder='give me a prief about yourself ...' className='form-control mb-3' rows={8} {...myForm.getFieldProps('desc')}  name="desc"></textarea>
                        {myForm.touched.desc && myForm.errors.desc ? (
                            <div className='alert alert-danger'>{myForm.errors.desc}</div>
                            ) : null}
                        <button type='submit' disabled={mutation.isLoading?true:false}  className='btn rounded-pill bg-primary text-white ms-2 px-4 py-2 text-capitalize'>{mutation.isLoading ? <ClipLoader color='white' /> : 'SEND' }</button>
                        </form>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-12 py-xxl-5 pt-lg-0">
                    <div className="signup-information d-flex justify-content-center align-items-start flex-column py-xxl-5 pt-lg-0">
                    <h3 className='pb-3 text-lg-center w-100'>Contact Information</h3>
                    <p className='desc'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h5 className='pb-sm-5'>contact details</h5>
                    <p><span className='h6'><i className="fa-regular fa-map me-2 p-2 rounded-circle bg-primary text-white"></i></span>35th Ave, Queens, NY 11106, USA</p>
                    <p><span className='h6'><i className="fa-solid fa-phone me-2 p-2 rounded-circle bg-primary text-white"></i></span>123 456 7893</p>
                    <p><span className='h6'><i className="fa-solid fa-mobile-screen-button me-2 p-2 rounded-circle bg-primary text-white"></i></span>123 456 7893</p>
                    <p><span className='h6'><i className="fa-regular fa-envelope me-2 p-2 rounded-circle bg-primary text-white"></i></span>contact@mywebsite.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
