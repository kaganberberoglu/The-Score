import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping, faTriangleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from './AppContext';
import data from "./data.js";
import dataSecond from "./dataSecond.js";
import Navigation from "./components/Navigation";
import NavigationSecond from "./components/NavigationSecond";
import Clubs from "./components/Clubs";
import ClubsSecond from "./components/ClubsSecond";
import LeagueSelection from "./components/LeagueSelection";
import TransitionPage from "./components/TransitionPage.js";
import TransitionPageSecond from "./components/TransitionPageSecond.js";
import HomePage from "./components/HomePage";
import HomePageSecond from "./components/HomePageSecond";
import LeagueTable from "./components/LeagueTable";
import LeagueTableSecond from "./components/LeagueTableSecond";
import ClubPlayers from "./components/ClubPlayers";
import ClubPlayersSecond from "./components/ClubPlayersSecond";
import Players from "./components/Players";
import PlayersSecond from "./components/PlayersSecond";
import Team from "./components/Team";
import TeamSecond from "./components/TeamSecond";
import TeamTactics from "./components/TeamTactics";
import TeamTacticsSecond from "./components/TeamTacticsSecond";
import Play from "./components/Play";
import PlaySecond from "./components/PlaySecond";
import Versus from "./components/Versus";
import VersusSecond from "./components/VersusSecond";
import useLocalStorage from "./useLocalStorage.js";

