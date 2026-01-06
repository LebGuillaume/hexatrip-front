import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AdvisorsPage,
  AdvisorsSinglePage,
  AgenciesPage,
  CheckoutPage,
  CheckoutSuccessPage,
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "research", element: <ResearchPage /> },
      { path: "research/:id", element: <SingleTripPage /> },
      { path: "advisors", element: <AdvisorsPage />, loader: AdvisorsLoader },
      { path: "advisors/:id", element: <AdvisorsSinglePage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "agencies", element: <AgenciesPage />, loader: agenciesLoader },
      { path: "hotline", element: <HotlinePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/checkout-success", element: <CheckoutSuccessPage /> },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
