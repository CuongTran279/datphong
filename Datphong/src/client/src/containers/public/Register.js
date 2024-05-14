import React from "react";
import { Button,InputForm } from "../../components";

const Register = () => {
  return (
    <div className="h-screen">
      <div className="w-1124 m-auto h-full flex justify-center flex-row">
        <div className="mt-[130px] w-[500px] h-[550px] bg-white drop-shadow-xl py-10 px-5 font-sans">
          <div>
            <h1 className="font-semibold text-2xl">Đăng Ký</h1>
          </div>
          <div className="mt-10">
            <InputForm
              text="Email"
              type="email"
              dropShadow="focus:drop-shadow-blue"
            />
            <InputForm
              text="Tên đăng nhập"
              type="text"
              dropShadow="focus:drop-shadow-blue"
            />
            <InputForm
              text="Mật khẩu"
              type="text"
              dropShadow="focus:drop-shadow-blue"
            />
            <InputForm
              text="Nhập lại mật khẩu"
              type="text"
              dropShadow="focus:drop-shadow-blue"
            />
            <div className="mt-5 flex flex-col">
              <Button
                text="Đăng Ký"
                textColor="text-[#5392f9]"
                outline="outline-[#5392f9]"
                hoverBg="hover:bg-[#5392f9]"
                hoverText="hover:text-white"
              />
            </div>
            <div className="mt-5 flex flex-row justify-between">
              <p className="text-[#5392f9] ease-in-out duration-100 hover:text-[#e12d2d] cursor-pointer">
                Đã có tài khoản ?
              </p>
              <p className="text-[#5392f9] ease-in-out duration-100 hover:text-[#e12d2d] cursor-pointer">
                Quên mật khẩu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
