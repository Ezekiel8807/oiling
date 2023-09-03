import axios from 'axios';


// 👇️ export your instance
export const axiosBaseUrl = axios.create({
  baseURL: "http://127.0.0.1:5000/api/",
});


