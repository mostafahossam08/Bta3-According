"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// ---------------------------------------------------------------------------
// Lightweight cross-section "which package did the visitor pick" store.
//
// Order buttons on the Packages / Special Offer sections call `select(value)`
// with one of the values in `t.contact.interests` (see src/lib/translations.ts)
// before scrolling to #contact. The Contact section's LeadForm reads
// `selected` and auto-populates its existing "I'm interested in" field, so
// the visitor never has to choose the package a second time.
// ---------------------------------------------------------------------------

interface OrderSelectionContextValue {
  selected: string | null;
  select: (value: string) => void;
  clear: () => void;
}

const OrderSelectionContext = createContext<OrderSelectionContextValue | null>(null);

export function OrderSelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <OrderSelectionContext.Provider
      value={{
        selected,
        select: (value: string) => setSelected(value),
        clear: () => setSelected(null),
      }}
    >
      {children}
    </OrderSelectionContext.Provider>
  );
}

export function useOrderSelection() {
  const ctx = useContext(OrderSelectionContext);
  if (!ctx) throw new Error("useOrderSelection must be used within OrderSelectionProvider");
  return ctx;
}
