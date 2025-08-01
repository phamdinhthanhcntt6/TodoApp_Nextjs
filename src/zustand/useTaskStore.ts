import { create } from "zustand";

interface TaskState {
  collapse: boolean;
  openCollapse: () => void;
  closeCollapse: () => void;
  tabTaskName: string;
  setTabTaskName: (tabTask: string) => void;
  taskListName: string;
  setTaskListName: (taskList: string) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  collapse: true,
  openCollapse: () => set({ collapse: true }),
  closeCollapse: () => set({ collapse: false }),
  tabTaskName: "owner",
  setTabTaskName: (tabTaskName: string) => set({ tabTaskName }),
  taskListName: "",
  setTaskListName: (taskListName: string) => set({ taskListName }),
}));

export default useTaskStore;
