import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 95 },
    { name: "Rahul", score: 60 },
    { name: "Iyer", score: 40 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 70 },
    { name: "Ashwin", score: 30 },
    { name: "Shami", score: 65 },
    { name: "Bumrah", score: 75 },
    { name: "Jadeja", score: 90 },
    { name: "Gill", score: 50 },
  ];
  const below70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
        <hr/>
      <h2>List of players having scores less than 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default ListofPlayers;
