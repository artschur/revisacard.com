"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        
        <MenuItem setActive={setActive} active={active} item="RevisaCard">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4" >
        </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Quero conhecer⚡">
        </MenuItem>
      </Menu>
    </div>
  );
}
