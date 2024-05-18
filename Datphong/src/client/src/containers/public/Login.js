import React, {useState,useEffect} from "react";
import { Button,InputForm } from "../../components";
import { useLocation  } from 'react-router-dom'
const Login = () => {
  const location = useLocation ();
  const  [isRegister,setRegister] = useState(location.state?.flag);
  useEffect(()=>{
    setRegister(location.state?.flag)
  },[location.state?.flag])
  return (
    <div className="h-screen">
      <div className="w-1124 m-auto flex justify-center flex-row">
        <div className="mt-[130px] w-[500px] bg-white drop-shadow-xl py-10 px-5 font-sans">
          <div>
            <h1 className="font-semibold text-2xl">{isRegister ? "Đăng ký" : "Đăng nhập"}</h1>
          </div>
          {isRegister && 
            <InputForm
              text="Email"
              type="email"
              dropShadow="focus:drop-shadow-blue"
            /> 
          }
          {isRegister && 
            <InputForm
            text="Địa chỉ"
            type="text"
            dropShadow="focus:drop-shadow-blue"
          />
          }
          {isRegister && 
            <InputForm
            text="SĐT"
            type="text"
            dropShadow="focus:drop-shadow-blue"
          />
          }
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
            {isRegister && 
              <InputForm
              text="Nhập lại mật khẩu"
              type="text"
              dropShadow="focus:drop-shadow-blue"
            />
            }
            <div className="mt-5 flex flex-col">
              <Button
                text={isRegister ? "Đăng ký" : "Đăng nhập"}
                textColor="text-[#5392f9]"
                outline="outline-[#5392f9]"
                hoverBg="hover:bg-[#5392f9]"
                hoverText="hover:text-white"
              />
            </div>
            <div className="mt-5 flex flex-row justify-between">
              <p className="text-[#5392f9] ease-in-out duration-100 hover:text-[#e12d2d] cursor-pointer">{isRegister ? <span onClick={()=>{setRegister(false)}}>Đăng nhập</span> : <span onClick={()=>{setRegister(true)}}>Đăng ký</span>}</p>
              <p className="text-[#5392f9] ease-in-out duration-100 hover:text-[#e12d2d] cursor-pointer">Quên mật khẩu</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
