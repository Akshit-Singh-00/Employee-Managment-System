import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] flex  items-center justify-start gap-20 flex-nowrap w-full py-5  mt-10'>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-yellow-400 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-md'>High</h3>
        <h4 className='text-lg'>20 feb 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nesciunt architecto? Quos fugiat assumenda quaerat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, natus.</p>
      </div>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-md'>High</h3>
        <h4 className='text-lg'>20 feb 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nesciunt architecto? Quos fugiat assumenda quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, molestiae?</p>
      </div>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-md'>High</h3>
        <h4 className='text-lg'>20 feb 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nesciunt architecto? Quos fugiat assumenda quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptate?</p>
      </div>
      <div className='flex-shrink-0 p-5 h-[350px] w-[400px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 px-3 py-1 rounded text-md'>High</h3>
        <h4 className='text-lg'>20 feb 2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nesciunt architecto? Quos fugiat assumenda quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere!</p>
      </div>
    </div>
  )
}

export default TaskList
