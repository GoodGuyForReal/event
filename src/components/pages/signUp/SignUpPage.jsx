import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../../context/UserAuth'
const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verify, setVerify] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    const { SignUp } = UserAuth()

    const HandleSubmit = async (event) => {
        event.preventDefault()
        if (password !== verify) {
            return setError('Passwords do not match');
        }

        try {
            await SignUp(email, password, userName)
            navigate('/dashboard');
        } catch (error) {
            console.log(error)
            setError('Something went wrong')
        }
    }

    //console.log(userName);

    const bannerImg = `https://images.unsplash.com/photo-1635320019034-171ab02d6e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`

    return (
        <div className='SignInPage h-[89.5vh] flex flex-col md:flex-row'>

            <div className='signinEventContainer w-full md:w-1/2  flex items-center justify-center' >
                <div className='SignUpleftbody flex w-full max-w-[50vh] px-3 flex-col gap-6'>
                    <div className='text-left'>
                        <h1 className='text-black font-bold text-[42px] mb-2'>SignUp</h1>
                        <p className='text-[#0007] text-[16px]'>Welcome please enter your deatil</p>
                        {error && <p className='bg-[#ff314d] text-[15px] rounded-md mt-5 duration-300 ease-out text-white p-3'>{error}</p>}
                        {password?.length < 6 && <p className='bg-[#6795ff] text-[15px] rounded-md mt-5 duration-300 ease-out text-white p-3'>Password should be minimum 6 characters</p>}
                    </div>
                    <form className='flex flex-col gap-5 text-center'>
                        <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='User Name' className='p-3 border rounded-md border-[#2227] w-full text-black' />
                        <input onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())} type="text" placeholder='Email' className='p-3 border rounded-md border-[#2227] w-full text-black' />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='p-3 border rounded-md border-[#2227] w-full text-black' />
                        <input onChange={(e) => setVerify(e.target.value)} type="password" placeholder='Verify your password' className='p-3 border rounded-md border-[#2227] w-full text-black' />
                        <button onClick={HandleSubmit} className='bg-blue-700 rounded-lg text-white py-3 hover:duration-300 hover:bg-[#ff74be]'>Sign Up</button>
                        <Link className='text-black underline hover:duration-300 hover:text-[#c1c1c1]' to={'/SignIn'}>Do you have an account</Link>
                    </form>
                </div>

            </div>


            <div className='signinImageContainer w-full md:w-1/2'>
                <img src={bannerImg} alt={bannerImg} className='w-full h-full object-cover' />
            </div>

        </div>
    )
}

export default SignUp