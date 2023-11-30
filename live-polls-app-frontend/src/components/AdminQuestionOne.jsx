import { useState } from "react";

const AdminQuestionOne = () => {
  const [questionsCount, setQuestionsCount] = useState(2);
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="flex items-center flex-col px-48 w-full">
        <div className="w-[56%] mt-8">
          <div>
            <div className="flex w-full flex-col items-center justify-center mt-6">
              <input
                type="text"
                className="w-full border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Enter The Question"
              />
              <div className="mt-12 flex flex-col">
                <span className="mb-4">Select the multiple choices</span>
                <div className="bg-white flex justify-between px-2 border-2 border-gray-300 rounded">
                  <span
                    className="border-r-2 border-gray-300 w-[30%] py-2 text-center cursor-pointer"
                    onClick={() => setQuestionsCount((prev) => prev - 1)}
                  >
                    -
                  </span>
                  <span className="border-r-2 border-gray-300 w-[30%] py-2 text-center">
                    {questionsCount}
                  </span>
                  <span
                    className="w-[30%] py-2 text-center cursor-pointer"
                    onClick={() => setQuestionsCount((prev) => prev + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
              <button className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuestionOne;
