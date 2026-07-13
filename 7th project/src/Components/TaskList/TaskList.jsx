import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] flex  items-center justify-start gap-20 flex-nowrap w-full py-5  mt-10'>
      {data.tasks.map((e)=>{
        // console.log(e)
        if(e.active){
          return <AcceptTask/>
        }
        if(e.NewTask){
          return <NewTask />
        }
        if(e.completed){
          return <CompleteTask />
        }
        if(e.failed){
          return <FailedTask />
        }
        // return <h1>Hello</h1>
      })}
      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}
    </div>
  )
}

export default TaskList
