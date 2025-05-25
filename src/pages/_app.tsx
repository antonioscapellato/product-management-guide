import "@/styles/globals.css";

import type { AppProps } from "next/app";

// HeroUI
import { HeroUIProvider } from "@heroui/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </NextThemesProvider>
    </HeroUIProvider>
  )
}
