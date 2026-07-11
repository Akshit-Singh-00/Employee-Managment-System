import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import { getLocalStorag, setLocalStorag } from './utils/localStorage'
const App = () => {


  
  // useEffect(() => {
  //   // setLocalStorag()
  //   getLocalStorag()

  
  // }, )
  
  return (
    <> 
<Login/>
{/* <EmployeeDashboard/> */}
{/* <AdminDashboard/> */}
    </> // fragments
  )
}

export default App
