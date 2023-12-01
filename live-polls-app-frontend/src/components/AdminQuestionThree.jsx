import { FaCheck } from "react-icons/fa";
const AdminQuestionThree = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col'>
          <div className='bg-[#0066F7] w-24 h-24 rounded-full flex justify-center items-center'>
          <FaCheck className="text-4xl text-[#444444]" />
          </div>
          <span className="text-center my-2 text-2xl">Posted</span>
        </div>
      </div>
    </div>
  )
}

export default AdminQuestionThree