import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AdvisorsPage,
  AdvisorsSinglePage,
  AgenciesPage,
  CheckoutPage,
  CheckoutSuccessPage,
  ErrorPage,
  HotlinePage,
  Landing,
  Layout,
  LoginPage,
  ProfilePage,
  RegisterPage,
  ResearchPage,
  SingleTripPage,
} from "./pages";
import { agenciesLoader } from "./pages/AgenciesPage";
import { AdvisorsLoader } from "./pages/AdvisorsPage";
import { advisorsSingleLoader } from "./pages/AdvisorsSinglePage";
import { ErrorElement } from "./components";
import { researchLoader } from "./pages/ResearchPage";
import { landingLoader } from "./pages/Landing";
import { singleTripPageLoader } from "./pages/SingleTripPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing />, errorElement: <ErrorElement />, loader: landingLoader },
      {
        path: "research",
        element: <ResearchPage />,

        errorElement: <ErrorElement />,
        loader: researchLoader,
      },
      {
        path: "research/:id",
        element: <SingleTripPage />,
        errorElement: <ErrorElement />,
        loader: singleTripPageLoader,
      },
      {
        path: "advisors",
        element: <AdvisorsPage />,
        loader: AdvisorsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: "advisors/:id",
        element: <AdvisorsSinglePage />,
        loader: advisorsSingleLoader,
        errorElement: <ErrorElement />,
      },
      { path: "checkout", element: <CheckoutPage />, errorElement: <ErrorElement /> },
      {
        path: "agencies",
        element: <AgenciesPage />,
        loader: agenciesLoader,
        errorElement: <ErrorElement />,
      },
      { path: "hotline", element: <HotlinePage />, errorElement: <ErrorElement /> },
      { path: "profile", element: <ProfilePage />, errorElement: <ErrorElement /> },
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <LoginPage />, errorElement: <ErrorPage /> },
  { path: "/register", element: <RegisterPage />, errorElement: <ErrorPage /> },
  { path: "/checkout-success", element: <CheckoutSuccessPage />, errorElement: <ErrorPage /> },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
