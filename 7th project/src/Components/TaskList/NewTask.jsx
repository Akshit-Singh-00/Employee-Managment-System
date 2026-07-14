import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-blue-700 px-3 py-1 rounded text-md'>
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
          <button className='w-full bg-blue-700 py-2 rounded text-white'>
            New Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTask