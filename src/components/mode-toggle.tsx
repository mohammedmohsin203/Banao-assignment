"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { Switch } from "./ui/switch";
import { Toggle } from "./ui/toggle";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Switch onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun className="h-4 w-4 dark:hidden"/>
        <Moon className="h-4 w-4 hidden dark:block"/>
      </Switch>
    </>
  );
}

