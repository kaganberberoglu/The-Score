import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../AppContext";

const TransitionPageSecond = () => {
    const { changeLang } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className="flex justify-center p-4">
            <div className="grid justify-items-center">
                <button
                    className="text-sm lg:text-base xl:text-xl py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 bg-[#fddc35] hover:drop-shadow-lg rounded font-semibold"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/bundesliga");
                    }}
                >
                    {changeLang ? "DEVAM!" : "GO AHEAD!"}
                </button>
            </div>
        </div>
    );
}

export default TransitionPageSecond;
