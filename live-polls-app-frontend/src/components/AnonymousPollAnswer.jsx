import React from 'react'

const AnonymousPollAnswer = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
        <div className='flex items-center flex-col py-12 px-48 w-full'>

            <div>
                <span className='text-xl font-semibold'>Elephant are the largest animals in the world</span>
            </div>
            <div className='w-1/2 pl-8 flex justify-between flex-wrap py-8'>
                <span className='w-full rounded shadow bg-white hover:bg-[#0066F7] text-center py-2 mt-6'>Yes</span>
                <span className='w-full rounded shadow bg-white hover:bg-[#0066F7] text-center py-2 mt-6'>Yes</span>
                <span className='w-full rounded shadow bg-white hover:bg-[#0066F7] text-center py-2 mt-6'>Yes</span>
                <span className='w-full rounded shadow bg-white hover:bg-[#0066F7] text-center py-2 mt-6'>Yes</span>

            </div>
        </div>
    </div>
  )
}

export default AnonymousPollAnswer