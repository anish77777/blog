import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

// register is used to register input
//handleSubmit wraps login function to process data
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    // Function that handles form submission
    const login = async (data) => {
        setError("") // Clear previous error
        // data is object of email and password 
        try {
            const session = await authService.login(data) // Attempt login with form data
            if (session) {
                const userData = await authService.getCurrentUser() // Get user data after login
                if (userData) {
                    dispatch(authLogin({ userData })) // Store user in Redux correctly
                    navigate("/") // Redirect to home page
                }
            }
        } catch (error) {
            setError(error.message) // Show error message if login fails
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width="100%" />
                    </span>

                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className='font-medium text-primary transition-all duration-200
                        00hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-500 text-center'>
                    {error}</p>}
                <form onSubmit={handleSubmit(login)}
                    className='mt-8'>
                    <div className='space-y-5'>
                        {/* Email input field */}
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            // ...register to not overwrite  
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password:"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full">Sign In</Button>

                    </div>
                </form>
                {/* w smart wrapper Collects validated form values. Prevents page reload (no need for e.preventDefault()).*/}
                {/* without handle submitAdd onSubmit Prevent default behavior Manually collect data Validate inputs */}
            </div>
        </div>
    )
}
import { Form } from 'react-router-dom'

export default Login
