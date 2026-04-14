import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold flex items-center gap-2"
      : "flex items-center bg-white gap-2 hover:text-primary transition";

  const menu = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          <FaHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/timeline" className={linkClass}>
          <RiTimeLine /> Timeline
        </NavLink>
      </li>

      <li>
        <NavLink to="/stats" className={linkClass}>
          <BiStats /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary">KeenKeeper</h3>
      </div>

      <div className="hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{menu}</ul>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
        >
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
