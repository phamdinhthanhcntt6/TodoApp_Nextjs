import axios from "@/config/axios-instance";
import { LoginBodyType, RegisterBodyType } from "@/schema/user.schema";

const sendOTP = (email: string) => {
  return axios.post("/auth/send-otp", { email });
};

const verifyOTP = (email: string, code: string) => {
  return axios.post("/auth/verify-otp", { email, code });
};

const register = (body: RegisterBodyType) => {
  return axios.post("/auth/register", body);
};

const login = (body: LoginBodyType) => {
  return axios.post("/auth/login", body);
};

const getProfile = (id: string) => {
  return axios.get("/auth/profile", {
    params: {
      id,
    },
  });
};

export { getProfile, login, register, sendOTP, verifyOTP };
