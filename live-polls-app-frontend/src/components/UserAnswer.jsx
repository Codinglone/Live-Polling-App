import React, { useState, useEffect } from "react";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user")) || "Fabrice";

const UserAnswer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/questions")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleAnswer = () => {
    const currentAnswers = JSON.parse(
      questions[currentQuestion]?.answers || "[]"
    );
    const selectedAnswerObject = currentAnswers.find(
      (answer) => answer.text === selectedAnswer
    );
  
    if (selectedAnswerObject) {
      const isCorrect = selectedAnswerObject.isCorrect;
  
      if (isCorrect) {
        setScore(score + 1);
      }
  

      axios
        .post(`http://localhost:8080/questions/answer/${questions[currentQuestion]?.id}`, {
          username: user, 
          choice: selectedAnswer,
        })
        .then(() => {
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");
          } else {
            setShowScore(true);
            setTimeout(() => {
                window.location.reload();
            }, 1500)
          }
        })
        .catch((error) => {
          console.error("Error updating user answer:", error);
        });
    }
  };
  

  return (
    <div className="bg-[#F7F7F7] h-[85vh] w-full">
      <div className="flex items-center flex-col py-12 px-48 w-full">
        <div className="flex justify-center mb-12">
          <span>
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <div>
          <span className="text-xl font-semibold">
            {questions[currentQuestion]?.question}
          </span>
        </div>
        <div className="w-1/2 pl-8 flex justify-between flex-wrap py-8">
          {JSON.parse(questions[currentQuestion]?.answers || "[]").map(
            (answer, index) => (
              <span
                key={index}
                className={`w-[45%] rounded border ${
                  selectedAnswer === answer.text
                    ? answer.isCorrect
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-700"
                } text-center py-2 mt-6 cursor-pointer`}
                onClick={() => setSelectedAnswer(answer.text)}
              >
                {answer.text}
              </span>
            )
          )}
        </div>
        <div className="w-1/2 flex justify-end">
          <button
            className="bg-[#0066F7] py-1 px-8 mt-8 text-white rounded"
            onClick={handleAnswer}
          >
            Answer
          </button>
        </div>
        {showScore && (
          <div className="mt-4">
            <p>Your Score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAnswer;
