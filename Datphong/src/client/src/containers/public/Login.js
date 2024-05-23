import React, { useState, useEffect } from 'react';
import { Button, InputForm } from '../../components';
import { useLocation, useNavigate} from 'react-router-dom';
// eslint-disable-next-line
import { apiRegister } from '../../services/auth';
import * as action from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [isRegister, setRegister] = useState(location.state?.flag);
    const [payload, setPayload] = useState({
        phone: '',
        pass: '',
        name: '',
        address: '',
        email: '',
        repass: '',
    });
    const [invalidfield, setInvalidfield] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validatiton = validate();
        if (Object.keys(validatiton).length > 0) {
            setInvalidfield(validatiton);
        } else {
            setInvalidfield({});
            const { repass, ...payloadRegister } = payload;
            isRegister ? dispatch(action.register(payloadRegister)).then((response)=>{
                if(isRegister){
                  alert('Đăng ký thành công!');
                  setRegister(false);
                }
            }) : dispatch(action.login(payload)).then((response) => {
                alert('Đăng nhập thành công!');
            });
        }
    };
    useEffect(() => {
        setRegister(location.state?.flag);
    }, [location.state?.flag]);
    useEffect(() => {
      isLoggedIn && navigate('/')
    }, [isLoggedIn]);
    const validate = () => {
        let newErrors = {};
        if (isRegister) {
            if (!payload.phone) {
                newErrors.phone = 'Số điện thoại không được để trống.';
            } else if (!payload.phone.match(/^\d+$/)) {
                newErrors.phone = 'Số điện thoại phải có dạng số';
            } else if (!payload.phone.match(/^[0-9]{10}$/)) {
                newErrors.phone = 'Số điện thoại phải có 10 chữ số.';
            } else if (!payload.phone.match(/^0[0-9]{9}$/)) {
                newErrors.phone = 'Số điện thoại phải bắt đầu từ số 0';
            }
            if (!payload.pass) {
                newErrors.pass = 'Mật khẩu không được để trống.';
            } else if (payload.pass.length < 6) {
                newErrors.pass = 'Mật khẩu phải có ít nhất 6 ký tự.';
            }

            if (!payload.repass) {
                newErrors.repass = 'Mật khẩu không được để trống.';
            } else if (payload.repass.length < 6) {
                newErrors.repass = 'Mật khẩu phải có ít nhất 6 ký tự.';
            } else if (payload.pass !== payload.repass) {
                newErrors.repass = 'Mật khẩu nhập lại phải giống nhau';
            }

            if (!payload.name) {
                newErrors.name = 'Tên không được để trống.';
            } else if (payload.name.length < 6) {
                newErrors.name = 'Tên phải có ít nhất 6 ký tự.';
            }
            if (!payload.address) {
                newErrors.address = 'Địa chỉ không được để trống.';
            }
            if (!payload.email) {
                newErrors.email = 'Email không được để trống.';
            } else if (!payload.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                newErrors.email = 'Email không hợp lệ.';
            }
        } else {
            if (!payload.name) {
                newErrors.name = 'Tên không được để trống.';
            } else if (payload.name.length < 6) {
                newErrors.name = 'Tên phải có ít nhất 6 ký tự.';
            }
            if (!payload.pass) {
                newErrors.pass = 'Mật khẩu không được để trống.';
            } else if (payload.pass.length < 6) {
                newErrors.pass = 'Mật khẩu phải có ít nhất 6 ký tự.';
            }
        }
        return newErrors;
    };
    return (
        <div className="h-screen">
            <div className="w-1124 m-auto flex justify-center flex-row">
                <div className="mt-[130px] w-[500px] bg-white drop-shadow-xl py-10 px-5 font-sans">
                    <div>
                        <h1 className="font-semibold text-2xl">{isRegister ? 'Đăng ký' : 'Đăng nhập'}</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {isRegister && (
                            <InputForm
                                setInvalidfield={setInvalidfield}
                                text="Email"
                                dropShadow="focus:drop-shadow-blue"
                                value={payload.email}
                                setValue={setPayload}
                                type={'email'}
                            />
                        )}
                        {isRegister && invalidfield.email && <p style={{ color: 'red' }}>{invalidfield.email}</p>}
                        {isRegister && (
                            <InputForm
                                setInvalidfield={setInvalidfield}
                                text="Địa chỉ"
                                dropShadow="focus:drop-shadow-blue"
                                value={payload.address}
                                setValue={setPayload}
                                type={'address'}
                            />
                        )}
                        {isRegister && invalidfield.address && <p style={{ color: 'red' }}>{invalidfield.address}</p>}
                        {isRegister && (
                            <InputForm
                                setInvalidfield={setInvalidfield}
                                text="SĐT"
                                dropShadow="focus:drop-shadow-blue"
                                value={payload.phone}
                                setValue={setPayload}
                                type={'phone'}
                            />
                        )}
                        {isRegister && invalidfield.phone && <p style={{ color: 'red' }}>{invalidfield.phone}</p>}
                        <InputForm
                            setInvalidfield={setInvalidfield}
                            text="Tên đăng nhập"
                            type={'name'}
                            dropShadow="focus:drop-shadow-blue"
                            value={payload.name}
                            setValue={setPayload}
                        />
                        {invalidfield.name && <p style={{ color: 'red' }}>{invalidfield.name}</p>}
                        <InputForm
                            setInvalidfield={setInvalidfield}
                            text="Mật khẩu"
                            type={'pass'}
                            dropShadow="focus:drop-shadow-blue"
                            value={payload.pass}
                            setValue={setPayload}
                        />
                        {invalidfield.pass && <p style={{ color: 'red' }}>{invalidfield.pass}</p>}
                        {isRegister && (
                            <InputForm
                                setInvalidfield={setInvalidfield}
                                text="Nhập lại mật khẩu"
                                type={'repass'}
                                dropShadow="focus:drop-shadow-blue"
                                value={payload.repass}
                                setValue={setPayload}
                            />
                        )}
                        {isRegister && invalidfield.repass && <p style={{ color: 'red' }}>{invalidfield.repass}</p>}
                        <div className="mt-5 flex flex-col">
                            <Button
                                text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
                                type="submit"
                                textColor="text-[#5392f9]"
                                outline="outline-[#5392f9]"
                                hoverBg="hover:bg-[#5392f9]"
                                hoverText="hover:text-white"
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                    <div className="mt-5 flex flex-row justify-between">
                        <p className="text-[#5392f9] ease-in-out duration-100 hover:text-[#e12d2d] cursor-pointer">
                            {isRegister ? (
                                <span
                                    onClick={() => {
                                        setRegister(false);
                                        setPayload({
                                            phone: '',
                                            pass: '',
                                            name: '',
                                            address: '',
                                            email: '',
                                            repass: '',
                                        });
                                    }}
                                >
                                    Đăng nhập
                                </span>
                            ) : (
                                <span
                                    onClick={() => {
                                        setRegister(true);
                                        setPayload({
                                            phone: '',
                                            pass: '',
                                            name: '',
                                            address: '',
                                            email: '',
                                            repass: '',
                                        });
                                    }}
                                >
                                    Đăng ký
                                </span>
                            )}
                        </p>
                        <p className="text-[#5392f9] ease-in-out duration-100 hover:text-[#e12d2d] cursor-pointer">
                            Quên mật khẩu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
