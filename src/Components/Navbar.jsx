import React, { useEffect, useRef } from 'react'
import { Plus } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { UserPen } from 'lucide-react';
const Navbar = ({onSearch,onAdd,savedPlaces,provider,onSignOut,userName}) => {
    const showSearches = () => {
        onSearch(true)
    }
const [showProfile, setShowProfile] = React.useState(false);
  return (
    <div className='flex flex-row  gap-4'>
      <div onClick={() => {
        if (savedPlaces.length>0) return 
        onAdd(true)
        onSearch(true)
        }} className={`bg-white/10 hover:scale-125 transform transition duration-300 backdrop-blur-md border border-white/20 rounded-full ${savedPlaces.length > 0 ? 'hover:cursor-not-allowed opacity-30 ' : 'hover:cursor-pointer'}`}>
          <Plus color="#ffffff" size={20} strokeWidth={1} />
        </div>
        <div onClick={showSearches} className='bg-white/10 hover:scale-125 transform transition duration-300   backdrop-blur-md active:scale-95 hover:cursor-pointer border border-white/20 rounded-full'>
        <Search color="#ffffff" size={20} strokeWidth={0.5} />
        </div>
        <div className='bg-white/10 hover:scale-125 transform transition duration-300  backdrop-blur-md border border-white/20 rounded-full'>
        <Bell color="#ffffff" size={20} strokeWidth={0.5} />
        </div>
        <div onClick={()=>{
            setShowProfile(!showProfile)
        }} className='bg-white/10 whitespace-nowrap relative  transform transition duration-300  backdrop-blur-md border border-white/20 rounded-full'>
          <UserPen color="#ffffff" size={20} strokeWidth={0.5} />
          {showProfile && (
    <div className='absolute hover:scale-125 transform transition duration-300 right-50 -top-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3'>
      <p className='text-white text-sm'>{userName}</p>
      <button onClick={onSignOut} className='text-red-400 text-sm mt-2'>Sign Out</button>
    </div>
  )}
        </div>
    </div>
  )
}

export default Navbar
