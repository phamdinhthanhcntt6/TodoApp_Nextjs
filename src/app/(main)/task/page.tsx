import TaskContent from "@/components/task/task-content";
import TaskHeader from "@/components/task/task-header";
import TaskSidebar from "@/components/task/task-sidebar";

const TaskPage = () => {
  return (
    <div className="flex flex-row h-screen">
      <TaskSidebar />
      <div className="flex flex-col w-full px-2">
        <TaskHeader />
        <div className="flex-1 overflow-y-auto">
          <TaskContent />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
