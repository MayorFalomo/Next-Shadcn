"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import { Backpack, BackpackIcon, BellIcon, GiftIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavigationMenu className="w-full min-w-[100%] border-2 border-blue-500">
      <NavigationMenuList className="w-full  max-w-[100%] min-w-[100%]  border-2 border-green-500">
        <div className="flex items-center gap-6">
          <Avatar>
            <AvatarImage src="./logo.svg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Select>
            <SelectTrigger className="rounded-20px w-[140px]">
              <Avatar>
                <AvatarImage src="./profileImg.svg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <SelectValue placeholder="Keshav" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Kelsier</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink>Dashboard</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>Messages</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>Campaign</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>Studio</NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        <div className="flex items-center gap-4 ">
          <BellIcon />
          <GiftIcon />
          <Input placeholder="Search" />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
