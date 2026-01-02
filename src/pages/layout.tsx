import { Outlet } from "react-router-dom";
import { Footer, Header, NavBar, PreFooter, UserBar } from "../components";

const Layout = () => {
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
