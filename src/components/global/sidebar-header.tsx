"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { UserResType } from "@/schema/user.schema";
import { getProfile } from "@/service/user";
import Cookies from "js-cookie";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const SidebarHeaderComponent = () => {
  const [user, setUser] = useState<UserResType>();

  const id = Cookies.get("id");

  const getProfle = async (id: string) => {
    try {
      const res = await getProfile(id);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getProfle(id);
    }
  }, [id]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {!user ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar>
                  <AvatarImage
                    src={
                      user.avatar
                        ? user.avatar
                        : "https://github.com/shadcn.png"
                    }
                    alt={user.username ? user.username : "shadcn"}
                  />
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <div className="truncate font-medium">
                    {user.username ? user.username : "shadcn"}
                  </div>
                  <div className="truncate text-xs">
                    {user.email ? user.email : "shadcn@gmail.com"}
                  </div>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar>
                    <AvatarImage
                      src={
                        user.avatar
                          ? user.avatar
                          : "https://github.com/shadcn.png"
                      }
                      alt={user.username ? user.username : "shadcn"}
                    />
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <div className="truncate font-medium">
                      {user.username ? user.username : "shadcn"}
                    </div>
                    <div className="truncate text-xs">
                      {user.email ? user.email : "shadcn@gmail.com"}
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Sparkles />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  Cookies.remove("accessToken");
                  Cookies.remove("refreshToken");
                  window.location.href = "/login";
                }}
              >
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarHeaderComponent;
