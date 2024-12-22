// "use client"
// import Link from "next/link";
// import { BiSolidHomeSmile } from "react-icons/bi";
// import { useState } from "react"

// export default function Login (){
//     interface Users {
//         email : string,
//         password : string
//     }
//     const [Users , setUsers] = useState<Users>({email : "",password : ""})
//     return (
//         <div className="flex-col justify-items-center ">
//         <Link  href="/" className="flex text-4xl font-serif "><BiSolidHomeSmile />Runing Shop</Link>

//      <div className="m-20  rounded-md p-4 border-[1px] border-black w-[450px] h-[650px] "> 
//      <p className="text-4xl my-8 ">Sign in</p>
//      <ul className="">
//          <div className="h-20">
//           <li className="text-xl"> Email or mobile no.</li>
             
//              <input placeholder="Enter your Firstname " required value={Users.email} className="text-xl pl-4 w-full rounded-md border-[1px] border-black" ></input>
//          </div>
//          <div className="h-20">
//          <li className="text-xl">LastName </li>
//              <input placeholder="Enter your Lastname " required value={Users.password} className="text-xl pl-4 w-full  rounded-md border-[1px] border-black" ></input>
//          </div>
//          <Link href="" > 
//                 <div className="w-full bg-violet-700 text-center h-10 content-center rounded-md">Continue</div>
//          </Link>
   
//      </ul>
//      <Link href="/Signup"  className="my-8 flex">Create new Account? <p className="text-blue-300 ml-2">{'>'}Sign up</p></Link>
//      </div>
//  </div>
//     )
// }
// "use client"
// import React, {useRef, useState } from 'react';
// import {Button} from "@/components/ui/button"
// import { FaAngleDown } from "react-icons/fa";


// const CustomTimePicker = () => {
    
//         const containerRef = useRef<HTMLDivElement>(null);
      
//         // Scroll down function
//         const handleScrollDown = () => {
//           if (containerRef.current) {
//             containerRef.current.scrollBy({
//               top: 100, // Scroll 100px down
//               behavior: 'smooth', // Smooth scroll
//             });
//           }
//         }
//   const [hour, setHour] = useState<string>('12');
//   const [minute, setMinute] = useState<string>('00');
  
//   const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setHour(e.target.value);
//   };

//   const handleMinuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setMinute(e.target.value);
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="time-picker" className="block text-lg mb-2">Select Time:</label>

//       {/* Hour Dropdown */}
//       <select
//         id="hour-picker"
//         value={hour}
//         onChange={handleHourChange}
//         className="border-2 border-blue-500 rounded-lg p-2 text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden custom-scroll-container"
//       >
//         {[...Array(24)].map((_, hourIndex) => {
//           const formattedHour = `${hourIndex < 10 ? '0' : ''}${hourIndex}`;
//           return (
//             <option key={formattedHour}  value={formattedHour} className='text-black'> {formattedHour}
              
             
//             </option>
//           );
//         })}
//           <Button 
//         onClick={handleScrollDown}
//         className="absolute bottom-4 left-1/2 h-20 w-40 transform -translate-x-1/2 p-2 rounded-full bg-blue-500 text-black"
//       > 
//         <FaAngleDown />
//       </Button>
//       </select>

//       {/* Minute Dropdown */}
//       <select
//         id="minute-picker"
//         value={minute}
//         onChange={handleMinuteChange}
//         className="border-2 border-blue-500 rounded-lg p-2 ml-2 text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 custom-scrollbar"
//       >
//         {[...Array(60)].map((_, minuteIndex) => {
//           const formattedMinute = `${minuteIndex < 10 ? '0' : ''}${minuteIndex}`;
//           return (
//             <option key={formattedMinute} value={formattedMinute}>
//               {formattedMinute}
//             </option>
//           );
//         })}
//          <Button
//         onClick={handleScrollDown}
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-blue-500 text-white"
//       >
//         <FaAngleDown />
//       </Button>
//       </select>

//       {/* Display Selected Time */}
//       <div className="mt-2">
//         <p className="text-lg font-semibold">Selected Time: {hour}:{minute}</p>
//       </div>
//     </div>
//   );
// };

// export default CustomTimePicker;
"use client"
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CustomTimePicker = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll down function


  const [hour, setHour] = useState<string>('12');
  const [minute, setMinute] = useState<string>('00');

  const handleHourChange = (value: string) => {
    setHour(value);
  };

  const handleMinuteChange = (value: string) => {
    setMinute(value);
  };

  return (
    <div className="flex">
      <label htmlFor="time-picker" className="block text-lg mb-2">Select Time:</label>

      {/* Hour Dropdown using ShadCN Select */}
      <div className="">
        <Select value={hour} onValueChange={handleHourChange}>
          <SelectTrigger className="border-2 border-blue-500 rounded-lg p-2 text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Hour" />
          </SelectTrigger>
          <SelectContent ref={containerRef}>
            {[...Array(24)].map((_, hourIndex) => {
              const formattedHour = `${hourIndex < 10 ? '0' : ''}${hourIndex}`;
              return (
                <SelectItem key={formattedHour} value={formattedHour} className="text-black">
                  {formattedHour}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        {/* Scroll down button inside the hour select dropdown */}
       
      </div>

      {/* Minute Dropdown using ShadCN Select */}
      <div className="">
        <Select value={minute} onValueChange={handleMinuteChange}>
          <SelectTrigger className="border-2 border-blue-500 rounded-lg p-2 text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
            <SelectValue placeholder="Select Minute" />
          </SelectTrigger>
          <SelectContent ref={containerRef}>
            {[...Array(60)].map((_, minuteIndex) => {
              const formattedMinute = `${minuteIndex < 10 ? '0' : ''}${minuteIndex}`;
              return (
                <SelectItem key={formattedMinute} value={formattedMinute}>
                  {formattedMinute}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        {/* Scroll down button inside the minute select dropdown */}
       
      </div>

      {/* Display Selected Time */}
      <div className="mt-2">
        <p className="text-[10px]">Selected Time: {hour}:{minute}</p>
      </div>
    </div>
  );
};

export default CustomTimePicker;
