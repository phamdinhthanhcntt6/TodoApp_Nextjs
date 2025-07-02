import { LoginBodyType, RegisterBodyType } from "@/schema/user.schema";
import axios from "../config/axios-instance";

const sendOTP = (email: string) => {
  return axios.post("/user/send-otp", { email });
};

const verifyOTP = (email: string, code: string) => {
  return axios.post("/user/verify-otp", { email, code });
};

const register = (body: RegisterBodyType) => {
  return axios.post("/user/register", body);
};

const login = (body: LoginBodyType) => {
  return axios.post("/user/login", body);
};

export { login, register, sendOTP, verifyOTP };
