import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 60000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="container mt-[50px] md:px-[300px] sm:px-5 flex flex-col">
            <Component {...pageProps} />
          </div>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
