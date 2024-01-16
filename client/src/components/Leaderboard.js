import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const [authToken] = useState(() => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData).token : null;
  });

  const isUserPremium = JSON.parse(localStorage.getItem("isPremiumUser"));

  useEffect(() => {
    getLeaderboardData();
  }, []);

  const getLeaderboardData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/leaderboard",
        {
          headers: {
            Authorization: authToken,
            "x-is-premium": isUserPremium.toString(),
          },
        }
      );

      setLeaderboardData(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error.message);
    }
  };

  return (
    <div className="your-component-container container my-4 d-flex align-items-center justify-content-center mt-5 mb-5 ld">
      <main className="your-leaderboard-main">
        <div id="l-header">
          <h1>Expense Leaderboard</h1>
          <button className="share">
            <i className="ph ph-share-network"></i>
          </button>
        </div>
        <div id="leaderboard">
          <div className="ribbon"></div>
          <table>
            <tbody>
              {leaderboardData.map((row, index) => (
                <tr key={index}>
                  <td className="number">{index + 1}</td>
                  <td className="name">{row.username}</td>
                  <td className="points">
                    {row.totalAmount}
                    {index === 0 && (
                      <img
                        className="gold-medal"
                        src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                        alt="gold medal"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="friendly-message mt-4">
          Great job managing your expenses! Keep tracking and making wise
          financial decisions.
        </p>
      </main>
    </div>
  );
};

export default Leaderboard;
