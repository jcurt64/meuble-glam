"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const DarkButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="dark:bg-gray-300 bg-gray-400 p-1 rounded-full mr-5"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-6 w-6 text-yellow-500 -mt-6 " />
      ) : (
        <MoonIcon className="h-6 w-6 text-slate-800 -mt-6 " />
      )}
    </button>
  );
};

export default DarkButton;
