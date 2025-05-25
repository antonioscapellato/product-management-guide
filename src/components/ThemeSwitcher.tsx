// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Button
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={"bg-transparent text-default-500"}
      aria-label="Toggle theme"
      isIconOnly
      radius={"full"}
    >
      {theme === 'dark' ? <LuSun size={24} /> : <LuMoon size={24} />}
    </Button>
  )
};