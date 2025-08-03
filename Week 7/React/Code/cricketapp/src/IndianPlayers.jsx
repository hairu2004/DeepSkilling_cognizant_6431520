import React from "react";

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Pant"];
  const RanjiPlayers = ["Pujara", "Jadeja", "Ishant"];
  const mergedPlayers = [...T20players, ...RanjiPlayers];
  const allPlayers = ["Virat", "Rohit", "Pant", "Pujara", "Jadeja", "Ishant"];
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Even Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Odd Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
