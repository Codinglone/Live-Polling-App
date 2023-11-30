import React from 'react'

const AdminCreatePoll = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
        <div className='flex items-center flex-col px-48 w-full'>
            <div className='w-[56%] mt-8'>
                <div className='flex flex-col'>
                    <span className='text-center text-xl font-medium'>generated code</span>
                    <span className='text-center text-xl font-medium'>1234</span>
                </div>
                <div>
                <div className="flex w-full flex-col items-center justify-center mt-6">
                <input
                  type="text"
                  className="w-full border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                  placeholder="Enter The Poll"
                />
                <button className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded">
                Post
              </button>
              </div>
                </div>
            </div>
            <div className='w-full flex flex-col'>
            <div className="w-full bg-white shadow py-8 rounded px-4 mt-6 flex flex-col">
            <p className="text-[#696F79] text-lg text-center">
              AI is one of greatest inventions in the world
            </p>
          </div>

          <div className="w-full bg-white shadow py-8 rounded px-4 mt-2 flex flex-col">
            <p className="text-[#696F79] text-lg text-center">
              AI is one of greatest inventions in the world
            </p>
          </div>
            </div>
        </div>
    </div>
  )
}

export default AdminCreatePoll