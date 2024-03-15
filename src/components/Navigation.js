import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../AppContext";

const Navigation = () => {
    const { theme, setTheme, changeLang, setChangeLang, teamCalc, coinCalc } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className={theme ? "bg-slate-300 flex flex-row justify-around drop-shadow-md p-2 items-center sticky top-0 z-20" : "bg-slate-100 flex flex-row justify-around drop-shadow-md p-2 items-center sticky top-0 z-20"}>
            <div className="flex flex-row items-center">
                <Link to="/">
                    <img className="h-12 md:h-14 lg:h-16 xl:h-20 drop-shadow-xl" alt="logo" src={require("../assets/main-logo/1.png")} />
                </Link>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">the<span className="ml-1.5 drop-shadow-md before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-[#fddc35] relative inline-block"><span className="relative">score</span></span></p>
            </div>

            <div className="flex flex-row items-center text-base">
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/play");
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-0.5" alt="play-game" src={require("../assets/icons/5.png")} />
                </button>
                <div className="grid justify-items-center pr-0.5 hover:drop-shadow-xl hover:saturate-0">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/team");
                        }}
                    >
                        <img className="h-6 lg:h-7 xl:h-8" alt="tactic-players" src={require("../assets/icons/4.png")} />
                    </button>
                    <div className={teamCalc() !== 15 ? "bg-[#ea5b5a] mt-0.5 px-0.5 text-xs lg:text-sm xl:text-sm font-bold rounded" : "bg-[#82cd64] mt-0.5 px-0.5 text-xs lg:text-sm xl:text-sm font-bold rounded"}>
                        {teamCalc()}
                    </div>
                </div>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/players");
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-1.5" alt="transfer-players" src={require("../assets/icons/3.png")} />
                </button>
                <div className="grid justify-items-center pr-1.5 hover:drop-shadow-xl hover:saturate-0">
                    <div>
                        <img className="h-6 lg:h-7 xl:h-8" alt="coin" src={require("../assets/icons/9.png")} />
                    </div>
                    <div className="mt-0.5 px-0.5 bg-slate-400 text-xs lg:text-sm xl:text-sm font-bold rounded">
                        {coinCalc()}
                    </div>
                </div>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        setChangeLang(!changeLang);
                        changeLang ?
                            (theme ?
                                toast.success(<div>{"Hello"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "dark" })
                                :
                                toast.success(<div>{"Hello"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "light" }))
                            :
                            (theme ?
                                toast.success(<div>{"Merhaba"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "dark" })
                                :
                                toast.success(<div>{"Merhaba"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "light" }))
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-1.5" alt="change-language" src={require("../assets/icons/2.png")} />
                </button>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        setTheme(!theme);
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8" alt="change-mode" src={require("../assets/icons/1.png")} />
                </button>
            </div>
        </div>
    );
}

export default Navigation;
