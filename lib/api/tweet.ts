import { API_URL, authToken } from "./config";

export const listTweets = async () => {
    const res = await fetch(`${API_URL}/tweet`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      }
    }); //REST API get method
    if (res.status == 401) {
      throw new Error("Authorization failed");
    }
    if (res.status != 200) {
      throw new Error("Error fetching the API");
    }
    const data = await res.json();
    return data;
}