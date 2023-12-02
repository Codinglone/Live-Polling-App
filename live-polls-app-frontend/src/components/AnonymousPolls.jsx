import { useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
const AnonymousPolls = ({handlePolling}) => {
  const [polls, setPolls] = useState([]);

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    axios
      .get(`${baseUrl}/polls`)
      .then(function (response) {
        console.log(response);
        setPolls(response.data);
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
  }, []);
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="px-60 flex justify-between w-full">
        <div className="w-full flex flex-col my-8">
          
          {polls.length >= 1 &&
            polls.map((poll) => (
              <div
                key={poll.pollCode}
                onClick={() => handlePolling(poll)}
                className="w-full bg-white shadow rounded cursor-pointer py-4 px-4 mt-6 flex flex-col"
              >
                <p className="text-[#696F79] text-lg">
                  {poll.question}
                </p>
                <div className="flex justify-between w-[4vw] items-center my-2">
              <span className="text-xl font-bold cursor-pointer"><AiOutlineLike /></span>
              <span className="text-xl font-bold cursor-pointer"><AiOutlineDislike /></span>
            </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default AnonymousPolls;
