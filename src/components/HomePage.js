import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../AppContext";

const HomePage = () => {
    const { changeLang, theme } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className="flex justify-center pt-12 pb-4">
            <div className="grid justify-items-center">
                <div className={theme ? "bg-sky-700 py-10 px-6 md:py-12 md:px-8 lg:py-12 lg:px-8 xl:py-12 xl:px-8 rounded font-medium drop-shadow-lg" : "bg-sky-300 py-10 px-6 md:py-12 md:px-8 lg:py-12 lg:px-8 xl:py-12 xl:px-8 rounded font-medium drop-shadow-lg"}>
                    <p className={theme ? "text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl" : "text-xl md:text-2xl lg:text-3xl xl:text-4xl"}>
                        {changeLang ? "Oyuncularını seç," : "Choose your players,"}
                    </p>
                    <p className={theme ? "text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl" : "text-xl md:text-2xl lg:text-3xl xl:text-4xl"}>
                        {changeLang ? "Takımını kur," : "Build your team,"}
                    </p>
                    <p className={theme ? "text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl" : "font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"}>
                        {changeLang ? "Oynamaya başla!" : "Start playing!"}
                    </p>
                </div>
                <div className="flex flex-row mt-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    <button
                        className={theme ? "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-700 hover:drop-shadow-lg rounded text-white" : "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-300 hover:drop-shadow-lg rounded"}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/players");
                        }}
                    >
                        {changeLang ? "oyuncular" : "players"}
                    </button>
                    <button
                        className={theme ? "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-700 hover:drop-shadow-lg rounded text-white" : "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-300 hover:drop-shadow-lg rounded"}
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/team");
                        }}
                    >
                        {changeLang ? "takım" : "team"}
                    </button>
                    <button
                        className="py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-[#fddc35] hover:drop-shadow-lg rounded font-semibold"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/play");
                        }}
                    >
                        {changeLang ? "oyna!" : "play!"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
