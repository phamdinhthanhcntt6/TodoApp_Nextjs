"use client";

import { Button } from "@/components/ui/button";
import useTaskStore from "@/zustand/useTaskStore";
import { ArrowRightFromLine, Plus } from "lucide-react";

const TaskHeader = () => {
  const { tabTask, collapse, openCollapse } = useTaskStore();

  return (
    <>
      <div className="p-4 w-full items-center border-b-[1px] border-slate-300 ">
        <div className="flex flex-row items-center gap-x-3">
          {!collapse && (
            <div className="">
              <ArrowRightFromLine
                size={16}
                className="cursor-pointer"
                onClick={() => openCollapse()}
              />
            </div>
          )}
          <div className="font-bold text-xl items-center flex flex-row capitalize justify-between w-full">
            <div>{tabTask}</div>
            <div>
              {tabTask !== "subscribed" ? (
                <Button className="items-center flex">
                  <Plus />
                  New Task
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskHeader;
