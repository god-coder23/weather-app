import React from 'react'
import { Cloud } from 'lucide-react';
import { LayoutGrid } from 'lucide-react';
import { AudioLines } from 'lucide-react';
import { Earth } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';

const Sidebars = ({onSignOut,userName}) => {
  const [showProfile, setShowProfile] = React.useState(false);
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-8 gap-6'>
          <div className='group'>
          <Cloud 
            className='w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out' 
            color="#ffffff" 
            strokeWidth={1} 
          />
        </div>
          <div className='group'>
            <LayoutGrid className='w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out' color="#ffffff" strokeWidth={0.5} />
          </div>
          <div className='group'>
            <AudioLines className='w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out' color="#ffffff" strokeWidth={0.5} />
          </div>
          <div className='group'>
            <Earth className='w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out' color="#fff5f5" strokeWidth={0.5} />
          </div>
          <div className='group'>
            <CalendarDays className='w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out' color="#ffffff" strokeWidth={0.5} />
          </div>  
          <div className='group'>
            <Settings className='w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out group-hover:rotate-180 transform ' color="#ffffff" strokeWidth={0.5} />
          </div>
          <div className='mt-[150%] w-5 h-5 group-hover:w-7 group-hover:h-7 transition-all duration-500 ease-in-out ' onClick={(()=>{
            setShowProfile(!showProfile)
          })}>
            <LogOut color="#ffffff" strokeWidth={0.5} />
            {showProfile && (
              <div className='fixed whitespace-nowrap bottom-1 hover:scale-125 transform transition duration-300 -left-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3'>
                <p className='text-white text-sm'>{userName}</p>
                <button onClick={onSignOut} className='text-red-400 text-sm mt-2'>Sign Out</button>
              </div>
            )}
          </div>
          
        </div>
    </div>
  )
}

export default Sidebars
