import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../AppContext";

const LeagueSelection = () => {
    const { setLeagueSelection, setNumberOne, setNumberTwo, setNumberThree, setNumberFour, setNumberFive, setNumberSix, setNumberSeven, setNumberEight, setNumberNine, setNumberTen, setNumberEleven, setNumberTwelve, setNumberThirteen, setNumberFourteen, setNumberFifteen, setGoalkeeperOne, setGoalkeeperTwo, setDefenceOne, setDefenceTwo, setDefenceThree, setDefenceFour, setMidOne, setMidTwo, setMidThree, setMidFour, setMidFive, setForwOne, setForwTwo, setForwThree, setJokerOne, setJokerTwo, setJokerThree, setMoney } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className="h-screen flex items-center">
            <div className="bg-zinc-300 flex flex-row p-4 w-screen justify-center">
                <div
                    data-cy="premier-league-test"
                    onClick={() => {
                        navigate("/premierleague");

                        setLeagueSelection(false);

                        setNumberOne({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 8,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "GK",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberTwo({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 8,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "GK",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberThree({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFour({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFive({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberSix({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberSeven({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberEight({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberNine({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberTen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberEleven({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberTwelve({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberThirteen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF/MF/FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFourteen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF/MF/FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFifteen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF/MF/FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
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
                    }}>
                    <img
                        className="cursor-pointer h-20 lg:h-36 xl:h-36 drop-shadow-md rounded mx-2 hover:saturate-0 hover:drop-shadow-xl"
                        alt="premier-league"
                        src={require("../assets/league-logo/1.png")}
                    />
                </div>
                <div
                    data-cy="bundesliga-test"
                    onClick={() => {
                        navigate("/bundesliga");

                        setLeagueSelection(true);

                        setNumberOne({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 8,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "GK",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberTwo({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 8,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "GK",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberThree({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFour({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFive({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberSix({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberSeven({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberEight({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberNine({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberTen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "MF",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberEleven({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberTwelve({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberThirteen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF/MF/FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFourteen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF/MF/FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
                        });
                        setNumberFifteen({
                            id: 0,
                            icon: false,
                            bg: false,
                            image: 7,
                            player: "Player",
                            club: "",
                            coin: 0,
                            nation: "",
                            flag: "",
                            pos: "DF/MF/FW",
                            age: 0,
                            mp: 0,
                            starts: 0,
                            min: 0,
                            gls: 0,
                            ast: 0,
                            pk: 0,
                            pkatt: 0,
                            crdy: 0,
                            crdr: 0
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
                    }}>
                    <img
                        className="cursor-pointer h-20 lg:h-36 xl:h-36 drop-shadow-md rounded mx-2 hover:saturate-0 hover:drop-shadow-xl"
                        alt="bundesliga"
                        src={require("../assets/league-logo/2.png")}
                    />
                </div>
            </div>
        </div>
    );
}

export default LeagueSelection;
