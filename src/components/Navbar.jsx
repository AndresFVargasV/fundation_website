import { NavLink } from "react-router-dom";
const NavBar = () => {
  const routes = [
    ["Home", "/"],
    ["Login", "/login"],
    ["Register", "/register"],
  ];
  return (
    <nav className="flex sm:justify-center space-x-4 mb-5 mt-5">
      {routes.map(([title, url]) => (
        <NavLink
          to={url}
          key={title}
          className="rounded-lg px-3 py-2 text-stone-950 font-medium
           hover:bg-slate-100 hover:text-slate-900 "
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
