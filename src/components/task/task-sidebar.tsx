/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TaskListBodyType, TaskListResType } from "@/schema/taskList.schema";
import {
  createTaskList,
  getTaskLists,
  removeTaskList,
  updateTaskList,
} from "@/service/taskList";
import useTaskStore from "@/zustand/useTaskStore";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  ArrowLeftFromLine,
  BookCheck,
  Ellipsis,
  Folder,
  PencilLine,
  Plus,
  Star,
  Trash2,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const tabs = [
  { key: 1, name: "owner", icon: User },
  { key: 2, name: "subscribed", icon: Star },
];

const statusTask = [
  {
    label: "Quick Access",
    children: [
      {
        key: "all-task",
        name: "All task",
      },
      {
        key: "created",
        name: "Created",
      },
      {
        key: "assigned",
        name: "Assigned",
      },
      {
        key: "completed",
        name: "Completed",
      },
    ],
  },
];
interface ITab {
  key: number;
  name: string;
  icon: any;
}

const TaskSidebar = () => {
  const {
    collapse,
    closeCollapse,
    tabTask,
    setTabTask,
    taskList,
    setTaskList,
  } = useTaskStore();

  const [taskLists, setTaskLists] = useState<TaskListResType[]>([]);
  const [editingId, setEditingId] = useState<string | null>();
  const [editingValue, setEditingValue] = useState<string>("");

  const create = async () => {
    const body = {
      name: `Task List ${taskLists.length + 1}`,
      owner: "6865776553b24a4e18962aaf",
      members: ["6865776553b24a4e18962aaf"],
    };
    try {
      const res = await createTaskList(body);
      toast.success(res.data.message);
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  const getList = async () => {
    try {
      const res = await getTaskLists("6865776553b24a4e18962aaf");
      if (res.data) {
        setTaskLists(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (id: string) => {
    try {
      const res = await removeTaskList(id);
      toast.success(res.data.message);
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (id: string, body: TaskListBodyType) => {
    try {
      const res = await updateTaskList(id, {
        name: body.name,
        members: body.members,
        owner: body.owner,
      });
      toast.success(res.data.message);
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div
      className={`h-screen p-4 w-[280px] border-r-2 ${
        !collapse && "hidden"
      } flex flex-col gap-y-2`}
    >
      <div className="flex flex-row items-center gap-x-3">
        <div className="rounded-full hover:bg-slate-50 pt-1">
          <ArrowLeftFromLine
            size={16}
            className="cursor-pointer"
            onClick={() => closeCollapse()}
          />
        </div>
        <div className="font-bold text-xl">Tasks</div>
      </div>
      <div className="flex flex-col w-full">
        {tabs.map((item: ITab) => (
          <div
            onClick={() => setTabTask(item.name)}
            key={item.key}
            className={`px-4 flex flex-row py-1 cursor-pointer items-center capitalize text-sm font-semibold ${
              tabTask === item.name &&
              "bg-black text-white dark:bg-white dark:text-black rounded-md"
            }`}
          >
            <item.icon size={16} className="mr-2" />
            {item.name}
          </div>
        ))}
      </div>
      <div className="border-b-2" />
      {statusTask.map((item: any) => (
        <Accordion
          type="single"
          collapsible
          className="w-full"
          key={item.label}
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>{item.label}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col w-full">
                {item.children.map((child: any) => (
                  <div
                    onClick={() => setTabTask(child.name)}
                    key={child.key}
                    className={`rounded-md px-4 py-1 cursor-pointer items-center capitalize font-semibold ${
                      tabTask === child.name && "bg-black text-white "
                    }}`}
                  >
                    {child.name}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <div className="border-b-2" />
      <div className="flex flex-col w-full font-semibold">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-1">
            <BookCheck /> Task List
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Plus />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
              <DropdownMenuItem onClick={create}>
                <Plus /> New Task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Folder /> New Group
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="pl-7">
        {taskLists.map((item: TaskListResType) => (
          <div
            key={item._id}
            onClick={() => {
              setTaskList(item._id);
              setTabTask(item.name);
            }}
            className={`flex flex-row items-center justify-between w-full rounded-sm my-1 cursor-pointer p-1 pr-3 hover:bg-slate-100 ${
              taskList === item._id ? "!bg-black text-white" : ""
            }}`}
          >
            <div
              className={`font-semibold text-sm flex gap-x-1 ${
                taskList === item._id ? "!text-white" : ""
              }`}
            >
              {editingId === item._id ? (
                <Input
                  autoFocus
                  value={editingValue}
                  onChange={(e) => {
                    setEditingValue(e.target.value);
                  }}
                  onBlur={() => {
                    if (editingValue.trim() !== item.name) {
                      update(item._id, {
                        ...item,
                        name: editingValue,
                      });
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (editingValue.trim() !== item.name) {
                        update(item._id, {
                          ...item,
                          name: editingValue,
                        });
                      }
                      setEditingId(null);
                    }
                  }}
                  className="h-7 px-2 py-1 text-sm bg-white text-black"
                />
              ) : (
                <Tooltip>
                  <TooltipTrigger className="flex flex-row">
                    <BookCheck />
                    &nbsp;
                    <span className="line-clamp-1">{item.name}</span>
                  </TooltipTrigger>
                  <TooltipContent>{item.name}</TooltipContent>
                </Tooltip>
              )}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Ellipsis
                  size={12}
                  color={taskList === item._id ? "white" : "black"}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start">
                <DropdownMenuItem
                  onClick={() => {
                    setEditingId(item._id);
                    setEditingValue(item.name);
                  }}
                >
                  <PencilLine /> Rename
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => remove(item._id)}>
                  <Trash2 /> Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskSidebar;
