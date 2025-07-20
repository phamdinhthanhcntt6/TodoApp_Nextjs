/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebar } from "@/components/global/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarHeaderComponent from "@/components/global/sidebar-header";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderComponent />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebar.navMain.map((item: any) => {
              const isItemActive =
                pathname === item.url ||
                item.items?.some((sub: any) => pathname === sub.url);

              return (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={isItemActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <Link href={item.url}>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className={`cursor-pointer items-center flex flex-row ${
                            isItemActive ? "bg-black text-white" : ""
                          }`}
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          {item.items?.length > 0 && (
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    </Link>

                    {item.items?.length > 0 && (
                      <CollapsibleContent>
                        <SidebarMenuSub className="flex flex-col">
                          {item.items.map((subItem: any) => {
                            const isSubItemActive = pathname === subItem.url;

                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={`${
                                    isSubItemActive
                                      ? "bg-red-500 text-white"
                                      : ""
                                  }`}
                                >
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-center">
        <SidebarTrigger className="mx-auto" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
