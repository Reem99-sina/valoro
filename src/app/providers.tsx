"use client";

import { FetchProvider } from "@/contexts/fetch.context";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: Props) => {
  return (
    <>
      <ToastContainer position="top-left" />

      <QueryClientProvider client={queryClient}>
        <FetchProvider>{children}</FetchProvider>
      </QueryClientProvider>
    </>
  );
};
