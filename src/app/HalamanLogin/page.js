'use client'

import { useEffect,useState } from "react"
import { useContext } from "react"
import  {Login}  from '@/komponentLogin/login'
import Head from 'next/head'
import LoginFb from '@/komponentLogin/facebookLogin'




export default function HalamanLogin(){

    return(
        <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
       />
        <title>My Next.js App</title>
      </Head>
           <Login/>
           <LoginFb/>
        </div>
    )
}