"use client"
import Link from "next/link";
import { useEffect, useState } from "react"
import { BiSolidHomeSmile } from "react-icons/bi";

export default function Signup (){
    interface users {
        firstname : string,
        lastname : string,
        email : string,
        password : string,
        re_password : string,
    }
    const [matchmail , setmatchmail] = useState(false)
    const [mismatch , setmismatch]= useState(false)
    const  [user,setuser]= useState<users>({firstname : "",
        lastname : "",
        email : "",
        password : "",
        re_password : "",})
    const [client , setclient]= useState<users[]>([])
    useEffect(() => {
            const savedClients = localStorage.getItem("clients");
            if (savedClients) {
              setclient(JSON.parse(savedClients)); // Load clients from localStorage
            }
    }, []);
        class users implements users {
            firstname : string;
        lastname : string;
        email : string;
        password : string;
        re_password : string;
        constructor (firstname : string,
            lastname : string,
            email : string,
            password : string,
            re_password : string,){
                this.firstname = firstname,
                this.lastname = lastname ,
                this.email = email,
                this.password = password
                this.re_password = re_password
            }

        }
    
    const data = (input: React.ChangeEvent<HTMLInputElement> )=> {
        setuser({...user, [input.target.name] : input.target.value});
      }  
    const addclient = (e : React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();

    }
    const signup = ()=>{
        const isEmailExist = client.some((existingUser) => existingUser.email === user.email)
        if(user.password !== user.re_password){  
            setmismatch(!mismatch)
        }else if (isEmailExist){
            setmatchmail(!matchmail)
        }
         else{
            client.push(new users (user.firstname, user.lastname,user.email,user.password,user.re_password)) 
           

                
           
          
            
            
            
            setmismatch(mismatch)
        }
       

    }
    console.log(client);
    
    
    return (
        <div className="flex-col justify-items-center ">
                <Link  href="/" className="flex text-4xl font-serif "><BiSolidHomeSmile />Runing Shop</Link>

            <div className="m-20  rounded-md p-4 border-[1px] border-black w-[450px] h-[650px] "> 
            <p className="text-4xl my-8 ">Create Account</p>
            <ul className="">
                <div onSubmit={addclient} className="h-20">
                 <li className="text-xl"> FirstName</li>
                    
                    <input placeholder="Enter your Firstname " type="text"  name="firstname" contentEditable="true" onChange={data} required value={user.firstname} className="text-xl pl-4 w-full rounded-md border-[1px] border-black" ></input>
                </div>
                <div className="h-20">
                <li className="text-xl">LastName </li>
                    <input placeholder="Enter your Lastname " type="text"  name="lastname"  contentEditable="true" onChange={data} required value={user.lastname} className="text-xl pl-4 w-full  rounded-md border-[1px] border-black" ></input>
                </div>
                <div className="h-20">
                <li className="text-xl">Email or mobile no</li>
                    <input placeholder="Email or mobile no. " type="email"  name="email" contentEditable="true" onChange={data} required value={user.email} className="text-xl pl-4 w-full rounded-md border-[1px] border-black" ></input>
                    {matchmail && (<div className="text-red-500 my-4 text-end">mail have already taken</div>)}
                </div>
                <div className="h-20">
                <li className="text-xl">Password</li>
                    <input placeholder="Enter your Password " type="password" name="password" contentEditable="true" onChange={data} required value={user.password} className="text-xl pl-4 w-full rounded-md border-[1px] border-black" ></input>
                 </div>
                <div className="h-20">
                <li className="text-xl">Re-Password</li>
                    <input placeholder="Confirm Password" type="password" name="re_password" contentEditable="true" onChange={data} required value={user.re_password} className="text-xl pl-4 w-full rounded-md border-[1px] border-black mb-2" ></input>
                    {mismatch && (<div className="text-red-500 relative bottom-2">
                        <div >Password do not match</div>
                    </div>)}
                </div>
                <Link href=""> 
                <button type="submit" onClick={signup}  className="w-full bg-violet-700 text-center h-10 content-center rounded-md mt-2">Continue</button>
                </Link>
            </ul>
            <Link href="/Login"  className="my-8 flex">You have already an'Account? <p className="text-blue-300 ml-2">{'>'}Longin</p></Link>
            </div>
        </div>
    )
}