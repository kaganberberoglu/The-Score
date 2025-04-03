import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping, faTriangleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from './AppContext';
import data from "./data/data.json";
import useLocalStorage from "./useLocalStorage.js";
import LeagueSelection from "./components/LeagueSelection";
import HomePage from "./components/HomePage";
import LeagueTable from "./components/LeagueTable";
import ClubPlayers from "./components/ClubPlayers";
import Players from "./components/Players";
import Team from "./components/Team";
import TeamTactics from "./components/TeamTactics";
import Play from "./components/Play";
import Versus from "./components/Versus";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [changeLang, setChangeLang] = useLocalStorage("Language", false);
    const [theme, setTheme] = useLocalStorage("Theme", false);
    const [leagueName, setLeagueName] = useLocalStorage("League", "");
    const [clubName, setClubName] = useState("");

    const changeLanguage = () => {
        setChangeLang(!changeLang);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const teams = leagueName.name === "Football League" ? data[0] : data[1].filter((item) => item.League === leagueName.name);
    const players = leagueName.name === "Football League" ? data[2] : leagueName.name === "Ligue 1" ? data[3] : leagueName.name === "Bundesliga" ? data[4] : leagueName.name === "Premier League" ? data[5] : leagueName.name === "Serie A" ? data[6] : data[7];

    const [numberOne, setNumberOne] = useLocalStorage("Number One", {
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

    const [numberTwo, setNumberTwo] = useLocalStorage("Number Two", {
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

    const [numberThree, setNumberThree] = useLocalStorage("Number Three", {
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

    const [numberFour, setNumberFour] = useLocalStorage("Number Four", {
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

    const [numberFive, setNumberFive] = useLocalStorage("Number Five", {
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

    const [numberSix, setNumberSix] = useLocalStorage("Number Six", {
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

    const [numberSeven, setNumberSeven] = useLocalStorage("Number Seven", {
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

    const [numberEight, setNumberEight] = useLocalStorage("Number Eight", {
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

    const [numberNine, setNumberNine] = useLocalStorage("Number Nine", {
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

    const [numberTen, setNumberTen] = useLocalStorage("Number Ten", {
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

    const [numberEleven, setNumberEleven] = useLocalStorage("Number Eleven", {
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

    const [numberTwelve, setNumberTwelve] = useLocalStorage("Number Twelve", {
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

    const [numberThirteen, setNumberThirteen] = useLocalStorage("Number Thirteen", {
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

    const [numberFourteen, setNumberFourteen] = useLocalStorage("Number Fourteen", {
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

    const [numberFifteen, setNumberFifteen] = useLocalStorage("Number Fifteen", {
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

    const selectPlayers = (event) => {
        event.preventDefault();

        for (let i = 0; i < selectedPlayers.length; i++) {
            if (players[event.currentTarget.id - 1].Player === selectedPlayers[i].player) {
                return changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} daha önce takıma dahil oldu`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} daha önce takıma dahil oldu`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} has already joined the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} has already joined the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            }
        }

        const array = [];
        for (let i = 0; i < selectedPlayers.length; i++) {
            array.push(selectedPlayers[i].team);
        }
        const count = {};
        array.forEach(function (x) { count[x] = (count[x] || 0) + 1; });
        const newCount = [];
        for (const key in count) {
            if (key !== "" && count[key] > 2) {
                newCount.push(key);
            };
        }

        if (players[event.currentTarget.id - 1].Value > coinCalc()) {
            changeLang ?
                (theme ?
                    toast.warn(<div>{"Kalan toplam parandan daha fazla tutarda harcama yapamazsın"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                    :
                    toast.warn(<div>{"Kalan toplam parandan daha fazla tutarda harcama yapamazsın"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                :
                (theme ?
                    toast.warn(<div>{"You cannot spend more than your total remaining money"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                    :
                    toast.warn(<div>{"You cannot spend more than your total remaining money"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
        } else if (players[event.currentTarget.id - 1].Pos.includes("GK") === true && numberOne.player === "Player" && numberOne.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberOne({
                    ...numberOne,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 8,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberOne({
                    ...numberOne,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 8,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberOne({
                    ...numberOne,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 8,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("GK") === true && numberTwo.player === "Player" && numberTwo.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTwo({
                    ...numberTwo,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 8,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTwo({
                    ...numberTwo,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 8,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTwo({
                    ...numberTwo,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 8,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberThree.player === "Player" && numberThree.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberThree({
                    ...numberThree,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberThree({
                    ...numberThree,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberThree({
                    ...numberThree,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberFour.player === "Player" && numberFour.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFour({
                    ...numberFour,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFour({
                    ...numberFour,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFour({
                    ...numberFour,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberFive.player === "Player" && numberFive.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFive({
                    ...numberFive,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFive({
                    ...numberFive,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFive({
                    ...numberFive,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberSix.player === "Player" && numberSix.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberSix({
                    ...numberSix,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberSix({
                    ...numberSix,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberSix({
                    ...numberSix,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberSeven.player === "Player" && numberSeven.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberSeven({
                    ...numberSeven,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberSeven({
                    ...numberSeven,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberSeven({
                    ...numberSeven,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberEight.player === "Player" && numberEight.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberEight({
                    ...numberEight,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberEight({
                    ...numberEight,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberEight({
                    ...numberEight,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberNine.player === "Player" && numberNine.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberNine({
                    ...numberNine,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberNine({
                    ...numberNine,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberNine({
                    ...numberNine,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberTen.player === "Player" && numberTen.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTen({
                    ...numberTen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTen({
                    ...numberTen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTen({
                    ...numberTen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("FW") === true && numberEleven.player === "Player" && numberEleven.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberEleven({
                    ...numberEleven,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberEleven({
                    ...numberEleven,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberEleven({
                    ...numberEleven,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (players[event.currentTarget.id - 1].Pos.includes("FW") === true && numberTwelve.player === "Player" && numberTwelve.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTwelve({
                    ...numberTwelve,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTwelve({
                    ...numberTwelve,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberTwelve({
                    ...numberTwelve,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if ((players[event.currentTarget.id - 1].Pos.includes("DF") === true || players[event.currentTarget.id - 1].Pos.includes("MF") === true || players[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberThirteen.player === "Player" && numberThirteen.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberThirteen({
                    ...numberThirteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberThirteen({
                    ...numberThirteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberThirteen({
                    ...numberThirteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if ((players[event.currentTarget.id - 1].Pos.includes("DF") === true || players[event.currentTarget.id - 1].Pos.includes("MF") === true || players[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberFourteen.player === "Player" && numberFourteen.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFourteen({
                    ...numberFourteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFourteen({
                    ...numberFourteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFourteen({
                    ...numberFourteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if ((players[event.currentTarget.id - 1].Pos.includes("DF") === true || players[event.currentTarget.id - 1].Pos.includes("MF") === true || players[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberFifteen.player === "Player" && numberFifteen.bg === false) {
            if (newCount.includes(players[event.currentTarget.id - 1].Team) === true) {
                changeLang ?
                    (theme ?
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`${players[event.currentTarget.id - 1].Team} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                        :
                        toast.warn(<div>{`3 players from ${players[event.currentTarget.id - 1].Team} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
            } else if (selectCalc() !== 0 & selectCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFifteen({
                    ...numberFifteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 0) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFifteen({
                    ...numberFifteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            } else if (selectCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
                        :
                        toast.success(<div>{`${players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
                setNumberFifteen({
                    ...numberFifteen,
                    id: event.currentTarget.id,
                    icon: true,
                    bg: true,
                    image: 7,
                    player: players[event.currentTarget.id - 1].Player,
                    team: players[event.currentTarget.id - 1].Team,
                    tr: players[event.currentTarget.id - 1].TR,
                    value: players[event.currentTarget.id - 1].Value,
                    nation: players[event.currentTarget.id - 1].Nation,
                    flagcode: players[event.currentTarget.id - 1]["Flag Code"],
                    pos: players[event.currentTarget.id - 1].Pos,
                    age: players[event.currentTarget.id - 1].Age,
                    mp: players[event.currentTarget.id - 1].MP,
                    min: players[event.currentTarget.id - 1].Min,
                    g: players[event.currentTarget.id - 1].G,
                    a: players[event.currentTarget.id - 1].A,
                    ga: players[event.currentTarget.id - 1]["G+A"],
                    yc: players[event.currentTarget.id - 1].YC,
                    rc: players[event.currentTarget.id - 1].RC
                });
            }
        } else if (((players[event.currentTarget.id - 1].Pos.includes("GK") === true) && (numberOne.player !== "Player" || numberTwo.player !== "Player")) || ((players[event.currentTarget.id - 1].Pos.includes("DF") === true) && (numberThree.player !== "Player" || numberFour.player !== "Player" || numberFive.player !== "Player" || numberSix.player !== "Player" || numberSeven.player !== "Player")) || ((players[event.currentTarget.id - 1].Pos.includes("MF") === true) && (numberSeven.player !== "Player" || numberEight.player !== "Player" || numberNine.player !== "Player" || numberTen.player !== "Player" || numberEleven.player !== "Player" || numberTwelve.player !== "Player" || numberThirteen.player !== "Player")) || ((players[event.currentTarget.id - 1].Pos.includes("FW") === true) && (numberTwelve.player !== "Player" || numberThirteen.player !== "Player" || numberFourteen.player !== "Player" || numberFifteen.player !== "Player"))) {
            changeLang ?
                (theme ?
                    toast.warn(<div>{`${players[event.currentTarget.id - 1].Pos} pozisyonu için maksimum sayıya ulaşıldı. Bu oyuncu seçimini yapabilmen için ${players[event.currentTarget.id - 1].Pos} pozisyonundan oyuncu çıkarman gerekmektedir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                    :
                    toast.warn(<div>{`${players[event.currentTarget.id - 1].Pos} pozisyonu için maksimum sayıya ulaşıldı. Bu oyuncu seçimini yapabilmen için ${players[event.currentTarget.id - 1].Pos} pozisyonundan oyuncu çıkarman gerekmektedir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                :
                (theme ?
                    toast.warn(<div>{`The maximum number for the ${players[event.currentTarget.id - 1].Pos} position has been reached. In order to make this player selection, you must remove a player from the ${players[event.currentTarget.id - 1].Pos} position`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                    :
                    toast.warn(<div>{`The maximum number for the ${players[event.currentTarget.id - 1].Pos} position has been reached. In order to make this player selection, you must remove a player from the ${players[event.currentTarget.id - 1].Pos} position`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
        }
    };

    const dropPlayers = (event) => {
        event.preventDefault();

        if (event.currentTarget.id === numberOne.id && numberOne.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            }
            setNumberOne({
                ...numberOne,
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
        } else if (event.currentTarget.id === numberTwo.id && numberTwo.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            }
            setNumberTwo({
                ...numberTwo,
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
        } else if (event.currentTarget.id === numberThree.id && numberThree.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberThree({
                ...numberThree,
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
        } else if (event.currentTarget.id === numberFour.id && numberFour.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberFour({
                ...numberFour,
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
        } else if (event.currentTarget.id === numberFive.id && numberFive.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberFive({
                ...numberFive,
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
        } else if (event.currentTarget.id === numberSix.id && numberSix.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberSix({
                ...numberSix,
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
        } else if (event.currentTarget.id === numberSeven.id && numberSeven.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberSeven({
                ...numberSeven,
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
        } else if (event.currentTarget.id === numberEight.id && numberEight.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberEight({
                ...numberEight,
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
        } else if (event.currentTarget.id === numberNine.id && numberNine.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberNine({
                ...numberNine,
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
        } else if (event.currentTarget.id === numberTen.id && numberTen.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberTen({
                ...numberTen,
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
        } else if (event.currentTarget.id === numberEleven.id && numberEleven.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberEleven({
                ...numberEleven,
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
        } else if (event.currentTarget.id === numberTwelve.id && numberTwelve.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberTwelve({
                ...numberTwelve,
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
        } else if (event.currentTarget.id === numberThirteen.id && numberThirteen.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberThirteen({
                ...numberThirteen,
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
        } else if (event.currentTarget.id === numberFourteen.id && numberFourteen.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberFourteen({
                ...numberFourteen,
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
        } else if (event.currentTarget.id === numberFifteen.id && numberFifteen.bg === true) {
            if (dropCalc() !== 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            } else if (dropCalc() === 1) {
                changeLang ?
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                    :
                    (theme ?
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                        :
                        toast.info(<div>{`${players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
            };
            setNumberFifteen({
                ...numberFifteen,
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
        } else if (players[event.currentTarget.id - 1].Id !== numberOne.id || players[event.currentTarget.id - 1].Id !== numberTwo.id || players[event.currentTarget.id - 1].Id !== numberThree.id || players[event.currentTarget.id - 1].Id !== numberFour.id || players[event.currentTarget.id - 1].Id !== numberFive.id || players[event.currentTarget.id - 1].Id !== numberSix.id || players[event.currentTarget.id - 1].Id !== numberSeven.id || players[event.currentTarget.id - 1].Id !== numberEight.id || players[event.currentTarget.id - 1].Id !== numberNine.id || players[event.currentTarget.id - 1].Id !== numberTen.id || players[event.currentTarget.id - 1].Id !== numberEleven.id || players[event.currentTarget.id - 1].Id !== numberTwelve.id || players[event.currentTarget.id - 1].Id !== numberThirteen.id || players[event.currentTarget.id - 1].Id !== numberFourteen.id || players[event.currentTarget.id - 1].Id !== numberFifteen.id) {
            changeLang ?
                (theme ?
                    toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} zaten takımda değil`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                    :
                    toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} zaten takımda değil`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
                :
                (theme ?
                    toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} is not already in the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
                    :
                    toast.warn(<div>{`${players[event.currentTarget.id - 1].Player} is not already in the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
        }
    };

    const selectedPlayers = [
        {
            id: numberOne.id,
            icon: numberOne.icon,
            bg: numberOne.bg,
            image: numberOne.image,
            player: numberOne.player,
            team: numberOne.team,
            tr: numberOne.tr,
            value: numberOne.value,
            nation: numberOne.nation,
            flagcode: numberOne.flagcode,
            pos: numberOne.pos,
            age: numberOne.age,
            mp: numberOne.mp,
            min: numberOne.min,
            g: numberOne.g,
            a: numberOne.a,
            ga: numberOne.ga,
            yc: numberOne.yc,
            rc: numberOne.rc
        },
        {
            id: numberTwo.id,
            icon: numberTwo.icon,
            bg: numberTwo.bg,
            image: numberTwo.image,
            player: numberTwo.player,
            team: numberTwo.team,
            tr: numberTwo.tr,
            value: numberTwo.value,
            nation: numberTwo.nation,
            flagcode: numberTwo.flagcode,
            pos: numberTwo.pos,
            age: numberTwo.age,
            mp: numberTwo.mp,
            min: numberTwo.min,
            g: numberTwo.g,
            a: numberTwo.a,
            ga: numberTwo.ga,
            yc: numberTwo.yc,
            rc: numberTwo.rc
        },
        {
            id: numberThree.id,
            icon: numberThree.icon,
            bg: numberThree.bg,
            image: numberThree.image,
            player: numberThree.player,
            team: numberThree.team,
            tr: numberThree.tr,
            value: numberThree.value,
            nation: numberThree.nation,
            flagcode: numberThree.flagcode,
            pos: numberThree.pos,
            age: numberThree.age,
            mp: numberThree.mp,
            min: numberThree.min,
            g: numberThree.g,
            a: numberThree.a,
            ga: numberThree.ga,
            yc: numberThree.yc,
            rc: numberThree.rc
        },
        {
            id: numberFour.id,
            icon: numberFour.icon,
            bg: numberFour.bg,
            image: numberFour.image,
            player: numberFour.player,
            team: numberFour.team,
            tr: numberFour.tr,
            value: numberFour.value,
            nation: numberFour.nation,
            flagcode: numberFour.flagcode,
            pos: numberFour.pos,
            age: numberFour.age,
            mp: numberFour.mp,
            min: numberFour.min,
            g: numberFour.g,
            a: numberFour.a,
            ga: numberFour.ga,
            yc: numberFour.yc,
            rc: numberFour.rc
        },
        {
            id: numberFive.id,
            icon: numberFive.icon,
            bg: numberFive.bg,
            image: numberFive.image,
            player: numberFive.player,
            team: numberFive.team,
            tr: numberFive.tr,
            value: numberFive.value,
            nation: numberFive.nation,
            flagcode: numberFive.flagcode,
            pos: numberFive.pos,
            age: numberFive.age,
            mp: numberFive.mp,
            min: numberFive.min,
            g: numberFive.g,
            a: numberFive.a,
            ga: numberFive.ga,
            yc: numberFive.yc,
            rc: numberFive.rc
        },
        {
            id: numberSix.id,
            icon: numberSix.icon,
            bg: numberSix.bg,
            image: numberSix.image,
            player: numberSix.player,
            team: numberSix.team,
            tr: numberSix.tr,
            value: numberSix.value,
            nation: numberSix.nation,
            flagcode: numberSix.flagcode,
            pos: numberSix.pos,
            age: numberSix.age,
            mp: numberSix.mp,
            min: numberSix.min,
            g: numberSix.g,
            a: numberSix.a,
            ga: numberSix.ga,
            yc: numberSix.yc,
            rc: numberSix.rc
        },
        {
            id: numberSeven.id,
            icon: numberSeven.icon,
            bg: numberSeven.bg,
            image: numberSeven.image,
            player: numberSeven.player,
            team: numberSeven.team,
            tr: numberSeven.tr,
            value: numberSeven.value,
            nation: numberSeven.nation,
            flagcode: numberSeven.flagcode,
            pos: numberSeven.pos,
            age: numberSeven.age,
            mp: numberSeven.mp,
            min: numberSeven.min,
            g: numberSeven.g,
            a: numberSeven.a,
            ga: numberSeven.ga,
            yc: numberSeven.yc,
            rc: numberSeven.rc
        },
        {
            id: numberEight.id,
            icon: numberEight.icon,
            bg: numberEight.bg,
            image: numberEight.image,
            player: numberEight.player,
            team: numberEight.team,
            tr: numberEight.tr,
            value: numberEight.value,
            nation: numberEight.nation,
            flagcode: numberEight.flagcode,
            pos: numberEight.pos,
            age: numberEight.age,
            mp: numberEight.mp,
            min: numberEight.min,
            g: numberEight.g,
            a: numberEight.a,
            ga: numberEight.ga,
            yc: numberEight.yc,
            rc: numberEight.rc
        },
        {
            id: numberNine.id,
            icon: numberNine.icon,
            bg: numberNine.bg,
            image: numberNine.image,
            player: numberNine.player,
            team: numberNine.team,
            tr: numberNine.tr,
            value: numberNine.value,
            nation: numberNine.nation,
            flagcode: numberNine.flagcode,
            pos: numberNine.pos,
            age: numberNine.age,
            mp: numberNine.mp,
            min: numberNine.min,
            g: numberNine.g,
            a: numberNine.a,
            ga: numberNine.ga,
            yc: numberNine.yc,
            rc: numberNine.rc
        },
        {
            id: numberTen.id,
            icon: numberTen.icon,
            bg: numberTen.bg,
            image: numberTen.image,
            player: numberTen.player,
            team: numberTen.team,
            tr: numberTen.tr,
            value: numberTen.value,
            nation: numberTen.nation,
            flagcode: numberTen.flagcode,
            pos: numberTen.pos,
            age: numberTen.age,
            mp: numberTen.mp,
            min: numberTen.min,
            g: numberTen.g,
            a: numberTen.a,
            ga: numberTen.ga,
            yc: numberTen.yc,
            rc: numberTen.rc
        },
        {
            id: numberEleven.id,
            icon: numberEleven.icon,
            bg: numberEleven.bg,
            image: numberEleven.image,
            player: numberEleven.player,
            team: numberEleven.team,
            tr: numberEleven.tr,
            value: numberEleven.value,
            nation: numberEleven.nation,
            flagcode: numberEleven.flagcode,
            pos: numberEleven.pos,
            age: numberEleven.age,
            mp: numberEleven.mp,
            min: numberEleven.min,
            g: numberEleven.g,
            a: numberEleven.a,
            ga: numberEleven.ga,
            yc: numberEleven.yc,
            rc: numberEleven.rc
        },
        {
            id: numberTwelve.id,
            icon: numberTwelve.icon,
            bg: numberTwelve.bg,
            image: numberTwelve.image,
            player: numberTwelve.player,
            team: numberTwelve.team,
            tr: numberTwelve.tr,
            value: numberTwelve.value,
            nation: numberTwelve.nation,
            flagcode: numberTwelve.flagcode,
            pos: numberTwelve.pos,
            age: numberTwelve.age,
            mp: numberTwelve.mp,
            min: numberTwelve.min,
            g: numberTwelve.g,
            a: numberTwelve.a,
            ga: numberTwelve.ga,
            yc: numberTwelve.yc,
            rc: numberTwelve.rc
        },
        {
            id: numberThirteen.id,
            icon: numberThirteen.icon,
            bg: numberThirteen.bg,
            image: numberThirteen.image,
            player: numberThirteen.player,
            team: numberThirteen.team,
            tr: numberThirteen.tr,
            value: numberThirteen.value,
            nation: numberThirteen.nation,
            flagcode: numberThirteen.flagcode,
            pos: numberThirteen.pos,
            age: numberThirteen.age,
            mp: numberThirteen.mp,
            min: numberThirteen.min,
            g: numberThirteen.g,
            a: numberThirteen.a,
            ga: numberThirteen.ga,
            yc: numberThirteen.yc,
            rc: numberThirteen.rc
        },
        {
            id: numberFourteen.id,
            icon: numberFourteen.icon,
            bg: numberFourteen.bg,
            image: numberFourteen.image,
            player: numberFourteen.player,
            team: numberFourteen.team,
            tr: numberFourteen.tr,
            value: numberFourteen.value,
            nation: numberFourteen.nation,
            flagcode: numberFourteen.flagcode,
            pos: numberFourteen.pos,
            age: numberFourteen.age,
            mp: numberFourteen.mp,
            min: numberFourteen.min,
            g: numberFourteen.g,
            a: numberFourteen.a,
            ga: numberFourteen.ga,
            yc: numberFourteen.yc,
            rc: numberFourteen.rc
        },
        {
            id: numberFifteen.id,
            icon: numberFifteen.icon,
            bg: numberFifteen.bg,
            image: numberFifteen.image,
            player: numberFifteen.player,
            team: numberFifteen.team,
            tr: numberFifteen.tr,
            value: numberFifteen.value,
            nation: numberFifteen.nation,
            flagcode: numberFifteen.flagcode,
            pos: numberFifteen.pos,
            age: numberFifteen.age,
            mp: numberFifteen.mp,
            min: numberFifteen.min,
            g: numberFifteen.g,
            a: numberFifteen.a,
            ga: numberFifteen.ga,
            yc: numberFifteen.yc,
            rc: numberFifteen.rc
        }
    ];

    const selectCalc = () => {
        let count = 1;
        for (let i = 0; i < selectedPlayers.length; i++) {
            if (selectedPlayers[i].player !== "Player") {
                count = count + 1;
            }
        }
        return (selectedPlayers.length - count);
    };

    const dropCalc = () => {
        let count = 1;
        for (let i = 0; i < selectedPlayers.length; i++) {
            if (selectedPlayers[i].player !== "Player") {
                count = count + 1;
            }
        }
        return (selectedPlayers.length - count + 2);
    };

    const teamCalc = () => {
        let count = 0;
        for (let i = 0; i < selectedPlayers.length; i++) {
            if (selectedPlayers[i].player !== "Player") {
                count++;
            }
        }
        return count;
    };

    const [money, setMoney] = useLocalStorage("Money", 400);

    const coinCalc = () => {
        let total = 0;
        for (let i = 0; i < selectedPlayers.length; i++) {
            total += selectedPlayers[i].value;
        }
        return (money - total).toFixed(1);
    };

    const [goalkeeperOne, setGoalkeeperOne] = useLocalStorage("GoalkeeperOne", "Player");
    const [goalkeeperTwo, setGoalkeeperTwo] = useLocalStorage("GoalkeeperTwo", "Player");
    const [defenceOne, setDefenceOne] = useLocalStorage("DefenceOne", "Player");
    const [defenceTwo, setDefenceTwo] = useLocalStorage("DefenceTwo", "Player");
    const [defenceThree, setDefenceThree] = useLocalStorage("DefenceThree", "Player");
    const [defenceFour, setDefenceFour] = useLocalStorage("DefenceFour", "Player");
    const [midOne, setMidOne] = useLocalStorage("MidOne", "Player");
    const [midTwo, setMidTwo] = useLocalStorage("MidTwo", "Player");
    const [midThree, setMidThree] = useLocalStorage("MidThree", "Player");
    const [midFour, setMidFour] = useLocalStorage("MidFour", "Player");
    const [midFive, setMidFive] = useLocalStorage("MidFive", "Player");
    const [forwOne, setForwOne] = useLocalStorage("ForwOne", "Player");
    const [forwTwo, setForwTwo] = useLocalStorage("ForwTwo", "Player");
    const [forwThree, setForwThree] = useLocalStorage("ForwThree", "Player");
    const [jokerOne, setJokerOne] = useLocalStorage("JokerOne", "Player");
    const [jokerTwo, setJokerTwo] = useLocalStorage("JokerTwo", "Player");
    const [jokerThree, setJokerThree] = useLocalStorage("JokerThree", "Player");

    const lineupAfterDrop = (e) => {
        e.currentTarget.value === goalkeeperOne ? setGoalkeeperOne("Player") : setGoalkeeperOne(goalkeeperOne);
        e.currentTarget.value === goalkeeperTwo ? setGoalkeeperTwo("Player") : setGoalkeeperTwo(goalkeeperTwo);
        e.currentTarget.value === defenceOne ? setDefenceOne("Player") : setDefenceOne(defenceOne);
        e.currentTarget.value === defenceTwo ? setDefenceTwo("Player") : setDefenceTwo(defenceTwo);
        e.currentTarget.value === defenceThree ? setDefenceThree("Player") : setDefenceThree(defenceThree);
        e.currentTarget.value === defenceFour ? setDefenceFour("Player") : setDefenceFour(defenceFour);
        e.currentTarget.value === midOne ? setMidOne("Player") : setMidOne(midOne);
        e.currentTarget.value === midTwo ? setMidTwo("Player") : setMidTwo(midTwo);
        e.currentTarget.value === midThree ? setMidThree("Player") : setMidThree(midThree);
        e.currentTarget.value === midFour ? setMidFour("Player") : setMidFour(midFour);
        e.currentTarget.value === midFive ? setMidFive("Player") : setMidFive(midFive);
        e.currentTarget.value === forwOne ? setForwOne("Player") : setForwOne(forwOne);
        e.currentTarget.value === forwTwo ? setForwTwo("Player") : setForwTwo(forwTwo);
        e.currentTarget.value === forwThree ? setForwThree("Player") : setForwThree(forwThree);
        e.currentTarget.value === jokerOne ? setJokerOne("Player") : setJokerOne(jokerOne);
        e.currentTarget.value === jokerTwo ? setJokerTwo("Player") : setJokerTwo(jokerTwo);
        e.currentTarget.value === jokerThree ? setJokerThree("Player") : setJokerThree(jokerThree);
    };

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

    const [accordionNumberOne, setAccordionNumberOne] = useState(false);
    const [accordionNumberTwo, setAccordionNumberTwo] = useState(false);
    const [accordionNumberThree, setAccordionNumberThree] = useState(false);
    const [accordionNumberFour, setAccordionNumberFour] = useState(false);
    const [accordionNumberFive, setAccordionNumberFive] = useState(false);
    const [accordionNumberSix, setAccordionNumberSix] = useState(false);
    const [accordionNumberSeven, setAccordionNumberSeven] = useState(false);
    const [accordionNumberEight, setAccordionNumberEight] = useState(false);
    const [accordionNumberNine, setAccordionNumberNine] = useState(false);
    const [accordionNumberTen, setAccordionNumberTen] = useState(false);
    const [accordionNumberEleven, setAccordionNumberEleven] = useState(false);

    const [showNumberOne, setShowNumberOne] = useLocalStorage("Show Number One", false);
    const [showNumberTwo, setShowNumberTwo] = useLocalStorage("Show Number Two", false);
    const [showNumberThree, setShowNumberThree] = useLocalStorage("Show Number Three", false);
    const [showNumberFour, setShowNumberFour] = useLocalStorage("Show Number Four", false);
    const [showNumberFive, setShowNumberFive] = useLocalStorage("Show Number Five", false);
    const [showNumberSix, setShowNumberSix] = useLocalStorage("Show Number Six", false);
    const [showNumberSeven, setShowNumberSeven] = useLocalStorage("Show Number Seven", false);
    const [showNumberEight, setShowNumberEight] = useLocalStorage("Show Number Eight", false);
    const [showNumberNine, setShowNumberNine] = useLocalStorage("Show Number Nine", false);
    const [showNumberTen, setShowNumberTen] = useLocalStorage("Show Number Ten", false);
    const [showNumberEleven, setShowNumberEleven] = useLocalStorage("Show Number Eleven", false);

    const selectedTeam = {
        GK: [
            {
                image: 8,
                position: "GK",
                tactic: "4-4-2",
                number: 1,
                showRival: showNumberOne,
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player",
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-5-1",
                number: 1,
                showRival: showNumberOne,
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player",
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-3-3",
                number: 1,
                showRival: showNumberOne,
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player",
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-4-3",
                number: 1,
                showRival: showNumberOne,
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player",
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-5-2",
                number: 1,
                showRival: showNumberOne,
                player: chosenGK.length > 0 ? chosenGK[0].player : "Player",
                accordionNumber: accordionNumberOne
            }
        ],
        DF: [
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 2,
                showRival: showNumberTwo,
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player",
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 3,
                showRival: showNumberThree,
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player",
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 4,
                showRival: showNumberFour,
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player",
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 5,
                showRival: showNumberFive,
                player: chosenDF.length > 3 ? chosenDF[3].player : "Player",
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 2,
                showRival: showNumberTwo,
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player",
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 3,
                showRival: showNumberThree,
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player",
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 4,
                showRival: showNumberFour,
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player",
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 5,
                showRival: showNumberFive,
                player: chosenDF.length > 3 ? chosenDF[3].player : "Player",
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 2,
                showRival: showNumberTwo,
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player",
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 3,
                showRival: showNumberThree,
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player",
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 4,
                showRival: showNumberFour,
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player",
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 5,
                showRival: showNumberFive,
                player: chosenDF.length > 3 ? chosenDF[3].player : "Player",
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                number: 2,
                showRival: showNumberTwo,
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player",
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                number: 3,
                showRival: showNumberThree,
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player",
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                number: 4,
                showRival: showNumberFour,
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player",
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                number: 2,
                showRival: showNumberTwo,
                player: chosenDF.length > 0 ? chosenDF[0].player : "Player",
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                number: 3,
                showRival: showNumberThree,
                player: chosenDF.length > 1 ? chosenDF[1].player : "Player",
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                number: 4,
                showRival: showNumberFour,
                player: chosenDF.length > 2 ? chosenDF[2].player : "Player",
                accordionNumber: accordionNumberFour
            }
        ],
        MF: [
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 6,
                showRival: showNumberSix,
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player",
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 7,
                showRival: showNumberSeven,
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player",
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 8,
                showRival: showNumberEight,
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player",
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 9,
                showRival: showNumberNine,
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player",
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 6,
                showRival: showNumberSix,
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player",
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 7,
                showRival: showNumberSeven,
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player",
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 8,
                showRival: showNumberEight,
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player",
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 9,
                showRival: showNumberNine,
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player",
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: chosenMF.length > 4 ? "MF" : (chosenFW.length > 1 ? "FW" : "MF"),
                tactic: "4-5-1",
                number: 10,
                showRival: showNumberTen,
                player: chosenMF.length > 4 ? chosenMF[4].player : (chosenFW.length > 1 ? chosenFW[1].player : "Player"),
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                number: 6,
                showRival: showNumberSix,
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player",
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                number: 7,
                showRival: showNumberSeven,
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player",
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                number: 8,
                showRival: showNumberEight,
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player",
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 5,
                showRival: showNumberFive,
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player",
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 6,
                showRival: showNumberSix,
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player",
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 7,
                showRival: showNumberSeven,
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player",
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 8,
                showRival: showNumberEight,
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player",
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 5,
                showRival: showNumberFive,
                player: chosenMF.length > 0 ? chosenMF[0].player : "Player",
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 6,
                showRival: showNumberSix,
                player: chosenMF.length > 1 ? chosenMF[1].player : "Player",
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 7,
                showRival: showNumberSeven,
                player: chosenMF.length > 2 ? chosenMF[2].player : "Player",
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 8,
                showRival: showNumberEight,
                player: chosenMF.length > 3 ? chosenMF[3].player : "Player",
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: chosenMF.length > 4 ? "MF" : (chosenDF.length > 3 ? "DF" : "MF"),
                tactic: "3-5-2",
                number: 9,
                showRival: showNumberNine,
                player: chosenMF.length > 4 ? chosenMF[4].player : (chosenDF.length > 3 ? chosenDF[3].player : "Player"),
                accordionNumber: accordionNumberNine
            }
        ],
        FW: [
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                number: 10,
                showRival: showNumberTen,
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player",
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                number: 11,
                showRival: showNumberEleven,
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player",
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-5-1",
                number: 11,
                showRival: showNumberEleven,
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player",
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                number: 9,
                showRival: showNumberNine,
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player",
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                number: 10,
                showRival: showNumberTen,
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player",
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: chosenFW.length > 2 ? "FW" : (chosenMF.length > 3 ? "MF" : "FW"),
                tactic: "4-3-3",
                number: 11,
                showRival: showNumberEleven,
                player: chosenFW.length > 2 ? chosenFW[2].player : (chosenMF.length > 3 ? chosenMF[3].player : "Player"),
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                number: 9,
                showRival: showNumberNine,
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player",
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                number: 10,
                showRival: showNumberTen,
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player",
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: chosenFW.length > 2 ? "FW" : (chosenDF.length > 3 ? "DF" : "FW"),
                tactic: "3-4-3",
                number: 11,
                showRival: showNumberEleven,
                player: chosenFW.length > 2 ? chosenFW[2].player : (chosenDF.length > 3 ? chosenDF[3].player : "Player"),
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                number: 10,
                showRival: showNumberTen,
                player: chosenFW.length > 0 ? chosenFW[0].player : "Player",
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                number: 11,
                showRival: showNumberEleven,
                player: chosenFW.length > 1 ? chosenFW[1].player : "Player",
                accordionNumber: accordionNumberEleven
            }
        ]
    };

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

    const buildTeam = {
        GK: [
            {
                image: 8,
                position: "GK",
                tactic: "4-4-2",
                number: 1,
                showRival: showNumberOne,
                player: goalkeeperOne,
                function: setGoalkeeperOne,
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-5-1",
                number: 1,
                showRival: showNumberOne,
                player: goalkeeperOne,
                function: setGoalkeeperOne,
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "4-3-3",
                number: 1,
                showRival: showNumberOne,
                player: goalkeeperOne,
                function: setGoalkeeperOne,
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-4-3",
                number: 1,
                showRival: showNumberOne,
                player: goalkeeperOne,
                function: setGoalkeeperOne,
                accordionNumber: accordionNumberOne
            },
            {
                image: 8,
                position: "GK",
                tactic: "3-5-2",
                number: 1,
                showRival: showNumberOne,
                player: goalkeeperOne,
                function: setGoalkeeperOne,
                accordionNumber: accordionNumberOne
            }
        ],
        DF: [
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 2,
                showRival: showNumberTwo,
                player: defenceOne,
                function: setDefenceOne,
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 3,
                showRival: showNumberThree,
                player: defenceTwo,
                function: setDefenceTwo,
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 4,
                showRival: showNumberFour,
                player: defenceThree,
                function: setDefenceThree,
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-4-2",
                number: 5,
                showRival: showNumberFive,
                player: selectDefenceFour(),
                function: setDefenceFour,
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 2,
                showRival: showNumberTwo,
                player: defenceOne,
                function: setDefenceOne,
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 3,
                showRival: showNumberThree,
                player: defenceTwo,
                function: setDefenceTwo,
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 4,
                showRival: showNumberFour,
                player: defenceThree,
                function: setDefenceThree,
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-5-1",
                number: 5,
                showRival: showNumberFive,
                player: selectDefenceFour(),
                function: setDefenceFour,
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 2,
                showRival: showNumberTwo,
                player: defenceOne,
                function: setDefenceOne,
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 3,
                showRival: showNumberThree,
                player: defenceTwo,
                function: setDefenceTwo,
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 4,
                showRival: showNumberFour,
                player: defenceThree,
                function: setDefenceThree,
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "4-3-3",
                number: 5,
                showRival: showNumberFive,
                player: selectDefenceFour(),
                function: setDefenceFour,
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                number: 2,
                showRival: showNumberTwo,
                player: defenceOne,
                function: setDefenceOne,
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                number: 3,
                showRival: showNumberThree,
                player: defenceTwo,
                function: setDefenceTwo,
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-4-3",
                number: 4,
                showRival: showNumberFour,
                player: defenceThree,
                function: setDefenceThree,
                accordionNumber: accordionNumberFour
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                number: 2,
                showRival: showNumberTwo,
                player: defenceOne,
                function: setDefenceOne,
                accordionNumber: accordionNumberTwo
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                number: 3,
                showRival: showNumberThree,
                player: defenceTwo,
                function: setDefenceTwo,
                accordionNumber: accordionNumberThree
            },
            {
                image: 7,
                position: "DF",
                tactic: "3-5-2",
                number: 4,
                showRival: showNumberFour,
                player: defenceThree,
                function: setDefenceThree,
                accordionNumber: accordionNumberFour
            }
        ],
        MF: [
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 6,
                showRival: showNumberSix,
                player: midOne,
                function: setMidOne,
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 7,
                showRival: showNumberSeven,
                player: midTwo,
                function: setMidTwo,
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 8,
                showRival: showNumberEight,
                player: midThree,
                function: setMidThree,
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-4-2",
                number: 9,
                showRival: showNumberNine,
                player: selectMidFour(),
                function: setMidFour,
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 6,
                showRival: showNumberSix,
                player: midOne,
                function: setMidOne,
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 7,
                showRival: showNumberSeven,
                player: midTwo,
                function: setMidTwo,
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 8,
                showRival: showNumberEight,
                player: midThree,
                function: setMidThree,
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 9,
                showRival: showNumberNine,
                player: selectMidFour(),
                function: setMidFour,
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-5-1",
                number: 10,
                showRival: showNumberTen,
                player: selectMidFive(),
                function: setMidFive,
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                number: 6,
                showRival: showNumberSix,
                player: midOne,
                function: setMidOne,
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                number: 7,
                showRival: showNumberSeven,
                player: midTwo,
                function: setMidTwo,
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "4-3-3",
                number: 8,
                showRival: showNumberEight,
                player: midThree,
                function: setMidThree,
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 5,
                showRival: showNumberFive,
                player: midOne,
                function: setMidOne,
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 6,
                showRival: showNumberSix,
                player: midTwo,
                function: setMidTwo,
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 7,
                showRival: showNumberSeven,
                player: midThree,
                function: setMidThree,
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-4-3",
                number: 8,
                showRival: showNumberEight,
                player: selectMidFour(),
                function: setMidFour,
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 5,
                showRival: showNumberFive,
                player: midOne,
                function: setMidOne,
                accordionNumber: accordionNumberFive
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 6,
                showRival: showNumberSix,
                player: midTwo,
                function: setMidTwo,
                accordionNumber: accordionNumberSix
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 7,
                showRival: showNumberSeven,
                player: midThree,
                function: setMidThree,
                accordionNumber: accordionNumberSeven
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 8,
                showRival: showNumberEight,
                player: selectMidFour(),
                function: setMidFour,
                accordionNumber: accordionNumberEight
            },
            {
                image: 7,
                position: "MF",
                tactic: "3-5-2",
                number: 9,
                showRival: showNumberNine,
                player: selectMidFive(),
                function: setMidFive,
                accordionNumber: accordionNumberNine
            }
        ],
        FW: [
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                number: 10,
                showRival: showNumberTen,
                player: forwOne,
                function: setForwOne,
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-4-2",
                number: 11,
                showRival: showNumberEleven,
                player: selectForwTwo(),
                function: setForwTwo,
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-5-1",
                number: 11,
                showRival: showNumberEleven,
                player: forwOne,
                function: setForwOne,
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                number: 9,
                showRival: showNumberNine,
                player: forwOne,
                function: setForwOne,
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                number: 10,
                showRival: showNumberTen,
                player: selectForwTwo(),
                function: setForwTwo,
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "FW",
                tactic: "4-3-3",
                number: 11,
                showRival: showNumberEleven,
                player: selectForwThree(),
                function: setForwThree,
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                number: 9,
                showRival: showNumberNine,
                player: forwOne,
                function: setForwOne,
                accordionNumber: accordionNumberNine
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                number: 10,
                showRival: showNumberTen,
                player: selectForwTwo(),
                function: setForwTwo,
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-4-3",
                number: 11,
                showRival: showNumberEleven,
                player: selectForwThree(),
                function: setForwThree,
                accordionNumber: accordionNumberEleven
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                number: 10,
                showRival: showNumberTen,
                player: forwOne,
                function: setForwOne,
                accordionNumber: accordionNumberTen
            },
            {
                image: 7,
                position: "FW",
                tactic: "3-5-2",
                number: 11,
                showRival: showNumberEleven,
                player: selectForwTwo(),
                function: setForwTwo,
                accordionNumber: accordionNumberEleven
            }
        ]
    };

    const [randomTeam, setRandomTeam] = useLocalStorage("Random Team", false);
    const [notRandomTeam, setNotRandomTeam] = useLocalStorage("Not Random Team", false);
    const [match, setMatch] = useLocalStorage("Match", false);

    const [tactic, setTactic] = useLocalStorage("Tactic", "");

    const [vsPlayerForUser, setVsPlayerForUser] = useState({
        id: 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": 0,
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
    const [vsPlayerForRival, setVsPlayerForRival] = useState({
        id: 0,
        "Player": "Player",
        "Value": 0,
        "Team": "",
        "TR": 0,
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

    const [number, setNumber] = useState(0);

    const [readyToMatch, setReadyToMatch] = useState(true);

    const [yourTotalScore, setYourTotalScore] = useLocalStorage("Your Total Score", 0);
    const [rivalTotalScore, setRivalTotalScore] = useLocalStorage("Rival Total Score", 0);

    const [level, setLevel] = useState("normal");

    const randomNumber = Math.floor(Math.random() * 6);
    const [chanceNumber, setChanceNumber] = useState();

    return (
        <AppContext.Provider value={{ changeLang, setChangeLang, theme, setTheme, loading, setLoading, leagueName, setLeagueName, clubName, setClubName, changeLanguage, teams, players, selectPlayers, dropPlayers, selectedPlayers, teamCalc, coinCalc, lineupAfterDrop, goalkeeperOne, setGoalkeeperOne, goalkeeperTwo, setGoalkeeperTwo, defenceOne, setDefenceOne, defenceTwo, setDefenceTwo, defenceThree, setDefenceThree, defenceFour, setDefenceFour, midOne, setMidOne, midTwo, setMidTwo, midThree, setMidThree, midFour, setMidFour, midFive, setMidFive, forwOne, setForwOne, forwTwo, setForwTwo, forwThree, setForwThree, jokerOne, setJokerOne, jokerTwo, setJokerTwo, jokerThree, setJokerThree, notRandomTeam, setNotRandomTeam, randomTeam, setRandomTeam, selectedTeam, buildTeam, tactic, setTactic, accordionNumberOne, setAccordionNumberOne, accordionNumberTwo, setAccordionNumberTwo, accordionNumberThree, setAccordionNumberThree, accordionNumberFour, setAccordionNumberFour, accordionNumberFive, setAccordionNumberFive, accordionNumberSix, setAccordionNumberSix, accordionNumberSeven, setAccordionNumberSeven, accordionNumberEight, setAccordionNumberEight, accordionNumberNine, setAccordionNumberNine, accordionNumberTen, setAccordionNumberTen, accordionNumberEleven, setAccordionNumberEleven, vsPlayerForUser, setVsPlayerForUser, vsPlayerForRival, setVsPlayerForRival, showNumberOne, showNumberTwo, showNumberThree, showNumberFour, showNumberFive, showNumberSix, showNumberSeven, showNumberEight, showNumberNine, showNumberTen, showNumberEleven, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, number, setNumber, match, setMatch, readyToMatch, setReadyToMatch, yourTotalScore, setYourTotalScore, rivalTotalScore, setRivalTotalScore, level, setLevel, randomNumber, chanceNumber, setChanceNumber, setMoney, money, setNumberOne, setNumberTwo, setNumberThree, setNumberFour, setNumberFive, setNumberSix, setNumberSeven, setNumberEight, setNumberNine, setNumberTen, setNumberEleven, setNumberTwelve, setNumberThirteen, setNumberFourteen, setNumberFifteen }}>
            <div>
                <Routes>
                    <Route exact="true" path="/" element={<LeagueSelection />} />
                    <Route path="/league" element={<HomePage />} />
                    <Route path="/league/table" element={<LeagueTable />} />
                    <Route path="/league/:Team" element={<ClubPlayers />} />
                    <Route path="/league/players" element={<Players />} />
                    <Route path="/league/team" element={<Team />} />
                    <Route path="/league/team/:Tactic" element={<TeamTactics />} />
                    <Route path="/league/play" element={<Play />} />
                    <Route path="/league/versus" element={<Versus />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
};

export default App;
