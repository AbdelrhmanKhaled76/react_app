import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import './Login.css'
import { useFormik } from 'formik';
import *  as Yup from 'yup'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation} from 'react-query';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let exitEntv = useRef(null);
    let [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    
    const getData = async values => await axios.post('http://localhost:5000/api/login',values)
    .then(res => {
        console.log('it was sent successfully : ', res);
        localStorage.setItem('user', res.data.userId);
        setUserId(res.data.userId);
        toast.success('it was sent successfully', {position : "top-center", duration : 2000});
        exitEntv.current = setInterval(()=>{
            clearInterval(exitEntv.current);
            navigate('/');
        }, 2000);
        
    })
    .catch(err => {
        console.log('an error has occured : ', err)
        if (err.response) {
            toast.error(err.response.data, { position: "top-center" });
        } else if (err.request) {
            toast.error('Server is not responding. Please try again later.', { position: "top-center" });
        } else {
            toast.error('An unexpected error occurred. Please try again.', { position: "top-center" });
        }
    });

    const mutation =  useMutation('getData', getData);


    const formik = useFormik({
        initialValues : {
            email : '',
            password : '',
        },
        validationSchema : Yup.object({
            email : Yup.string().required('Required'),
            password : Yup.string().required('Required'),
        }),
        onSubmit : values =>{
            mutation.mutate(values);
            clearInterval(exitEntv);
        }
    })

    useEffect(()=>{
        return ()=> {if(exitEntv.current)
            clearInterval(exitEntv.current);
        };
    }, [])

    return (
        <div className='vh-100'>
            
            <form onSubmit={formik.handleSubmit} className='h-100 d-flex justify-content-center align-items-center flex-column w-75 mx-auto'>
                <h2 className='mb-3'>Login form</h2>
                <input type="email" {...formik.getFieldProps('email')} className='form-control mb-3' placeholder='Email...'/>
                {formik.errors.email && formik.touched.email ? <div className='alert alert-danger w-100 text-center'>{formik.errors.email}</div> : null}
                <input type="password"  {...formik.getFieldProps('password')} className='form-control mb-3' placeholder='Password'/>
                {formik.errors.password && formik.touched.password ? <div className='alert alert-danger w-100 text-center'>{formik.errors.password}</div> : null}
                <button type='submit' disabled={mutation.isLoading?true:false}  className='btn btn-primary rounded-pill text-capitalize align-self-start'>{mutation.isLoading ? <ClipLoader color='white' /> : 'Login' }</button>
            </form>
        </div>
    );
}

export default Login;
