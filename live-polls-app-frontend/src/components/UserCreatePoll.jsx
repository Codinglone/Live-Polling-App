import { useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
const UserCreatePoll = ({ handleAddPoll }) => {
  const generateRandomString = () => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  const [randomString, setRandomString] = useState(generateRandomString());
  const [question, setQuestion] = useState("");
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
      <div className="flex items-center flex-col px-48 w-full">
        <div className="w-[56%] mt-8">
          <div className="flex flex-col">
            <span className="text-center text-xl font-medium">
              generated code
            </span>
            <span className="text-center text-xl font-medium">
              {randomString}
            </span>
          </div>
          <div>
            <div className="flex w-full flex-col items-center justify-center mt-6">
              <input
                type="text"
                className="w-full border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Enter The Poll"
                onInput={(e) => setQuestion(e.target.value)}
              />
              <button
                className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded"
                onClick={() => handleAddPoll(question, randomString)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          {polls.length >= 1 &&
            polls.map((poll) => (
              <div
                key={poll.pollCode}
                className="w-full bg-white shadow py-8 rounded px-4 mt-2 flex flex-col"
              >
                <div className="flex justify-around">
                <span className="text-[#696F79] text-lg text-center">
                  Poll code: {" "}<b>{poll.pollCode}</b>
                </span>
                <span className="text-[#696F79] text-lg text-center">
                  {poll.question}
                </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserCreatePoll;
