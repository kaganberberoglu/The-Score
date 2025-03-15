import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck, faThumbsUp, faThumbsDown, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from "react-loading";

import { AppContext } from "../AppContext";

const Signup = () => {
    const { loading, email, setEmail, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, changeLang, changeLanguage, setControlEmail, setControlUsername, setControlPassword } = useContext(AppContext);

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setControlEmail(email);
        setControlUsername(username);
        setControlPassword(password);
        console.log("Signup Email: ", email, "Password: ", password);
        navigate("/");
    };

    const hasDotAfterAt = (str) => {
        let count = 0
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "@") {
                count++;
            }
        };

        let atIndex = str.lastIndexOf("@");
        let dotIndex = str.lastIndexOf(".");
        return atIndex !== -1 && dotIndex > atIndex && count === 1;
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
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }}
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
                                data-cy="email"
                                className="my-1 p-1 rounded-sm"
                                type="text"
                                placeholder={changeLang ? "Eposta girin" : "Enter email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {email === "" ?
                                <FontAwesomeIcon
                                    className="pl-1"
                                    icon={faCircleChevronLeft}
                                />
                                :
                                hasDotAfterAt(email) === false ?
                                    < FontAwesomeIcon
                                        className="pl-1 text-red-500"
                                        icon={faCircleXmark}
                                    />
                                    :
                                    <FontAwesomeIcon
                                        className="pl-1 text-green-500"
                                        icon={faCircleCheck}
                                    />
                            }
                        </form>
                        <form>
                            <input
                                data-cy="username"
                                className="my-1 p-1 rounded-sm"
                                type="text"
                                placeholder={changeLang ? "Kullanıcı adı girin" : "Enter username"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {username === "" ?
                                <FontAwesomeIcon
                                    className="pl-1"
                                    icon={faCircleChevronLeft}
                                />
                                :
                                username.length > 10 ?
                                    <FontAwesomeIcon
                                        className="pl-1 text-red-500"
                                        icon={faCircleXmark}
                                    />
                                    :
                                    <FontAwesomeIcon
                                        className="pl-1 text-green-500"
                                        icon={faCircleCheck}
                                    />
                            }
                        </form>
                        <form>
                            <input
                                data-cy="password"
                                className="my-1 p-1 rounded-sm"
                                type="password"
                                placeholder={changeLang ? "Şifre girin" : "Enter password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {password === "" ?
                                <FontAwesomeIcon
                                    className="pl-1"
                                    icon={faCircleChevronLeft}
                                />
                                :
                                password.length < 6 ?
                                    <FontAwesomeIcon
                                        className="pl-1 text-red-500"
                                        icon={faCircleXmark}
                                    />
                                    :
                                    <FontAwesomeIcon
                                        className="pl-1 text-green-500"
                                        icon={faCircleCheck}
                                    />
                            }
                        </form>
                        <form>
                            <input
                                data-cy="control-password"
                                className="my-1 p-1 rounded-sm"
                                type="password"
                                placeholder={changeLang ? "Şifre onayla" : "Confirm password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {password === "" ?
                                <FontAwesomeIcon
                                    className="pl-1"
                                    icon={faCircleChevronLeft}
                                />
                                :
                                password !== confirmPassword ?
                                    <FontAwesomeIcon
                                        className="pl-1 text-red-500"
                                        icon={faCircleXmark}
                                    />
                                    :
                                    <FontAwesomeIcon
                                        className="pl-1 text-green-500"
                                        icon={faCircleCheck}
                                    />
                            }
                        </form>
                        <div className="mt-1 font-medium">
                            <div className="flex flex-row">
                                <p>
                                    {changeLang ? "*E-posta adresi geçerli olmalıdır" : "*Email address must be valid"}
                                </p>
                                <div className="pl-1">
                                    {hasDotAfterAt(email) === false ?
                                        <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
                                        :
                                        <FontAwesomeIcon className="text-green-500" icon={faThumbsUp} />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <p>
                                    {changeLang ? "*Alanlar boş bırakılmamalıdır" : "*Fields should not be left blank"}
                                </p>
                                <div className="pl-1">
                                    {email === "" || username === "" || password === "" || confirmPassword === "" ?
                                        <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
                                        :
                                        <FontAwesomeIcon className="text-green-500" icon={faThumbsUp} />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <p>
                                    {changeLang ? "*Kullanıcı adı en fazla 10 karakterden oluşmalıdır" : "*Username must be maximum 10 characters"}
                                </p>
                                <div className="pl-1">
                                    {username.length > 10 || username === "" ?
                                        <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
                                        :
                                        <FontAwesomeIcon className="text-green-500" icon={faThumbsUp} />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <p>
                                    {changeLang ? "*Şifre en az 6 karakterden oluşmalıdır" : "*Password must be at least 6 characters"}
                                </p>
                                <div className="pl-1">
                                    {password.length < 6 || password === "" ?
                                        <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
                                        :
                                        <FontAwesomeIcon className="text-green-500" icon={faThumbsUp} />
                                    }
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <p>
                                    {changeLang ? "*Şifre alanları eşit olmalıdır" : "*Password fields must be equal"}
                                </p>
                                <div className="pl-1">
                                    {password !== confirmPassword || password === "" || confirmPassword === "" ?
                                        <FontAwesomeIcon className="text-red-500" icon={faThumbsDown} />
                                        :
                                        <FontAwesomeIcon className="text-green-500" icon={faThumbsUp} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <button
                                data-cy="to-login"
                                disabled={email === "" || username === "" || password === "" || confirmPassword === "" || hasDotAfterAt(email) === false || password !== confirmPassword || password.length < 6 || username.length > 10}
                                onClick={handleSignup}
                                className="border border-black bg-zinc-400 hover:drop-shadow-xl px-1 py-0.5 rounded-sm font-medium disabled:cursor-not-allowed"
                                type="submit"
                            >
                                {changeLang ? "Devam et" : "Continue"}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Signup;
