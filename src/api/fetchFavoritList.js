const BASE_URL = "https://acb-api.algoritmika.org/api/movies/list";

export async function fetchFavoritList(listId) {
  try {
    const response = await fetch(`${BASE_URL}/${listId}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("User error: ", error);
  }
}
