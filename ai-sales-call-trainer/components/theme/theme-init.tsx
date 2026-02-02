"use client";

import * as React from "react";

type Theme = "light" | "dark";

export function ThemeInit() {
  React.useEffect(() => {
    let saved: Theme | null = null;

    try {
      saved = (localStorage.getItem("theme") as Theme | null) ?? null;
    } catch {
      saved = null;
    }

    const prefersDark =
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const theme: Theme = saved ?? (prefersDark ? "dark" : "dark");

    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  return null;
}
