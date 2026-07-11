import React, { useContext, useEffect, useEffectEvent, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

import { admin, employees, getLocalStorag, setLocalStorag } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  const [user, setUser] = useState(null);
  const [loogedInUserData, setloogedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])


  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      // console.log("This is admin")
    }

    // console.log(email,password)
    else if (authData) {
      const employee=authData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){

        setUser('employee')
        setloogedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }
 // console.log("This is user")
    }
    else {
      alert("Invalid Credentials")
    }
  }
  //  handleLogin('user@example.com','123')

  // useEffect(() => {
  //   // setLocalStorag()
  //   getLocalStorag()


  // }, )



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin'? <AdminDashboard/>:( user=='employee'?<EmployeeDashboard data={loogedInUserData}/>:null)}
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </> // fragments
  )
}

export default App
