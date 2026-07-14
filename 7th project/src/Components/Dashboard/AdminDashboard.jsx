import React, { useContext } from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = () => {

const { userData } = useContext(AuthContext);

  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <CreateTask />
      <AllTask data={userData?.employees || []}/>
    </div>
  )
}

export default AdminDashboard