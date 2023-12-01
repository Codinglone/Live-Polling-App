import React from 'react'

const UserOne = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
        <div className='flex items-center flex-col py-12 px-48 w-full'>
            <div className='flex justify-center mb-12'>
                <span>1/2</span>
            </div>
            <div>
                <span className='text-xl font-semibold'>Elephant are the largest animals in the world</span>
            </div>
            <div className='w-1/2 pl-8 flex justify-between flex-wrap py-8'>
                <span className='w-[45%] rounded border border-gray-700 text-center py-2 mt-6'>Yes</span>
                <span className='w-[45%] rounded border border-gray-700 text-center py-2 mt-6'>Yes</span>
                <span className='w-[45%] rounded border border-gray-700 text-center py-2 mt-6'>Yes</span>
                <span className='w-[45%] rounded border border-[#0066F7] bg-[#0066F7] text-white text-center py-2 mt-6'>Yes</span>

            </div>
            <div className='w-1/2 flex justify-end'>

              <button className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded">
                Answer
              </button>
            </div>
        </div>
    </div>
  )
}

export default UserOne