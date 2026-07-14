import React from 'react'

const AllTask = ({ data }) => {
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-[420px] overflow-auto'>

      {/* Header */}
      <div className='bg-gray-900 text-white py-3 px-4 rounded flex justify-between font-semibold sticky top-0'>
        <h2 className='w-[25%] text-center'>Employee</h2>
        <h2 className='w-[15%] text-center'>Active</h2>
        <h2 className='w-[15%] text-center'>New</h2>
        <h2 className='w-[20%] text-center'>Completed</h2>
        <h2 className='w-[15%] text-center'>Failed</h2>
      </div>

      {/* Employee Data */}
      {data.map((employee) => (
        <div
          key={employee.id}
          className='flex justify-between items-center mt-3 text-white font-stretch-95%%'
        >
          <div className='w-[25%] bg-slate-700 py-2 rounded text-center font-extrabold'>
            {employee.firstName}
          </div>

          <div className='w-[15%] bg-yellow-500 py-2 rounded text-center font-bold'>
            {employee.taskCounts.active}
          </div>

          <div className='w-[15%] bg-blue-500 py-2 rounded text-center font-bold'>
            {employee.taskCounts.newTask}
          </div>

          <div className='w-[20%] bg-green-500 py-2 rounded text-center font-bold'>
            {employee.taskCounts.completed}
          </div>

          <div className='w-[15%] bg-red-500 py-2 rounded text-center font-bold'>
            {employee.taskCounts.failed}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllTask