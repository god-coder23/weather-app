import React from 'react'

const Login = ({ onLogin }) => {
  return (
    <div className='grid z-10 w-screen h-screen overflow-hidden'>
      <img
        className='h-screen brightness-60 w-full object-cover col-start-1 row-start-1'
        src="https://wallpaperaccess.com/full/431332.jpg" alt="" />
      <div className='col-start-1 row-start-1 flex justify-center items-center z-10'>
        <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 flex flex-col items-center gap-6'>
          <h1 className='text-white text-3xl font-bold'>Weather App</h1>
          <p className='text-gray-300 text-sm'>Sign in to see your forecast</p>
          <button
            onClick={onLogin}
            className='bg-white text-gray-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition'>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login