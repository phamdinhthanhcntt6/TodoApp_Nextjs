import axios from "@/config/axios-instance";
import { TaskListBodyType } from "@/schema/taskList.schema";

const createTaskList = (body: TaskListBodyType) => {
  return axios.post("/task-list/create", body);
};

const getTaskLists = (id: string, page?: number, pageSize?: number) => {
  return axios.get("/task-list/get", {
    params: {
      id,
      page,
      pageSize,
    },
  });
};

const removeTaskList = (id: string) => {
  return axios.delete("/task-list/remove", {
    params: {
      id,
    },
  });
};

const updateTaskList = (id: string, body: TaskListBodyType) => {
  return axios.put("/task-list/update", body, {
    params: { id },
  });
};

export { createTaskList, getTaskLists, removeTaskList, updateTaskList };
