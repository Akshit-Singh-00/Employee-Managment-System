import React, { useState } from 'react'


const Login = ({ handleLogin }) => {
  // console.log(handleLogin)
  // console.log(props)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    // console.log("hello guys , your forms has been submmited")
    // console.log("email is",email);
    // console.log("password is",password);

    setEmail('')
    setPassword('')

  } // two way binding
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-full border-emerald-600 p-20'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              // console.log("Changing")
              // console.log(e)
              // console.log(e.target)
              // console.log(e.target.value)
              setEmail(e.target.value)
            }}
            required
            className='border-2 outline-none border-emerald-600 rounded-full px-3 py-5 text-xl bg-transparent placeholder:text-grey-400 w-75' type="email" placeholder='Enter your email' />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className='border-2 outline-none border-emerald-600 rounded-full px-3 py-5 text-xl bg-transparent mt-3 placeholder:text-grey-400 w-75' type="password" placeholder='Enter your password' />
          <button className='border-none outline-none bg-emerald-600 rounded-xl px-3 py-5 text-xl  mt-5 w-30'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
