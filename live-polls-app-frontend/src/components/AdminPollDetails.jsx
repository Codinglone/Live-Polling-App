import { useState, useEffect } from 'react';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const AdminPollDetails = ({ poll }) => {
  const [votedOption, setVotedOption] = useState(null);
  const [optionPercentages, setOptionPercentages] = useState([]);

  const calculatePercentages = () => {
    const parsedOptions = JSON.parse(poll.options);

    const totalVotes = parsedOptions.reduce((total, option) => total + option.count, 0);

    const percentages = parsedOptions.map((option) => ({
      name: option.name,
      percentage: totalVotes !== 0 ? ((option.count / totalVotes) * 100).toFixed(2) : 0,
    }));

    setOptionPercentages(percentages);
  };

  const handleEndPoll = async () => {
    try {
      await axios.delete(`http://localhost:8080/polls/delete/${poll.id}`);

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
    }
  };

  useEffect(() => {
    calculatePercentages();
  }, [poll]);

  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="flex items-center flex-col py-12 px-48 w-full">
        <div>
          <span className="text-xl font-semibold">{poll.question} {" " + poll.pollCode}</span>
        </div>
        <div className="w-1/2 pl-8 flex justify-between flex-wrap py-8">
          {optionPercentages.map((option, index) => (
            <span
              key={index}
              className={`w-full rounded shadow bg-white hover:bg-[#0066F7] text-center py-2 mt-6 ${
                votedOption === option.name ? 'bg-[#0066F7] text-white' : ''
              }`}
            >
              {`${option.name} - ${option.percentage}%`}
            </span>
          ))}
        </div>
        <button
          className="bg-[#0066F7] py-2 px-4 text-white rounded mt-4"
          onClick={handleEndPoll}
        >
          End Poll
        </button>
      </div>
    </div>
  );
};

export default AdminPollDetails;

