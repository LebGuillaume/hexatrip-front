import LinksDesktop from "./LinksDesktop";
import LinksMobile from "./LinksMobile";

const NavBar = () => {
  return (
    <nav className="border-t-3 border-b-2">
      <div className="align-center py-5">
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  );
};

export default NavBar;
