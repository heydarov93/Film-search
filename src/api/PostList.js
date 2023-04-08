const BASE_URL = "https://acb-api.algoritmika.org/api/movies/list";

export async function postFavoritesList(postData) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("User error: ", error);
  }
}
