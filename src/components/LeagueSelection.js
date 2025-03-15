import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import ReactLoading from "react-loading";

import { AppContext } from "../AppContext";

const LeagueSelection = () => {
    const { loading, setLoading, setLeagueName, setMatch, setRivalTotalScore, setYourTotalScore, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, setNumberOne, setNumberTwo, setNumberThree, setNumberFour, setNumberFive, setNumberSix, setNumberSeven, setNumberEight, setNumberNine, setNumberTen, setNumberEleven, setNumberTwelve, setNumberThirteen, setNumberFourteen, setNumberFifteen, setGoalkeeperOne, setGoalkeeperTwo, setDefenceOne, setDefenceTwo, setDefenceThree, setDefenceFour, setMidOne, setMidTwo, setMidThree, setMidFour, setMidFive, setForwOne, setForwTwo, setForwThree, setJokerOne, setJokerTwo, setJokerThree, setMoney } = useContext(AppContext);

    const navigate = useNavigate();

    const league = [
        {
            icon: 1,
            name: "Football League"
        },
        {
            icon: 2,
            name: "Premier League"
        },
        {
            icon: 3,
            name: "Bundesliga"
        },
        {
            icon: 4,
            name: "LaLiga"
        },
        {
            icon: 5,
            name: "Serie A"
        },
        {
            icon: 6,
            name: "Ligue 1"
        },
    ];

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
                <div className="bg-zinc-300 grid grid-flow-col grid-rows-2 gap-4 py-8 w-screen justify-center">
                    {league.map((item) => {
                        return (
                            <img
                                onClick={(e) => {
                                    e.preventDefault();

                                    setMatch(false);
                                    setRivalTotalScore(0);
                                    setYourTotalScore(0);

                                    setShowNumberOne(false);
                                    setShowNumberTwo(false);
                                    setShowNumberThree(false);
                                    setShowNumberFour(false);
                                    setShowNumberFive(false);
                                    setShowNumberSix(false);
                                    setShowNumberSeven(false);
                                    setShowNumberEight(false);
                                    setShowNumberNine(false);
                                    setShowNumberTen(false);
                                    setShowNumberEleven(false);

                                    setNumberOne({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 8,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "GK",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberTwo({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 8,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "GK",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberThree({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberFour({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberFive({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberSix({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberSeven({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "MF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberEight({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "MF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberNine({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "MF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberTen({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "MF",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberEleven({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "FW",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberTwelve({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "FW",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberThirteen({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF/MF/FW",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberFourteen({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF/MF/FW",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });
                                    setNumberFifteen({
                                        id: 0,
                                        icon: false,
                                        bg: false,
                                        image: 7,
                                        player: "Player",
                                        team: "",
                                        tr: "",
                                        value: 0,
                                        nation: "",
                                        flagcode: "",
                                        pos: "DF/MF/FW",
                                        age: 0,
                                        mp: 0,
                                        min: 0,
                                        g: 0,
                                        a: 0,
                                        ga: 0,
                                        yc: 0,
                                        rc: 0
                                    });

                                    setGoalkeeperOne("Player");
                                    setGoalkeeperTwo("Player");
                                    setDefenceOne("Player");
                                    setDefenceTwo("Player");
                                    setDefenceThree("Player");
                                    setDefenceFour("Player");
                                    setMidOne("Player");
                                    setMidTwo("Player");
                                    setMidThree("Player");
                                    setMidFour("Player");
                                    setMidFive("Player");
                                    setForwOne("Player");
                                    setForwTwo("Player");
                                    setForwThree("Player");
                                    setJokerOne("Player");
                                    setJokerTwo("Player");
                                    setJokerThree("Player");

                                    setMoney(400);

                                    setLoading(true);
                                    setTimeout(() => {
                                        setLoading(false);
                                    }, 2000);
                                    navigate("/league");
                                    setLeagueName(item);
                                }}
                                className="cursor-pointer h-20 lg:h-28 xl:h-28 drop-shadow-md rounded mx-2 hover:saturate-0 hover:drop-shadow-xl"
                                alt={item.name}
                                src={require(`../assets/league-logos/${item.icon}.png`)}
                            />
                        )
                    })}
                </div>
            }
        </div>
    );
};

export default LeagueSelection;
