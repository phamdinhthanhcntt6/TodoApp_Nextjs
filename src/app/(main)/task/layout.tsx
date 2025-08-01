import TaskHeader from "@/components/task/task-header";
import TaskSidebar from "@/components/task/task-sidebar";

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row h-screen">
      <TaskSidebar />
      <div className="flex flex-col w-full px-2">
        <TaskHeader />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default TaskLayout;
