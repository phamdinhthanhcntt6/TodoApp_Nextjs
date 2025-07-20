import TaskHeader from "@/components/task/task-header";
import TaskSidebar from "@/components/task/task-sidebar";

const TaskPage = () => {
  return (
    <div className="flex flex-row px-2">
      <TaskSidebar />
      <TaskHeader />
    </div>
  );
};

export default TaskPage;
