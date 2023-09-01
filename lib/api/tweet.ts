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
  return await res.json();
};

export const getTweet = async (id: string) => {
  const res = await fetch(`${API_URL}/tweet/${id}`, {
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
  return await res.json();
};

export const createTweet = async (data: {content: string}) => {
  const res = await fetch(`${API_URL}/tweet`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  }); //REST API post method

  if (res.status == 401) {
    throw new Error("Authorization failed");
  }
  if (res.status != 200) {
    throw new Error("Error creating tweet");
  }
  return await res.json();
};