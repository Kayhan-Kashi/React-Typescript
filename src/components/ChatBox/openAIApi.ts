// openaiApi.ts
import axios from "axios";

const openaiApi = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer `, // Replace YOUR_API_KEY with your actual key
  },
});

export default openaiApi;
