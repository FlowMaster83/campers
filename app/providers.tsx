"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            networkMode: "always",
          },
          mutations: {
            networkMode: "always",
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            padding: "20px 24px",
            borderRadius: "var(--radius-lg)",
            background: "var(--color-white)",
            color: "var(--color-text)",
            boxShadow: "0 4px 24px rgba(16, 24, 40, 0.16)",
            fontSize: "16px",
          },
          success: {
            iconTheme: {
              primary: "var(--color-primary)",
              secondary: "var(--color-white)",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}
