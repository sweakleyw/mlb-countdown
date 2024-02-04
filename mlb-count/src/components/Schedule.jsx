import { useState, useEffect } from "react";

import { getGames } from "../api";

import "./Schedule.css";

export const Schedule = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const fetchAllGames = await getGames();
      setGames(fetchAllGames);
    };

    fetchGames();
  }, []);

  if (!games.length) {
    return <></>;
  }

  return (
    <div id='container'>
      <fieldset>
        <legend>Opening Day Games</legend>
        <div id='game-day'>
          <div id='game-container'>
            {games.length > 0
              ? games.map((game) => {
                  return (
                    <div
                      id='gamebox'
                      key={game.gameID}>
                      <div id='away'>{game.away}</div>
                      <div id='home'>{game.home}</div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </fieldset>
    </div>
  );
};
