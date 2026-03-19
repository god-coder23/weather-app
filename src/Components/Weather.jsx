import React from 'react'
const Weather = ({provider,name}) => {
  return (
    <div>
       <h1 className='text-gray-400'>
          Welcome
        </h1>
        <h2 className='text-gray-100 font-sans'>
          {name}
        </h2>
        <div className='bg-white/10 backdrop-blur-md border border-white/20 h-6 rounded-3xl text-white text-sm flex justify-center items-center w-40 mt-15'>
        Weather Forecast
        </div>
        <div className='text-white flex flex-col  gap-3 mt-3 text-4xl font-semibold'>
          <h1 className='drop-shadow-2xl'>Your City</h1>
          <h2>Your Weather.</h2>
        </div>
    </div>
  )
}

export default Weather
