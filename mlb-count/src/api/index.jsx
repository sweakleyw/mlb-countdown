const BASE_URL =
  "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBGamesForDate?gameDate=20240328";

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
