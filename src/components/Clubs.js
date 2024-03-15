import React from "react";
import { Link } from 'react-router-dom';

import data from "../data.js";

const Clubs = () => {

    return (
        <div className="grid justify-items-center lg:flex lg:justify-center xl:flex xl:justify-center pb-3 pt-6 bg-white">
            <div className="grid grid-cols-7 gap-1.5 lg:flex lg:flex-row xl:flex xl:flex-row">
                <Link to="/league/table">
                    <button
                        key="league-table"
                        id="league-table"
                        className="grid justify-items-center w-9 mx-0.5 lg:w-9 lg:mx-0.5 xl:w-12 xl:mx-0.5 drop-shadow-xl hover:saturate-0 hover:font-semibold"
                    >
                        <img className="rounded-lg" alt="premier-league" src={require("../assets/league-logo/1.png")} />
                        <p className="bg-white rounded-b px-1 my-1 text-xs xl:text-base">TBL</p>
                    </button>
                </Link>
                {data.clubs.map((item) => {
                    return (
                        <Link to={`/league/${item.Squad.split(" ").join("-").toLowerCase()}`}>
                            <button
                                id={item.Rk}
                                key={item.Rk}
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                                className="grid justify-items-center w-9 mx-0.5 lg:w-9 lg:mx-0.5 xl:w-12 xl:mx-0.5 drop-shadow-xl hover:saturate-0 hover:font-semibold"
                            >
                                <img className="rounded-lg" key={item.Rk} alt={item.Squad} src={require(`../assets/club-logos/${item.Rk}.png`)} />
                                <p className="bg-white rounded-b px-1 my-1 text-xs xl:text-base">
                                    {item.Short}
                                </p>
                            </button>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Clubs;
