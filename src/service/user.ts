import { LoginBodyType, RegisterBodyType } from "@/schema/user.schema";
import axios from "../config/axios-instance";

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

export { login, register, sendOTP, verifyOTP };
