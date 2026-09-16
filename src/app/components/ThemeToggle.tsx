"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;

    setDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d9e1e1] bg-white text-lg shadow-sm transition hover:border-[#297373] dark:border-white/10 dark:bg-white/5"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}