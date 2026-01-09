import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, NavBar, PreFooter, UserBar } from "../components";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <UserBar />
      <Header />
      <NavBar />
      <Outlet />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Layout;
