import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faGamepad, faFlag, faFlagCheckered, faUsers, faUser, faCircleArrowDown, faCircleArrowUp, faFire, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from "react-loading";
import Swal from 'sweetalert2';

import { AppContext } from "../AppContext";
import useLocalStorage from "../useLocalStorage.js";
import Navigation from "./Navigation";
import Clubs from "./Clubs";

import "./SweetAlert.css";

const Play = () => {
    const { players, randomTeam, selectedTeam, buildTeam, tactic, changeLang, theme, selectedPlayers, accordionNumberOne, setAccordionNumberOne, accordionNumberTwo, setAccordionNumberTwo, accordionNumberThree, setAccordionNumberThree, accordionNumberFour, setAccordionNumberFour, accordionNumberFive, setAccordionNumberFive, accordionNumberSix, setAccordionNumberSix, accordionNumberSeven, setAccordionNumberSeven, accordionNumberEight, setAccordionNumberEight, accordionNumberNine, setAccordionNumberNine, accordionNumberTen, setAccordionNumberTen, accordionNumberEleven, setAccordionNumberEleven, showNumberOne, showNumberTwo, showNumberThree, showNumberFour, showNumberFive, showNumberSix, showNumberSeven, showNumberEight, showNumberNine, showNumberTen, showNumberEleven, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, setVsPlayerForUser, setVsPlayerForRival, setNumber, match, setMatch, setReadyToMatch, setRivalTotalScore, setYourTotalScore, yourTotalScore, rivalTotalScore, level, randomNumber, setChanceNumber, setMoney, money } = useContext(AppContext);

    const navigate = useNavigate();

    const randomGK = selectedTeam.GK.filter(item => item.tactic === tactic);
    const randomDF = selectedTeam.DF.filter(item => item.tactic === tactic);
    const randomMF = selectedTeam.MF.filter(item => item.tactic === tactic);
    const randomFW = selectedTeam.FW.filter(item => item.tactic === tactic);
    const randomFullTeam = randomGK.concat(randomDF, randomMF, randomFW);

    const showRivalRandomFullTeam = randomFullTeam.filter(item => item.showRival === false);

    const filterRandomPlayer = [];
    for (let i = 0; i < randomFullTeam.length; i++) {
        filterRandomPlayer.push(selectedPlayers.filter(item => item.player === randomFullTeam[i].player));
    };

    const notRandomGK = buildTeam.GK.filter(item => item.tactic === tactic);
    const notRandomDF = buildTeam.DF.filter(item => item.tactic === tactic);
    const notRandomMF = buildTeam.MF.filter(item => item.tactic === tactic);
    const notRandomFW = buildTeam.FW.filter(item => item.tactic === tactic);
    const notRandomFullTeam = notRandomGK.concat(notRandomDF, notRandomMF, notRandomFW);

    const showRivalNotRandomFullTeam = notRandomFullTeam.filter(item => item.showRival === false);

    const filterNotRandomPlayer = [];
    for (let i = 0; i < notRandomFullTeam.length; i++) {
        filterNotRandomPlayer.push(selectedPlayers.filter(item => item.player === notRandomFullTeam[i].player));
    };

    const rivalTeamPlayersEasy = players.filter(item => item.Value > 5 && item.Value < 30);
    const rivalTeamPlayersNormal = players.filter(item => item.Value > 15 && item.Value < 60);
    const rivalTeamPlayersHard = players.filter(item => item.Value >= 25);

    const shuffleRivalTeamPlayers =
        level === "hard" ? rivalTeamPlayersHard.sort(() => 0.5 - Math.random()) :
            (level === "easy" ? rivalTeamPlayersEasy.sort(() => 0.5 - Math.random()) :
                rivalTeamPlayersNormal.sort(() => 0.5 - Math.random()));

    let array = [];
    shuffleRivalTeamPlayers.filter((item) => {
        return array.push(item.Player);
    });
    const arr = array.filter((currentValue, currentIndex) =>
        array.indexOf(currentValue) === currentIndex);

    const uniquePlayers = [];
    for (let i = 0; i < arr.length; i++) {
        uniquePlayers.push(shuffleRivalTeamPlayers.filter(item => item.Player === arr[i]));
    };

    const rivalGKselection = uniquePlayers.filter(item => item[0].Pos === "GK");
    const rivalDFselection = uniquePlayers.filter(item => item[0].Pos === "DF");
    const rivalMFselection = uniquePlayers.filter(item => item[0].Pos === "MF");
    const rivalFWselection = uniquePlayers.filter(item => item[0].Pos === "FW");

    const [rivalGoalkeeperOne, setRivalGoalkeeperOne] = useLocalStorage("RivalGoalkeeperOne", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalDefenceOne, setRivalDefenceOne] = useLocalStorage("RivalDefenceOne", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalDefenceTwo, setRivalDefenceTwo] = useLocalStorage("RivalDefenceTwo", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalDefenceThree, setRivalDefenceThree] = useLocalStorage("RivalDefenceThree", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalDefenceFour, setRivalDefenceFour] = useLocalStorage("RivalDefenceFour", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalMidOne, setRivalMidOne] = useLocalStorage("RivalMidOne", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalMidTwo, setRivalMidTwo] = useLocalStorage("RivalMidTwo", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalMidThree, setRivalMidThree] = useLocalStorage("RivalMidThree", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalMidFour, setRivalMidFour] = useLocalStorage("RivalMidFour", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalMidFive, setRivalMidFive] = useLocalStorage("RivalMidFive", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalForwOne, setRivalForwOne] = useLocalStorage("RivalForwOne", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalForwTwo, setRivalForwTwo] = useLocalStorage("RivalForwTwo", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });
    const [rivalForwThree, setRivalForwThree] = useLocalStorage("RivalForwThree", {
        "Id": 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": "",
        "Nation": "",
        "Flagcode": "",
        "Pos": "",
        "Age": 0,
        "MP": 0,
        "Min": 0,
        "G": 0,
        "A": 0,
        "GA": 0,
        "YC": 0,
        "RC": 0
    });

    const rivalTeamLineup = {
        GK: [
            {
                id: rivalGoalkeeperOne.Id,
                tactic: "4-4-2",
                image: 8,
                number: 1,
                pos: "GK",
                player: rivalGoalkeeperOne.Player,
                accordionNumber: accordionNumberOne,
                showRival: showNumberOne
            },
            {
                id: rivalGoalkeeperOne.Id,
                tactic: "4-5-1",
                image: 8,
                number: 1,
                pos: "GK",
                player: rivalGoalkeeperOne.Player,
                accordionNumber: accordionNumberOne,
                showRival: showNumberOne
            },
            {
                id: rivalGoalkeeperOne.Id,
                tactic: "4-3-3",
                image: 8,
                number: 1,
                pos: "GK",
                player: rivalGoalkeeperOne.Player,
                accordionNumber: accordionNumberOne,
                showRival: showNumberOne
            },
            {
                id: rivalGoalkeeperOne.Id,
                tactic: "3-4-3",
                image: 8,
                number: 1,
                pos: "GK",
                player: rivalGoalkeeperOne.Player,
                accordionNumber: accordionNumberOne,
                showRival: showNumberOne
            },
            {
                id: rivalGoalkeeperOne.Id,
                tactic: "3-5-2",
                image: 8,
                number: 1,
                pos: "GK",
                player: rivalGoalkeeperOne.Player,
                accordionNumber: accordionNumberOne,
                showRival: showNumberOne
            }
        ],
        DF: [
            {
                id: rivalDefenceOne.Id,
                tactic: "4-4-2",
                image: 7,
                number: 2,
                pos: "DF",
                player: rivalDefenceOne.Player,
                accordionNumber: accordionNumberTwo,
                showRival: showNumberTwo
            },
            {
                id: rivalDefenceTwo.Id,
                tactic: "4-4-2",
                image: 7,
                number: 3,
                pos: "DF",
                player: rivalDefenceTwo.Player,
                accordionNumber: accordionNumberThree,
                showRival: showNumberThree
            },
            {
                id: rivalDefenceThree.Id,
                tactic: "4-4-2",
                image: 7,
                number: 4,
                pos: "DF",
                player: rivalDefenceThree.Player,
                accordionNumber: accordionNumberFour,
                showRival: showNumberFour
            },
            {
                id: rivalDefenceFour.Id,
                tactic: "4-4-2",
                image: 7,
                number: 5,
                pos: "DF",
                player: rivalDefenceFour.Player,
                accordionNumber: accordionNumberFive,
                showRival: showNumberFive
            },
            {
                id: rivalDefenceOne.Id,
                tactic: "4-5-1",
                image: 7,
                number: 2,
                pos: "DF",
                player: rivalDefenceOne.Player,
                accordionNumber: accordionNumberTwo,
                showRival: showNumberTwo
            },
            {
                id: rivalDefenceTwo.Id,
                tactic: "4-5-1",
                image: 7,
                number: 3,
                pos: "DF",
                player: rivalDefenceTwo.Player,
                accordionNumber: accordionNumberThree,
                showRival: showNumberThree
            },
            {
                id: rivalDefenceThree.Id,
                tactic: "4-5-1",
                image: 7,
                number: 4,
                pos: "DF",
                player: rivalDefenceThree.Player,
                accordionNumber: accordionNumberFour,
                showRival: showNumberFour
            },
            {
                id: rivalDefenceFour.Id,
                tactic: "4-5-1",
                image: 7,
                number: 5,
                pos: "DF",
                player: rivalDefenceFour.Player,
                accordionNumber: accordionNumberFive,
                showRival: showNumberFive
            },
            {
                id: rivalDefenceOne.Id,
                tactic: "4-3-3",
                image: 7,
                number: 2,
                pos: "DF",
                player: rivalDefenceOne.Player,
                accordionNumber: accordionNumberTwo,
                showRival: showNumberTwo
            },
            {
                id: rivalDefenceTwo.Id,
                tactic: "4-3-3",
                image: 7,
                number: 3,
                pos: "DF",
                player: rivalDefenceTwo.Player,
                accordionNumber: accordionNumberThree,
                showRival: showNumberThree
            },
            {
                id: rivalDefenceThree.Id,
                tactic: "4-3-3",
                image: 7,
                number: 4,
                pos: "DF",
                player: rivalDefenceThree.Player,
                accordionNumber: accordionNumberFour,
                showRival: showNumberFour
            },
            {
                id: rivalDefenceFour.Id,
                tactic: "4-3-3",
                image: 7,
                number: 5,
                pos: "DF",
                player: rivalDefenceFour.Player,
                accordionNumber: accordionNumberFive,
                showRival: showNumberFive
            },
            {
                id: rivalDefenceOne.Id,
                tactic: "3-4-3",
                image: 7,
                number: 2,
                pos: "DF",
                player: rivalDefenceOne.Player,
                accordionNumber: accordionNumberTwo,
                showRival: showNumberTwo
            },
            {
                id: rivalDefenceTwo.Id,
                tactic: "3-4-3",
                image: 7,
                number: 3,
                pos: "DF",
                player: rivalDefenceTwo.Player,
                accordionNumber: accordionNumberThree,
                showRival: showNumberThree
            },
            {
                id: rivalDefenceThree.Id,
                tactic: "3-4-3",
                image: 7,
                number: 4,
                pos: "DF",
                player: rivalDefenceThree.Player,
                accordionNumber: accordionNumberFour,
                showRival: showNumberFour
            },
            {
                id: rivalDefenceOne.Id,
                tactic: "3-5-2",
                image: 7,
                number: 2,
                pos: "DF",
                player: rivalDefenceOne.Player,
                accordionNumber: accordionNumberTwo,
                showRival: showNumberTwo
            },
            {
                id: rivalDefenceTwo.Id,
                tactic: "3-5-2",
                image: 7,
                number: 3,
                pos: "DF",
                player: rivalDefenceTwo.Player,
                accordionNumber: accordionNumberThree,
                showRival: showNumberThree
            },
            {
                id: rivalDefenceThree.Id,
                tactic: "3-5-2",
                image: 7,
                number: 4,
                pos: "DF",
                player: rivalDefenceThree.Player,
                accordionNumber: accordionNumberFour,
                showRival: showNumberFour
            }
        ],
        MF: [
            {
                id: rivalMidOne.Id,
                tactic: "4-4-2",
                image: 7,
                number: 6,
                pos: "MF",
                player: rivalMidOne.Player,
                accordionNumber: accordionNumberSix,
                showRival: showNumberSix
            },
            {
                id: rivalMidTwo.Id,
                tactic: "4-4-2",
                image: 7,
                number: 7,
                pos: "MF",
                player: rivalMidTwo.Player,
                accordionNumber: accordionNumberSeven,
                showRival: showNumberSeven
            },
            {
                id: rivalMidThree.Id,
                tactic: "4-4-2",
                image: 7,
                number: 8,
                pos: "MF",
                player: rivalMidThree.Player,
                accordionNumber: accordionNumberEight,
                showRival: showNumberEight
            },
            {
                id: rivalMidFour.Id,
                tactic: "4-4-2",
                image: 7,
                number: 9,
                pos: "MF",
                player: rivalMidFour.Player,
                accordionNumber: accordionNumberNine,
                showRival: showNumberNine
            },
            {
                id: rivalMidOne.Id,
                tactic: "4-5-1",
                image: 7,
                number: 6,
                pos: "MF",
                player: rivalMidOne.Player,
                accordionNumber: accordionNumberSix,
                showRival: showNumberSix
            },
            {
                id: rivalMidTwo.Id,
                tactic: "4-5-1",
                image: 7,
                number: 7,
                pos: "MF",
                player: rivalMidTwo.Player,
                accordionNumber: accordionNumberSeven,
                showRival: showNumberSeven
            },
            {
                id: rivalMidThree.Id,
                tactic: "4-5-1",
                image: 7,
                number: 8,
                pos: "MF",
                player: rivalMidThree.Player,
                accordionNumber: accordionNumberEight,
                showRival: showNumberEight
            },
            {
                id: rivalMidFour.Id,
                tactic: "4-5-1",
                image: 7,
                number: 9,
                pos: "MF",
                player: rivalMidFour.Player,
                accordionNumber: accordionNumberNine,
                showRival: showNumberNine
            },
            {
                id: rivalMidFive.Id,
                tactic: "4-5-1",
                image: 7,
                number: 10,
                pos: "MF",
                player: rivalMidFive.Player,
                accordionNumber: accordionNumberTen,
                showRival: showNumberTen
            },
            {
                id: rivalMidOne.Id,
                tactic: "4-3-3",
                image: 7,
                number: 6,
                pos: "MF",
                player: rivalMidOne.Player,
                accordionNumber: accordionNumberSix,
                showRival: showNumberSix
            },
            {
                id: rivalMidTwo.Id,
                tactic: "4-3-3",
                image: 7,
                number: 7,
                pos: "MF",
                player: rivalMidTwo.Player,
                accordionNumber: accordionNumberSeven,
                showRival: showNumberSeven
            },
            {
                id: rivalMidThree.Id,
                tactic: "4-3-3",
                image: 7,
                number: 8,
                pos: "MF",
                player: rivalMidThree.Player,
                accordionNumber: accordionNumberEight,
                showRival: showNumberEight
            },
            {
                id: rivalMidOne.Id,
                tactic: "3-4-3",
                image: 7,
                number: 5,
                pos: "MF",
                player: rivalMidOne.Player,
                accordionNumber: accordionNumberFive,
                showRival: showNumberFive
            },
            {
                id: rivalMidTwo.Id,
                tactic: "3-4-3",
                image: 7,
                number: 6,
                pos: "MF",
                player: rivalMidTwo.Player,
                accordionNumber: accordionNumberSix,
                showRival: showNumberSix
            },
            {
                id: rivalMidThree.Id,
                tactic: "3-4-3",
                image: 7,
                number: 7,
                pos: "MF",
                player: rivalMidThree.Player,
                accordionNumber: accordionNumberSeven,
                showRival: showNumberSeven
            },
            {
                id: rivalMidFour.Id,
                tactic: "3-4-3",
                image: 7,
                number: 8,
                pos: "MF",
                player: rivalMidFour.Player,
                accordionNumber: accordionNumberEight,
                showRival: showNumberEight
            },
            {
                id: rivalMidOne.Id,
                tactic: "3-5-2",
                image: 7,
                number: 5,
                pos: "MF",
                player: rivalMidOne.Player,
                accordionNumber: accordionNumberFive,
                showRival: showNumberFive
            },
            {
                id: rivalMidTwo.Id,
                tactic: "3-5-2",
                image: 7,
                number: 6,
                pos: "MF",
                player: rivalMidTwo.Player,
                accordionNumber: accordionNumberSix,
                showRival: showNumberSix
            },
            {
                id: rivalMidThree.Id,
                tactic: "3-5-2",
                image: 7,
                number: 7,
                pos: "MF",
                player: rivalMidThree.Player,
                accordionNumber: accordionNumberSeven,
                showRival: showNumberSeven
            },
            {
                id: rivalMidFour.Id,
                tactic: "3-5-2",
                image: 7,
                number: 8,
                pos: "MF",
                player: rivalMidFour.Player,
                accordionNumber: accordionNumberEight,
                showRival: showNumberEight
            },
            {
                id: rivalMidFive.Id,
                tactic: "3-5-2",
                image: 7,
                number: 9,
                pos: "MF",
                player: rivalMidFive.Player,
                accordionNumber: accordionNumberNine,
                showRival: showNumberNine
            }
        ],
        FW: [
            {
                id: rivalForwOne.Id,
                tactic: "4-4-2",
                image: 7,
                number: 10,
                pos: "FW",
                player: rivalForwOne.Player,
                accordionNumber: accordionNumberTen,
                showRival: showNumberTen
            },
            {
                id: rivalForwTwo.Id,
                tactic: "4-4-2",
                image: 7,
                number: 11,
                pos: "FW",
                player: rivalForwTwo.Player,
                accordionNumber: accordionNumberEleven,
                showRival: showNumberEleven
            },
            {
                id: rivalForwOne.Id,
                tactic: "4-5-1",
                image: 7,
                number: 11,
                pos: "FW",
                player: rivalForwOne.Player,
                accordionNumber: accordionNumberEleven,
                showRival: showNumberEleven
            },
            {
                id: rivalForwOne.Id,
                tactic: "4-3-3",
                image: 7,
                number: 9,
                pos: "FW",
                player: rivalForwOne.Player,
                accordionNumber: accordionNumberNine,
                showRival: showNumberNine
            },
            {
                id: rivalForwTwo.Id,
                tactic: "4-3-3",
                image: 7,
                number: 10,
                pos: "FW",
                player: rivalForwTwo.Player,
                accordionNumber: accordionNumberTen,
                showRival: showNumberTen
            },
            {
                id: rivalForwThree.Id,
                tactic: "4-3-3",
                image: 7,
                number: 11,
                pos: "FW",
                player: rivalForwThree.Player,
                accordionNumber: accordionNumberEleven,
                showRival: showNumberEleven
            },
            {
                id: rivalForwOne.Id,
                tactic: "3-4-3",
                image: 7,
                number: 9,
                pos: "FW",
                player: rivalForwOne.Player,
                accordionNumber: accordionNumberNine,
                showRival: showNumberNine
            },
            {
                id: rivalForwTwo.Id,
                tactic: "3-4-3",
                image: 7,
                number: 10,
                pos: "FW",
                player: rivalForwTwo.Player,
                accordionNumber: accordionNumberTen,
                showRival: showNumberTen
            },
            {
                id: rivalForwThree.Id,
                tactic: "3-4-3",
                image: 7,
                number: 11,
                pos: "FW",
                player: rivalForwThree.Player,
                accordionNumber: accordionNumberEleven,
                showRival: showNumberEleven
            },
            {
                id: rivalForwOne.Id,
                tactic: "3-5-2",
                image: 7,
                number: 10,
                pos: "FW",
                player: rivalForwOne.Player,
                accordionNumber: accordionNumberTen,
                showRival: showNumberTen
            },
            {
                id: rivalForwOne.Id,
                tactic: "3-5-2",
                image: 7,
                number: 11,
                pos: "FW",
                player: rivalForwOne.Player,
                accordionNumber: accordionNumberEleven,
                showRival: showNumberEleven
            }
        ]
    };

    const rivalGK = rivalTeamLineup.GK.filter(item => item.tactic === tactic);
    const rivalDF = rivalTeamLineup.DF.filter(item => item.tactic === tactic);
    const rivalMF = rivalTeamLineup.MF.filter(item => item.tactic === tactic);
    const rivalFW = rivalTeamLineup.FW.filter(item => item.tactic === tactic);
    const rivalFullTeam = rivalGK.concat(rivalDF, rivalMF, rivalFW);

    const showRivalFullTeam = rivalFullTeam.filter(item => item.showRival === false);

    const filterRivalPlayer = [];
    for (let i = 0; i < rivalFullTeam.length; i++) {
        filterRivalPlayer.push(shuffleRivalTeamPlayers.filter(item => item.Id === rivalFullTeam[i].id));
    };

    const [rivalTeam, setRivalTeam] = useState(true);
    const [loading, setLoading] = useState(undefined);
    const [goVersus, setGoVersus] = useState(false);

    const rivalPrep = () => {
        setRivalTeam(false);
        setTimeout(() => {
            setRivalTeam(true);
        }, 3000);
    };

    const gamePrep = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const matchPrep = () => {
        setReadyToMatch(false);
        setTimeout(() => {
            setReadyToMatch(true);
        }, 3000);
    };

    return (
        <>
            {!rivalTeam || loading ? (
                <div className="w-screen h-screen grid place-content-center">
                    <center>
                        <p className="text-lg md:text-xl lg:text-xl xl:text-3xl">
                            {!rivalTeam ? (changeLang ? "Rakip takım hazırlanıyor" : "The rival team is preparing") : ""}
                            {loading ? (changeLang ? "Oyun başlıyor" : "Let the game begins") : ""}
                        </p>
                        <ReactLoading
                            type={"bubbles"}
                            color={"#121212"}
                            height={70}
                            width={70}
                        />
                    </center>
                </div >
            ) : (loading === undefined && match === false ? (
                <div>
                    <Navigation />
                    <Clubs />
                    <div className="grid justify-items-center">
                        {
                            randomTeam ? (
                                <div className="py-2 flex flex-row text-xs lg:text-sm xl:text-base mx-1.5">
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-red-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="gk" src={require(`../assets/icons/8.png`)} />
                                            <p>
                                                GK
                                            </p>
                                        </div>
                                        {randomGK.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-amber-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="df" src={require(`../assets/icons/7.png`)} />
                                            <p>
                                                DF
                                            </p>
                                        </div>
                                        {randomDF.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-green-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="mf" src={require(`../assets/icons/7.png`)} />
                                            <p>
                                                MF
                                            </p>
                                        </div>
                                        {randomMF.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-blue-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="fw" src={require(`../assets/icons/7.png`)} />
                                            <p>
                                                FW
                                            </p>
                                        </div>
                                        {randomFW.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div className="py-2 flex flex-row text-xs lg:text-sm xl:text-base mx-1.5">
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-red-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="gk" src={require(`../assets/icons/8.png`)} />
                                            <p>
                                                GK
                                            </p>
                                        </div>
                                        {notRandomGK.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-amber-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="df" src={require(`../assets/icons/7.png`)} />
                                            <p>
                                                DF
                                            </p>
                                        </div>
                                        {notRandomDF.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-green-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="mf" src={require(`../assets/icons/7.png`)} />
                                            <p>
                                                MF
                                            </p>
                                        </div>
                                        {notRandomMF.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col mx-0.5">
                                        <div className="flex flex-row items-center justify-center bg-blue-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                            <img className="h-7 pr-1" alt="fw" src={require(`../assets/icons/7.png`)} />
                                            <p>
                                                FW
                                            </p>
                                        </div>
                                        {notRandomFW.map((item) => {
                                            return (
                                                <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                    <p>
                                                        {item.number}-{item.player}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }
                        <div className="flex flex-row mb-3 mx-2">
                            <button
                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 px-2 mx-0.5 font-semibold border-2 border-black drop-shadow-md"
                                onClick={() => {
                                    navigate(`/league/team/${tactic}`);
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
                                }}
                            >
                                {changeLang ?
                                    <div>
                                        Takıma geri dön <FontAwesomeIcon icon={faBackward} />
                                    </div>
                                    :
                                    <div>
                                        Back to the team <FontAwesomeIcon icon={faBackward} />
                                    </div>
                                }
                            </button>
                            <button
                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 px-2 mx-0.5 font-semibold border-2 border-black drop-shadow-md"
                                onClick={() => {
                                    navigate("/league/players");
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
                                }}
                            >
                                {changeLang ?
                                    <div>
                                        Transfer yap <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    :
                                    <div>
                                        Make a transfer <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                }
                            </button>
                            <button
                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 px-2 mx-0.5 font-semibold border-2 border-black drop-shadow-md"
                                onClick={() => {
                                    rivalPrep();

                                    setTimeout(() => {
                                        gamePrep();
                                    }, 3000);

                                    setRivalGoalkeeperOne(rivalGKselection[0][0]);
                                    setRivalDefenceOne(rivalDFselection[0][0]);
                                    setRivalDefenceTwo(rivalDFselection[1][0]);
                                    setRivalDefenceThree(rivalDFselection[2][0]);
                                    setRivalDefenceFour(rivalDFselection[3][0]);
                                    setRivalMidOne(rivalMFselection[0][0]);
                                    setRivalMidTwo(rivalMFselection[1][0]);
                                    setRivalMidThree(rivalMFselection[2][0]);
                                    setRivalMidFour(rivalMFselection[3][0]);
                                    setRivalMidFive(rivalMFselection[4][0]);
                                    setRivalForwOne(rivalFWselection[0][0]);
                                    setRivalForwTwo(rivalFWselection[1][0]);
                                    setRivalForwThree(rivalFWselection[2][0]);

                                    setMatch(true);

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

                                    setAccordionNumberOne(false);
                                    setAccordionNumberTwo(false);
                                    setAccordionNumberThree(false);
                                    setAccordionNumberFour(false);
                                    setAccordionNumberFive(false);
                                    setAccordionNumberSix(false);
                                    setAccordionNumberSeven(false);
                                    setAccordionNumberEight(false);
                                    setAccordionNumberNine(false);
                                    setAccordionNumberTen(false);
                                    setAccordionNumberEleven(false);

                                    console.log(uniquePlayers);
                                }}
                            >
                                {changeLang ?
                                    <div>
                                        Oyuna başla <FontAwesomeIcon icon={faGamepad} />
                                    </div>
                                    :
                                    <div>
                                        Start the game <FontAwesomeIcon icon={faGamepad} />
                                    </div>
                                }
                            </button>
                        </div>
                        {
                            randomTeam ? (
                                <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-2 mb-5 px-2 text-xs lg:text-sm xl:text-sm">
                                    <div>
                                        {randomGK.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mb-3 mt-8">
                                                    {item.player === "Player" || item.position !== "GK" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row">
                                        {randomDF.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mx-1 my-3">
                                                    {item.player === "Player" || item.position !== "DF" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row">
                                        {randomMF.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mx-1 my-3">
                                                    {item.player === "Player" || item.position !== "MF" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row">
                                        {randomFW.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mx-1 mt-3 mb-8">
                                                    {item.player === "Player" || item.position !== "FW" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-2 mb-5 px-2 text-xs lg:text-sm xl:text-sm">
                                    <div>
                                        {notRandomGK.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mb-3 mt-8">
                                                    {item.player === "Player" || item.position !== "GK" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row">
                                        {notRandomDF.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mx-1 my-3">
                                                    {item.player === "Player" || item.position !== "DF" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row">
                                        {notRandomMF.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mx-1 my-3">
                                                    {item.player === "Player" || item.position !== "MF" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-row">
                                        {notRandomFW.map((item) => {
                                            return (
                                                <div className="grid justify-items-center content-center mx-1 mt-3 mb-8">
                                                    {item.player === "Player" || item.position !== "FW" ?
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                        :
                                                        <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                            <img className="h-7 lg:h-8 xl:h-8 w-7 lg:w-8 xl:w-8 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                            <center>
                                                                <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                    <p className="truncate font-bold">
                                                                        {item.number}-{item.player.toUpperCase()}
                                                                    </p>
                                                                </div>
                                                            </center>
                                                            <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                <span className="font-bold">{item.position}</span>
                                                            </p>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            ) : (
                <div>
                    <Navigation />
                    <Clubs />
                    <div className="grid justify-items-center">
                        {
                            randomTeam ? (
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        <button
                                            className="disabled:cursor-not-allowed text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 mx-1 mt-2 mb-1 font-semibold border-2 border-black drop-shadow-md"
                                            disabled={showRivalRandomFullTeam.length === 0}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setGoVersus(true);
                                                setTimeout(() => {
                                                    setGoVersus(false);
                                                }, 3000);
                                                changeLang ?
                                                    (theme ?
                                                        toast.info(<div>{"Oyuncu bölümlerinde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                        :
                                                        toast.info(<div>{"Oyuncu bölümlerinde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                    :
                                                    (theme ?
                                                        toast.info(<div>{"You can start a match by pressing the icon"} <FontAwesomeIcon icon={faGamepad} bounce /> {"in the player sections. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                        :
                                                        toast.info(<div>{"You can start a match by pressing the icon"} <FontAwesomeIcon icon={faGamepad} bounce /> {"in the player sections. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                            }}
                                        >
                                            {changeLang ?
                                                <div>
                                                    Oyuncu seç <FontAwesomeIcon icon={faUser} />
                                                </div>
                                                :
                                                <div>
                                                    Select player <FontAwesomeIcon icon={faUser} />
                                                </div>
                                            }
                                        </button>
                                        {showRivalRandomFullTeam.length !== 0 ?
                                            <button
                                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 mx-1 mb-2 font-semibold border-2 border-black drop-shadow-md"
                                                onClick={() => {
                                                    Swal.fire({
                                                        customClass: {
                                                            popup: "sweet-alert"
                                                        },
                                                        icon: "warning",
                                                        title: changeLang ? "Emin misin?" : "Are you sure?",
                                                        text: changeLang ? "1 coin kaybedeceksin ve bunu daha sonra geri alamayacaksın!" : "You will lose 1 coin and won't be able to revert this!",
                                                        focusConfirm: false,
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3482b3",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: changeLang ? "Evet, maçtan çıkmak istiyorum!" : "Yes, leave the match!",
                                                        cancelButtonText: changeLang ? "Vazgeç" : "Cancel"
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire({
                                                                customClass: {
                                                                    popup: "sweet-alert"
                                                                },
                                                                title: changeLang ? "Çıkış yapıldı!" : "Left!",
                                                                text: changeLang ? "Hesabından 1 coin eksildi." : "1 coin has been decreased from your account.",
                                                                icon: "success"
                                                            });
                                                            setTimeout(() => navigate("/league/team"), 500);
                                                            setMatch(false);
                                                            setRivalTotalScore(0);
                                                            setYourTotalScore(0);
                                                            setMoney(money - 1);

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
                                                        }
                                                    });
                                                }}
                                            >
                                                {changeLang ?
                                                    <div>
                                                        Maçtan ayrıl <FontAwesomeIcon icon={faFlag} />
                                                    </div>
                                                    :
                                                    <div>
                                                        Leave the match <FontAwesomeIcon icon={faFlag} />
                                                    </div>
                                                }
                                            </button>
                                            :
                                            <button
                                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 mx-1 mb-2 font-semibold border-2 border-black drop-shadow-md"
                                                onClick={() => {
                                                    if (yourTotalScore < rivalTotalScore) {
                                                        Swal.fire({
                                                            customClass: {
                                                                popup: "sweet-alert"
                                                            },
                                                            title: changeLang ? "İyi denemeydi :)" : "Nice try :)",
                                                            text: changeLang ? "Bir maça daha ne dersin?" : "How about one more game?",
                                                            icon: "info"
                                                        });
                                                    } else if (yourTotalScore === rivalTotalScore) {
                                                        Swal.fire({
                                                            customClass: {
                                                                popup: "sweet-alert"
                                                            },
                                                            title: changeLang ? "Güzel iş çıkardın :)" : "Good job :)",
                                                            text: changeLang ? "Bu sefer kazanmak için oynamaya var mısın?" : "Are you ready to play to win this time?",
                                                            icon: "info"
                                                        });
                                                    } else if (yourTotalScore > rivalTotalScore) {
                                                        Swal.fire({
                                                            customClass: {
                                                                popup: "sweet-alert"
                                                            },
                                                            title: changeLang ? "Tebrikler :)" : "Congratulations :)",
                                                            text: changeLang ? "5 coin kazandın :) Transfer yapıp bir maç daha yapmaya ne dersin?" : "You won 5 coins :) How about making a transfer and playing one more match?",
                                                            icon: "success"
                                                        });
                                                        setMoney(money + 5);
                                                    };

                                                    setTimeout(() => navigate("/league/team"), 500);
                                                    setMatch(false);
                                                    setRivalTotalScore(0);
                                                    setYourTotalScore(0);
                                                }}
                                            >
                                                {changeLang ?
                                                    <div>
                                                        Maçı tamamla <FontAwesomeIcon icon={faFlagCheckered} />
                                                    </div>
                                                    :
                                                    <div>
                                                        Complete the match <FontAwesomeIcon icon={faFlagCheckered} />
                                                    </div>
                                                }
                                            </button>
                                        }
                                        <div className="bg-lime-100 grid justify-items-center mx-1 mb-5 p-1 rounded-lg border-2 border-black drop-shadow-md">
                                            <div className="flex flex-row justify-center text-xs lg:text-sm xl:text-base">
                                                {changeLang ?
                                                    <p className="bg-green-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Senin Takım
                                                    </p>
                                                    :
                                                    <p className="bg-green-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Your Team
                                                    </p>
                                                }
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleCheck} /> {11 - showRivalRandomFullTeam.length}
                                                </p>
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleXmark} /> {showRivalRandomFullTeam.length}
                                                </p>
                                            </div>
                                            <div className="py-2 flex flex-row text-xs lg:text-sm xl:text-base mx-0.5">
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-red-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="gk" src={require(`../assets/icons/8.png`)} />
                                                        <p>GK</p>
                                                    </div>
                                                    {randomGK.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 1) {
                                                                                    setAccordionNumberOne(!accordionNumberOne);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-red-600 hover:text-red-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Takım:" : "Team:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Yaş:" : "Age:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-amber-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="df" src={require(`../assets/icons/7.png`)} />
                                                        <p>DF</p>
                                                    </div>
                                                    {randomDF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 2) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(!accordionNumberTwo);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 3) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(!accordionNumberThree);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 4) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(!accordionNumberFour);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-amber-600 hover:text-amber-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Takım:" : "Team:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Yaş:" : "Age:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-green-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="mf" src={require(`../assets/icons/7.png`)} />
                                                        <p>MF</p>
                                                    </div>
                                                    {randomMF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 6) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(!accordionNumberSix);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 7) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(!accordionNumberSeven);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 8) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(!accordionNumberEight);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-green-600 hover:text-green-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Takım:" : "Team:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Yaş:" : "Age:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-blue-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="fw" src={require(`../assets/icons/7.png`)} />
                                                        <p>FW</p>
                                                    </div>
                                                    {randomFW.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 11) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(!accordionNumberEleven);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-blue-600 hover:text-blue-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Takım:" : "Team:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                        <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                            <p className="truncate">
                                                                                {changeLang ? "Yaş:" : "Age:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-1 mb-2 px-3 text-xs lg:text-sm xl:text-sm">
                                                <div>
                                                    {randomGK.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mb-3 mt-8">
                                                                {item.player === "Player" || item.position !== "GK" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {randomDF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.position !== "DF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {randomMF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.position !== "MF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {randomFW.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 mt-3 mb-8">
                                                                {item.player === "Player" || item.position !== "FW" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="bg-lime-100 grid justify-items-center mx-1 mb-5 p-1 rounded-lg border-2 border-black drop-shadow-md">
                                            <div className="flex flex-row justify-center text-xs lg:text-sm xl:text-base">
                                                {changeLang ?
                                                    <p className="bg-orange-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Rakip Takım
                                                    </p>
                                                    :
                                                    <p className="bg-orange-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Rival Team
                                                    </p>
                                                }
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleCheck} /> {11 - showRivalFullTeam.length}
                                                </p>
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleXmark} /> {showRivalFullTeam.length}
                                                </p>
                                            </div>
                                            <div className="py-2 flex flex-row text-xs lg:text-sm xl:text-base mx-0.5">
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-red-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="gk" src={require(`../assets/icons/8.png`)} />
                                                        <p>GK</p>
                                                    </div>
                                                    {rivalGK.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-red-600 hover:text-red-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 1) {
                                                                                    setAccordionNumberOne(!accordionNumberOne);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-amber-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="df" src={require(`../assets/icons/7.png`)} />
                                                        <p>DF</p>
                                                    </div>
                                                    {rivalDF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-amber-600 hover:text-amber-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 2) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(!accordionNumberTwo);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 3) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(!accordionNumberThree);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 4) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(!accordionNumberFour);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-green-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="mf" src={require(`../assets/icons/7.png`)} />
                                                        <p>MF</p>
                                                    </div>
                                                    {rivalMF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-green-600 hover:text-green-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 6) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(!accordionNumberSix);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 7) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(!accordionNumberSeven);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 8) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(!accordionNumberEight);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-blue-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="fw" src={require(`../assets/icons/7.png`)} />
                                                        <p>FW</p>
                                                    </div>
                                                    {rivalFW.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-blue-600 hover:text-blue-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 11) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(!accordionNumberEleven);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="grid justify-items-center gap-1 bg-orange-200 rounded-lg drop-shadow-md border-2 border-black mx-1 mb-2 px-3 text-xs lg:text-sm xl:text-sm">
                                                <div>
                                                    {rivalGK.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mb-3 mt-8">
                                                                {item.player === "Player" || item.pos !== "GK" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {rivalDF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.pos !== "DF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {rivalMF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.pos !== "MF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {rivalFW.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 mt-3 mb-8">
                                                                {item.player === "Player" || item.pos !== "FW" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        <button
                                            className="disabled:cursor-not-allowed text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 mx-1 mt-2 mb-1 font-semibold border-2 border-black drop-shadow-md"
                                            disabled={showRivalNotRandomFullTeam.length === 0}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setGoVersus(true);
                                                setTimeout(() => {
                                                    setGoVersus(false);
                                                }, 3000);
                                                changeLang ?
                                                    (theme ?
                                                        toast.info(<div>{"Oyuncu bölümlerinde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                        :
                                                        toast.info(<div>{"Oyuncu bölümlerinde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                    :
                                                    (theme ?
                                                        toast.info(<div>{"You can start a match by pressing the icon"} <FontAwesomeIcon icon={faGamepad} bounce /> {"in the player sections. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                        :
                                                        toast.info(<div>{"You can start a match by pressing the icon"} <FontAwesomeIcon icon={faGamepad} bounce /> {"in the player sections. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                            }}
                                        >
                                            {changeLang ?
                                                <div>
                                                    Oyuncu seç <FontAwesomeIcon icon={faUser} />
                                                </div>
                                                :
                                                <div>
                                                    Select player <FontAwesomeIcon icon={faUser} />
                                                </div>
                                            }
                                        </button>
                                        {showRivalNotRandomFullTeam.length !== 0 ?
                                            <button
                                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 mx-1 mb-2 font-semibold border-2 border-black drop-shadow-md"
                                                onClick={() => {
                                                    Swal.fire({
                                                        customClass: {
                                                            popup: "sweet-alert"
                                                        },
                                                        icon: "warning",
                                                        title: changeLang ? "Emin misin?" : "Are you sure?",
                                                        text: changeLang ? "1 coin kaybedeceksin ve bunu daha sonra geri alamayacaksın!" : "You will lose 1 coin and won't be able to revert this!",
                                                        focusConfirm: false,
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3482b3",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: changeLang ? "Evet, maçtan çıkmak istiyorum!" : "Yes, leave the match!",
                                                        cancelButtonText: changeLang ? "Vazgeç" : "Cancel"
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire({
                                                                customClass: {
                                                                    popup: "sweet-alert"
                                                                },
                                                                title: changeLang ? "Çıkış yapıldı!" : "Left!",
                                                                text: changeLang ? "Hesabından 1 coin eksildi." : "1 coin has been decreased from your account.",
                                                                icon: "success"
                                                            });
                                                            setTimeout(() => navigate("/league/team"), 500);
                                                            setMatch(false);
                                                            setRivalTotalScore(0);
                                                            setYourTotalScore(0);
                                                            setMoney(money - 1);

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
                                                        }
                                                    });
                                                }}
                                            >
                                                {changeLang ?
                                                    <div>
                                                        Maçtan ayrıl <FontAwesomeIcon icon={faFlag} />
                                                    </div>
                                                    :
                                                    <div>
                                                        Leave the match <FontAwesomeIcon icon={faFlag} />
                                                    </div>
                                                }
                                            </button>
                                            :
                                            <button
                                                className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 mx-1 mb-2 font-semibold border-2 border-black drop-shadow-md"
                                                onClick={() => {
                                                    if (yourTotalScore < rivalTotalScore) {
                                                        Swal.fire({
                                                            customClass: {
                                                                popup: "sweet-alert"
                                                            },
                                                            title: changeLang ? "İyi denemeydi :)" : "Nice try :)",
                                                            text: changeLang ? "Bir maça daha ne dersin?" : "How about one more game?",
                                                            icon: "info"
                                                        });
                                                    } else if (yourTotalScore === rivalTotalScore) {
                                                        Swal.fire({
                                                            customClass: {
                                                                popup: "sweet-alert"
                                                            },
                                                            title: changeLang ? "Güzel iş çıkardın :)" : "Good job :)",
                                                            text: changeLang ? "Bu sefer kazanmak için oynamaya var mısın?" : "Are you ready to play to win this time?",
                                                            icon: "info"
                                                        });
                                                    } else if (yourTotalScore > rivalTotalScore) {
                                                        Swal.fire({
                                                            customClass: {
                                                                popup: "sweet-alert"
                                                            },
                                                            title: changeLang ? "Tebrikler :)" : "Congratulations :)",
                                                            text: changeLang ? "5 coin kazandın :) Transfer yapıp bir maç daha yapmaya ne dersin?" : "You won 5 coins :) How about making a transfer and playing one more match?",
                                                            icon: "success"
                                                        });
                                                        setMoney(money + 5);
                                                    };

                                                    setTimeout(() => navigate("/league/team"), 500);
                                                    setMatch(false);
                                                    setRivalTotalScore(0);
                                                    setYourTotalScore(0);
                                                }}
                                            >
                                                {changeLang ?
                                                    <div>
                                                        Maçı tamamla <FontAwesomeIcon icon={faFlagCheckered} />
                                                    </div>
                                                    :
                                                    <div>
                                                        Complete the match <FontAwesomeIcon icon={faFlagCheckered} />
                                                    </div>
                                                }
                                            </button>
                                        }
                                        <div className="bg-lime-100 grid justify-items-center mx-1 mb-5 p-1 rounded-lg border-2 border-black drop-shadow-md">
                                            <div className="flex flex-row justify-center text-xs lg:text-sm xl:text-base">
                                                {changeLang ?
                                                    <p className="bg-green-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Senin Takım
                                                    </p>
                                                    :
                                                    <p className="bg-green-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Your Team
                                                    </p>
                                                }
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleCheck} /> {11 - showRivalNotRandomFullTeam.length}
                                                </p>
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleXmark} /> {showRivalNotRandomFullTeam.length}
                                                </p>
                                            </div>
                                            <div className="py-2 flex flex-row text-xs lg:text-sm xl:text-base mx-0.5">
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-red-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="gk" src={require(`../assets/icons/8.png`)} />
                                                        <p>GK</p>
                                                    </div>
                                                    {notRandomGK.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 1) {
                                                                                    setAccordionNumberOne(!accordionNumberOne);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-red-600 hover:text-red-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-amber-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="df" src={require(`../assets/icons/7.png`)} />
                                                        <p>DF</p>
                                                    </div>
                                                    {notRandomDF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 2) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(!accordionNumberTwo);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 3) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(!accordionNumberThree);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 4) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(!accordionNumberFour);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-amber-600 hover:text-amber-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-green-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="mf" src={require(`../assets/icons/7.png`)} />
                                                        <p>MF</p>
                                                    </div>
                                                    {notRandomMF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 6) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(!accordionNumberSix);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 7) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(!accordionNumberSeven);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 8) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(!accordionNumberEight);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-green-600 hover:text-green-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-blue-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="fw" src={require(`../assets/icons/7.png`)} />
                                                        <p>FW</p>
                                                    </div>
                                                    {notRandomFW.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        <Link to="/league/versus">
                                                                            <button
                                                                                className="disabled:cursor-not-allowed pr-1"
                                                                                disabled={item.showRival === true}
                                                                                onClick={() => {
                                                                                    matchPrep();

                                                                                    for (let i = 0; i < selectedPlayers.length; i++) {
                                                                                        if (selectedPlayers[i].player === item.player) {
                                                                                            setVsPlayerForUser(selectedPlayers[i]);
                                                                                        };
                                                                                    };

                                                                                    for (let a = 0; a < rivalFullTeam.length; a++) {
                                                                                        if (rivalFullTeam[a].number === item.number) {
                                                                                            for (let b = 0; b < filterRivalPlayer.length; b++) {
                                                                                                if (rivalFullTeam[a].player === filterRivalPlayer[b][0].Player) {
                                                                                                    setVsPlayerForRival(filterRivalPlayer[b][0]);
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };

                                                                                    setNumber(item.number);
                                                                                    setChanceNumber(randomNumber);
                                                                                }}
                                                                            >
                                                                                {
                                                                                    !goVersus ?
                                                                                        <FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faGamepad} />
                                                                                        :
                                                                                        <FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faGamepad} bounce />
                                                                                }
                                                                            </button>
                                                                        </Link>
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 11) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(!accordionNumberEleven);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-blue-600 hover:text-blue-500 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} müsabakaya henüz dahil olmadı.`} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonuna basarak müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{`${item.player} has not participated in the competition yet. You can start a match by pressing the`} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pl-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} <span className="font-bold">{item.player}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].team : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].age : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].tr : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].value : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].mp : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].min : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].g : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].a : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            G + A: {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].ga : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].yc : ""}</span>)}
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {filterNotRandomPlayer.map(element => <span className="font-bold">{element[0].player === item.player ? element[0].rc : ""}</span>)}
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-1 mb-2 px-3 text-xs lg:text-sm xl:text-sm">
                                                <div>
                                                    {notRandomGK.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mb-3 mt-8">
                                                                {item.player === "Player" || item.position !== "GK" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {notRandomDF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.position !== "DF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {notRandomMF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.position !== "MF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {notRandomFW.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 mt-3 mb-8">
                                                                {item.player === "Player" || item.position !== "FW" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.position}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="bg-lime-100 grid justify-items-center mx-1 mb-5 p-1 rounded-lg border-2 border-black drop-shadow-md">
                                            <div className="flex flex-row justify-center text-xs lg:text-sm xl:text-base">
                                                {changeLang ?
                                                    <p className="bg-orange-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Rakip Takım
                                                    </p>
                                                    :
                                                    <p className="bg-orange-200 rounded p-1 my-2 font-bold border-2 border-black drop-shadow-md">
                                                        Rival Team
                                                    </p>
                                                }
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleCheck} /> {11 - showRivalFullTeam.length}
                                                </p>
                                                <p className="bg-stone-300 rounded ml-1 p-1 my-2 font-semibold border-2 border-black drop-shadow-md">
                                                    <FontAwesomeIcon icon={faCircleXmark} /> {showRivalFullTeam.length}
                                                </p>
                                            </div>
                                            <div className="py-2 flex flex-row text-xs lg:text-sm xl:text-base mx-0.5">
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-red-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="gk" src={require(`../assets/icons/8.png`)} />
                                                        <p>GK</p>
                                                    </div>
                                                    {rivalGK.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-red-600 hover:text-red-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 1) {
                                                                                    setAccordionNumberOne(!accordionNumberOne);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-red-600 hover:text-red-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-amber-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="df" src={require(`../assets/icons/7.png`)} />
                                                        <p>DF</p>
                                                    </div>
                                                    {rivalDF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-amber-600 hover:text-amber-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 2) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(!accordionNumberTwo);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 3) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(!accordionNumberThree);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 4) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(!accordionNumberFour);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                };
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-amber-600 hover:text-amber-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-green-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="mf" src={require(`../assets/icons/7.png`)} />
                                                        <p>MF</p>
                                                    </div>
                                                    {rivalMF.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-green-600 hover:text-green-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 5) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(!accordionNumberFive);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 6) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(!accordionNumberSix);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 7) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(!accordionNumberSeven);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 8) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(!accordionNumberEight);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-green-600 hover:text-green-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-col mx-0.5">
                                                    <div className="flex flex-row items-center justify-center bg-blue-200 rounded py-1 px-1 mb-1 font-semibold border-2 border-black drop-shadow-md">
                                                        <img className="h-7 pr-1" alt="fw" src={require(`../assets/icons/7.png`)} />
                                                        <p>FW</p>
                                                    </div>
                                                    {rivalFW.map((item) => {
                                                        return (
                                                            <div className="bg-stone-300 rounded py-0.5 px-1 mb-1 font-medium border-2 border-black drop-shadow-md">
                                                                <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                    <div className="flex flex-row">
                                                                        {
                                                                            item.showRival ?
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        showRivalNotRandomFullTeam.length === 0 ?
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`Müsabakaya dahil olmayan oyuncu kalmadı. 'Maçı tamamla`} <FontAwesomeIcon icon={faFlagCheckered} /> {`' seçeneği üzerinden ilerleyebilirsin.`}</div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`There was no player left who was not included in the competition. You can proceed with the 'Complete the match`} <FontAwesomeIcon icon={faFlagCheckered} /> {"' button."}</div>, { theme: "light" })))
                                                                                            :
                                                                                            (changeLang ?
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} müsabakaya daha önce dahil oldu. Oyuncu bölümlerinde`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                                :
                                                                                                (theme ?
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce /> {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                    :
                                                                                                    toast.info(<div>{`${item.player} has already joined the competition. You can start a match for those with an`} <FontAwesomeIcon icon={faCircleXmark} bounce />  {"icon in the player sections. Good luck"}  <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" })));
                                                                                    }}
                                                                                    className="text-blue-600 hover:text-blue-500 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleCheck} />
                                                                                </button>
                                                                                :
                                                                                <button
                                                                                    onClick={(e) => {
                                                                                        e.preventDefault();
                                                                                        changeLang ?
                                                                                            (theme ?
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"Bu oyuncu müsabakaya henüz dahil olmadı. Senin takımın bölümünde"} <FontAwesomeIcon icon={faGamepad} bounce /> {"ikonu olanlar için müsabaka başlatabilirsin. Bol şans"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }))
                                                                                            :
                                                                                            (theme ?
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "dark" })
                                                                                                :
                                                                                                toast.info(<div>{"This player has not participated in the competition yet. You can start a match for those with an"} <FontAwesomeIcon icon={faGamepad} bounce /> {"icon in the your team section. Good luck"} <FontAwesomeIcon icon={faFire} /></div>, { theme: "light" }));
                                                                                    }}
                                                                                    className="hover:text-stone-700 pr-1"
                                                                                >
                                                                                    <FontAwesomeIcon icon={faCircleXmark} />
                                                                                </button>
                                                                        }
                                                                        <button
                                                                            onClick={() => {
                                                                                if (item.number === 9) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(!accordionNumberNine);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 10) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(!accordionNumberTen);
                                                                                    setAccordionNumberEleven(false);
                                                                                } else if (item.number === 11) {
                                                                                    setAccordionNumberOne(false);
                                                                                    setAccordionNumberTwo(false);
                                                                                    setAccordionNumberThree(false);
                                                                                    setAccordionNumberFour(false);
                                                                                    setAccordionNumberFive(false);
                                                                                    setAccordionNumberSix(false);
                                                                                    setAccordionNumberSeven(false);
                                                                                    setAccordionNumberEight(false);
                                                                                    setAccordionNumberNine(false);
                                                                                    setAccordionNumberTen(false);
                                                                                    setAccordionNumberEleven(!accordionNumberEleven);
                                                                                }
                                                                            }}
                                                                        >
                                                                            {!item.accordionNumber ?
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowDown} />
                                                                                :
                                                                                < FontAwesomeIcon className="text-blue-600 hover:text-blue-500 drop-shadow-md" icon={faCircleArrowUp} />
                                                                            }
                                                                        </button>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Numara:" : "Number:"} <span className="font-bold">{item.number}</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Oyuncu:" : "Player:"} {
                                                                                item.showRival ?
                                                                                    <span className="font-bold">
                                                                                        {item.player}
                                                                                    </span>
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Oyuncu" : "Player"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Takım:" : "Team:"} {
                                                                                item.showRival ? filterRivalPlayer.map(element =>
                                                                                    <span className="font-bold">
                                                                                        {element[0].Id === item.id ? element[0].Team : ""}
                                                                                    </span>)
                                                                                    :
                                                                                    <span className="bg-black">
                                                                                        {changeLang ? "Takım" : "Team"}
                                                                                    </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    <div className="w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <p className="truncate">
                                                                            {changeLang ? "Yaş:" : "Age:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Age : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    {changeLang ? "Yaş" : "Age"}
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {item.accordionNumber ?
                                                                    <div className="grid justify-items-start w-16 md:w-40 lg:w-52 xl:w-64">
                                                                        <br />
                                                                        <p>
                                                                            {changeLang ? "TS:" : "TR:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].TR : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "D:" : "V:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Value : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OM:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].MP : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "OD:" : "MP:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].Min : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].G : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].A : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            G + A: {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0]["G+A"] : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "SK:" : "YC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].YC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {changeLang ? "KK:" : "RC:"} {item.showRival ? filterRivalPlayer.map(element =>
                                                                                <span className="font-bold">
                                                                                    {element[0].Id === item.id ? element[0].RC : ""}
                                                                                </span>)
                                                                                :
                                                                                <span className="bg-black">
                                                                                    0
                                                                                </span>
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="grid justify-items-center gap-1 bg-orange-200 rounded-lg drop-shadow-md border-2 border-black mx-1 mb-2 px-3 text-xs lg:text-sm xl:text-sm">
                                                <div>
                                                    {rivalGK.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mb-3 mt-8">
                                                                {item.player === "Player" || item.pos !== "GK" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {rivalDF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.pos !== "DF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="df" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {rivalMF.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 my-3">
                                                                {item.player === "Player" || item.pos !== "MF" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="mf" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="flex flex-row">
                                                    {rivalFW.map((item) => {
                                                        return (
                                                            <div className="grid justify-items-center content-center mx-0.5 mt-3 mb-8">
                                                                {item.player === "Player" || item.pos !== "FW" ?
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-red-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-{item.player.toUpperCase()}
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <div className="grid justify-items-center p-0.5 rounded-lg border-2 border-black bg-stone-300 drop-shadow-md">
                                                                        <img className="h-7 w-7 my-0.5" alt="fw" src={require(`../assets/icons/${item.image}.png`)} />
                                                                        <center>
                                                                            <div className="flex justify-center w-12 md:w-16 lg:w-16 xl:w-16 mx-0.5">
                                                                                <p className="truncate font-bold">
                                                                                    {item.number}-<span className={item.showRival ? "" : "bg-black"}>{item.player.toUpperCase()}</span>
                                                                                </p>
                                                                            </div>
                                                                        </center>
                                                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                                                            <span className="font-bold">{item.pos}</span>
                                                                        </p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
            )}
        </>
    );
}

export default Play;