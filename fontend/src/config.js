import axios from 'axios';


const baseURL = process.env.BASE_URL 

// 👇️ export your instance
export const axiosBaseUrl = axios.create({
  baseURL: baseURL,
});