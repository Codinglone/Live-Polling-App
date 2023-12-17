import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

const AdminPolls = ({ handlePollDetails }) => {
  const [polls, setPolls] = useState([]);
  const [popularWords, setPopularWords] = useState([]);

  const baseUrl = "http://localhost:8080";

  const handleEndPoll = async (poll) => {
    try {
      await axios.delete(`${baseUrl}/polls/delete/${poll.id}`);

      enqueueSnackbar("Poll ended successfully", {
        variant: "success",
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error ending poll:", error);
      enqueueSnackbar("Error ending poll", {
        variant: "error",
      });
    }
  };

  const extractWords = (question) => {
    const words = question.split(/\s+/);
    return words.map((word) => word.toLowerCase());
  };

  const calculatePopularWords = () => {
    const allWords = polls.reduce((words, poll) => {
      const pollWords = extractWords(poll.question);
      return [...words, ...pollWords];
    }, []);

    const wordCountMap = new Map();

    allWords.forEach((word) => {
      const count = wordCountMap.get(word) || 0;
      wordCountMap.set(word, count + 1);
    });

    const sortedWords = Array.from(wordCountMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([word]) => word);

    setPopularWords(sortedWords.slice(0, 5)); 
  };
  useEffect(() => {
    axios
      .get(`${baseUrl}/polls`)
      .then(function (response) {
        setPolls(response.data);
      })
      .catch(function (error) {
        console.log(error);
        enqueueSnackbar(error.message, {
          variant: "error",
        });
      });
  }, []);

  useEffect(() => {
    calculatePopularWords();
  }, [polls])

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
                <p className="text-[#696F79] text-lg cursor-pointer">{poll.question}</p>
                <div className="flex justify-between my-2">
                  <div className="text-xl"><span className="text-[#696F79] text-lg">Total Votes: {" "}</span><b>{poll.totalVotes}</b></div>
                  <button
                    onClick={() => handleEndPoll(poll)}
                    className="bg-[#0066F7] py-2 px-4 text-white rounded"
                  >
                    End Poll
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="w-1/3 mx-4 my-8">
          <div className="w-full flex flex-col bg-white rounded shadow" id="popular">
            <span className="mx-4 bg-[#007BF6] py-1 mx-8 text-center rounded text-lg text-white mt-4 font-semibold">
              Popular Words
            </span>
            <div className="flex flex-col justify-center items-center">
              {popularWords.map((word, index) => (
                <span key={index} className="my-2 text-md font-light">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPolls;

