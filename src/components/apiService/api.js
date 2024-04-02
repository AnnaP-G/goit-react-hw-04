import axios from "axios";

const API_KEY = "jU8nOFoyE-64Pe2G-Y702xvQ0J3NVrfAyw9v0DraOcA";

export const requestImages = async (query) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${API_KEY}&query=${query}`
  );
  return data;
};
