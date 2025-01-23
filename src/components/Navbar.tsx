"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-5xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="All Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-development">Web Development</HoveredLink>
            <HoveredLink href="/graphic-designing">Graphic Designing</HoveredLink>
            <HoveredLink href="/seo">SEO</HoveredLink>
            <HoveredLink href="/digital-marketing">Digital Marketing</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"#aboutUs"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
          ></MenuItem>
        </Link>
        <Link href={"/contactUs"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
