import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactLoading from "react-loading";

import { AppContext } from "../AppContext";
import Navigation from "./Navigation";
import Clubs from "./Clubs";

import "./SweetAlert.css";

const HomePage = () => {
    const { changeLang, loading, theme, setMatch, setRivalTotalScore, setYourTotalScore, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, setNumberOne, setNumberTwo, setNumberThree, setNumberFour, setNumberFive, setNumberSix, setNumberSeven, setNumberEight, setNumberNine, setNumberTen, setNumberEleven, setNumberTwelve, setNumberThirteen, setNumberFourteen, setNumberFifteen, teamCalc, setGoalkeeperOne, setGoalkeeperTwo, setDefenceOne, setDefenceTwo, setDefenceThree, setDefenceFour, setMidOne, setMidTwo, setMidThree, setMidFour, setMidFive, setForwOne, setForwTwo, setForwThree, setJokerOne, setJokerTwo, setJokerThree, setMoney } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div>
            {loading ?
                <div className="w-screen h-screen grid place-content-center">
                    <ReactLoading
                        type={"bubbles"}
                        color={"#121212"}
                        height={70}
                        width={70}
                    />
                </div>
                :
                <div>
                    <Navigation />
                    <Clubs />
                    <div className="flex justify-center p-4">
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
                            <div className="flex flex-col">
                                <div className="flex flex-row mt-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                                    <button
                                        className={theme ? "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-700 hover:drop-shadow-lg rounded text-white" : "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-300 hover:drop-shadow-lg rounded"}
                                        onClick={(e) => {
                                            e.preventDefault();
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
                                        {changeLang ? "oyuncular" : "players"}
                                    </button>
                                    <button
                                        className={theme ? "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-700 hover:drop-shadow-lg rounded text-white" : "py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-sky-300 hover:drop-shadow-lg rounded"}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/league/team");
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
                                        {changeLang ? "takım" : "team"}
                                    </button>
                                    <button
                                        className="py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mx-2 bg-[#fddc35] hover:drop-shadow-lg rounded font-semibold"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/league/team/4-4-2");
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
                                        {changeLang ? "oyna!" : "play!"}
                                    </button>
                                </div>
                                <button
                                    className={theme ? "text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mt-2 mx-2 bg-sky-700 hover:drop-shadow-lg rounded text-white" : "text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-3 px-4 md:py-4 md:px-6 lg:py-4 lg:px-6 xl:py-4 xl:px-6 mt-2 mx-2 bg-sky-300 hover:drop-shadow-lg rounded"}
                                    onClick={() => {
                                        if (teamCalc() !== 0) {
                                            Swal.fire({
                                                customClass: {
                                                    popup: "sweet-alert"
                                                },
                                                icon: "warning",
                                                title: changeLang ? "Emin misin?" : "Are you sure?",
                                                text: changeLang ? "Oyuncu seçimlerin iptal edilecek ve bunu daha sonra geri alamayacaksın!" : "Your player choices will be canceled and won't be able to revert this!",
                                                focusConfirm: false,
                                                showCancelButton: true,
                                                confirmButtonColor: "#3482b3",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: changeLang ? "Evet, lig seçimi yapmak istiyorum!" : "Yes, make a league selection!",
                                                cancelButtonText: changeLang ? "Vazgeç" : "Cancel"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    navigate("/");
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
                                                }
                                            });
                                        } else {
                                            navigate("/");
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
                                        }
                                    }}
                                >
                                    {changeLang ? "yeniden lig seç" : "select league again"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default HomePage;
