import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UserBar = () => {
  return (
    <header className="border-b-2 bg-slate-100">
      <div className="align-center flex justify-end py-1">
        <div className="flex item-center gap-6">
          <Button asChild variant="link" size="lg" className="hover-btn p-0">
            <Link to={"/login"}>Sign In</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="hover-btn p-0">
            <Link to={"/register"}>Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default UserBar;
