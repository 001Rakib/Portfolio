import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between py-4 px-5">
        <div className="flex list-none gap-5 font-roboto-condense ">
          <NavLink className={"hover:text-cyan-600"}>
            <li>Home</li>
          </NavLink>
          <NavLink className={"hover:text-cyan-600"}>
            <li>About</li>
          </NavLink>
          <NavLink className={"hover:text-cyan-600"}>
            <li>Service</li>
          </NavLink>
          <NavLink className={"hover:text-cyan-600"}>
            <li>Resume</li>
          </NavLink>
          <NavLink className={"hover:text-cyan-600"}>
            <li>Project</li>
          </NavLink>
          <NavLink className={"hover:text-cyan-600"}>
            <li>Contact</li>
          </NavLink>
        </div>
        <div className="font-roboto-condense">
          <button className="text-cyan-600 border-cyan-600 border px-4 py-1 bg-white rounded-sm">
            Hire Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
