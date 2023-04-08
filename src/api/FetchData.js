// `http://www.omdbapi.com/?s=${SEARCH_TEXT}&apikey=${API_KEY}`

// http://www.omdbapi.com/?i=tt3896198&apikey=b707ff60

const BASE_URL = "http://www.omdbapi.com";
const API_KEY = "b707ff60";

export async function fetchBySearch(searchText) {
  try {
    const response = await fetch(
      `${BASE_URL}/?s=${searchText}&apikey=${API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("User error: ", error);
  }
}
