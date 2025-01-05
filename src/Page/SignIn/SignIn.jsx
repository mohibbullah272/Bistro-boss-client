import React, { useContext, useEffect, useState } from 'react';
import bg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import bg2 from '../../assets/others/authentication2.png'
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
const {login,googleLogin,}=useContext(AuthContext)
const navigate = useNavigate()
const handleGoogleLogin=()=>{
  googleLogin()
  .then(()=>{
    toast.success('login successful')
    navigate('/')
  })
}

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
        <div className='min-h-screen flex md:flex-row flex-col md:justify-evenly gap-5 items-center' style={{backgroundImage:`url(${bg})`,
        backgroundSize:'cover'
        }}>
            <div className='mb-5'>
                <img src={bg2} alt="" />
            </div>
 <div className='w-1/3'>
  <p className='text-3xl font-bold text-center mb-5'>Login</p>
 <div className="card  w-full  ">
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
          <button disabled={disabled} className="btn border-none bg-[#D1A054] text-white/70">Login</button>
        </div>
      </form>
      <p className='text-[#D1A054] text-center'>New here ? <Link to={'/signUp'}>Create new Account</Link></p>
      <p className="text-center">or sign in with</p>
      <div className='text-center my-5'>
        <button onClick={handleGoogleLogin}><FaGoogle className='text-xl' /></button>
      </div>
    </div>
 </div>
        </div>
    );
};

export default SignIn;