import { useState } from 'react';
import axios from 'axios';
import { enqueueSnackbar } from "notistack";
const UserPollAnswer = ({ poll }) => {
  const [votedOption, setVotedOption] = useState(null);

  const handleVote = async (optionName) => {
    try {
      const response = await axios.put(`http://localhost:8080/polls/vote/${poll.id}`, {
        optionName,
      });

      setVotedOption(optionName);
      enqueueSnackbar(`You have voted ${optionName}`, {
        variant: "success",
      })
      setTimeout(() => {
        window.location.reload();
      }, 2000)

    } catch (error) {
      console.error('Error voting:', error);
      enqueueSnackbar(error.message, {
        variant: "error",
      })
    }
  };

  const parsedOptions = JSON.parse(poll.options);

  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="flex items-center flex-col py-12 px-48 w-full">
        <div>
          <span className="text-xl font-semibold">{poll.question}</span>
        </div>
        <div className="w-1/2 pl-8 flex justify-between flex-wrap py-8">
          {parsedOptions.map((option, index) => (
            <span
              key={index}
              onClick={() => handleVote(option.name)}
              className={`w-full rounded shadow bg-white hover:bg-[#0066F7] text-center py-2 mt-6 ${
                votedOption === option.name ? 'bg-[#0066F7] text-white' : ''
              }`}
            >
              {option.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPollAnswer;
