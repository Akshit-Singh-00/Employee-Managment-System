import React from 'react'
import Header from './Header'

const CreateTask = () => {
  return (
     <div className="p-6 bg-[#1c1c1c] mt-7 rounded-md">
        <form className="flex justify-between gap-10">

          {/* Left Side */}
          <div className="w-1/2 space-y-5">

            <div>
              <h3 className="text-sm text-gray-300 mb-2">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI Design"
                className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-2">Date</h3>
              <input
                type="date"
                className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-2">Assign To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-2">Category</h3>
              <input
                type="text"
                placeholder="Design, Dev etc"
                className="w-full rounded border border-gray-600 bg-transparent px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

          </div>

          {/* Right Side */}
          <div className="w-1/2 flex flex-col">

            <h3 className="text-sm text-gray-300 mb-2">Description</h3>

            <textarea
              rows="8"
              placeholder="Enter task description..."
              className="w-full rounded border border-gray-600 bg-transparent p-3 text-sm resize-none outline-none focus:border-emerald-400"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full rounded bg-emerald-400 py-3 font-medium text-white transition hover:bg-emerald-500"
            >
              Create Task
            </button>

          </div>

        </form>
      </div>
  )
}

export default CreateTask
