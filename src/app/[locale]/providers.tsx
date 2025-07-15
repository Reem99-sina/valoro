"use client";

import { FetchProvider } from "@/contexts/fetch.context";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nProviderClient } from "@/translations/clients";

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
      <I18nProviderClient locale="en">
        <QueryClientProvider client={queryClient}>
          <FetchProvider>{children}</FetchProvider>

        </QueryClientProvider>
      </I18nProviderClient>
    </>
  );
};
