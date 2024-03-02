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
} from "@/components/ui/navigation-menu";
type Props = {};

const Settings = (props: Props) => {
  return (
    <div>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Settings
      </h2>
      <NavigationMenu className="">
        <NavigationMenuList className="flex item-center gap-4 p-2 bg-darkmode">
          <NavigationMenuItem className="p-2 hover:bg-[#fff] cursor-pointer">
            Profile
          </NavigationMenuItem>
          <NavigationMenuItem className="px-3 py-2 bg-[#fff] cursor-pointer max-sm:px-1 ">
            Company Info
          </NavigationMenuItem>
          <NavigationMenuItem className="px-3 py-2 hover:bg-[#fff] cursor-pointer max-sm:px-1 ">
            Manage Seats
          </NavigationMenuItem>
          <NavigationMenuItem className="px-4 py-2 hover:bg-[#fff]   max-[670px]:hidden cursor-pointer max-sm:px-1">
            Do not Contact
          </NavigationMenuItem>
          <NavigationMenuItem className="px-4 py-2 hover:bg-[#fff]  max-md:hidden cursor-pointer max-sm:px-1">
            Integrations
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Settings;
