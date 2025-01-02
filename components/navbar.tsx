"use client";

import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation, Menu, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  function navigateTo(path: string) {
    router.push(path);
    setIsOpen(false);
  }

  const navItems = [
    { path: "/", icon: <Home className="h-4 w-4" />, label: "Home" },
    { path: "/#projects", icon: <Presentation className="h-4 w-4" />, label: "Projects" },
    { path: "/#work", icon: <Briefcase className="h-4 w-4" />, label: "Work" },
    { path: "/#contact", icon: <Mail className="h-4 w-4" />, label: "Contact" },
    { path: "https://drive.google.com/file/d/1SkptTbTVZiOvQoX4ReQDvy-Mcn-TaoTL/view?usp=sharing", icon: <Download className="h-4 w-4" />, label: "Download Resume"}
  ];

  return (
    <nav className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Logo onClick={() => navigateTo("/")} />

        <div className="hidden md:flex space-x-3 items-center">
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              variant="outline"
              size="sm"
              className="h-8"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Button>
          ))}
          <ModeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <ModeToggle />
          <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              variant="outline"
              size="sm"
              className="w-full justify-start"
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}