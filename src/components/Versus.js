import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { AppContext } from "../AppContext";
import Navigation from "./Navigation";
import Clubs from "./Clubs";

import "./SweetAlert.css";

const Versus = () => {
    const { changeLang, vsPlayerForUser, vsPlayerForRival, number, setMatch, readyToMatch, setAccordionNumberOne, setAccordionNumberTwo, setAccordionNumberThree, setAccordionNumberFour, setAccordionNumberFive, setAccordionNumberSix, setAccordionNumberSeven, setAccordionNumberEight, setAccordionNumberNine, setAccordionNumberTen, setAccordionNumberEleven, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, yourTotalScore, setYourTotalScore, rivalTotalScore, setRivalTotalScore, chanceNumber, setMoney, money } = useContext(AppContext);

    const navigate = useNavigate();

    const [showValue, setShowValue] = useState(false);
    const [showTR, setShowTR] = useState(false);
    const [showMP, setShowMP] = useState(false);
    const [showMin, setShowMin] = useState(false);
    const [showG, setShowG] = useState(false);
    const [showA, setShowA] = useState(false);
    const [showGA, setShowGA] = useState(false);
    const [showYC, setShowYC] = useState(false);
    const [showRC, setShowRC] = useState(false);

    const [titleCount, setTitleCount] = useState(0);

    const [yourRoundOneScore, setYourRoundOneScore] = useState(0);
    const [yourRoundTwoScore, setYourRoundTwoScore] = useState(0);
    const [yourRoundThreeScore, setYourRoundThreeScore] = useState(0);
    const yourTotalRoundScore = chanceNumber === 5 ? 2 * (yourRoundOneScore + yourRoundTwoScore + yourRoundThreeScore) : yourRoundOneScore + yourRoundTwoScore + yourRoundThreeScore;
    const [rivalRoundOneScore, setRivalRoundOneScore] = useState(0);
    const [rivalRoundTwoScore, setRivalRoundTwoScore] = useState(0);
    const [rivalRoundThreeScore, setRivalRoundThreeScore] = useState(0);
    const rivalTotalRoundScore = rivalRoundOneScore + rivalRoundTwoScore + rivalRoundThreeScore;

    const scoreCounter = (userTitle, rivalTitle) => {
        if (userTitle > rivalTitle) {
            if ((yourRoundOneScore === 0 && rivalRoundOneScore === 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore !== 0 || rivalRoundTwoScore !== 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
            };
        } else if (userTitle === rivalTitle) {
            if ((yourRoundOneScore === 0 && rivalRoundOneScore === 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
                setRivalRoundOneScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
                setRivalRoundTwoScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore !== 0 || rivalRoundTwoScore !== 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
                setRivalRoundThreeScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            };
        } else if (userTitle < rivalTitle) {
            if ((yourRoundOneScore === 0 && rivalRoundOneScore === 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                setRivalRoundOneScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                setRivalRoundTwoScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore !== 0 || rivalRoundTwoScore !== 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                setRivalRoundThreeScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            };
        };
    };

    const scoreCounterCard = (userTitle, rivalTitle) => {
        if (userTitle < rivalTitle) {
            if ((yourRoundOneScore === 0 && rivalRoundOneScore === 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore !== 0 || rivalRoundTwoScore !== 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
            };
        } else if (userTitle === rivalTitle) {
            if ((yourRoundOneScore === 0 && rivalRoundOneScore === 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundOneScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
                setRivalRoundOneScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundTwoScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
                setRivalRoundTwoScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore !== 0 || rivalRoundTwoScore !== 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                if (chanceNumber === 5) {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 2);
                } else {
                    setYourRoundThreeScore(1);
                    setYourTotalScore(yourTotalScore + 1);
                }
                setRivalRoundThreeScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            };
        } else if (userTitle > rivalTitle) {
            if ((yourRoundOneScore === 0 && rivalRoundOneScore === 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                setRivalRoundOneScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore === 0 && rivalRoundTwoScore === 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                setRivalRoundTwoScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            } else if ((yourRoundOneScore !== 0 || rivalRoundOneScore !== 0) && (yourRoundTwoScore !== 0 || rivalRoundTwoScore !== 0) && (yourRoundThreeScore === 0 && rivalRoundThreeScore === 0)) {
                setRivalRoundThreeScore(1);
                setRivalTotalScore(rivalTotalScore + 1);
            };
        };
    };

    return (
        <>
            {!readyToMatch ? (
                <div className="w-screen h-screen grid place-content-center">
                    <center>
                        <p className="text-lg md:text-xl lg:text-xl xl:text-3xl">
                            {changeLang ? "Oyuncular hazırlanıyor" : "Players are getting ready"}
                        </p>
                        <ReactLoading
                            type={"bubbles"}
                            color={"#121212"}
                            height={70}
                            width={70}
                        />
                    </center>
                </div>
            ) : (
                <div>
                    <Navigation />
                    <Clubs />
                    <div className="grid justify-items-center">
                        <div className="flex flex-col mb-5 mx-1">
                            <div className="bg-sky-300 py-4 my-2 rounded font-medium drop-shadow-md grid place-content-center">
                                <p className="text-sm lg:text-base xl:text-xl">
                                    {changeLang ? `Güvendiğin 3 tane veri seç,` : `Choose 3 data you trust,`}
                                </p>
                                <p className="text-sm lg:text-base xl:text-xl">
                                    {changeLang ? "Toplam skorda rakibini geçmeye çalış." : "Try to beat your opponent in total score."}
                                </p>
                                <p className="font-semibold text-lg lg:text-xl xl:text-3xl">
                                    {changeLang ? "Vurduğun gol olsun!" : "Let it be the goal you hit!"}
                                </p>
                            </div>
                            <div className="flex flex-row text-xs lg:text-sm xl:text-base items-start">
                                <div className="grid justify-items-center">
                                    <p className="bg-[#ffdb7a] rounded py-0.5 px-1 mt-2 font-semibold border-2 border-black drop-shadow-md">
                                        {
                                            changeLang ?
                                                "Senin Takımın Oyuncusu"
                                                :
                                                "Your Team Player"
                                        }
                                    </p>
                                    <img className="w-16 lg:w-20 xl:w-24 bg-stone-300 rounded my-2 p-1 border-2 border-black drop-shadow-md" alt="player" src={require(`../assets/icons/${number === 1 ? 12 : 14}.png`)} />
                                    <div className="bg-stone-300 rounded py-0.5 px-1 border-2 border-black drop-shadow-md w-36 lg:w-64 xl:w-64">
                                        <div className="flex justify-start">
                                            {changeLang ? "Numara:" : "Number:"} <span className="truncate font-bold pl-1">{number}</span>
                                        </div>
                                        <div className="flex justify-start">
                                            {changeLang ? "Oyuncu:" : "Player:"} <span className="truncate font-bold pl-1">{vsPlayerForUser.player}</span>
                                        </div>
                                        <div className="flex justify-start">
                                            {changeLang ? "Yaş:" : "Age:"} <span className="truncate font-bold pl-1">{vsPlayerForUser.age}</span>
                                        </div>
                                        <div className="flex justify-start">
                                            {changeLang ? "Takım:" : "Team:"} <span className="truncate font-bold pl-1">{vsPlayerForUser.team}</span>
                                        </div>
                                        <div className="flex justify-start">
                                            {changeLang ? "Pozisyon:" : "Position:"} <span className="truncate font-bold pl-1">{vsPlayerForUser.pos}</span>
                                        </div>
                                        <br />
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowTR(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounterCard(vsPlayerForUser.tr, vsPlayerForRival.TR);
                                            }}
                                            disabled={titleCount === 3 || showTR === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Takım Sıralaması:" : "Team Ranking:"} <span className={showTR === true && vsPlayerForUser.tr === vsPlayerForRival.TR ? "truncate font-bold pl-1 text-amber-700" : showTR === true && vsPlayerForUser.tr < vsPlayerForRival.TR ? "truncate font-bold pl-1 text-green-700" : showTR === true && vsPlayerForUser.tr > vsPlayerForRival.TR ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.tr}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowValue(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounter(vsPlayerForUser.value, vsPlayerForRival.Value);
                                            }}
                                            disabled={titleCount === 3 || showValue === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Değer:" : "Value:"} <span className={showValue === true && vsPlayerForUser.value === vsPlayerForRival.Value ? "truncate font-bold pl-1 text-amber-700" : showValue === true && vsPlayerForUser.value > vsPlayerForRival.Value ? "truncate font-bold pl-1 text-green-700" : showValue === true && vsPlayerForUser.value < vsPlayerForRival.Value ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.value}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowMP(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounter(vsPlayerForUser.mp, vsPlayerForRival.MP);
                                            }}
                                            disabled={titleCount === 3 || showMP === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Oynanan Maç:" : "Matches Played:"} <span className={showMP === true && vsPlayerForUser.mp === vsPlayerForRival.MP ? "truncate font-bold pl-1 text-amber-700" : showMP === true && vsPlayerForUser.mp > vsPlayerForRival.MP ? "truncate font-bold pl-1 text-green-700" : showMP === true && vsPlayerForUser.mp < vsPlayerForRival.MP ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.mp}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowMin(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounter(vsPlayerForUser.min, vsPlayerForRival.Min);
                                            }}
                                            disabled={titleCount === 3 || showMin === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Oynanan Dakika:" : "Minutes Played:"} <span className={showMin === true && vsPlayerForUser.min === vsPlayerForRival.Min ? "truncate font-bold pl-1 text-amber-700" : showMin === true && vsPlayerForUser.min > vsPlayerForRival.Min ? "truncate font-bold pl-1 text-green-700" : showMin === true && vsPlayerForUser.min < vsPlayerForRival.Min ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.min}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowG(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounter(vsPlayerForUser.g, vsPlayerForRival.G);
                                            }}
                                            disabled={titleCount === 3 || showG === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Gol:" : "Goals:"} <span className={showG === true && vsPlayerForUser.g === vsPlayerForRival.G ? "truncate font-bold pl-1 text-amber-700" : showG === true && vsPlayerForUser.g > vsPlayerForRival.G ? "truncate font-bold pl-1 text-green-700" : showG === true && vsPlayerForUser.g < vsPlayerForRival.G ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.g}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowA(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounter(vsPlayerForUser.a, vsPlayerForRival.A);
                                            }}
                                            disabled={titleCount === 3 || showA === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Asist:" : "Assists:"} <span className={showA === true && vsPlayerForUser.a === vsPlayerForRival.A ? "truncate font-bold pl-1 text-amber-700" : showA === true && vsPlayerForUser.a > vsPlayerForRival.A ? "truncate font-bold pl-1 text-green-700" : showA === true && vsPlayerForUser.a < vsPlayerForRival.A ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.a}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowGA(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounter(vsPlayerForUser.ga, vsPlayerForRival.GA);
                                            }}
                                            disabled={titleCount === 3 || showGA === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Gol + Asist:" : "Goals + Assists:"} <span className={showGA === true && vsPlayerForUser.ga === vsPlayerForRival.GA ? "truncate font-bold pl-1 text-amber-700" : showGA === true && vsPlayerForUser.ga > vsPlayerForRival.GA ? "truncate font-bold pl-1 text-green-700" : showGA === true && vsPlayerForUser.ga < vsPlayerForRival.GA ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.ga}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowYC(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounterCard(vsPlayerForUser.yc, vsPlayerForRival.YC);
                                            }}
                                            disabled={titleCount === 3 || showYC === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Sarı Kart:" : "Yellow Card:"} <span className={showYC === true && vsPlayerForUser.yc === vsPlayerForRival.YC ? "truncate font-bold pl-1 text-amber-700" : showYC === true && vsPlayerForUser.yc < vsPlayerForRival.YC ? "truncate font-bold pl-1 text-green-700" : showYC === true && vsPlayerForUser.yc > vsPlayerForRival.YC ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.yc}</span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowRC(true);
                                                setTitleCount(titleCount + 1);
                                                scoreCounterCard(vsPlayerForUser.rc, vsPlayerForRival.RC);
                                            }}
                                            disabled={titleCount === 3 || showRC === true}
                                            className="disabled:cursor-not-allowed flex justify-start bg-stone-400 hover:bg-stone-500 hover:text-white px-0.5 my-0.5"
                                        >
                                            {changeLang ? "Kırmızı Kart:" : "Red Card:"} <span className={showRC === true && vsPlayerForUser.rc === vsPlayerForRival.RC ? "truncate font-bold pl-1 text-amber-700" : showRC === true && vsPlayerForUser.rc < vsPlayerForRival.RC ? "truncate font-bold pl-1 text-green-700" : showRC === true && vsPlayerForUser.rc > vsPlayerForRival.RC ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForUser.rc}</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid justify-items-center">
                                    {
                                        chanceNumber === 5 ?
                                            <div className="flex flex-row items-center mt-4">
                                                <img className="w-12 lg:w-16 xl:w-16 drop-shadow-md" alt="wow" src={require(`../assets/icons/16.png`)} />
                                                <p className="bg-[#fe646f] text-sm lg:text-xl xl:text-xl rounded px-1 font-bold border-2 text-white border-black drop-shadow-md ml-2">
                                                    x2
                                                </p>
                                            </div>
                                            :
                                            <></>
                                    }
                                    <img className="w-12 lg:w-16 xl:w-16 drop-shadow-md my-4" alt="versus" src={require(`../assets/icons/11.png`)} />
                                    <div>
                                        <div className="grid justify-items-center">
                                            <p className="font-semibold">
                                                {changeLang ? "Tur" : "Round"} <FontAwesomeIcon className="text-[#fac440]" icon={faDiceOne} />
                                            </p>
                                            <p>
                                                {yourRoundOneScore}-{rivalRoundOneScore}
                                            </p>
                                        </div>
                                        <div className="grid justify-items-center">
                                            <p className="font-semibold">
                                                {changeLang ? "Tur" : "Round"} <FontAwesomeIcon className="text-[#fac440]" icon={faDiceTwo} />
                                            </p>
                                            <p>
                                                {yourRoundTwoScore}-{rivalRoundTwoScore}
                                            </p>
                                        </div>
                                        <div className="grid justify-items-center">
                                            <p className="font-semibold">
                                                {changeLang ? "Tur" : "Round"} <FontAwesomeIcon className="text-[#fac440]" icon={faDiceThree} />
                                            </p>
                                            <p>
                                                {yourRoundThreeScore}-{rivalRoundThreeScore}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid justify-items-center mt-3">
                                        <p className={yourTotalRoundScore === rivalTotalRoundScore ? "bg-[#3482b3] text-white rounded px-2 font-semibold text-xs md:text-sm lg:text-lg xl:text-2xl drop-shadow-md" : (yourTotalRoundScore > rivalTotalRoundScore ? "bg-green-700 text-white rounded px-2 font-semibold text-xs md:text-sm lg:text-lg xl:text-2xl drop-shadow-md" : "bg-red-700 text-white rounded px-2 font-semibold text-xs md:text-sm lg:text-lg xl:text-2xl drop-shadow-md")}>
                                            {yourTotalRoundScore}-{rivalTotalRoundScore}
                                        </p>
                                    </div>
                                    <div className="grid justify-items-center px-2">
                                        <Link to="/league/play">
                                            <button
                                                className="disabled:cursor-not-allowed bg-[#ffdb7a] hover:bg-[#fbca50] rounded py-0.5 px-1 mb-1 mt-3 font-semibold border-2 border-black drop-shadow-md"
                                                disabled={titleCount < 3}
                                                onClick={() => {
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

                                                    if (number === 1) {
                                                        setShowNumberOne(true);
                                                    } else if (number === 2) {
                                                        setShowNumberTwo(true);
                                                    } else if (number === 3) {
                                                        setShowNumberThree(true);
                                                    } else if (number === 4) {
                                                        setShowNumberFour(true);
                                                    } else if (number === 5) {
                                                        setShowNumberFive(true);
                                                    } else if (number === 6) {
                                                        setShowNumberSix(true);
                                                    } else if (number === 7) {
                                                        setShowNumberSeven(true);
                                                    } else if (number === 8) {
                                                        setShowNumberEight(true);
                                                    } else if (number === 9) {
                                                        setShowNumberNine(true);
                                                    } else if (number === 10) {
                                                        setShowNumberTen(true);
                                                    } else if (number === 11) {
                                                        setShowNumberEleven(true);
                                                    }
                                                }}
                                            >
                                                {changeLang ? "Devam" : "Continue"}
                                            </button>
                                        </Link>
                                        <button
                                            className="bg-[#ffdb7a] hover:bg-[#fbca50] rounded py-0.5 px-1 font-semibold border-2 border-black drop-shadow-md"
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
                                            {changeLang ? "Maçtan ayrıl" : "Leave the match"}
                                        </button>
                                    </div>
                                </div>
                                <div className="grid justify-items-center">
                                    <p className="bg-[#ffdb7a] rounded py-0.5 px-1 mt-2 font-semibold border-2 border-black drop-shadow-md">
                                        {changeLang ?
                                            "Rakip Takımın Oyuncusu"
                                            :
                                            "Rival Team Player"
                                        }
                                    </p>
                                    <img className="w-16 lg:w-20 xl:w-24 bg-stone-300 rounded my-2 border-2 border-black drop-shadow-md" alt="player" src={require(`../assets/icons/${number === 1 ? 13 : 15}.png`)} />
                                    <div className="bg-stone-300 rounded py-0.5 px-1 border-2 border-black drop-shadow-md w-36 lg:w-64 xl:w-64">
                                        <div className="flex justify-start">
                                            {changeLang ? "Numara:" : "Number:"} <span className="truncate font-bold pl-1">{number}</span>
                                        </div>
                                        {titleCount === 3 ?
                                            <div className="flex justify-start">
                                                {changeLang ? "Oyuncu:" : "Player:"} <span className="truncate font-bold pl-1">{vsPlayerForRival.Player}</span>
                                            </div>
                                            :
                                            <div className="flex justify-start">
                                                {changeLang ? "Oyuncu:" : "Player:"} <span className="truncate font-bold pl-1">......</span>
                                            </div>
                                        }
                                        {titleCount === 3 ?
                                            <div className="flex justify-start">
                                                {changeLang ? "Yaş:" : "Age:"} <span className="truncate font-bold pl-1">{vsPlayerForRival.Age}</span>
                                            </div>
                                            :
                                            <div className="flex justify-start">
                                                {changeLang ? "Yaş:" : "Age:"} <span className="truncate font-bold pl-1">......</span>
                                            </div>
                                        }
                                        <div className="flex justify-start">
                                            {changeLang ? "Takım:" : "Team:"} <span className="truncate font-bold pl-1">{vsPlayerForRival.Team}</span>
                                        </div>
                                        <div className="flex justify-start">
                                            {changeLang ? "Pozisyon:" : "Position:"} <span className="truncate font-bold pl-1">{vsPlayerForRival.Pos}</span>
                                        </div>
                                        <br />
                                        {showTR || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Takım Sıralaması:" : "Team Ranking:"} <span className={showTR === true && vsPlayerForUser.tr === vsPlayerForRival.TR ? "truncate font-bold pl-1 text-amber-700" : showTR === true && vsPlayerForUser.tr > vsPlayerForRival.TR ? "truncate font-bold pl-1 text-green-700" : showTR === true && vsPlayerForUser.tr < vsPlayerForRival.TR ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.TR}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Takım Sıralaması:" : "Team Ranking:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showValue || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Değer:" : "Value:"} <span className={showValue === true && vsPlayerForUser.value === vsPlayerForRival.Value ? "truncate font-bold pl-1 text-amber-700" : showValue === true && vsPlayerForUser.value < vsPlayerForRival.Value ? "truncate font-bold pl-1 text-green-700" : showValue === true && vsPlayerForUser.value > vsPlayerForRival.Value ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.Value}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Değer:" : "Value:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showMP || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Oynanan Maç:" : "Matches Played:"} <span className={showMP === true && vsPlayerForUser.mp === vsPlayerForRival.MP ? "truncate font-bold pl-1 text-amber-700" : showMP === true && vsPlayerForUser.mp < vsPlayerForRival.MP ? "truncate font-bold pl-1 text-green-700" : showMP === true && vsPlayerForUser.mp > vsPlayerForRival.MP ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.MP}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Oynanan Maç:" : "Matches Played:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showMin || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Oynanan Dakika:" : "Minutes Played:"} <span className={showMin === true && vsPlayerForUser.min === vsPlayerForRival.Min ? "truncate font-bold pl-1 text-amber-700" : showMin === true && vsPlayerForUser.min < vsPlayerForRival.Min ? "truncate font-bold pl-1 text-green-700" : showMin === true && vsPlayerForUser.min > vsPlayerForRival.Min ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.Min}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Oynanan Dakika:" : "Minutes Played:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showG || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Gol:" : "Goals:"} <span className={showG === true && vsPlayerForUser.g === vsPlayerForRival.G ? "truncate font-bold pl-1 text-amber-700" : showG === true && vsPlayerForUser.g < vsPlayerForRival.G ? "truncate font-bold pl-1 text-green-700" : showG === true && vsPlayerForUser.g > vsPlayerForRival.G ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.G}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Gol:" : "Goals:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showA || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Asist:" : "Assists:"} <span className={showA === true && vsPlayerForUser.a === vsPlayerForRival.A ? "truncate font-bold pl-1 text-amber-700" : showA === true && vsPlayerForUser.a < vsPlayerForRival.A ? "truncate font-bold pl-1 text-green-700" : showA === true && vsPlayerForUser.a > vsPlayerForRival.A ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.A}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Asist:" : "Assists:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showGA || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Gol + Asist:" : "Goals + Assists:"} <span className={showGA === true && vsPlayerForUser.ga === vsPlayerForRival.GA ? "truncate font-bold pl-1 text-amber-700" : showGA === true && vsPlayerForUser.ga < vsPlayerForRival.GA ? "truncate font-bold pl-1 text-green-700" : showGA === true && vsPlayerForUser.ga > vsPlayerForRival.GA ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival["G+A"]}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Gol + Asist:" : "Goals + Assists:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showYC || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Sarı Kart:" : "Yellow Card:"} <span className={showYC === true && vsPlayerForUser.yc === vsPlayerForRival.YC ? "truncate font-bold pl-1 text-amber-700" : showYC === true && vsPlayerForUser.yc > vsPlayerForRival.YC ? "truncate font-bold pl-1 text-green-700" : showYC === true && vsPlayerForUser.yc < vsPlayerForRival.YC ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.YC}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Sarı Kart:" : "Yellow Card:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                        {showRC || titleCount === 3 ?
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Kırmızı Kart:" : "Red Card:"} <span className={showRC === true && vsPlayerForUser.rc === vsPlayerForRival.RC ? "truncate font-bold pl-1 text-amber-700" : showRC === true && vsPlayerForUser.rc > vsPlayerForRival.RC ? "truncate font-bold pl-1 text-green-700" : showRC === true && vsPlayerForUser.rc < vsPlayerForRival.RC ? "truncate font-bold pl-1 text-red-700" : "truncate font-bold pl-1"}>{vsPlayerForRival.RC}</span>
                                            </button>
                                            :
                                            <button className="flex justify-start bg-stone-400 px-0.5 my-0.5 cursor-text">
                                                {changeLang ? "Kırmızı Kart:" : "Red Card:"} <span className="truncate font-bold pl-1">......</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Versus;
