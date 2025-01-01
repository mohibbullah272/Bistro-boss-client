import React, { useContext, useState } from 'react';
import bg from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form"
import { uploadImage } from '../../Hooks/uploadImg';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const SignUp = () => {
    const {createUser,updateUserProfile}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const [loading,setLoading]=useState(false)
      const navigate = useNavigate()
      const onSubmit = async(data) => {
        setLoading(true)
        console.log(data)
        try{
            const img = data.image[0]
        const name = data.name 
        const email = data.email
        const password = data.password
        const imgUrl = await uploadImage(img)
        const result = await createUser(email, password);
        await updateUserProfile(name, imgUrl);

        console.log('User created and profile updated:', result.user);
    } catch (err) {
        console.error('Error during signup:', err);
    } finally {
        setLoading(false);
        toast.success('successfully signUp complete')
        navigate('/')
    }
      }
    return (
        <div style={{backgroundImage:`url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        }} className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">SignUp now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name",{ required: true })} type="text" placeholder="Name" className="input input-bordered" required />
                {errors.name && <span className='text-red-600'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">chose an photo</span>
                </label>
                <input {...register("image",{ required: true })} type="file" placeholder="email" className="" required />
                {errors.image && <span className='text-red-600'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email",{ required: true })} className="input input-bordered" required />
                {errors.email && <span className='text-red-600'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" 
                {...register("password",{ required: true ,
                    pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                 
                })}
                className="input input-bordered" required />
                   {errors.password?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                   {errors.password?.type ==='pattern' && <span className='text-red-600'>password must contain 6 latter length one uppercase one lowercase one numeric</span>}
              </div>
              <div className="form-control mt-6">
                            <button className="btn btn-primary" disabled={loading}>
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </div>
     
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;