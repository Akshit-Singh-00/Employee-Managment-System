import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorag,setLocalStorag } from '../utils/localStorage'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
      // localStorage.clear()
        setLocalStorag()
      const {employees,admin}=getLocalStorag()
    setUserData({employees,admin})
    },[] )
    
    // const data=getLocalStorag()
    // console.log(data.employees)
    // console.log(data.admin)
  return (

        <AuthContext.Provider value={userData}>
      {children}
      </AuthContext.Provider>
 
  )
}

export default AuthProvider
