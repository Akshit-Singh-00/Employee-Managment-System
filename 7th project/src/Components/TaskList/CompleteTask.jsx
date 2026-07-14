import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-green-600 px-3 py-1 rounded text-md'>
            {data.category}
          </h3>

          <h4 className='text-lg'>
            {data.taskDate}
          </h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>
          {data.taskTitle}
        </h2>

        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>

        <div className='mt-6'>
          <button className='w-full bg-green-700 py-2 rounded text-white'>
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask