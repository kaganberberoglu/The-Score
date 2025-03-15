import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from "react-loading";

import { AppContext } from "../AppContext";

const Login = () => {
    const { loading, loginEmail, setLoginEmail, loginPassword, setLoginPassword, controlEmail, controlPassword, controlUsername, changeLang, changeLanguage, setLoading } = useContext(AppContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        navigate("/league-selection");
    };

    return (
        <div className="h-screen flex items-center">
            {loading ?
                <div className="w-screen grid place-content-center">
                    <ReactLoading
                        type={"bubbles"}
                        color={"#121212"}
                        height={70}
                        width={70}
                    />
                </div>
                :
                <div className="bg-zinc-300 p-4 w-screen grid place-content-center">
                    <div className="flex flex-row items-center">
                        <img
                            className="cursor-pointer w-12 drop-shadow-xl"
                            alt="logo"
                            src={require("../assets/main-logo/1.png")}
                        />
                        <p className="text-xl font-medium">the<span className="ml-1 drop-shadow-md before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-[#fddc35] relative inline-block"><span className="relative">score</span></span></p>
                        <img
                            onClick={(e) => {
                                e.preventDefault();
                                changeLanguage();
                            }}
                            className="ml-9 cursor-pointer w-6 hover:saturate-0 drop-shadow-xl"
                            alt="language"
                            src={require("../assets/icons/2.png")}
                        />
                    </div>
                    <div className="flex flex-col items-start mt-1">
                        <form>
                            <input
                                data-cy="login-username"
                                className="my-1 p-1 rounded-sm"
                                type="text"
                                placeholder={changeLang ? "Eposta veya kullanıcı adı girin" : "Enter email or username"}
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                            {(loginEmail === controlEmail && controlEmail !== "") || (loginEmail === controlUsername && controlUsername !== "") ?
                                <FontAwesomeIcon
                                    className="pl-1 text-green-500"
                                    icon={faCircleCheck}
                                />
                                :
                                <FontAwesomeIcon
                                    className="pl-1"
                                    icon={faCircleChevronLeft}
                                />
                            }
                        </form>
                        <form>
                            <input
                                data-cy="login-password"
                                className="my-1 p-1 rounded-sm"
                                type="password"
                                placeholder={changeLang ? "Şifre girin" : "Enter password"}
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                            {loginPassword === "" || loginPassword !== controlPassword ?
                                <FontAwesomeIcon
                                    className="pl-1"
                                    icon={faCircleChevronLeft}
                                />
                                :
                                <FontAwesomeIcon
                                    className="pl-1 text-green-500"
                                    icon={faCircleCheck}
                                />
                            }
                        </form>
                        <div className="mt-1">
                            <button
                                data-cy="login"
                                disabled={loginEmail === "" || loginPassword === "" || controlEmail === "" || controlPassword === "" || controlUsername === "" || (loginEmail !== controlEmail && loginEmail !== controlUsername) || loginPassword !== controlPassword}
                                onClick={handleLogin}
                                className="border border-black bg-zinc-400 hover:drop-shadow-xl px-1 py-0.5 rounded-sm font-medium disabled:cursor-not-allowed"
                                type="submit"
                            >
                                {changeLang ? "Giriş yap" : "Login"}
                            </button>
                            <Link to="/signup">
                                <button
                                    data-cy="signup"
                                    className="border border-black hover:bg-zinc-400 rounded-sm px-1 py-0.5 ml-1 font-medium">
                                    {changeLang ? "Kayıt ol" : "Signup"}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;
