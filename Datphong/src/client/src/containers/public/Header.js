import React, { useCallback } from "react";
import { Button, Navbar } from "../../components";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";

const Header = () => {
  const navigate = useNavigate();
  // Home
  const home = useCallback(() => {
    navigate(path.home);
  }, [navigate]);
  // Login
  const login = useCallback(() => {
    navigate(path.login);
  }, [navigate]);
  // Register
  const register = useCallback(() => {
    navigate(path.register);
  }, [navigate]);

  return (
    <div className="h-[60px] w-screen flex items-center bg-white justify-between px-8 drop-shadow-lg">
      <div className="flex items-center justify-between gap-10">
        <img
          src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
          alt="logo"
          onClick={home}
          className="w-[89px] h-[37px] object-contain cursor-pointer"
        />
        <Navbar />
      </div>

      <div className="flex items-center gap-5">
        <Button
          text="Tạo tài khoản"
          onClick={register}
          textColor="text-[#5392f9]"
          outline="outline-[#5392f9]"
          hoverBg="hover:bg-[#5392f9]"
          hoverText="hover:text-white"
        />
        <Button
          text="Đăng nhập"
          onClick={login}
          textColor="text-[#ff567d]"
          outline="outline-[#ff567d]"
          hoverBg="hover:bg-[#ff567d]"
          hoverText="hover:text-white"
        />
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#000000"
              stroke-width="0.624"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
