import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { signOut } from "firebase/auth";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="flex justify-between bg-[#1C2B35] px-8 py-4 sticky">
      {/* <img src={logo} alt="" /> */}
      <h2 className="text-white">E-Shop</h2>
      <div className="gap-4 flex text-white items-center">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span>
            {user.email}
            <button onClick={handleLogout} className=" bg-inherit">
              Log Out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
