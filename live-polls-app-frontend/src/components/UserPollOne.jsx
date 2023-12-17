import { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";

const UserPollOne = ({question, pollCode, handleNavigation}) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const baseUrl = "http://localhost:8080";
  const navigate = useNavigate();
  const handleSavePoll = () => {
    axios.post(`${baseUrl}/polls/add`, {
      question,
      totalVotes: 0,
      pollCode,
      createdBy: localStorage.getItem("user"),
      options: JSON.stringify([
        { name: optionOne, count: 0 },
        { name: optionTwo, count: 0 },
        { name: optionThree, count: 0 },
        { name: optionFour, count: 0 }
      ])
    })
      .then(function (response) {
        console.log(response);
        setResponse(response.data);
        enqueueSnackbar(response.data, { 
          variant: 'success'});
          setTimeout(() => {
            handleNavigation(
              'create-poll'
            )
            
          }, 2000)
  
      })
      .catch(function (err) {
        console.error(err);
        enqueueSnackbar(err.message, { 
          variant: 'error'})
      });
  }

  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="flex items-center flex-col px-48 w-full">
        <div className="w-[56%] mt-8">
          <div>
            <div className="flex w-full flex-col items-center justify-center mt-6">
                <span className="text-2xl font-semibold mb-4">Enter options</span>
              <input
                type="text"
                className="w-full border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Option 1"
                onInput={(e) => setOptionOne(e.target.value)}
                value={optionOne}
              />
              <input
                type="text"
                className="w-full border-2 mt-4 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Option 2"
                onInput={(e) => setOptionTwo(e.target.value)}
                value={optionTwo}
              />
              <input
                type="text"
                className="w-full border-2 mt-4 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Option 3"
                onInput={(e) => setOptionThree(e.target.value)}
                value={optionThree}
              />
              <input
                type="text"
                className="w-full border-2 mt-4 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                placeholder="Option 4"
                onInput={(e) => setOptionFour(e.target.value)}
                value={optionFour}
              />
              
              <button 
                className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded"
                onClick={handleSavePoll}
                
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPollOne;
