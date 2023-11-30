import React from "react";

const AdminPolls = () => {
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="px-48 flex justify-between w-full">
        <div className="w-2/3 flex flex-col my-8">
          <div className="w-full bg-white shadow rounded py-4 px-4 flex flex-col">
            <p className="text-[#696F79] text-lg">
              Elephant are the largest animals in the world
            </p>
            <div className="flex justify-between my-2">
              <span className="text-xl font-bold">2</span>
              <button className="bg-[#0066F7] py-2 px-4 text-white rounded">
                Complete
              </button>
            </div>
          </div>

          <div className="w-full bg-white shadow rounded py-4 px-4 mt-10 flex flex-col">
            <p className="text-[#696F79] text-lg">
              AI is one of greatest inventions in the world
            </p>
            <div className="flex justify-between my-2">
              <span className="text-xl font-bold">15</span>
              <button className="bg-[#0066F7] py-2 px-4 text-white rounded">
                Complete
              </button>
            </div>
          </div>

          <div className="w-full bg-white shadow rounded py-4 px-4 mt-10 flex flex-col">
            <p className="text-[#696F79] text-lg">
              Human is the wise animal in the world
            </p>
            <div className="flex justify-between my-2">
              <span className="text-xl font-bold">5</span>
              <button className="bg-[#0066F7] py-2 px-4 text-white rounded">
                Complete
              </button>
            </div>
          </div>
          
        </div>
        <div className="w-1/3 mx-4 my-8">
          <div className="w-full flex flex-col bg-white rounded shadow">
            <span className="mx-4 bg-[#007BF6] py-1 mx-8 text-center rounded text-lg text-white mt-4 font-semibold">
              popular words
            </span>
            <div className="flex flex-col justify-center items-center">
                <span className="my-2 text-md font-light">Elephant</span>
                <span className="my-1 text-md font-light">Largest</span>
                <span className="my-1 text-md font-light">World</span>
                <span className="my-1 text-md font-light">are</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPolls;
