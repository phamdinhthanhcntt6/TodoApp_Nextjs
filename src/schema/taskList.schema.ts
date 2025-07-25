import z from "zod";

const TaskListBody = z.object({
  name: z.string().min(1, "Name must be at least 1 character"),
  owner: z.string().min(1, "Owner must be at least 1 character"),
  members: z.array(z.string()).optional(),
});

type TaskListBodyType = z.infer<typeof TaskListBody>;

export { TaskListBody, type TaskListBodyType };

interface TaskListResType {
  _id: string;
  name: string;
  owner: string;
  members: string[];
}

export { type TaskListResType };
