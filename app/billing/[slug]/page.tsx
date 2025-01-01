"use client"

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Select } from "@/components/ui/select"
import {
    
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    
  } from "@/components/ui/select"
import ReviewStar from "@/public/images/ReviewStar.svg"  
import Visa from "@/public/images/Visa.svg"
import Paypal from "@/public/images/PayPal.svg"
import Bitcoin from "@/public/images/Bitcoin.svg"
import { urlFor } from "@/sanity/lib/image";
import React from "react";
interface PostProps {
    name: string;
    slug: { current: string };
    catagory: string;
    image: string;
    fuel: string;
    handle: string;
    capasity: string;
    price: string;
    secondprice: string;
  }

const Billing = ({params}: {params: {slug : string}}) => {
    const [post, setPost] = useState<PostProps | null>(null);
    const query3 = `*[_type == "car"  && slug.current == "${params.slug}" || _type == "cartwo"  && slug.current == "${params.slug}" || _type == "carct"  && slug.current == "${params.slug}" ]{
        name,
        slug,
        catagory,
        image,
        fuel,
        handle,
        capasity,
        price,
        secondprice
      }`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            
            const sanitydata3 = await client.fetch(query3);
            console.log(sanitydata3[0]); 
      
            
            setPost(sanitydata3[0]); 
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
        fetchData();
      }, [params.slug]);
      const pr : string | undefined = post?.price?.slice(0,6);
      return (
        < div className="flex gap-12 xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-col-reverse bg-[#F6F7F9] xs:px-4 xs:py-4  sm:px-6 sm:py-6 md:px-6 md:py-6 px-10 py-10">
        <div className=" xl:w-full xs:w-full sm:w-full lg:w-full md:w-full w-2/3">   
        <div className="px-6 py-8 xs:py-2 sm:py-2 bg-white rounded-xl  ">
            <div className="flex justify-between my-6 ">
            <div>
                <p className="text-3xl sm:text-2xl xs:text-xl font-bold">Billing Info</p>
                <p className="text-slate-400 xs:text-xs sm:text-sm text-lg">Please enter your billing info</p>
            </div>
            <div className="flex items-end">
            <p className="text-slate-400 xs:text-sm sm:text-[16px] text-xl">Step 1 of 4</p>
            </div>
            </div>
            <div className="grid grid-cols-2 xs:flex xs:grid-cols-none sm:flex sm:grid-cols-none md:flex md:grid-cols-none lg:flex lg:grid-cols-none flex-col gap-x-10  grid-rows-2">
                <div className="my-3">
                <label className="text-2xl sm:text-lg xs:text-lg my-2 block">Name</label>
                <input className="px-6 py-5 w-full xs:py-3  rounded-xl bg-[#F6F7F9]" typeof="text" placeholder="Yourname"></input>
                </div>
                <div className="my-3">
                <label className="text-2xl sm:text-lg xs:text-lg my-2 block">Phone Number</label>
                <input className="px-6 py-5 w-full xs:py-3 rounded-xl bg-[#F6F7F9]" typeof="text" placeholder="Phonenumber"></input>
                </div>
                <div className="my-3">
                <label className="text-2xl sm:text-lg xs:text-lg my-2 block">Address</label>
                <input className="px-6 py-5 w-full xs:py-3 rounded-xl bg-[#F6F7F9]" typeof="text" placeholder="Address"></input>
                </div>
                <div className="my-3">
                <label className="text-2xl sm:text-lg xs:text-lg my-2 block ">Town / City</label>
                <input className="px-6 py-5 w-full xs:py-3 rounded-xl bg-[#F6F7F9]" typeof="text" placeholder="Town or City"></input>
                </div>
            </div>

        </div>
        <div className="px-6 sm:py-2 xs:py-2 sm:pb-6 xs:pb-6 py-8 my-10 bg-white rounded-xl  ">
        <div className="flex justify-between my-6 ">
            <div>
                <p className="text-3xl sm:text-2xl xs:text-xl font-bold">Rental Info</p>
                <p className="text-slate-400 xs:text-xs sm:text-sm text-lg">Please your rental date</p>
            </div>
            <div className="flex items-end">
            <p className="text-slate-400 xs:text-sm sm:text-[16px] text-xl">Step 2 of 4</p>
            </div>
          
            </div>
            <div className="flex my-6 items-center"><input type="radio" name="dot" className="h-5 w-5 mr-2" ></input>
          <p className="font-bold xs:text-lg text-xl">Pick-Up</p>
          </div>
          <div className="grid grid-cols-2 xs:flex xs:grid-cols-none sm:flex sm:grid-cols-none md:flex md:grid-cols-none lg:flex lg:grid-cols-none flex-col gap-x-10 grid-rows-2">
          <div>
          <label className="text-2xl my-2 xs:text-lg sm:text-lg block">Locations</label>
          <Select >
            <SelectTrigger className="w-full bg-[#F6F7F9] px-6 rounded-xl py-8 xs:py-6  border-none focus:outline-none active:outline-none text-slate-400 ">
  
              <SelectValue className=" px-6" placeholder="Select your city" />
    
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Karachi</SelectItem>
              <SelectItem value="dark">Lahore</SelectItem>
              <SelectItem value="system">Quetta</SelectItem>
              <SelectItem value="hh">Islamabad</SelectItem>
            </SelectContent>
          </Select>
          </div>
          <div className="">
                <label className="text-2xl xs:text-lg sm:text-lg my-2 block">Date</label>
                <input className="px-6 py-5 w-full xs:py-3  rounded-xl bg-[#F6F7F9]" type="date" placeholder="Select your date" ></input>
        </div>
        <div className="">
                <label className="text-2xl xs:text-lg sm:text-lg my-2 block">Time</label>
                <input className="px-6 py-5 xs:py-3 w-full  rounded-xl bg-[#F6F7F9]" type="time" placeholder="Select your date" ></input>
        </div>
        </div>
        <div className="flex my-6 mt-9 items-center"><input type="radio" name="dot" className="h-5 w-5 mr-2" ></input>
          <p className="font-bold xs:text-lg text-xl">Drop-Off</p>
          </div>
          <div className="grid grid-cols-2 xs:flex xs:grid-cols-none sm:flex sm:grid-cols-none md:flex md:grid-cols-none lg:flex lg:grid-cols-none flex-col gap-x-10 grid-rows-2">
          <div>
          <label className="text-2xl xs:text-lg sm:text-lg my-2 block">Locations</label>
          <Select >
            <SelectTrigger className="w-full bg-[#F6F7F9] px-6 rounded-xl py-8 xs:py-6   border-none focus:outline-none active:outline-none text-slate-400 ">
  
              <SelectValue className=" px-6" placeholder="Select your city" />
    
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Karachi</SelectItem>
              <SelectItem value="dark">Lahore</SelectItem>
              <SelectItem value="system">Quetta</SelectItem>
              <SelectItem value="hh">Islamabad</SelectItem>
            </SelectContent>
          </Select>
          </div>
          <div className="">
                <label className="text-2xl xs:text-lg sm:text-lg my-2 block">Date</label>
                <input className="px-6 py-5 xs:py-3 w-full  rounded-xl bg-[#F6F7F9]" type="date" placeholder="Select your date" ></input>
        </div>
        <div className="">
                <label className="text-2xl xs:text-lg sm:text-lg my-2 block">Time</label>
                <input className="px-6 py-5 xs:py-3 w-full  rounded-xl bg-[#F6F7F9]" type="time" placeholder="Select your time" ></input>
        </div>
        </div>

        </div>
        <div className="px-6 py-8 xs:py-2 sm:py-2 bg-white rounded-xl  ">
        <div className="flex justify-between xs:items-center my-6 ">
            <div>
                <p className="text-3xl xs:text-xl sm:text-2xl font-bold">Payment Method</p>
                <p className="text-slate-400 xs:text-xs w-36 sm:text-xs text-lg">Please enter your payment method</p>
            </div>
            <div className="flex sm:mt-2 items-end">
            <p className="text-slate-400 xs:text-sm mt-3 sm:text-[16px] text-xl">Step 3 of 4</p>
            </div>
            </div>
            <div className="px-6 py-8 rounded-xl bg-[#F6F7F9] ">
                <div className="flex justify-between">
            <div className="flex my-6 items-center"><input type="radio" name="dot" className="h-5 w-5 mr-2" ></input>
          <p className="font-bold xs:text-lg sm:text-lg text-xl">CraditCard</p>
          </div>
          <Image src={Visa} className="sm:w-16 xs:w-12" alt="" />

          </div>
          <div className="grid grid-cols-2 xs:flex xs:grid-cols-none sm:flex sm:grid-cols-none md:flex md:grid-cols-none lg:flex lg:grid-cols-none flex-col gap-x-10 grid-rows-2">
          <div className="my-4">
                <label className="text-2xl my-2 xs:text-lg sm:text-lg block">CardNumber</label>
                <input className="px-6 py-5 w-full xs:py-3  rounded-xl bg-white" typeof="text" placeholder="Cardnumber"></input>
                </div>
                <div className="my-4">
                <label className="text-2xl my-2 xs:text-lg sm:text-lg block">Experties Date</label>
                <input className="px-6 py-5 xs:py-3 w-full  rounded-xl bg-white" type="date" ></input>
                </div>
                <div className="my-4">
                <label className="text-2xl my-2 xs:text-lg sm:text-lg block">CardHolder</label>
                <input className="px-6 py-5 xs:py-3 w-full  rounded-xl bg-white" typeof="text" placeholder="Cardholder"></input>
                </div>
                <div className="my-4">
                <label className="text-2xl my-2 xs:text-lg sm:text-lg block">CVC</label>
                <input className="px-6 py-5 xs:py-3 w-full  rounded-xl bg-white" typeof="text" placeholder="CVC"></input>
                </div>
          </div>
          

            </div>
            <div className="flex bg-[#F6F7F9] my-8 rounded-xl px-6 justify-between">
            <div className="flex my-6 items-center"><input type="radio" name="dot" className="h-5 w-5 mr-2" ></input>
          <p className="font-bold xs:text-lg sm:text-lg text-xl">Paypal</p>
          </div>
          <Image src={Paypal} className="sm:w-16 xs:w-12" alt="" />

          </div>
          <div className="flex bg-[#F6F7F9] my-8 rounded-xl px-6 justify-between">
            <div className="flex my-6 items-center"><input type="radio" name="dot" className="h-5 w-5 mr-2" ></input>
          <p className="font-bold xs:text-lg sm:text-lg text-xl">Bitcoin</p>
          </div>
          <Image src={Bitcoin} className="sm:w-16 xs:w-12" alt="" />

          </div>
        </div>
        <div className="px-6 py-8 xs:py-2 sm:py-2 xs:pb-6 sm:pb-6 my-10 bg-white rounded-xl  ">
        <div className="flex justify-between xs:items-center  my-6 ">
            <div>
                <p className="text-3xl sm:text-2xl xs:text-xl font-bold">Confirmation</p>
                <p className="text-slate-400 xs:hidden  xs:text-xs sm:text-xs md:text-sm md:mt-2 text-lg">We are getting to the end.just few <br className="hidden xs:block sm:block md:block"/> click and your rental is ready!</p>
                <p className="text-slate-400 w-36 content-center hidden xs:block xs:text-xs">We are getting to the end. last step</p>
            </div>
            <div className="flex items-end  sm:items-center md:items-center sm:mt-3 md:mt-3">
            <p className="text-slate-400 xs:text-sm xs:mt-3 sm:text-[16px]  text-xl">Step 4 of 4</p>
            </div>
            </div>
            <div className="flex flex-col w-full  gap-8">
            <div className="px-6 py-6 xs:px-4 flex xs:items-start sm:items-start md:items-start gap-4 items-center rounded-xl bg-[#F6F7F9]">
                <input id="A" className="h-[24px] xs:h-[14px] sm:h-[16px] w-[24px]" type="checkbox"></input>
                <label htmlFor="A" className="cursor-pointer text-lg sm:text-xs xs:leading-[17px] xs:text-[8px] md:text-sm">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>

            </div>
            <div className="px-6 py-6 xs:px-4  flex gap-4 xs:items-start sm:items-start md:items-start items-center rounded-xl bg-[#F6F7F9]">
                <input id="B" className="h-[24px] xs:h-[14px] sm:h-[16px]  w-[24px]" type="checkbox"></input>
                <label htmlFor="B" className="cursor-pointer text-lg sm:text-xs xs:leading-[17px] xs:text-[8px] md:text-sm">I agree with our terms and conditions and privacy policy.</label>

            </div>
            <div>
              <a href={`/admin/${post?.slug.current}`}>
            <button className="bg-blue-600 rounded-xl text-white xs:text-sm sm:text-sm xs:px-4 sm:px-6 xs:py-3 py-4 px-8 text-xl">RentNow</button></a>
            </div>
            <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.0532 5.96044C24.1587 6.01156 23.2615 5.93978 22.3865 5.74711C21.3311 5.38571 20.344 4.84934 19.4665 4.16044C18.7158 3.62829 18.003 3.04467 17.3332 2.41377C17.0492 2.14852 16.6751 2.00098 16.2865 2.00098C15.8979 2.00098 15.5238 2.14852 15.2398 2.41377C14.5878 3.02472 13.9023 3.59894 13.1865 4.13377C12.3036 4.83173 11.3128 5.38115 10.2532 5.76044C9.25656 5.98562 8.23276 6.06645 7.21317 6.00044C6.37831 5.96587 5.54596 5.88575 4.71983 5.76044C4.51796 5.73051 4.31213 5.74155 4.11461 5.79288C3.91709 5.84421 3.73193 5.93479 3.57018 6.05922C3.40842 6.18365 3.27337 6.33938 3.1731 6.51712C3.07282 6.69486 3.00936 6.89098 2.9865 7.09377C2.91983 7.73377 2.7465 9.40044 2.6665 11.2538C2.55439 13.1055 2.67082 14.9639 3.01317 16.7871C3.97856 19.8077 5.7541 22.5056 8.1465 24.5871C10.0481 26.3808 12.11 27.9964 14.3065 29.4138C14.8951 29.8179 15.5924 30.0343 16.3065 30.0343C17.0206 30.0343 17.7178 29.8179 18.3065 29.4138C20.3865 27.9595 22.332 26.3218 24.1198 24.5204C26.3722 22.4237 28.0402 19.777 28.9598 16.8404" stroke="#1A202C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 14.6667L18.48 18.48C18.5037 18.5059 18.5326 18.5265 18.5647 18.5406C18.5968 18.5548 18.6316 18.5621 18.6667 18.5621C18.7018 18.5621 18.7365 18.5548 18.7686 18.5406C18.8007 18.5265 18.8296 18.5059 18.8533 18.48L29.3333 8" stroke="#3563E9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
            <div className="flex flex-col sm:text-sm gap-3">
                <p className="text-lg xs:text-sm sm:text-sm font-bold">All your data are safe</p>
                <p className="text-lg xs:text-sm sm:text-sm text-slate-400">We are using the most advanced security to provide you the best experience ever.</p>
            </div>
            </div>
        </div>

        </div>
        <div className="px-3 py-3 xs:w-full sm:w-full w-1/3 md:w-full lg:w-full xl:w-full h-max  bg-white rounded-xl">
            <div className="mb-10 ">
                <p className="text-3xl 2xl:text-2xl xs:text-xl sm:text-2xl font-bold">Rental Summary</p>
                <p className="text-slate-400 md:text-sm xs:text-xs sm:text-sm text-lg">Prices may change depending on the length of the rental and the price of your rental car.</p>
            </div>
            <div className="my-8 gap-4 xs:gap-2 flex">
                <div className="w-[195px] 2xl:w-[175px] sm:w-[150px] xs:w-[120px] xs:h-[97px] sm:h-[125px] 2xl:h-[145px]  h-[158px]">
                <div style={{
                  backgroundImage: "url(/images/ViewA.jpg)",  
                  backgroundSize: "cover",
                  
                  
                  
                }} className="2xl:pr-6 w-full h-full flex justify-center items-center">
                <Image tabIndex={0} width={180} height={150} src={post?.image ? urlFor(post.image).url() : ''} className="pl-[7%] lg:pl-[10%] lg:w-[220px] md:pl-[8%] md:w-[220px] xl-pl-[17%] xl:w-[300px] 2xl:pl-[13%] 2xl:w-[260px]" alt="car"/>
                </div>
                </div>
                <div className="">
                        <p className="text-4xl 2xl:text-3xl xs:text-lg sm:text-2xl font-bold">{post?.name}</p>
                        <div className=" flex justify-center xs:flex-col-reverse xs:justify-start sm:justify-start 2xl:justify-start items-center xs:my-1 my-2">
                        <Image className="inline-block xs:my-1 xs:w-12 sm:w-14 2xl:w-14" src={ReviewStar} alt="" />
                        <p className="inline-block px-2 xs:px-0 2xl:pl-[2px] xs:static relative xs:text-xs sm:text-sm 2xl:text-sm top-[3px]">440+ Reviewer</p></div>
                    </div>
            </div>
            <hr className="my-4" />
            <div>
                <div className="flex justify-between py-4 xs:text-sm xl:text-xl text-lg">
                    <p className="text-slate-400">Subtotal</p>
                    <p>{pr}</p>
                </div>
                <div className="flex justify-between py-4 xs:text-sm xl:text-xl text-lg">
                    <p className="text-slate-400">Tax</p>
                    <p>$0</p>
                </div>
                <div className="px-12 xs:px-6 xs:py-4 py-6 flex justify-between gap-4 items-center rounded-xl  bg-[#F6F7F9]">
                    <input placeholder="Apply promo code" className="bg-[#F6F7F9]  focus:outline-none text-slate-400 2xl:text-sm xs:text-xs sm:text-xs"/>
                    <p className="cursor-pointer text-xl sm:text-sm 2xl:text-lg xs:text-xs font-bold">Apply now</p>
                </div>
                <div className="flex justify-between items-center">
                <div className="my-6">
                <p className="text-3xl 2xl:text-2xl xs:text-sm sm:text-xl font-bold">Total Rental Price</p>
                <p className="text-slate-400 xs:text-xs xs:w-32 sm:text-xs md:text-xs 2xl:text-xs">Overall price and includes rental discount</p>
                </div>
                <p className="text-5xl md:text-3xl xs:text-2xl  sm:text-2xl 2xl:text-3xl">{pr}</p>


                </div>
            </div>


        </div>
        </div>
      )

}

export default Billing