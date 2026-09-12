"use client";

import type { ReactNode } from "react";
import { useOrderSelection } from "@/contexts/order-selection-context";

/**
 * Wraps a package's call-to-action so clicking it:
 *   1. Stores the selected package (see order-selection-context.tsx).
 *   2. Smoothly scrolls to the existing #contact section (globals.css sets
 *      `scroll-behavior: smooth` on <html>).
 *   3. The Contact section's LeadForm auto-fills its "I'm interested in"
 *      field from the stored selection — no manual re-selection needed.
 */
export function OrderButton({
  packageValue,
  className,
  children,
}: {
  packageValue: string;
  className?: string;
  children: ReactNode;
}) {
  const { select } = useOrderSelection();

  return (
    <a href="#contact" onClick={() => select(packageValue)} className={className}>
      {children}
    </a>
  );
}
