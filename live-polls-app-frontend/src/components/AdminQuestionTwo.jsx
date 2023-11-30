import React from 'react'

const AdminQuestionTwo = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
        <div className="flex items-center flex-col px-48 w-full">
            <div className='w-[60%] mt-8'>
                <div className="flex w-full flex-col items-center justify-center mt-6">
                    <div className='w-full flex justify-between mb-4'>
                        <span>Enter the answers</span>
                        <span>Tick the right answer</span>
                    </div>
              <div className='w-full flex items-center mb-12'>
              <input
                type="text"
                className="w-[70%] border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Enter the answer *"
              />
              <div className='w-[10%] flex justify-end'>
              <input
                type="Checkbox"
                className='w-6 h-6'
              />
              </div>
              </div>

              <div className='w-full flex items-center mb-12'>
              <input
                type="text"
                className="w-[70%] border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Enter the answer *"
              />
              <div className='w-[10%] flex justify-end'>
              <input
                type="Checkbox"
                className='w-6 h-6'
              />
              </div>
              </div>

              <div className='w-full flex items-center mb-12'>
              <input
                type="text"
                className="w-[70%] border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Enter the answer *"
              />
              <div className='w-[10%] flex justify-end'>
              <input
                type="Checkbox"
                className='w-6 h-6'
              />
              </div>
              </div>
              <div className='w-1/2 flex justify-between'>
              <button className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded">
                Post
              </button>
              </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default AdminQuestionTwo