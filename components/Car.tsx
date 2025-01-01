// "use client"

// import { IoHeartOutline } from "react-icons/io5";
// import Image from "next/image";
// import gas from "@/public/images/gas.svg";
// import people from "@/public/images/people.png";
// import drive from "@/public/images/drive.svg";
// import { useState } from "react";
// import { IoHeart } from "react-icons/io5";
// import { urlFor } from "@/sanity/lib/image";

// interface CarProps {
//   carname: string;
//   carcatagory: string;
//   carpic: any;
//   carfuel: string;
//   cardrive: string;
//   carcapasity: string;
//   carprice: string;
//   carptwo?: string;
//   className? : unknown;
// }

// export default function Cartag({
//   carname,
//   carcatagory,
//   carpic,
//   carfuel,
//   cardrive,
//   carcapasity,
//   carprice,
//   carptwo = "",
//   className,
// }: CarProps) {
//     const [fav, setfav] = useState<boolean>(false)

//   return (
//     <div className={`h-auto lg:h-auto   w-full bg-white xl:px-3 xs:px-4 xs:py-4 sm:px-4 sm:py-4 px-6 py-6 pb-2 rounded-md ${className}`}>
//       <div className="flex justify-between">
//         <p className="text-2xl font-bold">{carname}</p>
//         <div>
//             {fav ? (<IoHeart onClick={()=>{setfav(!fav)}} className="text-3xl text-red-500 "/>) : (<IoHeartOutline onClick={()=>{setfav(!fav)}} className="text-3xl text-slate-300 "/>)}
          
//         </div>
//       </div>
//       <p className="text-slate-300">{carcatagory}</p>
//       <div className="h-[180px] xl:w-[340px]  lg:w-[310px] md:w-[260px] sm:w-[230px] xs:w-[230px] flex justify-center items-center">
        
//         <Image  src={urlFor(carpic).url()} alt="Carpic"/ >
//       </div>
//       <div className="flex justify-between lg:mt-3 text-slate-300">
//         <div className="flex xs:text-[12px] xs:items-center sm:text-[12px] sm:items-center">
//           <Image src={gas} alt="" />
//           {carfuel}
//         </div>
//         <div className="flex xs:text-[12px] xs:items-center sm:text-[12px] sm:items-center">
//           <Image src={drive} alt="" />
//           {cardrive}
//         </div>
//         <div className="flex xs:text-[12px] xs:items-center sm:text-[12px] sm:items-center">
//           <Image src={people} alt="" />
//           {carcapasity}
//         </div>
//       </div>
//       <div className="flex justify-between items-center h-auto">
//         <div className="flex items-start text-2xl font-bold relative top-3">
//           <div>
//           {carprice}
//           <div className='text-slate-300 text-lg   '>{carptwo}</div> 
//           </div><p className="text-slate-300 my-2 text-sm font-normal text-end pl-1">day</p>
//         </div>
//         <a href="/detail">
//         <button className="w-[144px] xl:w-[120px] lg:w-[120px] xs:w-[90px] xs:text-[16px] xs:h-[45px] sm:w-[90px] sm:h-[45px] md:w-[100px] sm:text-[16px] md:text-lg h-[50px] text-xl bg-blue-400 rounded-md text-white xl:mb-6  mt-8">
//           Rental Now
//         </button></a>
//       </div>
      
      
//     </div>
//   );
// }

import gas from "@/public/images/gas.svg";
import people from "@/public/images/people.png";
import drive from "@/public/images/drive.svg";



import { IoHeartOutline, IoHeart } from "react-icons/io5";
import Image from "next/image";
import { useState  } from "react";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";



interface CarProps {
  carname: string;
  carcatagory: string;
  carpic: string 
  carfuel: string;
  cardrive: string;
  carcapasity: string;
  carprice: string;
  carptwo?: string;
  className?: string;
  link : string ;
}

export default  function Cartag({
  carname,
  carcatagory,
  carpic,
  carfuel,
  cardrive,
  carcapasity,
  carprice,
  carptwo = "",
  className,
  link
}: CarProps) {
  const [fav, setfav] = useState<boolean>(false);
 
  

  return (
    <div className={`h-auto lg:h-auto  bg-white xl:px-3 xs:px-4 xs:py-4 sm:px-4 sm:py-4 px-6 py-6 pb-2 rounded-md ${className}`}>
      <div className="flex justify-between">
        <p className="text-2xl font-bold">{carname}</p>
        <div>
          {fav ? (
            <IoHeart onClick={() => { setfav(!fav); }} className="text-3xl text-red-500" />
          ) : (
            <IoHeartOutline onClick={() => { setfav(!fav); }} className="text-3xl text-slate-300" />
          )}
        </div>
      </div>
      <p className="text-slate-300">{carcatagory}</p>
      <div className="h-[180px] xl:w-[340px] m2xl:w-[360px] 2xl:w-[360px] lg:w-[310px] md:w-[260px] sm:w-[230px] xs:w-[230px] flex  items-center">
        <Image src={urlFor(carpic).url()} alt="Carpic" width={240} height={0} layout="intrinsic" className="pl-[5%]"/>
      </div>
      <div className="flex justify-between lg:mt-3 text-slate-300">
        <div className="flex xs:text-[12px] xs:items-center sm:text-[12px] sm:items-center">
          {/* Replace with your icons or props */}
           <Image src={gas} alt="" /> 
          {carfuel}
        </div>
        <div className="flex xs:text-[12px] xs:items-center sm:text-[12px] sm:items-center">
        <Image src={drive} alt="" />
          {cardrive}
        </div>
        <div className="flex xs:text-[12px] xs:items-center sm:text-[12px] sm:items-center">
        <Image src={people} alt="" />
          {carcapasity}
        </div>
      </div>
      <div className="flex justify-between items-center h-auto">
        <div className="flex items-start text-2xl font-bold relative top-3">
          <div>
            {carprice}
            <div className="text-slate-300 text-lg line-through">{carptwo}</div>
          </div>
          <p className="text-slate-300 my-2 text-sm font-normal text-end pl-1">day</p>
        </div>
        
        <Link  href={link || ""} legacyBehavior>
        <a className="my-link-class" target="_blank" rel="noopener noreferrer">
          <button className="w-[144px] xl:w-[120px] lg:w-[120px] xs:w-[90px] xs:text-[16px] xs:h-[45px] sm:w-[90px] sm:h-[45px] md:w-[100px] sm:text-[16px] md:text-lg h-[50px] text-xl bg-blue-400 rounded-md text-white xl:mb-6 mt-8">
            Rental Now
          </button>
          </a>
        </Link>
          
      </div>
    </div>
  );
}
