import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminQuizResult = () => {
  const [questions, setQuestions] = useState([]);
  const [userScores, setUserScores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/questions")
      .then((response) => {
        setQuestions(response.data);
        calculateUserScores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quiz questions:", error);
      });
  }, []); 

  const calculateUserScores = (quizQuestions) => {
    const scoresMap = new Map();

    quizQuestions.forEach((question) => {
      const userVotes = JSON.parse(question.userVotes || "[]");

      userVotes.forEach((vote) => {
        const username = vote.username;
        const choice = vote.choice;
        const isCorrect =
          JSON.parse(question.answers || "[]").find(
            (answer) => answer.text === choice
          )?.isCorrect || false;

        if (!scoresMap.has(username)) {
          scoresMap.set(username, 0);
        }

        if (isCorrect) {
          scoresMap.set(username, scoresMap.get(username) + 1);
        }
      });
    });

   
    const sortedUserScores = Array.from(scoresMap.entries())
      .map(([username, score]) => ({ username, score }))
      .sort((a, b) => b.score - a.score);

    setUserScores(sortedUserScores);
  };

  return (
    <div className="bg-[#F7F7F7] h-[85vh] pt-24 w-full">
      <div className="px-64 w-full">
        <table className="shadow bg-white border-2 w-full border-gray-300">
          <thead>
            <tr>
              <th
                className="uppercase py-4 px-4"
                style={{ border: "1px solid black" }}
              >
                Username
              </th>
              <th
                className="uppercase py-4 px-4"
                style={{ border: "1px solid black" }}
              >
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {userScores.map((user, index) => (
              <tr key={index}>
                <td
                  style={{ border: "1px solid black" }}
                  className="w-1/2 px-4 py-4"
                >
                  {user.username}
                </td>
                <td
                  style={{ border: "1px solid black" }}
                  className="w-1/2 px-4 py-4"
                >
                  {user.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminQuizResult;
