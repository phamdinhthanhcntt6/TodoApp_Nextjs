import { RegisterBodyType } from "@/schema/user.schema";
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

export { sendOTP, verifyOTP, register };
