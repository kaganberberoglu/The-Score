import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCircleXmark, faShuffle, faUser } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { AppContext } from "../AppContext";
import useLocalStorage from "../useLocalStorage.js";
import Navigation from "./Navigation";
import Clubs from "./Clubs";

import "./SweetAlert.css";

const TeamTactics = () => {
    const { theme, selectedPlayers, changeLang, dropPlayers, lineupAfterDrop, goalkeeperOne, setGoalkeeperOne, goalkeeperTwo, setGoalkeeperTwo, defenceOne, setDefenceOne, defenceTwo, setDefenceTwo, defenceThree, setDefenceThree, defenceFour, setDefenceFour, midOne, setMidOne, midTwo, setMidTwo, midThree, setMidThree, midFour, setMidFour, midFive, setMidFive, forwOne, setForwOne, forwTwo, setForwTwo, forwThree, setForwThree, jokerOne, setJokerOne, jokerTwo, setJokerTwo, jokerThree, setJokerThree, setRandomTeam, setNotRandomTeam, setTactic, setMatch, setRivalTotalScore, setYourTotalScore, setLevel, coinCalc } = useContext(AppContext);

    const navigate = useNavigate();

    const tactics = [
        "4-4-2",
        "4-5-1",
        "4-3-3",
        "3-4-3",
        "3-5-2"
    ];

    const [randomLineup, setRandomLineup] = useLocalStorage("Line-Up", true);

    const chosenGK = [];
    const chosenDF = [];
    const chosenMF = [];
    const chosenFW = [];

    const selectPlayerFromPosition = (position, array) => {
        for (let i = 0; i < selectedPlayers.length; i++) {
            if (selectedPlayers[i].pos === position && selectedPlayers[i].player !== "Player") {
                array.push(selectedPlayers[i]);
            }
        }
    };
    selectPlayerFromPosition("GK", chosenGK);
    selectPlayerFromPosition("DF", chosenDF);
    selectPlayerFromPosition("MF", chosenMF);
    selectPlayerFromPosition("FW", chosenFW);

    const selectedTeam = {
        GK: [
            {
                image: 8,
                position: "GK",
                tactic: "4-4-2",
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player"
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-5-1",
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player"
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-3-3",
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player"
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-4-3",
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player"
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-5-2",
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player"
            }
        ],
        DF: [
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: chosenDF.length > 3 ? chosenDF[3].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: chosenDF.length > 3 ? chosenDF[3].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: chosenDF.length > 3 ? chosenDF[3].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player"
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player"
            }
        ],
        MF: [
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player"
            },
            {
                image: 7,
                position: chosenMF.length > 4 ? "MF" : (chosenFW.length > 1 ? "FW" : "MF"),
                tactic: "4-5-1",
                player: chosenMF.length > 4 ? chosenMF[4].player : (chosenFW.length > 1 ? chosenFW[1].player : "Player")
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player"
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player"
            },
            {
                image: 7,
                position: chosenMF.length > 4 ? "MF" : (chosenDF.length > 3 ? "DF" : "MF"),
                tactic: "3-5-2",
                player: chosenMF.length > 4 ? chosenMF[4].player : (chosenDF.length > 3 ? chosenDF[3].player : "Player")
            }
        ],
        FW: [
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player"
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player"
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-5-1",
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player"
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player"
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player"
            },
            {
                image: 7,
                position: chosenFW.length > 2 ? "FW" : (chosenMF.length > 3 ? "MF" : "FW"),
                tactic: "4-3-3",
                player: chosenFW.length > 2 ? chosenFW[2].player : (chosenMF.length > 3 ? chosenMF[3].player : "Player")
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player"
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player"
            },
            {
                image: 7,
                position: chosenFW.length > 2 ? "FW" : (chosenDF.length > 3 ? "DF" : "FW"),
                tactic: "3-4-3",
                player: chosenFW.length > 2 ? chosenFW[2].player : (chosenDF.length > 3 ? chosenDF[3].player : "Player")
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player"
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player"
            }
        ]
    };

    const { Tactic } = useParams();
    const GK = selectedTeam.GK.filter(item => item.tactic === String(Tactic));
    const DF = selectedTeam.DF.filter(item => item.tactic === String(Tactic));
    const MF = selectedTeam.MF.filter(item => item.tactic === String(Tactic));
    const FW = selectedTeam.FW.filter(item => item.tactic === String(Tactic));

    const DEF = DF.filter(item => item.player !== "Player");
    const MID = MF.filter(item => item.player !== "Player");
    const FORW = FW.filter(item => item.player !== "Player");

    const teamPlayers = DEF.concat(MID, FORW);

    const allTeamPlayersWithoutGK = chosenDF.concat(chosenMF, chosenFW);

    const selectSubs = (players) => {
        let array = [];
        let subs = [];
        let count = {};

        for (let i = 0; i < allTeamPlayersWithoutGK.length; i++) {
            array.push(allTeamPlayersWithoutGK[i].player);
        };

        for (let i = 0; i < players.length; i++) {
            array.push(players[i].player);
        };

        for (let key of array) {
            if (count[key]) {
                count[key] += 1;
            } else {
                count[key] = 1;
            }
        };

        for (const [key, value] of Object.entries(count)) {
            if (value === 1) {
                subs.push(key);
            }
        };

        return subs;
    };
    selectSubs(teamPlayers);

    const selectSubsWithDatas = (array) => {
        let subsWithDatas = [];

        for (let i = 0; i < allTeamPlayersWithoutGK.length; i++) {
            for (let l = 0; l < array.length; l++) {
                if (allTeamPlayersWithoutGK[i].player === array[l]) {
                    subsWithDatas.push(allTeamPlayersWithoutGK[i].pos);
                }
            }
        };

        return subsWithDatas;
    };
    selectSubsWithDatas(selectSubs(teamPlayers));

    const selectedSubs = [
        {
            image: 8,
            position: "GK",
            tactic: "4-4-2",
            player: chosenGK.length > 1 ? chosenGK[1].player : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 0 ? selectSubsWithDatas(selectSubs(teamPlayers))[0] : "DF/MF/FW",
            tactic: "4-4-2",
            player: selectSubs(teamPlayers).length > 0 ? selectSubs(teamPlayers)[0] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 1 ? selectSubsWithDatas(selectSubs(teamPlayers))[1] : "DF/MF/FW",
            tactic: "4-4-2",
            player: selectSubs(teamPlayers).length > 1 ? selectSubs(teamPlayers)[1] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 2 ? selectSubsWithDatas(selectSubs(teamPlayers))[2] : "DF/MF/FW",
            tactic: "4-4-2",
            player: selectSubs(teamPlayers).length > 2 ? selectSubs(teamPlayers)[2] : "Player"
        },
        {
            image: 8,
            position: "GK",
            tactic: "4-5-1",
            player: chosenGK.length > 1 ? chosenGK[1].player : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 0 ? selectSubsWithDatas(selectSubs(teamPlayers))[0] : "DF/MF/FW",
            tactic: "4-5-1",
            player: selectSubs(teamPlayers).length > 0 ? selectSubs(teamPlayers)[0] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 1 ? selectSubsWithDatas(selectSubs(teamPlayers))[1] : "DF/MF/FW",
            tactic: "4-5-1",
            player: selectSubs(teamPlayers).length > 1 ? selectSubs(teamPlayers)[1] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 2 ? selectSubsWithDatas(selectSubs(teamPlayers))[2] : "DF/MF/FW",
            tactic: "4-5-1",
            player: selectSubs(teamPlayers).length > 2 ? selectSubs(teamPlayers)[2] : "Player"
        },
        {
            image: 8,
            position: "GK",
            tactic: "4-3-3",
            player: chosenGK.length > 1 ? chosenGK[1].player : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 0 ? selectSubsWithDatas(selectSubs(teamPlayers))[0] : "DF/MF/FW",
            tactic: "4-3-3",
            player: selectSubs(teamPlayers).length > 0 ? selectSubs(teamPlayers)[0] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 1 ? selectSubsWithDatas(selectSubs(teamPlayers))[1] : "DF/MF/FW",
            tactic: "4-3-3",
            player: selectSubs(teamPlayers).length > 1 ? selectSubs(teamPlayers)[1] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 2 ? selectSubsWithDatas(selectSubs(teamPlayers))[2] : "DF/MF/FW",
            tactic: "4-3-3",
            player: selectSubs(teamPlayers).length > 2 ? selectSubs(teamPlayers)[2] : "Player"
        },
        {
            image: 8,
            position: "GK",
            tactic: "3-4-3",
            player: chosenGK.length > 1 ? chosenGK[1].player : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 0 ? selectSubsWithDatas(selectSubs(teamPlayers))[0] : "DF/MF/FW",
            tactic: "3-4-3",
            player: selectSubs(teamPlayers).length > 0 ? selectSubs(teamPlayers)[0] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 1 ? selectSubsWithDatas(selectSubs(teamPlayers))[1] : "DF/MF/FW",
            tactic: "3-4-3",
            player: selectSubs(teamPlayers).length > 1 ? selectSubs(teamPlayers)[1] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 2 ? selectSubsWithDatas(selectSubs(teamPlayers))[2] : "DF/MF/FW",
            tactic: "3-4-3",
            player: selectSubs(teamPlayers).length > 2 ? selectSubs(teamPlayers)[2] : "Player"
        },
        {
            image: 8,
            position: "GK",
            tactic: "3-5-2",
            player: chosenGK.length > 1 ? chosenGK[1].player : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 0 ? selectSubsWithDatas(selectSubs(teamPlayers))[0] : "DF/MF/FW",
            tactic: "3-5-2",
            player: selectSubs(teamPlayers).length > 0 ? selectSubs(teamPlayers)[0] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 1 ? selectSubsWithDatas(selectSubs(teamPlayers))[1] : "DF/MF/FW",
            tactic: "3-5-2",
            player: selectSubs(teamPlayers).length > 1 ? selectSubs(teamPlayers)[1] : "Player"
        },
        {
            image: 7,
            position: selectSubsWithDatas(selectSubs(teamPlayers)).length > 2 ? selectSubsWithDatas(selectSubs(teamPlayers))[2] : "DF/MF/FW",
            tactic: "3-5-2",
            player: selectSubs(teamPlayers).length > 2 ? selectSubs(teamPlayers)[2] : "Player"
        }
    ];

    const SUBS = selectedSubs.filter(item => item.tactic === String(Tactic));

    const selectDefenceFour = () => {
        if (defenceFour === defenceOne || defenceFour === defenceTwo || defenceFour === defenceThree) {
            return "Player";
        } else {
            return defenceFour;
        }
    };

    const selectMidFour = () => {
        if (midFour === midOne || midFour === midTwo || midFour === midThree) {
            return "Player";
        } else {
            return midFour;
        }
    };

    const selectMidFive = () => {
        if (midFive === midOne || midFive === midTwo || midFive === midThree || midFive === midFour) {
            return "Player";
        } else {
            return midFive;
        }
    };

    const selectForwTwo = () => {
        if (forwTwo === forwOne) {
            return "Player";
        } else {
            return forwTwo;
        }
    };

    const selectForwThree = () => {
        if (forwThree === forwOne || forwThree === forwTwo) {
            return "Player";
        } else {
            return forwThree;
        }
    };

    const selectJoker = (tactic, joker) => {
        if (tactic === "4-4-2" && (joker === defenceOne || joker === defenceTwo || joker === defenceThree || joker === defenceFour || joker === midOne || joker === midTwo || joker === midThree || joker === midFour || joker === forwOne || joker === forwTwo)) {
            return "Player";
        } else if (tactic === "4-5-1" && (joker === defenceOne || joker === defenceTwo || joker === defenceThree || joker === defenceFour || joker === midOne || joker === midTwo || joker === midThree || joker === midFour || joker === midFive || joker === forwOne)) {
            return "Player";
        } else if (tactic === "4-3-3" && (joker === defenceOne || joker === defenceTwo || joker === defenceThree || joker === defenceFour || joker === midOne || joker === midTwo || joker === midThree || joker === forwOne || joker === forwTwo || joker === forwThree)) {
            return "Player";
        } else if (tactic === "3-4-3" && (joker === defenceOne || joker === defenceTwo || joker === defenceThree || joker === midOne || joker === midTwo || joker === midThree || joker === midFour || joker === forwOne || joker === forwTwo || joker === forwThree)) {
            return "Player";
        } else if (tactic === "3-5-2" && (joker === defenceOne || joker === defenceTwo || joker === defenceThree || joker === midOne || joker === midTwo || joker === midThree || joker === midFour || joker === midFive || joker === forwOne || joker === forwTwo)) {
            return "Player";
        } else {
            return joker;
        };
    };

    const setPositionsOfJokers = (joker) => {
        const position = selectedPlayers.filter(item => item.player === joker);

        if (position.length > 0) {
            return position[0].pos;
        } else {
            return "DF/MF/FW";
        };
    };

    const buildTeam = {
        GK: [
            {
                image: 8,
                position: "GK",
                tactic: "4-4-2",
                player: goalkeeperOne,
                function: setGoalkeeperOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-5-1",
                player: goalkeeperOne,
                function: setGoalkeeperOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-3-3",
                player: goalkeeperOne,
                function: setGoalkeeperOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-4-3",
                player: goalkeeperOne,
                function: setGoalkeeperOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-5-2",
                player: goalkeeperOne,
                function: setGoalkeeperOne
            }
        ],
        DF: [
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: defenceOne,
                function: setDefenceOne
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: defenceTwo,
                function: setDefenceTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: defenceThree,
                function: setDefenceThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                player: selectDefenceFour(),
                function: setDefenceFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: defenceOne,
                function: setDefenceOne
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: defenceTwo,
                function: setDefenceTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: defenceThree,
                function: setDefenceThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                player: selectDefenceFour(),
                function: setDefenceFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: defenceOne,
                function: setDefenceOne
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: defenceTwo,
                function: setDefenceTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: defenceThree,
                function: setDefenceThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                player: selectDefenceFour(),
                function: setDefenceFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                player: defenceOne,
                function: setDefenceOne
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                player: defenceTwo,
                function: setDefenceTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                player: defenceThree,
                function: setDefenceThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                player: defenceOne,
                function: setDefenceOne
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                player: defenceTwo,
                function: setDefenceTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                player: defenceThree,
                function: setDefenceThree
            }
        ],
        MF: [
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: midOne,
                function: setMidOne
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: midTwo,
                function: setMidTwo
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: midThree,
                function: setMidThree
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                player: selectMidFour(),
                function: setMidFour
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: midOne,
                function: setMidOne
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: midTwo,
                function: setMidTwo
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: midThree,
                function: setMidThree
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: selectMidFour(),
                function: setMidFour
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                player: selectMidFive(),
                function: setMidFive
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                player: midOne,
                function: setMidOne
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                player: midTwo,
                function: setMidTwo
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                player: midThree,
                function: setMidThree
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: midOne,
                function: setMidOne
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: midTwo,
                function: setMidTwo
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: midThree,
                function: setMidThree
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                player: selectMidFour(),
                function: setMidFour
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: midOne,
                function: setMidOne
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: midTwo,
                function: setMidTwo
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: midThree,
                function: setMidThree
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: selectMidFour(),
                function: setMidFour
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                player: selectMidFive(),
                function: setMidFive
            }
        ],
        FW: [
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                player: forwOne,
                function: setForwOne
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                player: selectForwTwo(),
                function: setForwTwo
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-5-1",
                player: forwOne,
                function: setForwOne
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                player: forwOne,
                function: setForwOne
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                player: selectForwTwo(),
                function: setForwTwo
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                player: selectForwThree(),
                function: setForwThree
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                player: forwOne,
                function: setForwOne
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                player: selectForwTwo(),
                function: setForwTwo
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                player: selectForwThree(),
                function: setForwThree
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                player: forwOne,
                function: setForwOne
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                player: selectForwTwo(),
                function: setForwTwo
            }
        ],
        SUBS: [
            {
                image: 8,
                position: "GK",
                tactic: "4-4-2",
                player: goalkeeperTwo,
                function: setGoalkeeperTwo
            },
            {
                image: 7,
                position: selectJoker("4-4-2", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne) : "DF/MF/FW",
                tactic: "4-4-2",
                player: selectJoker("4-4-2", jokerOne),
                function: setJokerOne
            },
            {
                image: 7,
                position: selectJoker("4-4-2", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo) : "DF/MF/FW",
                tactic: "4-4-2",
                player: selectJoker("4-4-2", jokerTwo),
                function: setJokerTwo
            },
            {
                image: 7,
                position: selectJoker("4-4-2", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree) : "DF/MF/FW",
                tactic: "4-4-2",
                player: selectJoker("4-4-2", jokerThree),
                function: setJokerThree
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-5-1",
                player: goalkeeperTwo,
                function: setGoalkeeperTwo
            },
            {
                image: 7,
                position: selectJoker("4-5-1", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne) : "DF/MF/FW",
                tactic: "4-5-1",
                player: selectJoker("4-5-1", jokerOne),
                function: setJokerOne
            },
            {
                image: 7,
                position: selectJoker("4-5-1", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo) : "DF/MF/FW",
                tactic: "4-5-1",
                player: selectJoker("4-5-1", jokerTwo),
                function: setJokerTwo
            },
            {
                image: 7,
                position: selectJoker("4-5-1", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree) : "DF/MF/FW",
                tactic: "4-5-1",
                player: selectJoker("4-5-1", jokerThree),
                function: setJokerThree
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-3-3",
                player: goalkeeperTwo,
                function: setGoalkeeperTwo
            },
            {
                image: 7,
                position: selectJoker("4-3-3", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne) : "DF/MF/FW",
                tactic: "4-3-3",
                player: selectJoker("4-3-3", jokerOne),
                function: setJokerOne
            },
            {
                image: 7,
                position: selectJoker("4-3-3", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo) : "DF/MF/FW",
                tactic: "4-3-3",
                player: selectJoker("4-3-3", jokerTwo),
                function: setJokerTwo
            },
            {
                image: 7,
                position: selectJoker("4-3-3", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree) : "DF/MF/FW",
                tactic: "4-3-3",
                player: selectJoker("4-3-3", jokerThree),
                function: setJokerThree
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-4-3",
                player: goalkeeperTwo,
                function: setGoalkeeperTwo
            },
            {
                image: 7,
                position: selectJoker("3-4-3", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne) : "DF/MF/FW",
                tactic: "3-4-3",
                player: selectJoker("3-4-3", jokerOne),
                function: setJokerOne
            },
            {
                image: 7,
                position: selectJoker("3-4-3", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo) : "DF/MF/FW",
                tactic: "3-4-3",
                player: selectJoker("3-4-3", jokerTwo),
                function: setJokerTwo
            },
            {
                image: 7,
                position: selectJoker("3-4-3", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree) : "DF/MF/FW",
                tactic: "3-4-3",
                player: selectJoker("3-4-3", jokerThree),
                function: setJokerThree
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-5-2",
                player: goalkeeperTwo,
                function: setGoalkeeperTwo
            },
            {
                image: 7,
                position: selectJoker("3-5-2", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne) : "DF/MF/FW",
                tactic: "3-5-2",
                player: selectJoker("3-5-2", jokerOne),
                function: setJokerOne
            },
            {
                image: 7,
                position: selectJoker("3-5-2", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo) : "DF/MF/FW",
                tactic: "3-5-2",
                player: selectJoker("3-5-2", jokerTwo),
                function: setJokerTwo
            },
            {
                image: 7,
                position: selectJoker("3-5-2", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree) : "DF/MF/FW",
                tactic: "3-5-2",
                player: selectJoker("3-5-2", jokerThree),
                function: setJokerThree
            }
        ]
    };

    const buildGK = buildTeam.GK.filter(item => item.tactic === String(Tactic));
    const buildDF = buildTeam.DF.filter(item => item.tactic === String(Tactic));
    const buildMF = buildTeam.MF.filter(item => item.tactic === String(Tactic));
    const buildFW = buildTeam.FW.filter(item => item.tactic === String(Tactic));
    const buildSUBSwithGK = buildTeam.SUBS.filter(item => item.tactic === String(Tactic));
    const buildSUBSwithoutGK = buildTeam.SUBS.filter(item => item.tactic === String(Tactic) && item.position !== "GK");

    const team = buildGK.concat(buildDF, buildMF, buildFW, buildSUBSwithGK);
    const finalNotRandomTeam = team.filter(item => item.player !== "Player");

    const finalGK = GK.filter(item => item.player !== "Player" && item.position === "GK");
    const finalDF = DF.filter(item => item.player !== "Player" && item.position === "DF");
    const finalMF = MF.filter(item => item.player !== "Player" && item.position === "MF");
    const finalFW = FW.filter(item => item.player !== "Player" && item.position === "FW");
    const finalSUBS = SUBS.filter(item => item.player !== "Player");
    const finalRandomTeam = finalGK.concat(finalDF, finalMF, finalFW, finalSUBS);

    return (
        <div>
            <Navigation />
            <Clubs />
            <div className="grid justify-items-center">
                <div className="flex flex-row items-center mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row mb-2">
                            <Link to="/league/team">
                                <button className={theme ? "text-xs lg:text-sm xl:text-base bg-stone-300 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-500" : "text-xs lg:text-sm xl:text-base bg-stone-200 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-400"}>
                                    <FontAwesomeIcon
                                        icon={faPeopleGroup}
                                    />
                                </button>
                            </Link>
                            {tactics.map((item) => (
                                <Link to={`/league/team/${item}`}>
                                    <button
                                        className={theme ? "text-xs lg:text-sm xl:text-base bg-stone-300 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-500" : "text-xs lg:text-sm xl:text-base bg-stone-200 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-400"}
                                        key={item}
                                    >
                                        {item}
                                    </button>
                                </Link>
                            ))}
                        </div>
                        <button
                            className={theme ? "text-xs lg:text-sm xl:text-base bg-stone-300 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-500" : "text-xs lg:text-sm xl:text-base bg-stone-200 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-400"}
                            onClick={() => {
                                setRandomLineup(!randomLineup);
                            }}
                        >
                            {randomLineup ?
                                (changeLang ?
                                    <p>
                                        Takımı rastgele kur <FontAwesomeIcon icon={faShuffle} />
                                    </p>
                                    :
                                    <p>
                                        Build the team randomly <FontAwesomeIcon icon={faShuffle} />
                                    </p>)
                                :
                                (changeLang ?
                                    <p>
                                        Takımı kendin kur <FontAwesomeIcon icon={faUser} />
                                    </p>
                                    :
                                    <p>
                                        Build the team yourself <FontAwesomeIcon icon={faUser} />
                                    </p>)
                            }
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-center py-3 px-3">
                    <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1">
                        {selectedPlayers.map((item) => {
                            return (
                                <div className={item.bg ? "grid justify-items-start rounded-lg border-2 border-black p-1 bg-green-200 drop-shadow-md text-xs xl:text-sm" : "grid justify-items-start rounded-lg border-2 border-black p-1 bg-red-200 drop-shadow-md text-xs xl:text-sm"}>
                                    <div className="flex flex-row items-center">
                                        <img className="h-7 xl:h-9 pr-1" alt="player" src={require(`../assets/icons/${item.image}.png`)} />
                                        <div className="flex flex-col">
                                            <p className="font-bold">
                                                {item.player.toUpperCase()}
                                            </p>
                                            <div className="flex flex-row items-start">
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                        <span className="font-bold">{item.pos}</span>
                                                    </p>
                                                    <p className="font-semibold">{changeLang ? "Değ: " : "Val: "}
                                                        <span className="font-bold">{item.value}</span>
                                                    </p>
                                                </div>
                                                {item.icon ?
                                                    <button
                                                        value={item.player}
                                                        id={item.id}
                                                        onClick={(e) => {
                                                            dropPlayers(e);
                                                            lineupAfterDrop(e);
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            className={theme ? "hover:text-red-500 pl-0.5 hover:cursor-pointer" : "hover:text-red-500 pl-0.5 hover:cursor-pointer"}
                                                            icon={faCircleXmark}
                                                        />
                                                    </button>
                                                    :
                                                    ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    !randomLineup ? (
                        <>
                            <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-3">
                                <div>
                                    {GK.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mb-3 mt-8">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                {item.player === "Player" ?
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-green-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-green-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row">
                                    {DF.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mx-2 my-3">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                {item.player === "Player" ?
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-green-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-green-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row">
                                    {MF.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mx-2 my-3">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                {item.player === "Player" || item.position !== "MF" ?
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-green-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-green-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row">
                                    {FW.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mx-2 mt-3 mb-8">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                {item.player === "Player" || item.position !== "FW" ?
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="grid justify-items-center">
                                                        <div className="flex justify-center bg-green-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                            <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.player}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-center bg-green-400 px-1 mt-1 rounded">
                                                            <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                                {item.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-row bg-yellow-200 rounded-lg drop-shadow-md border-2 border-black my-5 mx-3">
                                {SUBS.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 my-8">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="sub" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-green-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-green-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                onClick={() => {
                                    if (coinCalc() < 0) {
                                        Swal.fire({
                                            customClass: {
                                                popup: "sweet-alert"
                                            },
                                            title: changeLang ? "Hata" : "Warning",
                                            text: changeLang ? "Elindeki coin değeri sıfırın altında olmamalı. Takımda değişiklikler yaparak coin değerini sıfır veya sıfırın yukarısında tutmalısın." : "The coin value in your hand should not be below zero. You must make changes within the team and keep the coin value at zero or above zero.",
                                            icon: "warning"
                                        });
                                    } else {
                                        Swal.fire({
                                            customClass: {
                                                popup: "sweet-alert"
                                            },
                                            icon: "question",
                                            title: `${changeLang ? "Seviye normal olarak ayarlandı. Kolay veya zor olarak değiştirmek ister misiniz?" : "The level is set to normal. Do you want to change it to easy or hard?"}`,
                                            timer: 4000,
                                            timerProgressBar: true,
                                            showDenyButton: true,
                                            focusConfirm: false,
                                            confirmButtonColor: "#166534",
                                            denyButtonColor: "#3482b3",
                                            confirmButtonText: `${changeLang ? "Kolay" : "Easy"}`,
                                            denyButtonText: `${changeLang ? "Zor" : "Hard"}`
                                        }).then((result) => {
                                            if (result.dismiss === Swal.DismissReason.timer) {
                                                setLevel("normal");
                                                setTactic(String(Tactic));
                                                setRandomTeam(true);
                                                setNotRandomTeam(false);
                                                setMatch(false);
                                                setRivalTotalScore(0);
                                                setYourTotalScore(0);
                                                setTimeout(() => navigate("/league/play"), 500);
                                            } else if (result.isConfirmed) {
                                                setLevel("easy");
                                                setTactic(String(Tactic));
                                                setRandomTeam(true);
                                                setNotRandomTeam(false);
                                                setMatch(false);
                                                setRivalTotalScore(0);
                                                setYourTotalScore(0);
                                                setTimeout(() => navigate("/league/play"), 500);
                                            } else if (result.isDenied) {
                                                setLevel("hard");
                                                setTactic(String(Tactic));
                                                setRandomTeam(true);
                                                setNotRandomTeam(false);
                                                setMatch(false);
                                                setRivalTotalScore(0);
                                                setYourTotalScore(0);
                                                setTimeout(() => navigate("/league/play"), 500);
                                            };
                                        });
                                    }
                                }}
                                disabled={finalRandomTeam.length !== 15}
                                className={"disabled:opacity-75 disabled:cursor-not-allowed flex flex-row items-center bg-indigo-400 hover:bg-indigo-300 rounded py-1 px-5 mb-5 font-semibold border-2 border-black drop-shadow-md"}
                            >
                                <div className="text-xs lg:text-sm xl:text-base">
                                    {changeLang ?
                                        <p className="pl-1">
                                            {String(Tactic)} ile
                                        </p>
                                        :
                                        <div className="flex flex-row items-center">
                                            <p className="pr-1">Play</p>
                                            <img className="h-6 lg:h-7 xl:h-8" alt="play-game" src={require("../assets/icons/10.png")} />
                                        </div>}
                                </div>
                                <div className="text-xs lg:text-sm xl:text-base">
                                    {changeLang ?
                                        <div className="flex flex-row items-center">
                                            <img className="h-6 lg:h-7 xl:h-8 px-1" alt="play-game" src={require("../assets/icons/10.png")} />
                                            <p>oyna</p>
                                        </div>
                                        :
                                        <p className="pl-1">
                                            with {String(Tactic)}
                                        </p>}
                                </div>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="grid justify-items-center gap-2 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-3">
                                <div>
                                    {buildGK.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mb-3 mt-8">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                <div className="grid justify-items-center content-center">
                                                    <select
                                                        className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate"}
                                                        onClick={(e) => {
                                                            item.function(e.currentTarget.value);
                                                        }}
                                                    >
                                                        <option className="font-semibold">
                                                            {item.player}
                                                        </option>
                                                        {selectedPlayers.map((element) => {
                                                            return (
                                                                element.pos === "GK" && element.player !== "Player" ?
                                                                    (
                                                                        item.player !== element.player ?
                                                                            <option
                                                                                value={element.player}
                                                                                disabled={goalkeeperTwo === element.player}
                                                                            >
                                                                                {element.player}
                                                                            </option>
                                                                            :
                                                                            <></>
                                                                    ) :
                                                                    (
                                                                        <></>
                                                                    )
                                                            )
                                                        })}
                                                        {item.player !== "Player" ?
                                                            <option className="text-red-600 font-semibold">
                                                                Player
                                                            </option>
                                                            :
                                                            <></>
                                                        }
                                                    </select>
                                                    <p className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded"}>
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row">
                                    {buildDF.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mx-2 my-3">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                <div className="grid justify-items-center content-center">
                                                    <select
                                                        className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate"}
                                                        onClick={(e) => {
                                                            item.function(e.currentTarget.value);
                                                        }}
                                                    >
                                                        <option className="font-semibold">
                                                            {item.player}
                                                        </option>
                                                        {selectedPlayers.map((element) => {
                                                            return (
                                                                element.pos === "DF" && element.player !== "Player" ?
                                                                    (
                                                                        item.player !== element.player ?
                                                                            <option
                                                                                value={element.player}
                                                                                disabled={defenceOne === element.player || defenceTwo === element.player || defenceThree === element.player || (item.tactic === "3-4-3" || item.tactic === "3-5-2" ? "" : defenceFour === element.player) || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player}
                                                                            >
                                                                                {element.player}
                                                                            </option>
                                                                            :
                                                                            <></>
                                                                    ) :
                                                                    (
                                                                        <></>
                                                                    )
                                                            )
                                                        })}
                                                        {item.player !== "Player" ?
                                                            <option className="text-red-600 font-semibold">
                                                                Player
                                                            </option>
                                                            :
                                                            <></>
                                                        }
                                                    </select>
                                                    <p className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded"}>
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row">
                                    {buildMF.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mx-2 my-3">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                <div className="grid justify-items-center content-center">
                                                    <select
                                                        className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate"}
                                                        onClick={(e) => {
                                                            item.function(e.currentTarget.value);
                                                        }}
                                                    >
                                                        <option className="font-semibold">
                                                            {item.player}
                                                        </option>
                                                        {selectedPlayers.map((element) => {
                                                            return (
                                                                element.pos === "MF" && element.player !== "Player" ?
                                                                    (
                                                                        item.player !== element.player ?
                                                                            <option
                                                                                value={element.player}
                                                                                disabled={midOne === element.player || midTwo === element.player || midThree === element.player || (item.tactic === "4-3-3" ? "" : midFour === element.player) || (item.tactic === "4-4-2" || item.tactic === "3-4-3" || item.tactic === "4-3-3" ? "" : midFive === element.player) || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player}
                                                                            >
                                                                                {element.player}
                                                                            </option>
                                                                            :
                                                                            <></>
                                                                    ) :
                                                                    (
                                                                        <></>
                                                                    )
                                                            )
                                                        })}
                                                        {item.player !== "Player" ?
                                                            <option className="text-red-600 font-semibold">
                                                                Player
                                                            </option>
                                                            :
                                                            <></>
                                                        }
                                                    </select>
                                                    <p className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded"}>
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-row">
                                    {buildFW.map((item) => {
                                        return (
                                            <div className="grid justify-items-center content-center mx-2 mt-3 mb-8">
                                                <img className="h-8 lg:h-10 xl:h-12" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                <div className="grid justify-items-center content-center">
                                                    <select
                                                        className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate"}
                                                        onClick={(e) => {
                                                            item.function(e.currentTarget.value);
                                                        }}
                                                    >
                                                        <option className="font-semibold">
                                                            {item.player}
                                                        </option>
                                                        {selectedPlayers.map((element) => {
                                                            return (
                                                                element.pos === "FW" && element.player !== "Player" ?
                                                                    (
                                                                        item.player !== element.player ?
                                                                            <option
                                                                                value={element.player}
                                                                                disabled={forwOne === element.player || (item.tactic === "4-5-1" ? "" : forwTwo === element.player) || (item.tactic === "4-4-2" || item.tactic === "3-5-2" || item.tactic === "4-5-1" ? "" : forwThree === element.player) || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player}
                                                                            >
                                                                                {element.player}
                                                                            </option>
                                                                            :
                                                                            <></>
                                                                    ) :
                                                                    (
                                                                        <></>
                                                                    )
                                                            )
                                                        })}
                                                        {item.player !== "Player" ?
                                                            <option className="text-red-600 font-semibold">
                                                                Player
                                                            </option>
                                                            :
                                                            <></>
                                                        }
                                                    </select>
                                                    <p className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded"}>
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex flex-row bg-yellow-200 rounded-lg drop-shadow-md border-2 border-black my-5 mx-3">
                                <div className="grid justify-items-center content-center mx-2 my-8">
                                    <img className="h-8 lg:h-10 xl:h-12" alt="sub" src={require(`../assets/icons/8.png`)} />
                                    <div className="grid justify-items-center content-center">
                                        <select
                                            className={goalkeeperTwo !== "Player" ? "border-2 border-black bg-stone-400 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate"}
                                            onClick={(e) => {
                                                setGoalkeeperTwo(e.currentTarget.value);
                                            }}
                                        >
                                            <option className="font-semibold">
                                                {goalkeeperTwo}
                                            </option>
                                            {selectedPlayers.map((element) => {
                                                return (
                                                    element.pos === "GK" && element.player !== "Player" ?
                                                        (
                                                            goalkeeperTwo !== element.player ?
                                                                <option
                                                                    value={element.player}
                                                                    disabled={goalkeeperOne === element.player}
                                                                >
                                                                    {element.player}
                                                                </option>
                                                                :
                                                                <></>
                                                        ) :
                                                        (
                                                            <></>
                                                        )
                                                )
                                            })}
                                            {goalkeeperTwo !== "Player" ?
                                                <option className="text-red-600 font-semibold">
                                                    Player
                                                </option>
                                                :
                                                <></>
                                            }
                                        </select>
                                        <p className={goalkeeperTwo !== "Player" ? "border-2 border-black bg-stone-400 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded"}>
                                            GK
                                        </p>
                                    </div>
                                </div>
                                {buildSUBSwithoutGK.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 my-8">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="sub" src={require(`../assets/icons/${item.image}.png`)} />
                                            <div className="grid justify-items-center content-center">
                                                <select
                                                    className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs cursor-pointer lg:text-sm xl:text-base font-semibold px-1 mt-1.5 rounded xl:w-24 lg:w-24 md:w-16 w-12 truncate"}
                                                    onClick={(e) => {
                                                        item.function(e.currentTarget.value);
                                                    }}
                                                >
                                                    <option className="font-semibold">
                                                        {item.player}
                                                    </option>
                                                    {selectedPlayers.map((element) => {
                                                        return (
                                                            element.pos !== "GK" && element.player !== "Player" ?
                                                                (
                                                                    item.player !== element.player ?
                                                                        <option
                                                                            value={element.player}
                                                                            disabled={item.tactic === "4-4-2" ? (defenceOne === element.player || defenceTwo === element.player || defenceThree === element.player || defenceFour === element.player || midOne === element.player || midTwo === element.player || midThree === element.player || midFour === element.player || forwOne === element.player || forwTwo === element.player || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player) : "" ||
                                                                                item.tactic === "4-5-1" ? (defenceOne === element.player || defenceTwo === element.player || defenceThree === element.player || defenceFour === element.player || midOne === element.player || midTwo === element.player || midThree === element.player || midFour === element.player || midFive === element.player || forwOne === element.player || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player) : "" ||
                                                                                    item.tactic === "4-3-3" ? (defenceOne === element.player || defenceTwo === element.player || defenceThree === element.player || defenceFour === element.player || midOne === element.player || midTwo === element.player || midThree === element.player || forwOne === element.player || forwTwo === element.player || forwThree === element.player || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player) : "" ||
                                                                                        item.tactic === "3-4-3" ? (defenceOne === element.player || defenceTwo === element.player || defenceThree === element.player || midOne === element.player || midTwo === element.player || midThree === element.player || midFour === element.player || forwOne === element.player || forwTwo === element.player || forwThree === element.player || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player) : "" ||
                                                                                            item.tactic === "3-5-2" ? (defenceOne === element.player || defenceTwo === element.player || defenceThree === element.player || midOne === element.player || midTwo === element.player || midThree === element.player || midFour === element.player || midFive === element.player || forwOne === element.player || forwTwo === element.player || jokerOne === element.player || jokerTwo === element.player || jokerThree === element.player) : ""}
                                                                        >
                                                                            {element.player}
                                                                        </option>
                                                                        :
                                                                        <></>
                                                                ) :
                                                                (
                                                                    <></>
                                                                )
                                                        )
                                                    })}
                                                    {item.player !== "Player" ?
                                                        <option className="text-red-600 font-semibold">
                                                            Player
                                                        </option>
                                                        :
                                                        <></>
                                                    }
                                                </select>
                                                <p className={item.player !== "Player" ? "border-2 border-black bg-stone-400 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded" : "text-red-600 border-2 border-red-600 bg-stone-200 text-xs lg:text-sm xl:text-base font-semibold px-1 mt-1 rounded"}>
                                                    {item.position}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                onClick={() => {
                                    if (coinCalc() < 0) {
                                        Swal.fire({
                                            customClass: {
                                                popup: "sweet-alert"
                                            },
                                            title: changeLang ? "Hata" : "Warning",
                                            text: changeLang ? "Elindeki coin değeri sıfırın altında olmamalı. Takımda değişiklikler yaparak coin değerini sıfır veya sıfırın yukarısında tutmalısın." : "The coin value in your hand should not be below zero. You must make changes within the team and keep the coin value at zero or above zero.",
                                            icon: "warning"
                                        });
                                    } else {
                                        Swal.fire({
                                            customClass: {
                                                popup: "sweet-alert"
                                            },
                                            icon: "question",
                                            title: `${changeLang ? "Seviye normal olarak ayarlandı. Kolay veya zor olarak değiştirmek ister misiniz?" : "The level is set to normal. Do you want to change it to easy or hard?"}`,
                                            timer: 4000,
                                            timerProgressBar: true,
                                            showDenyButton: true,
                                            focusConfirm: false,
                                            confirmButtonColor: "#166534",
                                            denyButtonColor: "#3482b3",
                                            confirmButtonText: `${changeLang ? "Kolay" : "Easy"}`,
                                            denyButtonText: `${changeLang ? "Zor" : "Hard"}`
                                        }).then((result) => {
                                            if (result.dismiss === Swal.DismissReason.timer) {
                                                setLevel("normal");
                                                setTactic(String(Tactic));
                                                setRandomTeam(false);
                                                setNotRandomTeam(true);
                                                setMatch(false);
                                                setRivalTotalScore(0);
                                                setYourTotalScore(0);
                                                setTimeout(() => navigate("/league/play"), 500);
                                            } else if (result.isConfirmed) {
                                                setLevel("easy");
                                                setTactic(String(Tactic));
                                                setRandomTeam(false);
                                                setNotRandomTeam(true);
                                                setMatch(false);
                                                setRivalTotalScore(0);
                                                setYourTotalScore(0);
                                                setTimeout(() => navigate("/league/play"), 500);
                                            } else if (result.isDenied) {
                                                setLevel("hard");
                                                setTactic(String(Tactic));
                                                setRandomTeam(false);
                                                setNotRandomTeam(true);
                                                setMatch(false);
                                                setRivalTotalScore(0);
                                                setYourTotalScore(0);
                                                setTimeout(() => navigate("/league/play"), 500);
                                            };
                                        });
                                    }
                                }}
                                disabled={finalNotRandomTeam.length !== 15}
                                className={"disabled:opacity-75 disabled:cursor-not-allowed flex flex-row items-center bg-indigo-400 hover:bg-indigo-300 rounded py-1 px-5 mb-5 font-semibold border-2 border-black drop-shadow-md"}
                            >
                                <div className="text-xs lg:text-sm xl:text-base">
                                    {changeLang ?
                                        <p className="pl-1">
                                            {String(Tactic)} ile
                                        </p>
                                        :
                                        <div className="flex flex-row items-center">
                                            <p className="pr-1">Play</p>
                                            <img className="h-6 lg:h-7 xl:h-8" alt="play-game" src={require("../assets/icons/10.png")} />
                                        </div>}
                                </div>
                                <div className="text-xs lg:text-sm xl:text-base">
                                    {changeLang ?
                                        <div className="flex flex-row items-center">
                                            <img className="h-6 lg:h-7 xl:h-8 px-1" alt="play-game" src={require("../assets/icons/10.png")} />
                                            <p>oyna</p>
                                        </div>
                                        :
                                        <p className="pl-1">
                                            with {String(Tactic)}
                                        </p>}
                                </div>
                            </button>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default TeamTactics;