const App = () => {
  const [theme, setTheme] = useLocalStorage("Night Mode", false);
  const [changeLang, setChangeLang] = useLocalStorage("Language", false);

  const [leagueSelection, setLeagueSelection] = useLocalStorage("League Selection", undefined);

  const playersForApp = leagueSelection === false ? data.players : dataSecond.players;

  let array = [];
  playersForApp.filter((item) => {
    return array.push(item.Player);
  });
  const arr = array.filter((currentValue, currentIndex) =>
    array.indexOf(currentValue) !== currentIndex);

  let sameNameArray = [];
  for (let a = 0; a < playersForApp.length; a++) {
    for (let i = 0; i < arr.length; i++) {
      if (playersForApp[a].Player === arr[i]) {
        sameNameArray.push(playersForApp[a]);
      }
    }
  };

  const findPlayer = (e) => {
    for (let c = 0; c < sameNameArray.length; c++) {
      if ((sameNameArray[c].Player === playersForApp[e.currentTarget.id - 1].Player) && (sameNameArray[c].id !== playersForApp[e.currentTarget.id - 1].id)) {
        return sameNameArray[c].Club;
      }
    }
  };

  const [numberOne, setNumberOne] = useLocalStorage("Number One", {
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

  const [numberTwo, setNumberTwo] = useLocalStorage("Number Two", {
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

  const [numberThree, setNumberThree] = useLocalStorage("Number Three", {
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

  const [numberFour, setNumberFour] = useLocalStorage("Number Four", {
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

  const [numberFive, setNumberFive] = useLocalStorage("Number Five", {
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

  const [numberSix, setNumberSix] = useLocalStorage("Number Six", {
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

  const [numberSeven, setNumberSeven] = useLocalStorage("Number Seven", {
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

  const [numberEight, setNumberEight] = useLocalStorage("Number Eight", {
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

  const [numberNine, setNumberNine] = useLocalStorage("Number Nine", {
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

  const [numberTen, setNumberTen] = useLocalStorage("Number Ten", {
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

  const [numberEleven, setNumberEleven] = useLocalStorage("Number Eleven", {
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

  const [numberTwelve, setNumberTwelve] = useLocalStorage("Number Twelve", {
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

  const [numberThirteen, setNumberThirteen] = useLocalStorage("Number Thirteen", {
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

  const [numberFourteen, setNumberFourteen] = useLocalStorage("Number Fourteen", {
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

  const [numberFifteen, setNumberFifteen] = useLocalStorage("Number Fifteen", {
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

  const selectPlayers = (event) => {
    event.preventDefault();

    for (let i = 0; i < selectedPlayers.length; i++) {
      if (playersForApp[event.currentTarget.id - 1].Player === selectedPlayers[i].player) {
        return changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} daha önce takıma dahil oldu`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} daha önce takıma dahil oldu`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} has already joined the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} has already joined the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      }
    }

    const array = [];
    for (let i = 0; i < selectedPlayers.length; i++) {
      array.push(selectedPlayers[i].club);
    }
    const count = {};
    array.forEach(function (x) { count[x] = (count[x] || 0) + 1; });
    const newCount = [];
    for (const key in count) {
      if (key !== "" && count[key] > 2) {
        newCount.push(key);
      };
    }

    if (playersForApp[event.currentTarget.id - 1].Coin > coinCalc()) {
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
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("GK") === true && numberOne.player === "Player" && numberOne.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberOne({
          ...numberOne,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberOne({
          ...numberOne,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberOne({
          ...numberOne,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("GK") === true && numberTwo.player === "Player" && numberTwo.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwo({
          ...numberTwo,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwo({
          ...numberTwo,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwo({
          ...numberTwo,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true && numberThree.player === "Player" && numberThree.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThree({
          ...numberThree,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThree({
          ...numberThree,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThree({
          ...numberThree,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true && numberFour.player === "Player" && numberFour.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFour({
          ...numberFour,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFour({
          ...numberFour,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFour({
          ...numberFour,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true && numberFive.player === "Player" && numberFive.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFive({
          ...numberFive,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFive({
          ...numberFive,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFive({
          ...numberFive,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true && numberSix.player === "Player" && numberSix.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSix({
          ...numberSix,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSix({
          ...numberSix,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSix({
          ...numberSix,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true && numberSeven.player === "Player" && numberSeven.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSeven({
          ...numberSeven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSeven({
          ...numberSeven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSeven({
          ...numberSeven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true && numberEight.player === "Player" && numberEight.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEight({
          ...numberEight,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEight({
          ...numberEight,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEight({
          ...numberEight,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true && numberNine.player === "Player" && numberNine.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberNine({
          ...numberNine,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberNine({
          ...numberNine,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberNine({
          ...numberNine,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true && numberTen.player === "Player" && numberTen.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTen({
          ...numberTen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTen({
          ...numberTen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTen({
          ...numberTen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("FW") === true && numberEleven.player === "Player" && numberEleven.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEleven({
          ...numberEleven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEleven({
          ...numberEleven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEleven({
          ...numberEleven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (playersForApp[event.currentTarget.id - 1].Pos.includes("FW") === true && numberTwelve.player === "Player" && numberTwelve.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwelve({
          ...numberTwelve,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwelve({
          ...numberTwelve,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwelve({
          ...numberTwelve,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if ((playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true || playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true || playersForApp[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberThirteen.player === "Player" && numberThirteen.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThirteen({
          ...numberThirteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThirteen({
          ...numberThirteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThirteen({
          ...numberThirteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if ((playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true || playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true || playersForApp[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberFourteen.player === "Player" && numberFourteen.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFourteen({
          ...numberFourteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFourteen({
          ...numberFourteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFourteen({
          ...numberFourteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if ((playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true || playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true || playersForApp[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberFifteen.player === "Player" && numberFifteen.bg === false) {
      if (newCount.includes(playersForApp[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${playersForApp[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFifteen({
          ...numberFifteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFifteen({
          ...numberFifteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFifteen({
          ...numberFifteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: playersForApp[event.currentTarget.id - 1].Player,
          club: playersForApp[event.currentTarget.id - 1].Club,
          coin: playersForApp[event.currentTarget.id - 1].Coin,
          nation: playersForApp[event.currentTarget.id - 1].Nation,
          flag: playersForApp[event.currentTarget.id - 1].Flag,
          pos: playersForApp[event.currentTarget.id - 1].Pos,
          age: playersForApp[event.currentTarget.id - 1].Age,
          mp: playersForApp[event.currentTarget.id - 1].MP,
          starts: playersForApp[event.currentTarget.id - 1].Starts,
          min: playersForApp[event.currentTarget.id - 1].Min,
          gls: playersForApp[event.currentTarget.id - 1].Gls,
          ast: playersForApp[event.currentTarget.id - 1].Ast,
          pk: playersForApp[event.currentTarget.id - 1].PK,
          pkatt: playersForApp[event.currentTarget.id - 1].PKatt,
          crdy: playersForApp[event.currentTarget.id - 1].CrdY,
          crdr: playersForApp[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (((playersForApp[event.currentTarget.id - 1].Pos.includes("GK") === true) && (numberOne.player !== "Player" || numberTwo.player !== "Player")) || ((playersForApp[event.currentTarget.id - 1].Pos.includes("DF") === true) && (numberThree.player !== "Player" || numberFour.player !== "Player" || numberFive.player !== "Player" || numberSix.player !== "Player" || numberSeven.player !== "Player")) || ((playersForApp[event.currentTarget.id - 1].Pos.includes("MF") === true) && (numberSeven.player !== "Player" || numberEight.player !== "Player" || numberNine.player !== "Player" || numberTen.player !== "Player" || numberEleven.player !== "Player" || numberTwelve.player !== "Player" || numberThirteen.player !== "Player")) || ((playersForApp[event.currentTarget.id - 1].Pos.includes("FW") === true) && (numberTwelve.player !== "Player" || numberThirteen.player !== "Player" || numberFourteen.player !== "Player" || numberFifteen.player !== "Player"))) {
      changeLang ?
        (theme ?
          toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} pozisyonu için maksimum sayıya ulaşıldı. Bu oyuncu seçimini yapabilmen için ${playersForApp[event.currentTarget.id - 1].Pos} pozisyonundan oyuncu çıkarman gerekmektedir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Pos} pozisyonu için maksimum sayıya ulaşıldı. Bu oyuncu seçimini yapabilmen için ${playersForApp[event.currentTarget.id - 1].Pos} pozisyonundan oyuncu çıkarman gerekmektedir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
        :
        (theme ?
          toast.warn(<div>{`The maximum number for the ${playersForApp[event.currentTarget.id - 1].Pos} position has been reached. In order to make this player selection, you must remove a player from the ${playersForApp[event.currentTarget.id - 1].Pos} position`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`The maximum number for the ${playersForApp[event.currentTarget.id - 1].Pos} position has been reached. In order to make this player selection, you must remove a player from the ${playersForApp[event.currentTarget.id - 1].Pos} position`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
    }
  };

  const dropPlayers = (event) => {
    event.preventDefault();

    if (event.currentTarget.id === numberOne.id && numberOne.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      }
      setNumberOne({
        ...numberOne,
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
    } else if (event.currentTarget.id === numberTwo.id && numberTwo.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      }
      setNumberTwo({
        ...numberTwo,
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
    } else if (event.currentTarget.id === numberThree.id && numberThree.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberThree({
        ...numberThree,
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
    } else if (event.currentTarget.id === numberFour.id && numberFour.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberFour({
        ...numberFour,
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
    } else if (event.currentTarget.id === numberFive.id && numberFive.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberFive({
        ...numberFive,
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
    } else if (event.currentTarget.id === numberSix.id && numberSix.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberSix({
        ...numberSix,
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
    } else if (event.currentTarget.id === numberSeven.id && numberSeven.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberSeven({
        ...numberSeven,
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
    } else if (event.currentTarget.id === numberEight.id && numberEight.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberEight({
        ...numberEight,
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
    } else if (event.currentTarget.id === numberNine.id && numberNine.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberNine({
        ...numberNine,
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
    } else if (event.currentTarget.id === numberTen.id && numberTen.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberTen({
        ...numberTen,
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
    } else if (event.currentTarget.id === numberEleven.id && numberEleven.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberEleven({
        ...numberEleven,
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
    } else if (event.currentTarget.id === numberTwelve.id && numberTwelve.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberTwelve({
        ...numberTwelve,
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
    } else if (event.currentTarget.id === numberThirteen.id && numberThirteen.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberThirteen({
        ...numberThirteen,
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
    } else if (event.currentTarget.id === numberFourteen.id && numberFourteen.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberFourteen({
        ...numberFourteen,
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
    } else if (event.currentTarget.id === numberFifteen.id && numberFifteen.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${playersForApp[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      };
      setNumberFifteen({
        ...numberFifteen,
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
    } else if (playersForApp[event.currentTarget.id - 1].id !== numberOne.id || playersForApp[event.currentTarget.id - 1].id !== numberTwo.id || playersForApp[event.currentTarget.id - 1].id !== numberThree.id || playersForApp[event.currentTarget.id - 1].id !== numberFour.id || playersForApp[event.currentTarget.id - 1].id !== numberFive.id || playersForApp[event.currentTarget.id - 1].id !== numberSix.id || playersForApp[event.currentTarget.id - 1].id !== numberSeven.id || playersForApp[event.currentTarget.id - 1].id !== numberEight.id || playersForApp[event.currentTarget.id - 1].id !== numberNine.id || playersForApp[event.currentTarget.id - 1].id !== numberTen.id || playersForApp[event.currentTarget.id - 1].id !== numberEleven.id || playersForApp[event.currentTarget.id - 1].id !== numberTwelve.id || playersForApp[event.currentTarget.id - 1].id !== numberThirteen.id || playersForApp[event.currentTarget.id - 1].id !== numberFourteen.id || playersForApp[event.currentTarget.id - 1].id !== numberFifteen.id) {
      changeLang ?
        (theme ?
          toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} zaten takımda değil`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} zaten takımda değil`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
        :
        (theme ?
          toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} is not already in the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`${playersForApp[event.currentTarget.id - 1].Player} is not already in the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
    }
  };

  const selectedPlayers = [
    {
      id: numberOne.id,
      icon: numberOne.icon,
      bg: numberOne.bg,
      image: numberOne.image,
      player: numberOne.player,
      club: numberOne.club,
      coin: numberOne.coin,
      nation: numberOne.nation,
      flag: numberOne.flag,
      pos: numberOne.pos,
      age: numberOne.age,
      mp: numberOne.mp,
      starts: numberOne.starts,
      min: numberOne.min,
      gls: numberOne.gls,
      ast: numberOne.ast,
      pk: numberOne.pk,
      pkatt: numberOne.pkatt,
      crdy: numberOne.crdy,
      crdr: numberOne.crdr
    },
    {
      id: numberTwo.id,
      icon: numberTwo.icon,
      bg: numberTwo.bg,
      image: numberTwo.image,
      player: numberTwo.player,
      club: numberTwo.club,
      coin: numberTwo.coin,
      nation: numberTwo.nation,
      flag: numberTwo.flag,
      pos: numberTwo.pos,
      age: numberTwo.age,
      mp: numberTwo.mp,
      starts: numberTwo.starts,
      min: numberTwo.min,
      gls: numberTwo.gls,
      ast: numberTwo.ast,
      pk: numberTwo.pk,
      pkatt: numberTwo.pkatt,
      crdy: numberTwo.crdy,
      crdr: numberTwo.crdr
    },
    {
      id: numberThree.id,
      icon: numberThree.icon,
      bg: numberThree.bg,
      image: numberThree.image,
      player: numberThree.player,
      club: numberThree.club,
      coin: numberThree.coin,
      nation: numberThree.nation,
      flag: numberThree.flag,
      pos: numberThree.pos,
      age: numberThree.age,
      mp: numberThree.mp,
      starts: numberThree.starts,
      min: numberThree.min,
      gls: numberThree.gls,
      ast: numberThree.ast,
      pk: numberThree.pk,
      pkatt: numberThree.pkatt,
      crdy: numberThree.crdy,
      crdr: numberThree.crdr
    },
    {
      id: numberFour.id,
      icon: numberFour.icon,
      bg: numberFour.bg,
      image: numberFour.image,
      player: numberFour.player,
      club: numberFour.club,
      coin: numberFour.coin,
      nation: numberFour.nation,
      flag: numberFour.flag,
      pos: numberFour.pos,
      age: numberFour.age,
      mp: numberFour.mp,
      starts: numberFour.starts,
      min: numberFour.min,
      gls: numberFour.gls,
      ast: numberFour.ast,
      pk: numberFour.pk,
      pkatt: numberFour.pkatt,
      crdy: numberFour.crdy,
      crdr: numberFour.crdr
    },
    {
      id: numberFive.id,
      icon: numberFive.icon,
      bg: numberFive.bg,
      image: numberFive.image,
      player: numberFive.player,
      club: numberFive.club,
      coin: numberFive.coin,
      nation: numberFive.nation,
      flag: numberFive.flag,
      pos: numberFive.pos,
      age: numberFive.age,
      mp: numberFive.mp,
      starts: numberFive.starts,
      min: numberFive.min,
      gls: numberFive.gls,
      ast: numberFive.ast,
      pk: numberFive.pk,
      pkatt: numberFive.pkatt,
      crdy: numberFive.crdy,
      crdr: numberFive.crdr
    },
    {
      id: numberSix.id,
      icon: numberSix.icon,
      bg: numberSix.bg,
      image: numberSix.image,
      player: numberSix.player,
      club: numberSix.club,
      coin: numberSix.coin,
      nation: numberSix.nation,
      flag: numberSix.flag,
      pos: numberSix.pos,
      age: numberSix.age,
      mp: numberSix.mp,
      starts: numberSix.starts,
      min: numberSix.min,
      gls: numberSix.gls,
      ast: numberSix.ast,
      pk: numberSix.pk,
      pkatt: numberSix.pkatt,
      crdy: numberSix.crdy,
      crdr: numberSix.crdr
    },
    {
      id: numberSeven.id,
      icon: numberSeven.icon,
      bg: numberSeven.bg,
      image: numberSeven.image,
      player: numberSeven.player,
      club: numberSeven.club,
      coin: numberSeven.coin,
      nation: numberSeven.nation,
      flag: numberSeven.flag,
      pos: numberSeven.pos,
      age: numberSeven.age,
      mp: numberSeven.mp,
      starts: numberSeven.starts,
      min: numberSeven.min,
      gls: numberSeven.gls,
      ast: numberSeven.ast,
      pk: numberSeven.pk,
      pkatt: numberSeven.pkatt,
      crdy: numberSeven.crdy,
      crdr: numberSeven.crdr
    },
    {
      id: numberEight.id,
      icon: numberEight.icon,
      bg: numberEight.bg,
      image: numberEight.image,
      player: numberEight.player,
      club: numberEight.club,
      coin: numberEight.coin,
      nation: numberEight.nation,
      flag: numberEight.flag,
      pos: numberEight.pos,
      age: numberEight.age,
      mp: numberEight.mp,
      starts: numberEight.starts,
      min: numberEight.min,
      gls: numberEight.gls,
      ast: numberEight.ast,
      pk: numberEight.pk,
      pkatt: numberEight.pkatt,
      crdy: numberEight.crdy,
      crdr: numberEight.crdr
    },
    {
      id: numberNine.id,
      icon: numberNine.icon,
      bg: numberNine.bg,
      image: numberNine.image,
      player: numberNine.player,
      club: numberNine.club,
      coin: numberNine.coin,
      nation: numberNine.nation,
      flag: numberNine.flag,
      pos: numberNine.pos,
      age: numberNine.age,
      mp: numberNine.mp,
      starts: numberNine.starts,
      min: numberNine.min,
      gls: numberNine.gls,
      ast: numberNine.ast,
      pk: numberNine.pk,
      pkatt: numberNine.pkatt,
      crdy: numberNine.crdy,
      crdr: numberNine.crdr
    },
    {
      id: numberTen.id,
      icon: numberTen.icon,
      bg: numberTen.bg,
      image: numberTen.image,
      player: numberTen.player,
      club: numberTen.club,
      coin: numberTen.coin,
      nation: numberTen.nation,
      flag: numberTen.flag,
      pos: numberTen.pos,
      age: numberTen.age,
      mp: numberTen.mp,
      starts: numberTen.starts,
      min: numberTen.min,
      gls: numberTen.gls,
      ast: numberTen.ast,
      pk: numberTen.pk,
      pkatt: numberTen.pkatt,
      crdy: numberTen.crdy,
      crdr: numberTen.crdr
    },
    {
      id: numberEleven.id,
      icon: numberEleven.icon,
      bg: numberEleven.bg,
      image: numberEleven.image,
      player: numberEleven.player,
      club: numberEleven.club,
      coin: numberEleven.coin,
      nation: numberEleven.nation,
      flag: numberEleven.flag,
      pos: numberEleven.pos,
      age: numberEleven.age,
      mp: numberEleven.mp,
      starts: numberEleven.starts,
      min: numberEleven.min,
      gls: numberEleven.gls,
      ast: numberEleven.ast,
      pk: numberEleven.pk,
      pkatt: numberEleven.pkatt,
      crdy: numberEleven.crdy,
      crdr: numberEleven.crdr
    },
    {
      id: numberTwelve.id,
      icon: numberTwelve.icon,
      bg: numberTwelve.bg,
      image: numberTwelve.image,
      player: numberTwelve.player,
      club: numberTwelve.club,
      coin: numberTwelve.coin,
      nation: numberTwelve.nation,
      flag: numberTwelve.flag,
      pos: numberTwelve.pos,
      age: numberTwelve.age,
      mp: numberTwelve.mp,
      starts: numberTwelve.starts,
      min: numberTwelve.min,
      gls: numberTwelve.gls,
      ast: numberTwelve.ast,
      pk: numberTwelve.pk,
      pkatt: numberTwelve.pkatt,
      crdy: numberTwelve.crdy,
      crdr: numberTwelve.crdr
    },
    {
      id: numberThirteen.id,
      icon: numberThirteen.icon,
      bg: numberThirteen.bg,
      image: numberThirteen.image,
      player: numberThirteen.player,
      club: numberThirteen.club,
      coin: numberThirteen.coin,
      nation: numberThirteen.nation,
      flag: numberThirteen.flag,
      pos: numberThirteen.pos,
      age: numberThirteen.age,
      mp: numberThirteen.mp,
      starts: numberThirteen.starts,
      min: numberThirteen.min,
      gls: numberThirteen.gls,
      ast: numberThirteen.ast,
      pk: numberThirteen.pk,
      pkatt: numberThirteen.pkatt,
      crdy: numberThirteen.crdy,
      crdr: numberThirteen.crdr
    },
    {
      id: numberFourteen.id,
      icon: numberFourteen.icon,
      bg: numberFourteen.bg,
      image: numberFourteen.image,
      player: numberFourteen.player,
      club: numberFourteen.club,
      coin: numberFourteen.coin,
      nation: numberFourteen.nation,
      flag: numberFourteen.flag,
      pos: numberFourteen.pos,
      age: numberFourteen.age,
      mp: numberFourteen.mp,
      starts: numberFourteen.starts,
      min: numberFourteen.min,
      gls: numberFourteen.gls,
      ast: numberFourteen.ast,
      pk: numberFourteen.pk,
      pkatt: numberFourteen.pkatt,
      crdy: numberFourteen.crdy,
      crdr: numberFourteen.crdr
    },
    {
      id: numberFifteen.id,
      icon: numberFifteen.icon,
      bg: numberFifteen.bg,
      image: numberFifteen.image,
      player: numberFifteen.player,
      club: numberFifteen.club,
      coin: numberFifteen.coin,
      nation: numberFifteen.nation,
      flag: numberFifteen.flag,
      pos: numberFifteen.pos,
      age: numberFifteen.age,
      mp: numberFifteen.mp,
      starts: numberFifteen.starts,
      min: numberFifteen.min,
      gls: numberFifteen.gls,
      ast: numberFifteen.ast,
      pk: numberFifteen.pk,
      pkatt: numberFifteen.pkatt,
      crdy: numberFifteen.crdy,
      crdr: numberFifteen.crdr
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
      total += selectedPlayers[i].coin;
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
    "Coin": 0,
    "Club": "",
    "Nation": "",
    "Flag": "",
    "Pos": "",
    "Age": 0,
    "MP": 0,
    "Starts": 0,
    "Min": 0,
    "Gls": 0,
    "Ast": 0,
    "G+A": 0,
    "G-PK": 0,
    "PK": 0,
    "PKatt": 0,
    "CrdY": 0,
    "CrdR": 0
  });
  const [vsPlayerForRival, setVsPlayerForRival] = useState({
    id: 0,
    "Player": "Player",
    "Coin": 0,
    "Club": "",
    "Nation": "",
    "Flag": "",
    "Pos": "",
    "Age": 0,
    "MP": 0,
    "Starts": 0,
    "Min": 0,
    "Gls": 0,
    "Ast": 0,
    "G+A": 0,
    "G-PK": 0,
    "PK": 0,
    "PKatt": 0,
    "CrdY": 0,
    "CrdR": 0
  });

  const [number, setNumber] = useState(0);

  const [readyToMatch, setReadyToMatch] = useState(true);

  const [yourTotalScore, setYourTotalScore] = useLocalStorage("Your Total Score", 0);
  const [rivalTotalScore, setRivalTotalScore] = useLocalStorage("Rival Total Score", 0);

  const [level, setLevel] = useState("normal");

  const randomNumber = Math.floor(Math.random() * 6);
  const [chanceNumber, setChanceNumber] = useState();

  return (
    <AppContext.Provider value={{ theme, setTheme, changeLang, setChangeLang, arr, selectPlayers, dropPlayers, selectedPlayers, findPlayer, teamCalc, coinCalc, lineupAfterDrop, goalkeeperOne, setGoalkeeperOne, goalkeeperTwo, setGoalkeeperTwo, defenceOne, setDefenceOne, defenceTwo, setDefenceTwo, defenceThree, setDefenceThree, defenceFour, setDefenceFour, midOne, setMidOne, midTwo, setMidTwo, midThree, setMidThree, midFour, setMidFour, midFive, setMidFive, forwOne, setForwOne, forwTwo, setForwTwo, forwThree, setForwThree, jokerOne, setJokerOne, jokerTwo, setJokerTwo, jokerThree, setJokerThree, notRandomTeam, setNotRandomTeam, randomTeam, setRandomTeam, selectedTeam, buildTeam, tactic, setTactic, accordionNumberOne, setAccordionNumberOne, accordionNumberTwo, setAccordionNumberTwo, accordionNumberThree, setAccordionNumberThree, accordionNumberFour, setAccordionNumberFour, accordionNumberFive, setAccordionNumberFive, accordionNumberSix, setAccordionNumberSix, accordionNumberSeven, setAccordionNumberSeven, accordionNumberEight, setAccordionNumberEight, accordionNumberNine, setAccordionNumberNine, accordionNumberTen, setAccordionNumberTen, accordionNumberEleven, setAccordionNumberEleven, vsPlayerForUser, setVsPlayerForUser, vsPlayerForRival, setVsPlayerForRival, showNumberOne, showNumberTwo, showNumberThree, showNumberFour, showNumberFive, showNumberSix, showNumberSeven, showNumberEight, showNumberNine, showNumberTen, showNumberEleven, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, number, setNumber, match, setMatch, readyToMatch, setReadyToMatch, yourTotalScore, setYourTotalScore, rivalTotalScore, setRivalTotalScore, level, setLevel, randomNumber, chanceNumber, setChanceNumber, setMoney, money, leagueSelection, setLeagueSelection, setNumberOne, setNumberTwo, setNumberThree, setNumberFour, setNumberFive, setNumberSix, setNumberSeven, setNumberEight, setNumberNine, setNumberTen, setNumberEleven, setNumberTwelve, setNumberThirteen, setNumberFourteen, setNumberFifteen }}>
      <div>
        {leagueSelection === undefined ? <LeagueSelection /> :
          leagueSelection === false ? <Navigation /> :
            <NavigationSecond />
        }
        {leagueSelection === undefined ? <LeagueSelection /> :
          leagueSelection === false ? <Clubs /> :
            <ClubsSecond />
        }

        <Routes>
          <Route path="/" element={
            leagueSelection === false ? <TransitionPage /> :
              leagueSelection === true ? <TransitionPageSecond /> :
                <></>
          }
          />

          <Route path="/premierleague" element={
            <HomePage />
          }
          />
          <Route path="/bundesliga" element={
            <HomePageSecond />
          }
          />

          <Route path="/premierleague/league/table" element={
            <LeagueTable />
          }
          />
          <Route path="/bundesliga/league/table" element={
            <LeagueTableSecond />
          }
          />

          <Route path="/premierleague/league/:Club" element={
            <ClubPlayers />
          }
          />
          <Route path="/bundesliga/league/:Club" element={
            <ClubPlayersSecond />
          }
          />

          <Route path="/premierleague/players" element={
            <Players />
          }
          />
          <Route path="/bundesliga/players" element={
            <PlayersSecond />
          }
          />

          <Route path="/premierleague/team" element={
            <Team />
          }
          />
          <Route path="/bundesliga/team" element={
            <TeamSecond />
          }
          />

          <Route path="/premierleague/team/:Tactic" element={
            <TeamTactics />
          }
          />
          <Route path="/bundesliga/team/:Tactic" element={
            <TeamTacticsSecond />
          }
          />

          <Route path="/premierleague/play" element={
            <Play />
          }
          />
          <Route path="/bundesliga/play" element={
            <PlaySecond />
          }
          />

          <Route path="/premierleague/versus" element={
            <Versus />
          }
          />
          <Route path="/bundesliga/versus" element={
            <VersusSecond />
          }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
