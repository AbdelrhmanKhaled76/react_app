import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import { QueryClient, QueryClientProvider } from "react-query";
import Error from "./Components/Error/Error";
import SecureComponent from "./Contexts/SecureComponent";
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Ourwork from './Components/Ourwork/Ourwork';
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "signup",
        element: (
          <QueryClientProvider client={queryClient}>
            <Signup />
          </QueryClientProvider>
        ),
      },
      {
        path: "login",
        element: (
          <QueryClientProvider client={queryClient}>
            <Login />
          </QueryClientProvider>
        ),
      },
      {
        path: "about",
        element: (
          <SecureComponent>
            <About />
          </SecureComponent>
        ),
      },
      {
        path: "services",
        element: (
          <SecureComponent>
            <Services />
          </SecureComponent>
        ),
      },
      {
        path: "ourwork",
        element: (
          <SecureComponent>
            <QueryClientProvider client={queryClient}>
                <Ourwork />
            </QueryClientProvider>
          </SecureComponent>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Layout>
        <Error />
      </Layout>
    ),
  },
]);

const App = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
