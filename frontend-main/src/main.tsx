import { Login } from "./ui-kit/components/login/login";
import { ThemeProvider } from "styled-components";
import { Main_Theme } from "./themes/main_theme";
import React from "react";
import { Orc } from "./app/orc";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Orc />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Main_Theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
