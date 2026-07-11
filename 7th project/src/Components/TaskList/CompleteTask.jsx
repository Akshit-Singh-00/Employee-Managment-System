import React from 'react'

const CompleteTask = () => {
  return (
    <div>
       <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-md'>High</h3>
        <h4 className='text-lg'>20 feb 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nesciunt architecto? Quos fugiat assumenda quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptate?</p>
        <div className='mt-2'>
            <button className='w-full'>Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
