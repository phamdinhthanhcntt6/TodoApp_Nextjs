import axios from "../config/axios-instance";

const sendOTP = (email: string) => {
  return axios.post("/user/send-otp", { email });
};

const verifyOTP = (email: string, code: string) => {
  return axios.post("/user/verify-otp", { email, code });
};

export { sendOTP, verifyOTP };
