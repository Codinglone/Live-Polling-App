import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const UserPolls = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="px-48 flex justify-between w-full">
        <div className="w-full flex flex-col my-8">
          
        <div className="w-full bg-white shadow rounded py-4 px-4 flex flex-col">
            <p className="text-[#696F79] text-lg">
              Elephant are the largest animals in the world
            </p>
            <div className="flex justify-between w-[4vw] items-center my-2">
              <span className="text-xl font-bold"><AiOutlineLike /></span>
              <span className="text-xl font-bold"><AiOutlineDislike /></span>
            </div>
          </div>

          <div className="w-full bg-white shadow rounded py-4 mt-6 px-4 flex flex-col">
            <p className="text-[#696F79] text-lg">
              Elephant are the largest animals in the world
            </p>
            <div className="flex justify-between w-[4vw] items-center my-2">
              <span className="text-xl font-bold"><AiOutlineLike /></span>
              <span className="text-xl font-bold"><AiOutlineDislike /></span>
            </div>
          </div>

          <div className="w-full bg-white shadow rounded py-4 mt-6 px-4 flex flex-col">
            <p className="text-[#696F79] text-lg">
              Elephant are the largest animals in the world
            </p>
            <div className="flex justify-between w-[4vw] items-center my-2">
              <span className="text-xl font-bold"><AiOutlineLike /></span>
              <span className="text-xl font-bold"><AiOutlineDislike /></span>
            </div>
          </div>
         

          
          
        </div>
      </div>
    </div>
  );
};

export default UserPolls;
