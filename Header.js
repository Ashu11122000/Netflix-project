import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradiant-b from-black z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <img className="w-12 h-12" alt="userIcon" src={user.photoURL} />

      <button onClick={handleSignOut} className="font-bold text-white">
        (signOut)
      </button>
    </div>
  );
};

export default Header;
