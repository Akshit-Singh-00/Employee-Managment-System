import React from 'react'

const AcceptTask = () => {
  return (
    <div>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-yellow-400 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-md'>High</h3>
        <h4 className='text-lg'>20 feb 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nesciunt architecto? Quos fugiat assumenda quaerat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, natus.</p>
        <div className='flex justify-center mt-4'>
        <button className='bg-green-500 px-2 py-1 text-md'>Mark as Completed</button> 
        <button className='bg-red-500 px-2 py-1 text-md'>Mark as Failed</button> 
      </div>
      </div>
      
    </div>
  )
}

export default AcceptTask
