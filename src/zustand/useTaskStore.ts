import { create } from "zustand";

interface TaskState {
  collapse: boolean;
  openCollapse: () => void;
  closeCollapse: () => void;
  tabTask: string;
  setTabTask: (tabTask: string) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  collapse: true,
  openCollapse: () => set({ collapse: true }),
  closeCollapse: () => set({ collapse: false }),
  tabTask: "owner",
  setTabTask: (tabTask: string) => set({ tabTask }),
}));

export default useTaskStore;
