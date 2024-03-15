import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping, faTriangleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from './AppContext';
import data from "./data.js";
import Navigation from "./components/Navigation";
import Clubs from "./components/Clubs";
import HomePage from "./components/HomePage";
import LeagueTable from "./components/LeagueTable";
import ClubPlayers from "./components/ClubPlayers";
import Players from "./components/Players";
import Team from "./components/Team";
import TeamTactics from "./components/TeamTactics";
import Play from "./components/Play";
import useLocalStorage from "./useLocalStorage.js";

const App = () => {
  const [theme, setTheme] = useLocalStorage("Night Mode", false);
  const [changeLang, setChangeLang] = useLocalStorage("Language", false);

  let array = [];
  data.players.filter((item) => {
    return array.push(item.Player);
  })
  const arr = array.filter((currentValue, currentIndex) =>
    array.indexOf(currentValue) !== currentIndex);

  let sameNameArray = [];
  for (let a = 0; a < data.players.length; a++) {
    for (let i = 0; i < arr.length; i++) {
      if (data.players[a].Player === arr[i]) {
        sameNameArray.push(data.players[a]);
      }
    }
  }

  const findPlayer = (e) => {
    for (let c = 0; c < sameNameArray.length; c++) {
      if ((sameNameArray[c].Player === data.players[e.currentTarget.id - 1].Player) && (sameNameArray[c].id !== data.players[e.currentTarget.id - 1].id)) {
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
      if (data.players[event.currentTarget.id - 1].Player === selectedPlayers[i].player) {
        return changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} daha önce takıma dahil oldu`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} daha önce takıma dahil oldu`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} has already joined the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} has already joined the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
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

    if (data.players[event.currentTarget.id - 1].Coin > coinCalc()) {
      changeLang ?
        (theme ?
          toast.warn(<div>{"Kalan toplam paranızdan daha fazla tutarda harcama yapamazsınız"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{"Kalan toplam paranızdan daha fazla tutarda harcama yapamazsınız"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
        :
        (theme ?
          toast.warn(<div>{"You cannot spend more than your total remaining money"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{"You cannot spend more than your total remaining money"} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("GK") === true && numberOne.player === "Player" && numberOne.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberOne({
          ...numberOne,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberOne({
          ...numberOne,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberOne({
          ...numberOne,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("GK") === true && numberTwo.player === "Player" && numberTwo.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwo({
          ...numberTwo,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwo({
          ...numberTwo,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwo({
          ...numberTwo,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 8,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberThree.player === "Player" && numberThree.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThree({
          ...numberThree,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThree({
          ...numberThree,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThree({
          ...numberThree,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberFour.player === "Player" && numberFour.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFour({
          ...numberFour,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFour({
          ...numberFour,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFour({
          ...numberFour,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberFive.player === "Player" && numberFive.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFive({
          ...numberFive,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFive({
          ...numberFive,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFive({
          ...numberFive,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("DF") === true && numberSix.player === "Player" && numberSix.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSix({
          ...numberSix,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSix({
          ...numberSix,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSix({
          ...numberSix,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberSeven.player === "Player" && numberSeven.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSeven({
          ...numberSeven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSeven({
          ...numberSeven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberSeven({
          ...numberSeven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberEight.player === "Player" && numberEight.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEight({
          ...numberEight,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEight({
          ...numberEight,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEight({
          ...numberEight,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberNine.player === "Player" && numberNine.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberNine({
          ...numberNine,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberNine({
          ...numberNine,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberNine({
          ...numberNine,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("MF") === true && numberTen.player === "Player" && numberTen.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTen({
          ...numberTen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTen({
          ...numberTen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTen({
          ...numberTen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("FW") === true && numberEleven.player === "Player" && numberEleven.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEleven({
          ...numberEleven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEleven({
          ...numberEleven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberEleven({
          ...numberEleven,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (data.players[event.currentTarget.id - 1].Pos.includes("FW") === true && numberTwelve.player === "Player" && numberTwelve.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwelve({
          ...numberTwelve,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwelve({
          ...numberTwelve,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberTwelve({
          ...numberTwelve,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if ((data.players[event.currentTarget.id - 1].Pos.includes("DF") === true || data.players[event.currentTarget.id - 1].Pos.includes("MF") === true || data.players[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberThirteen.player === "Player" && numberThirteen.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThirteen({
          ...numberThirteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThirteen({
          ...numberThirteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberThirteen({
          ...numberThirteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if ((data.players[event.currentTarget.id - 1].Pos.includes("DF") === true || data.players[event.currentTarget.id - 1].Pos.includes("MF") === true || data.players[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberFourteen.player === "Player" && numberFourteen.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFourteen({
          ...numberFourteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFourteen({
          ...numberFourteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFourteen({
          ...numberFourteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if ((data.players[event.currentTarget.id - 1].Pos.includes("DF") === true || data.players[event.currentTarget.id - 1].Pos.includes("MF") === true || data.players[event.currentTarget.id - 1].Pos.includes("FW") === true) && numberFifteen.player === "Player" && numberFifteen.bg === false) {
      if (newCount.includes(data.players[event.currentTarget.id - 1].Club) === true) {
        changeLang ?
          (theme ?
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Club} kulübünden 3 oyuncu daha önce takıma dahil edildi. Bir kulüpten en fazla 3 oyuncu takımda olabilir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
            :
            toast.warn(<div>{`3 players from ${data.players[event.currentTarget.id - 1].Club} club were previously included in the team. A maximum of 3 players from one club can be on the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
      } else if (selectCalc() !== 0 & selectCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more players`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFifteen({
          ...numberFifteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 0) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. Takımda eksik oyuncu kalmadı`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. There are no missing players in the team`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFifteen({
          ...numberFifteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      } else if (selectCalc() === 1) {
        changeLang ?
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} seçimi başarıyla yapıldı. ${selectCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "dark" })
            :
            toast.success(<div>{`${data.players[event.currentTarget.id - 1].Pos} selection has been done successfully. You need to choose ${selectCalc()} more player`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" }));
        setNumberFifteen({
          ...numberFifteen,
          id: event.currentTarget.id,
          icon: true,
          bg: true,
          image: 7,
          player: data.players[event.currentTarget.id - 1].Player,
          club: data.players[event.currentTarget.id - 1].Club,
          coin: data.players[event.currentTarget.id - 1].Coin,
          nation: data.players[event.currentTarget.id - 1].Nation,
          flag: data.players[event.currentTarget.id - 1].Flag,
          pos: data.players[event.currentTarget.id - 1].Pos,
          age: data.players[event.currentTarget.id - 1].Age,
          mp: data.players[event.currentTarget.id - 1].MP,
          starts: data.players[event.currentTarget.id - 1].Starts,
          min: data.players[event.currentTarget.id - 1].Min,
          gls: data.players[event.currentTarget.id - 1].Gls,
          ast: data.players[event.currentTarget.id - 1].Ast,
          pk: data.players[event.currentTarget.id - 1].PK,
          pkatt: data.players[event.currentTarget.id - 1].PKatt,
          crdy: data.players[event.currentTarget.id - 1].CrdY,
          crdr: data.players[event.currentTarget.id - 1].CrdR
        });
      }
    } else if (((data.players[event.currentTarget.id - 1].Pos.includes("GK") === true) && (numberOne.player !== "Player" || numberTwo.player !== "Player")) || ((data.players[event.currentTarget.id - 1].Pos.includes("DF") === true) && (numberThree.player !== "Player" || numberFour.player !== "Player" || numberFive.player !== "Player" || numberSix.player !== "Player" || numberSeven.player !== "Player")) || ((data.players[event.currentTarget.id - 1].Pos.includes("MF") === true) && (numberSeven.player !== "Player" || numberEight.player !== "Player" || numberNine.player !== "Player" || numberTen.player !== "Player" || numberEleven.player !== "Player" || numberTwelve.player !== "Player" || numberThirteen.player !== "Player")) || ((data.players[event.currentTarget.id - 1].Pos.includes("FW") === true) && (numberTwelve.player !== "Player" || numberThirteen.player !== "Player" || numberFourteen.player !== "Player" || numberFifteen.player !== "Player"))) {
      changeLang ?
        (theme ?
          toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Pos} pozisyonu için maksimum sayıya ulaşıldı. Bu oyuncu seçimini yapabilmeniz için ${data.players[event.currentTarget.id - 1].Pos} pozisyonundan oyuncu çıkarmanız gerekmektedir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Pos} pozisyonu için maksimum sayıya ulaşıldı. Bu oyuncu seçimini yapabilmeniz için ${data.players[event.currentTarget.id - 1].Pos} pozisyonundan oyuncu çıkarmanız gerekmektedir`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
        :
        (theme ?
          toast.warn(<div>{`The maximum number for the ${data.players[event.currentTarget.id - 1].Pos} position has been reached. In order to make this player selection, you must remove a player from the ${data.players[event.currentTarget.id - 1].Pos} position`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`The maximum number for the ${data.players[event.currentTarget.id - 1].Pos} position has been reached. In order to make this player selection, you must remove a player from the ${data.players[event.currentTarget.id - 1].Pos} position`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
    }
  };

  const dropPlayers = (event) => {
    event.preventDefault();

    if (event.currentTarget.id === numberOne.id && numberOne.bg === true) {
      if (dropCalc() !== 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more players`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
      } else if (dropCalc() === 1) {
        changeLang ?
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} takımdan başarıyla çıkarıldı. ${dropCalc()} oyuncu daha seçmen gerekiyor`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
          :
          (theme ?
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
            :
            toast.info(<div>{`${data.players[event.currentTarget.id - 1].Player} successfully removed from the team. You need to choose ${dropCalc()} more player`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
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
    } else if (data.players[event.currentTarget.id - 1].id !== numberOne.id || data.players[event.currentTarget.id - 1].id !== numberTwo.id || data.players[event.currentTarget.id - 1].id !== numberThree.id || data.players[event.currentTarget.id - 1].id !== numberFour.id || data.players[event.currentTarget.id - 1].id !== numberFive.id || data.players[event.currentTarget.id - 1].id !== numberSix.id || data.players[event.currentTarget.id - 1].id !== numberSeven.id || data.players[event.currentTarget.id - 1].id !== numberEight.id || data.players[event.currentTarget.id - 1].id !== numberNine.id || data.players[event.currentTarget.id - 1].id !== numberTen.id || data.players[event.currentTarget.id - 1].id !== numberEleven.id || data.players[event.currentTarget.id - 1].id !== numberTwelve.id || data.players[event.currentTarget.id - 1].id !== numberThirteen.id || data.players[event.currentTarget.id - 1].id !== numberFourteen.id || data.players[event.currentTarget.id - 1].id !== numberFifteen.id) {
      changeLang ?
        (theme ?
          toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} zaten takımda değil`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} zaten takımda değil`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }))
        :
        (theme ?
          toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} is not already in the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "dark" })
          :
          toast.warn(<div>{`${data.players[event.currentTarget.id - 1].Player} is not already in the team`} <FontAwesomeIcon icon={faTriangleExclamation} bounce /></div>, { theme: "light" }));
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

  const coinCalc = () => {
    let total = 0;
    for (let i = 0; i < selectedPlayers.length; i++) {
      total += selectedPlayers[i].coin;
    }
    return (400 - total).toFixed(1);
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

    return position;
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
        position: selectJoker("4-4-2", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne)[0].pos : "DF/MF/FW",
        tactic: "4-4-2",
        player: selectJoker("4-4-2", jokerOne),
        function: setJokerOne
      },
      {
        image: 7,
        position: selectJoker("4-4-2", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo)[0].pos : "DF/MF/FW",
        tactic: "4-4-2",
        player: selectJoker("4-4-2", jokerTwo),
        function: setJokerTwo
      },
      {
        image: 7,
        position: selectJoker("4-4-2", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree)[0].pos : "DF/MF/FW",
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
        position: selectJoker("4-5-1", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne)[0].pos : "DF/MF/FW",
        tactic: "4-5-1",
        player: selectJoker("4-5-1", jokerOne),
        function: setJokerOne
      },
      {
        image: 7,
        position: selectJoker("4-5-1", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo)[0].pos : "DF/MF/FW",
        tactic: "4-5-1",
        player: selectJoker("4-5-1", jokerTwo),
        function: setJokerTwo
      },
      {
        image: 7,
        position: selectJoker("4-5-1", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree)[0].pos : "DF/MF/FW",
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
        position: selectJoker("4-3-3", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne)[0].pos : "DF/MF/FW",
        tactic: "4-3-3",
        player: selectJoker("4-3-3", jokerOne),
        function: setJokerOne
      },
      {
        image: 7,
        position: selectJoker("4-3-3", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo)[0].pos : "DF/MF/FW",
        tactic: "4-3-3",
        player: selectJoker("4-3-3", jokerTwo),
        function: setJokerTwo
      },
      {
        image: 7,
        position: selectJoker("4-3-3", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree)[0].pos : "DF/MF/FW",
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
        position: selectJoker("3-4-3", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne)[0].pos : "DF/MF/FW",
        tactic: "3-4-3",
        player: selectJoker("3-4-3", jokerOne),
        function: setJokerOne
      },
      {
        image: 7,
        position: selectJoker("3-4-3", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo)[0].pos : "DF/MF/FW",
        tactic: "3-4-3",
        player: selectJoker("3-4-3", jokerTwo),
        function: setJokerTwo
      },
      {
        image: 7,
        position: selectJoker("3-4-3", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree)[0].pos : "DF/MF/FW",
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
        position: selectJoker("3-5-2", jokerOne) !== "Player" ? setPositionsOfJokers(jokerOne)[0].pos : "DF/MF/FW",
        tactic: "3-5-2",
        player: selectJoker("3-5-2", jokerOne),
        function: setJokerOne
      },
      {
        image: 7,
        position: selectJoker("3-5-2", jokerTwo) !== "Player" ? setPositionsOfJokers(jokerTwo)[0].pos : "DF/MF/FW",
        tactic: "3-5-2",
        player: selectJoker("3-5-2", jokerTwo),
        function: setJokerTwo
      },
      {
        image: 7,
        position: selectJoker("3-5-2", jokerThree) !== "Player" ? setPositionsOfJokers(jokerThree)[0].pos : "DF/MF/FW",
        tactic: "3-5-2",
        player: selectJoker("3-5-2", jokerThree),
        function: setJokerThree
      }
    ]
  };

  const [randomTeam, setRandomTeam] = useLocalStorage("Random Team", false);
  const [notRandomTeam, setNotRandomTeam] = useLocalStorage("Not Random Team", false);

  const [tactic, setTactic] = useLocalStorage("Tactic", "");

  return (
    <AppContext.Provider value={{ theme, setTheme, changeLang, setChangeLang, arr, selectPlayers, dropPlayers, selectedPlayers, findPlayer, teamCalc, coinCalc, lineupAfterDrop, goalkeeperOne, setGoalkeeperOne, goalkeeperTwo, setGoalkeeperTwo, defenceOne, setDefenceOne, defenceTwo, setDefenceTwo, defenceThree, setDefenceThree, defenceFour, setDefenceFour, midOne, setMidOne, midTwo, setMidTwo, midThree, setMidThree, midFour, setMidFour, midFive, setMidFive, forwOne, setForwOne, forwTwo, setForwTwo, forwThree, setForwThree, jokerOne, setJokerOne, jokerTwo, setJokerTwo, jokerThree, setJokerThree, notRandomTeam, setNotRandomTeam, randomTeam, setRandomTeam, selectedTeam, selectedSubs, buildTeam, tactic, setTactic, chosenGK, chosenDF, chosenMF, chosenFW }}>
      <div>
        <Navigation />
        <Clubs />
        <Routes>
          <Route path="/" element={
            <HomePage />
          }
          />
          <Route path="/league/table" element={
            <LeagueTable />
          }
          />
          <Route path="/league/:Club" element={
            <ClubPlayers />
          }
          />
          <Route path="/players" element={
            <Players />
          }
          />
          <Route path="/team" element={
            <Team />
          }
          />
          <Route path="/team/:Tactic" element={
            <TeamTactics />
          }
          />
          <Route path="/play" element={
            <Play />
          }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
