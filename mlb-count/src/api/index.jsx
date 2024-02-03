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
