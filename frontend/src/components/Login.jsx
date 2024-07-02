import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box" style={{ backgroundColor: '#f0f0f0' }}>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Closing Button */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=>document.getElementById("my_modal_3").close()} >
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br/>
                            <input type="email" placeholder='Enter your email' {...register("email", { required: true })}  className='w-80 px-3 border rounded-md outline-none' />    
                            {errors.email && <p className='text-red-500'>Please fill in your email</p>} 
                        </div> 
                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br/>
                            <input type="password" placeholder='Enter your password' {...register("password", { required: true })} className='w-80 px-3 border rounded-md outline-none' />     
                            {errors.password && <p className='text-red-500'>Please fill in your password</p>}
                        </div> 
                        {/* Button */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
            {/* Open modal button for demonstration */}
            <button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn'>Open Login Modal</button>
        </div>
    );
}

export default Login;
