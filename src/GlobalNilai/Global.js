'use client'

import { useState,useEffect } from "react"
import { createContext } from "react"

const Konteks = createContext()

function Global({children}){
    const [nilai,setnilai] = useState(10)

    return(
        <Konteks.Provider value={{nilai,setnilai}}>
           {children}
        </Konteks.Provider>
    )
}


export default Global;