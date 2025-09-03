"use client"

import { useState,useEffect } from "react";
import Head from "next/head";
import './login.css'


export default function LoginFb() {

    useEffect(() => {
  
    if (!window.FB) {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : "YOUR_APP_ID",
          cookie     : true,
          xfbml      : true,
          version    : "v16.0"
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }
  }, []);


  function loginFacebook(){
      if(!window.FB){
        alert('sdk belum siap')
      }

      else{
        window.FB.login(function(response){
          if(!response.authResponse){
            alert('coba lagi login')
          }
          else{
            if(! response.authResponse.accessToken){
              console.log('token tidak ada')
            }
            else{
            
            try{
              const TokenFb = response.accessToken;
              async function sendTokenFb(){
                const API = 'ansaknaks';
                const ress = await axios.post(API,{},{
                  headers:{ Authorization:`Bearer ${TokenFb}`}
                })
                console.log(ress?.data?.message)
              }
              sendTokenFb()
            }
            catch(err){
              alert('gagal login')
            }
          }
      }})
      }
  }


  return (
    <div className="flex justify-center  relative">
      <Head>
   
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"/>

      </Head>
        <button onClick={()=> loginFacebook()}><i className=" facebook  bi bi-facebook text-blue-600"></i></button>
    </div>
  )
}
