import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
const AdminPolls = ({handlePollDetails}) => {
  const [polls, setPolls] = useState([]);

  const baseUrl = "http://localhost:8080";

  const handleEndPoll = async (poll) => {
    try {
      // Make a DELETE request to delete the poll
      await axios.delete(`${baseUrl}/polls/delete/${poll.id}`);

      enqueueSnackbar('Poll ended successfully', {
        variant: 'success',
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error ending poll:', error);
      enqueueSnackbar('Error ending poll', {
        variant: 'error',
      });
      // Handle errors, show a message, etc.
    }
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/polls`)
      .then(function (response) {
        // handle success
        console.log(response);
        setPolls(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
  }, []);
  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="px-48 flex justify-between w-full">
        <div className="w-2/3 flex flex-col my-8">
        
          {polls.length >= 1 &&
            polls.map((poll) => (
              <div
                key={poll.pollCode}
                onClick={() => handlePollDetails(poll)}
                className="w-full bg-white shadow rounded py-4 px-4 mt-10 flex flex-col"
              >
                <p className="text-[#696F79] text-lg">
              {poll.question}
            </p>
            <div className="flex justify-between my-2">
              <span className="text-xl font-bold">{poll.totalVotes}</span>
              <button
              onClick={() => handleEndPoll(poll)}
               className="bg-[#0066F7] py-2 px-4 text-white rounded"
               >
                End Poll
              </button>
            </div>
               
              </div>
            )) }
          
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
