import React, { useState } from 'react';
import axios from 'axios';
import { enqueueSnackbar } from "notistack";
const AdminQuestionTwo = ({ question }) => {
  const [choices, setChoices] = useState([{ text: '', isCorrect: false }]);

  const handleAddChoice = () => {
    setChoices((prevChoices) => [
      ...prevChoices,
      { text: '', isCorrect: false },
    ]);
  };

  const handleRemoveChoice = (index) => {
    setChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices.splice(index, 1);
      return updatedChoices;
    });
  };

  const handleChoiceChange = (index, value) => {
    setChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices[index] = { text: value, isCorrect: false };
      return updatedChoices;
    });
  };

  const handleCheckboxChange = (index) => {
    setChoices((prevChoices) => {
      const updatedChoices = prevChoices.map((choice, i) => ({
        ...choice,
        isCorrect: i === index,
      }));
      return updatedChoices;
    });
  };

  const handlePostQuestion = async () => {
    try {
      // Map choices to the required structure
      const answers = choices.map(({ text, isCorrect }) => ({
        text,
        isCorrect,
      }));
  
      // Assuming you have userVotes data available
      const userVotes = [
        { username: 'user1', choice: 'Cheetah' },
        { username: 'user2', choice: 'Panther' },
        // Add other user votes as needed
      ];
  
      const response = await axios.post('http://localhost:8080/questions/add', {
        question: question,
        answers: JSON.stringify(answers),
        userVotes: JSON.stringify(userVotes),
      });
  
      console.log(response.data);
      enqueueSnackbar(`Question posted successfully:`, {
        variant: "success",
      })
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    } catch (error) {
      console.error('Error posting question:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="flex items-center flex-col px-48 w-full">
        <div className="w-[60%] mt-8">
          <div className="flex w-full flex-col items-center justify-center mt-6">
            <div className="w-full flex justify-between mb-4">
              <span>Enter the answers</span>
              <span>Tick the right answer</span>
            </div>

            {choices.map((choice, index) => (
              <div className="w-full flex items-center mb-12" key={index}>
                <input
                  type="text"
                  className="w-[70%] border-2 rounded-md border-gray-400 bg-transparent py-2 px-4 outline-none"
                  placeholder={`Enter choice ${index + 1} *`}
                  value={choice.text}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                />
                <div className="w-[10%] flex justify-end">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    checked={choice.isCorrect}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </div>
                {index > 2 && (
                  <div
                    className="w-[10%] flex justify-end"
                    onClick={() => handleRemoveChoice(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    Remove
                  </div>
                )}
              </div>
            ))}

            <div className="w-full flex justify-end mb-4">
              <button
                className="bg-[#0066F7] py-1 px-4 mt-2 text-white rounded"
                onClick={handleAddChoice}
              >
                Add Choice
              </button>
            </div>

            <div className="w-1/2 flex justify-between">
              <button
                className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded"
                onClick={handlePostQuestion}
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

export default AdminQuestionTwo;
