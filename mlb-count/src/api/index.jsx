const BASE_URL =
  "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBGamesForDate?gameDate=20240328";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0ec3e974bemsh7fc5ac38d3012bep1fcb4cjsn32908b6a2ffa",
    "X-RapidAPI-Host":
      "tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com",
  },
};

export async function getGames() {
  try {
    const response = await fetch(BASE_URL, options);
    const result = await response.json();
    const info = result.body;
    console.log(info);
    return info;
  } catch (error) {
    console.error(error);
  }
}
