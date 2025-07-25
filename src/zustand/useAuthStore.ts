import { create } from "zustand";

interface AuthState {
  email: string;
  setEmail: (email: string) => void;
  currentUserId: string;
  setCurrentUserId: (currentUserId: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  currentUserId: "",
  setCurrentUserId: (currentUserId) => set({ currentUserId }),
}));

export default useAuthStore;
