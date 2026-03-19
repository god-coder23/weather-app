import React, { use, useEffect, useRef } from 'react'

import { CloudFog, Sidebar } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Droplet } from 'lucide-react';
import Sidebars from './Components/Sidebars';
import Weather from './Components/Weather';
import Navbar from './Components/Navbar';
import { Trash2 } from 'lucide-react';
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth"
import Login from './login'
const provider = new  GoogleAuthProvider()
const App = () => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
      setUser(currentuser)
      setLoading(false)
    })
    return () => unsubscribe()
  },[])
  const [days, setDays] = React.useState(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]);
  const [temp, setTemp] = React.useState(["11°C","11°C","11°C","11°C","11°C","11°C","11°C"]);
  const [city, setCity] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [showSearch, setShowSearch] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState(()=>{
    return localStorage.getItem("selectedState") || "No Place"
  });
  const [lat, setlat] = React.useState(()=>{
    return parseFloat(localStorage.getItem("lat")) || 73.9
  });
  const [lon, setlon] = React.useState(()=>{
    return parseFloat(localStorage.getItem("lon")) || 18.64
  });
  const [savedPlaces, setSavedPlaces] = React.useState(()=>{
    const stored = localStorage.getItem("savedPlaces")
    return stored ? JSON.parse(stored) : []
  });
  React.useEffect(()=>{
    localStorage.setItem('savedPlaces',JSON.stringify(savedPlaces))
  })
  React.useEffect(()=>{
    localStorage.setItem('selectedState',selectedState)
  })
  React.useEffect(()=>{
    localStorage.setItem('lat',lat)
    localStorage.setItem('lon',lon)
  },[lat,lon])
  const [showAdd, setShowAdd] = React.useState(false);
  const searchLoc = async (e) => {
    const cityName = e.target.value
    if (cityName.length<3) return
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=5`)
    const place = await res.json()
    setSearchResults(place)
  }
  const searchRef = React.useRef(null)
  React.useEffect(() => {
  const clickOutsideInput = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearch(false)
      setSearchResults([]) 
    }
  }
  document.addEventListener('mousedown', clickOutsideInput)
  return () => document.removeEventListener('mousedown', clickOutsideInput)
}, []) 
function handleGoogleLoginIn(){
  signInWithPopup(auth,provider)
    .then((result)=>{
      const user = result.user
      console.log(user)
      alert("Logged in as "+user.displayName)
    })
    .catch((err)=>{
      console.log(err)
    })
}
  React.useEffect(()=>{
    const fetchData = async()=>{
      try{
        const reponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
        const data = await reponse.json()
        const noonIdx = [12, 36, 60, 84, 108, 132, 156]
        const dailyTemp = noonIdx.map((i)=>(
          `${Math.round(data.hourly.temperature_2m[i])}°C`
        ))
        const dailyDays = noonIdx.map((i)=>{
          const date = new Date(data.hourly.time[i])
          return date.toLocaleDateString(`en-US`,{weekday:'long'})
      })
        setDays(dailyDays)
        setTemp(dailyTemp)
        
      }catch(err){
        console.log("API fetch failed")
      }
    }
    fetchData()
  },[lat,lon])
  function handleSignout(){
    signOut(auth)
  }
  if (loading) return  (
  <div className='grid w-screen h-screen overflow-hidden'>
    <img
      className='h-screen brightness-60 w-full object-cover col-start-1 row-start-1'
      src="https://wallpaperaccess.com/full/431332.jpg" alt="" />
    <div className='col-start-1 row-start-1 flex justify-center items-center z-10'>
      <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4'>
        <h1 className=' flex flex-col justify-center items-center text-4xl font-bold animate-pulse bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent'>Weather App</h1>
        <p className='text-white text-3xl flex justify-center items-center animate-pulse'>Loading your forceast  
          <div className='flex flex-row gap-1 justify-center items-center'>
            <span className='text-white animate-bounce' style={{animationDelay:'0ms'}}>.</span>
            <span className='text-white animate-bounce' style={{animationDelay:'150ms'}}>.</span>
            <span className='text-white animate-bounce' style={{animationDelay:'300ms'}}>.</span>
            <span className='text-white animate-bounce' style={{animationDelay:'450ms'}}>.</span>
            <span className='text-white animate-bounce' style={{animationDelay:'600ms'}}>.</span>
          </div>
           </p>
      </div>
    </div>
  </div>
)
  if (!user) return <Login onLogin={handleGoogleLoginIn} />
  return (
    <div className='grid w-screen h-screen overflow-hidden'>
      <img
        className='h-screen brightness-60 bg-black/40 w-full object-cover col-start-1 row-start-1'
        src="https://wallpaperaccess.com/full/431332.jpg" alt="" />
      <div className='h-[91%]  bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-20 col-start-1 row-start-1 self-start justify-self-start mt-5 ml-4'>
      <Sidebars onSignOut={handleSignout} userName={user.displayName}/>
      </div>
      <div className='z-10 col-start-1 row-start-1 self-start justify-self-start ml-[13%] mt-[2%]'>
       <Weather name = {user.displayName} />
        <div className='max-w-md mt-3 text-gray-300 text-me '>
          <p>Stay ahead of the weather. Get real-time forecasts for all your saved cities in one place</p>
        </div>
      </div>
      <div className='z-10  text-white gap-6 flex flex-row ml-[13%] col-start-1 row-start-1 self-end justify-self-start mb-8'>
        {days.map((day,i)=>(
           <div key={i} className='flex hover:scale-125 transform transition duration-300 cursor-pointer flex-col bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-20 h-50 justify-between items-center py-3 text-sm'>
            <div>
              {temp[i]}<CloudFog color="#ffffff" strokeWidth={0.5} />
            </div>
            <div>
              {day}
            </div>
          </div>
        ))}
      </div>
      <div className='z-10 flex flex-row gap-4 w-full col-start-1 row-start-1 self-start justify-self-start ml-[83%] mt-[2%]'>
        <Navbar onSearch={setShowSearch} onAdd={setShowAdd} savedPlaces={savedPlaces} provider={handleGoogleLoginIn} onSignOut = {handleSignout} userName={user.displayName} />
      </div>
      <div className='z-10  cursor-pointer flex flex-col gap-4 w-full col-start-1 row-start-1 self-start justify-self-start ml-[77%] mt-[8%]'>
        <div className='h-full hover:scale-125 transform transition duration-300 w-50 gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl'>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-row p-2'>
            <div className='mt-0.5'>
            {<MapPin color="#ffffff" size={20} strokeWidth={0.5} />}
          </div>
          <h2 className='text-white'>{selectedState}</h2>
          
          </div>
          <div className='flex justify-center h-5 w-6 ml-6 mt-2 items-center bg-red-600/25 rounded-2xl backdrop-blur-md border border-red-600/25 ' onClick={()=>setSelectedState("No Place")}>
            {<Trash2 color="white" size={16} strokeWidth={1} />}
          </div>
          </div>


           

          <h1 className='text-white font-bold flex justify-center items-center text-3xl'>{temp[0]}</h1>
          <div className='flex text-white ml-2 mt-3 gap-4 flex-row'>
            <h1 text-white>40km/hr</h1>
            <div className='flex flex-row'>
              <div className='mt-0.5'>
                {<Droplet color="#ffffff" size={18} strokeWidth={0.5} />}
              </div>
              <h1>40%</h1>
            </div>
            <h1>Hot</h1>
          </div>
          
        </div>


        {savedPlaces.map((p,i)=>(
          <div className=' w-50 gap-2 hover:scale-125 transform transition duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl'>
            <div className='h-full w-50 gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl'>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-row p-2'>
            <div className='mt-0.5'>
            {<MapPin color="#ffffff" size={20} strokeWidth={0.5} />}
          </div>
          <h2 className='text-white'>{p.name}</h2>
          </div>
          <div className='flex justify-center h-5 w-6 ml-6 mt-2 items-center bg-red-600/25 rounded-2xl backdrop-blur-md border border-red-600/25 ' onClick={()=>{
            setSavedPlaces(savedPlaces.filter((_,idx)=>idx!==i))
          }}>
            {<Trash2 color="white" size={16} strokeWidth={1} />}
          </div>
          </div>


            


          <h1 className='text-white font-bold flex justify-center items-center text-3xl'>{p.temp}</h1>
          <div className='flex text-white ml-2 mt-3 gap-4 flex-row'>
            <h1 text-white>40km/hr</h1>
            <div className='flex flex-row'>
              <div className='mt-0.5'>
                {<Droplet color="#ffffff" size={18} strokeWidth={0.5} />}
              </div>
              <h1>40%</h1>
            </div>
            <h1>Hot</h1>
          </div> 
        </div>
          </div>
        ))}
      </div>
      <div ref={searchRef} className='z-10  flex flex-col gap-4 w-50 col-start-1 row-start-1 self-start justify-self-start ml-[69%] mt-[5%]'>
        <input type="text" onChange={searchLoc} className={` bg-white/10 backdrop-blur-md border border-white/20 h-7 rounded-2xl text-white px-3 ${showSearch ? 'block' :'hidden'}`}/>
          {searchResults.map((place,i)=>(
            <div key={i} className={` bg-white/10 backdrop-blur-md border border-white/20 h-full rounded-2xl text-white px-3  `} onClick={()=>{
              
              if (showAdd){
                setSavedPlaces([...savedPlaces,{name:place.name,temp:temp[0]}])
                setShowAdd(false)
              }
              else{
                setSelectedState(place.name)
                setlat(place.lat)
                setlon(place.lon)
              }
              setShowSearch(false)
              setSearchResults([])
              console.log(selectedState)
            }} >
              {place.display_name}
            </div>
          ))}

      </div>
      
    </div>
  )
}

export default App