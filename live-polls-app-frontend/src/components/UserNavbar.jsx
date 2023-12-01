import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserNavbar = () => {
  return (
    <nav className="w-full flex flex-col">
        <div className="flex justify-center w-full  bg-[#0066F7]">
            <div className="w-1/4 flex justify-between py-2">
                <span className="text-white text-xl font-medium">Welcome</span>
                <span className="text-white text-xl font-medium">User1</span>
            </div>
        </div>
        <div className="w-full bg-white shadow-lg py-2 flex justify-between">
            <div className="w-[54%] flex justify-end">
                <div className="w-[32%] flex items-center justify-between">
                    <span className="text-md font-medium">Create Polls</span>
                    <span className="text-md font-medium">Live Polls</span>
                    <span className="text-md font-medium">Quiz</span>
                </div>
            </div>
            <div className=" w-1/3 flex items-center justify-end px-4">
            <FaRegUserCircle className="text-4xl" />
            </div>
        </div>
    </nav>
  )
}

export default UserNavbar