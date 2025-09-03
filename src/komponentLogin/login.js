"use client"
import { useState,useEffect } from "react"
import './login.css'
import { useRouter } from 'next/navigation'




export  function Login(){
 
    const [username , setusername] = useState('12');
    const [password , setpassword] = useState('231');

    const router = useRouter()
    
    function login(){
      if(username =="" || password ==""){
         alert('username/password tidak boleh kosong')
      }

      else{
        router.push('/pembayaran')
      }
    }
   

    return(
        <main>
           <div className="container-input flex flex-col gap-5  w-90 h-100  justify-center items-center relative top-40 left-5 sm:w-400 sm:left-[-400px] ">
              <input className="input relative  border bg-yellow-700 p-2 rounded-lg placeholder-white"placeholder="username"></input>
              <input className="input relative  bg-yellow-700 p-2 rounded-lg placeholder-white" placeholder="password"></input>
              <button className="border border-red-500 rounded-lg w-50 p-2 relative" onClick={()=> {login()}}>Login</button>
           </div>
        </main>
    )
}