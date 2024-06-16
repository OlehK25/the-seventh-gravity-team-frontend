import Axios from "axios";
import { getSession } from "next-auth/react";

import logOut from "@/helpers/logOut";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

axios.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.user?.accessToken) {
    config.headers.Authorization = `Bearer ${session.user.accessToken}`;
  }
  return config;
});

// Handling errors
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // await axios.post("/api/auth/logout");

      if (error.config.url.includes("refresh-token")) {
        if (typeof window !== "undefined") return await logOut();
        else return Promise.reject(error.response.data);
      }

      return await logOut();
    } else if (error.response && error.response.data) {
      console.error("Server Error:", error.response.data);
      return Promise.reject(error.response.data);
    } else {
      console.error("Error:", error.message);
      return Promise.reject(error.message);
    }
  },
);

export default axios;
