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
import useTaskStore from "@/zustand/useTaskStore";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  ArrowLeftFromLine,
  BookCheck,
  Folder,
  Plus,
  Star,
  User,
} from "lucide-react";

interface ITab {
  key: number;
  name: string;
  icon: any;
}

const TaskSidebar = () => {
  const { collapse, closeCollapse, tabTask, setTabTask } = useTaskStore();

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

  return (
    <div
      className={`h-screen p-4 w-1/5 mt-1 border-r-2 ${
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
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Plus /> New Task
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Folder /> New Group
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TaskSidebar;
