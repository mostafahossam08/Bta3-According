"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { OrderSelectionProvider } from "@/contexts/order-selection-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <OrderSelectionProvider>{children}</OrderSelectionProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

