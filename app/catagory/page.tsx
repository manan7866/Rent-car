"use client"
import React, { useState } from 'react';
// import {Slider} from "@/components/ui/slider"
import Pickup from '@/components/Pickup';
import Dropoff from '@/components/Pickdown';
import { LuArrowUpDown } from "react-icons/lu";


import Cartwo from "@/components/cartwo"
import car from "@/public/images/car.svg"
import car2 from "@/public/images/car2.svg"

import car4 from "@/public/images/car4.svg"
import car5 from "@/public/images/car5.svg"
import car6 from "@/public/images/car6.svg"
import car7 from "@/public/images/car7.svg"

import car9 from "@/public/images/car9.svg"
import car10 from "@/public/images/car10.svg"
import car11 from "@/public/images/car11.svg"

import Rangeslid from "@/components/Slid"
export default function Page2 (){
  const [value, setValue] = useState(70);

  // Handle slider value change
 


    const arryCar =[{
        carname : "Keemigsegg",
        carcatagory : "Sport",
        carpic: car,
        carfuel : "90L",
        cardrive : "Manual",
        carcapasity : "2 Peoples",
        carprice : "$99.00/",
        carptwo : ""
      },{
        carname : "Nissan GT-R",
        carcatagory : "Sport",
        carpic: car2,
        carfuel : "80L",
        cardrive : "Manual",
        carcapasity : "2 Peoples",
        carprice : "$80.00/",
        carptwo : "$100.00",
      },{
        carname : "Nissan Gy-R",
        carcatagory : "Sports",
        carpic: car4,
        carfuel : "80L",
        cardrive : "Manual",
        carcapasity : "2 Peoples",
        carprice : "$80.00/",
        carptwo : "$100.00",
      },{
        carname : "All New Rush",
        carcatagory : "SUV",
        carpic: car5,
        carfuel : "70L",
        cardrive : "Manual",
        carcapasity : "6 Peoples",
        carprice : "$72.00/",
        carptwo : "$80.00"
    
      },{
        carname : "CR-V",
        carcatagory : "SUV",
        carpic: car6,
        carfuel : "80L",
        cardrive : "Manual",
        carcapasity : "6 Peoples",
        carprice : "$80.00/",
        carptwo : ""
        
      },{
        carname : "All New Teros",
        carcatagory : "SUV",
        carpic: car7,
        carfuel : "90L",
        cardrive : "Manual",
        carcapasity : "6 Peoples",
        carprice : "$74.00/",
        carptwo : ""
      },{
        carname : "MG ZX Exclusive",
        carcatagory : "Hatchback",
        carpic: car9,
        carfuel : "70L",
        cardrive : "Manual",
        carcapasity : "4 Peoples",
        carprice : "$76.00/",
        carptwo : "$80.00"
      },{
        carname : "NewMgZS",
        carcatagory : "SUV",
        carpic: car10,
        carfuel : "80L",
        cardrive : "Manual",
        carcapasity : "6 People",
        carprice : "$80.00/",
        carptwo : ""
        
      },{
        carname : "MG ZX Exite",
        carcatagory : "Hatchback",
        carpic: car11,
        carfuel : "90L",
        cardrive : "Manual",
        carcapasity : "4 Peoples",
        carprice : "$74.00/",
        carptwo : ""
      }]
  
    return (
        <div className="w-full flex relative  bg-[#E0E9F4] h-full ">
            <div className="w-[450px] lg:hidden md:hidden xs:hidden sm:hidden bg-white h-auto px-8 py-10 ">
                
            <div className="flex flex-col bg-white gap-6">
          <p style={{letterSpacing: '4px'}} className="text-slate-400 xs:text-[10px] sm:text-[10px] text-xs py-4">TYPE</p>
          <div className="h-auto flex flex-col gap-6  ">
           <div className="flex items-center xs:text-[10px] sm:text-[10px] text-lg xs:gap-1 sm:gap-1 gap-3">
           <input id="Sport-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="Sport-checkbox" className="cursor-pointer">Sport</label>
           <p className="text-slate-400">(10)</p>
           </div> 
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="SUV-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="SUV-checkbox" className="cursor-pointer">SUV</label>
           <p className="text-slate-400">(12)</p>
           </div>
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="mpv-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="mpv-checkbox" className="cursor-pointer">MPV</label>
           <p className="text-slate-400">(16)</p>
           </div>
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="Sudan-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="Sudan-checkbox" className="cursor-pointer">Sudan</label>
           <p className="text-slate-400">(20)</p>
           </div>
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="Coupe-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="Coupe-checkbox" className="cursor-pointer">Coupe</label>
           <p className="text-slate-400">(14)</p>
           </div>
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="Hatchback-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="Hatchback-checkbox" className="cursor-pointer">Hatchback</label>
           <p className="text-slate-400">(14)</p>
           </div>  
          
          </div>
      </div>
      <div className="flex flex-col gap-6 my-12">
          <p style={{letterSpacing: '4px'}} className="text-slate-400 xs:text-[10px] sm:text-[10px] text-xs py-4 ">CAPASITY</p>
          <div className="h-auto flex flex-col gap-6 ">
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="2-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="2-checkbox" className="cursor-pointer">2 people</label>
           <p className="text-slate-400">(10)</p>
           </div> 
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="4-checkbox" className="h-3 w-3 rounded-xl" type="checkbox"></input>
           <label htmlFor="4-checkbox" className="cursor-pointer">4 people</label>
           <p className="text-slate-400">(14)</p>
           </div>
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="6-checkbox" className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="6-checkbox" className="cursor-pointer">6 people</label>
           <p className="text-slate-400">(12)</p>
           </div>
           <div className="flex items-center xs:text-[10px] sm:text-[10px] xs:gap-1 sm:gap-1 text-lg  gap-3">
           <input id="8-checkbox"  className="h-3 w-3 rounded-lg" type="checkbox"></input>
           <label htmlFor="8-checkbox" className="cursor-pointer">8 orMore</label>
           <p className="text-slate-400">(16)</p>
           </div>
          
           
          </div>
      </div>
                <div>
                <div className="flex flex-col gap-6 my-12">
                    <p style={{letterSpacing: '4px'}} className="text-slate-400 text-sm py-4 ">PRICE</p>
                    <div className="h-auto flex flex-col gap-8  ">
                     
                    <Rangeslid min={0}  max={100} value={value} onChange={setValue} bufferd={0}
                    
                    />
                    <p className='text-2xl '>Max${value}.00</p>
                     </div>
                    
                     </div>
                    
                </div>
            </div>
            
                <div className=' px-16 lg:px-14 py-12 w-full xs:px-4 xs:py-4 sm:px-6 sm:py-6 md:px-6 md:py-6 h-full'> 
                   <div className='relative flex 2xl:flex-col xs:flex-col xl:flex-col sm:flex-col md:flex-col lg:flex-col 2xl:w-full justify-between md:gap-14 w-full lg:gap-16 xl:gap-16 2xl:gap-16 gap-12 items-center '>
                    <div tabIndex={0} className='relative xl:static xs:static xs:w-full sm:static sm:w-full md:static md:w-full lg:static 2xl:static top-1 focus:z-20  xl:w-full  lg:w-full 2xl:w-full w-full inline-block'><Pickup className='2xl:px-16 md:px-8 xl:px-8 w-full' /></div>
                    <div className="absolute right-[46.9%] sm:right-[41%] md:top-[39%] xs:top-[40%] xs:right-[41%] xl:top-[37%] 2xl:top-[37%] 2xl:h-24 lg:top-[37%] sm:top-[37%]  2xl:w-24 xs:h-16 xs:w-16 xl:h-24  lg:w-24 lg:h-24  xl:w-24 flex justify-center items-center h-20 w-20 z-10 rounded-md bg-blue-500"><LuArrowUpDown className="text-white text-2xl" /></div>
                    <div tabIndex={0} className='relative xl:static xs:static xs:w-full md:static md:w-full sm:static sm:w-ful lg:w-full lg:static 2xl:static 2xl:w-full xl:w-full focus:z-10  bottom-1 w-full inline-block'><Dropoff className='md:px-8 2xl:px-16 xl:px-8 w-full'/></div>
                    
                   </div>
                   <div className="grid gap-y-6 sm:grid-cols-1 xs:grid-cols-1 grid-cols-3 xl:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-rows-8   grid-rows-3 2xl:gap-6 lg:gap-4 gap-[90px]   pr-0 mt-10">
            {arryCar.map((c)=>{
              return(
                
                  <Cartwo key={c.carcatagory} className="" carname={c.carname} carcatagory={c.carcatagory} carpic={c.carpic} carfuel={c.carfuel} cardrive={c.cardrive}
                   carcapasity={c.carcapasity} carprice={c.carprice} carptwo={c.carptwo} />

               

              )
            })}
            </div>
           
            <div className="flex justify-between h-[200px] items-center">
              <div className="bg-[#E0E9F4] h-3 w-3"></div>
            <button className="w-[200px] h-[50px] text-xl xs:text-[14px] xs:w-[120px] sm:text-[16px] sm:w-[140px] bg-blue-500 rounded-md text-white mt-8">Show more Car</button>
            <p className="text-slate-300 text-xl">120Car</p>
            </div>
                   

                </div>
          

        </div>
    )
}