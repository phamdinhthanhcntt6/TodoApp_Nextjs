"use client";

import { Button } from "@/components/ui/button";
import useTaskStore from "@/zustand/useTaskStore";
import { ArrowRightFromLine, BookCheck, Plus } from "lucide-react";

const TaskHeader = () => {
  const { tabTaskName, taskListName, collapse, openCollapse } = useTaskStore();

  return (
    <div className="w-full border-b-[1px] border-slate-300">
      <div className="p-4 w-full items-center">
        <div className="flex flex-row items-center gap-x-3">
          {!collapse && (
            <div>
              <ArrowRightFromLine
                size={16}
                className="cursor-pointer"
                onClick={() => openCollapse()}
              />
            </div>
          )}
          <div className="font-bold text-xl items-center flex flex-row capitalize justify-between w-full h-8">
            <div className="flex flex-row items-center gap-x-2">
              <BookCheck size={24} />
              {taskListName || tabTaskName}
            </div>
            <div>
              <Button
                className={`${
                  tabTaskName === "subscribed" ? "hidden" : "flex"
                } items-center`}
              >
                <Plus />
                New Task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
