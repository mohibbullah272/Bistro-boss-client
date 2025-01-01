import React, { useContext, useEffect, useState } from 'react';
import bg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
    const {login}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit =e=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
       login(email,password)
       .then(()=>{
        toast.success('user login successful')
        navigate('/')
       })
    }
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const [disabled,setDisabled]=useState(true)
    const handleValidCaptcha=e=>{
let user_captcha_Value = e.target.value 
if(validateCaptcha(user_captcha_Value)){
setDisabled(false)
}
else{
    setDisabled(true)
}
    }
    return (
        <div className='min-h-screen flex justify-center flex-col items-center' style={{backgroundImage:`url(${bg})`,
        backgroundSize:'cover'
        }}>
            <div className='mb-5'>
                <h3 className='text-3xl text-gray-800'>Welcome back !!</h3>
                <p>Login now to explore more amazing things</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
        <LoadCanvasTemplate />
        <input type="text" placeholder='type the above captcha' onBlur={handleValidCaptcha} className='input'/>
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default SignIn;