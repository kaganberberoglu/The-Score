import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { AppContext } from "../AppContext";

import "./SweetAlert.css";

const Navigation = () => {
    const { theme, setTheme, clubName, changeLang, setChangeLang, teamCalc, coinCalc, setMatch, yourTotalScore, rivalTotalScore, match, setRivalTotalScore, setYourTotalScore, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven, setNumberOne, setNumberTwo, setNumberThree, setNumberFour, setNumberFive, setNumberSix, setNumberSeven, setNumberEight, setNumberNine, setNumberTen, setNumberEleven, setNumberTwelve, setNumberThirteen, setNumberFourteen, setNumberFifteen, setGoalkeeperOne, setGoalkeeperTwo, setDefenceOne, setDefenceTwo, setDefenceThree, setDefenceFour, setMidOne, setMidTwo, setMidThree, setMidFour, setMidFive, setForwOne, setForwTwo, setForwThree, setJokerOne, setJokerTwo, setJokerThree, setMoney, money } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className={theme ? "bg-slate-300 flex flex-row justify-between drop-shadow-md py-2 px-4 md:px-20 lg:px-32 xl:px-40 items-center sticky top-0 z-20" : "bg-slate-100 flex flex-row justify-between drop-shadow-md py-2 px-4 md:px-20 lg:px-32 xl:px-40 items-center sticky top-0 z-20"}>
            <div className="flex flex-row items-center">
                <img
                    onClick={(e) => {
                        if (match === false) {
                            navigate("/league");
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
                        } else if (match === true) {
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
                                    setTimeout(() => navigate("/league"), 500);
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
                                };
                            });
                        };
                    }}
                    className="cursor-pointer h-10 md:h-12 lg:h-14 xl:h-16 drop-shadow-xl"
                    alt="logo"
                    src={require("../assets/main-logo/1.png")}
                />
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">the<span className="ml-1.5 drop-shadow-md before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-[#fddc35] relative inline-block"><span className="relative">score</span></span></p>
            </div>

            {match === true ?
                <div className="grid justify-items-center">
                    <p className={yourTotalScore === rivalTotalScore ? "bg-[#3482b3] text-white rounded px-2 mt-1.5 font-semibold text-xs md:text-sm lg:text-lg xl:text-xl drop-shadow-md" : (yourTotalScore > rivalTotalScore ? "bg-green-700 text-white rounded px-2 mt-1.5 font-semibold text-xs md:text-sm lg:text-lg xl:text-xl drop-shadow-md" : "bg-red-700 text-white rounded px-2 mt-1.5 font-semibold text-xs md:text-sm lg:text-lg xl:text-xl drop-shadow-md")}>
                        {yourTotalScore}-{rivalTotalScore}
                    </p>
                </div>
                :
                <div className="hidden md:inline lg:inline xl:inline">
                    <p className="bg-slate-400 rounded px-2 mt-1.5 font-semibold text-xs md:text-sm lg:text-base xl:text-lg drop-shadow-md">
                        {clubName}
                    </p>
                </div>
            }

            <div className="flex flex-row items-center text-base">
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        if (match === false) {
                            navigate("/league/team/4-4-2");
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
                        } else if (match === true) {
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
                                    setTimeout(() => navigate("/league/team/4-4-2"), 500);
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
                                };
                            });
                        };
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-0.5" alt="play-game" src={require("../assets/icons/5.png")} />
                </button>
                <div className="grid justify-items-center pr-0.5 hover:drop-shadow-xl hover:saturate-0">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            if (match === false) {
                                navigate("/league/team");
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
                            } else if (match === true) {
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
                                    };
                                });
                            };
                        }}
                    >
                        <img className="h-6 lg:h-7 xl:h-8" alt="tactic-players" src={require("../assets/icons/4.png")} />
                    </button>
                    <div className={teamCalc() !== 15 ? "bg-[#ea5b5a] mt-0.5 px-0.5 text-xs lg:text-sm xl:text-sm font-bold rounded" : "bg-[#82cd64] mt-0.5 px-0.5 text-xs lg:text-sm xl:text-sm font-bold rounded"}>
                        {teamCalc()}
                    </div>
                </div>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        if (match === false) {
                            navigate("/league/players");
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
                        } else if (match === true) {
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
                                    setTimeout(() => navigate("/league/players"), 500);
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
                                };
                            });
                        };
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-1.5" alt="transfer-players" src={require("../assets/icons/3.png")} />
                </button>
                <div className="grid justify-items-center pr-1.5 hover:drop-shadow-xl hover:saturate-0">
                    <div>
                        <img className="h-6 lg:h-7 xl:h-8" alt="coin" src={require("../assets/icons/9.png")} />
                    </div>
                    <div className="mt-0.5 px-0.5 bg-slate-400 text-xs lg:text-sm xl:text-sm font-bold rounded">
                        {coinCalc()}
                    </div>
                </div>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        setChangeLang(!changeLang);
                        changeLang ?
                            (theme ?
                                toast.success(<div>{"Hello"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "dark" })
                                :
                                toast.success(<div>{"Hello"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "light" }))
                            :
                            (theme ?
                                toast.success(<div>{"Merhaba"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "dark" })
                                :
                                toast.success(<div>{"Merhaba"} <FontAwesomeIcon icon={faHand} shake /></div>, { theme: "light" }))
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-1.5" alt="change-language" src={require("../assets/icons/2.png")} />
                </button>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        e.preventDefault();
                        setTheme(!theme);
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8 pr-1.5" alt="change-mode" src={require("../assets/icons/1.png")} />
                </button>
                <button
                    className="hover:drop-shadow-xl hover:saturate-0"
                    onClick={(e) => {
                        Swal.fire({
                            customClass: {
                                popup: "sweet-alert"
                            },
                            icon: "warning",
                            title: changeLang ? "Emin misin?" : "Are you sure?",
                            text: changeLang ? "Tüm seçimlerin iptal edilecek ve bunu daha sonra geri alamayacaksın!" : "All your choices will be canceled and won't be able to revert this!",
                            focusConfirm: false,
                            showCancelButton: true,
                            confirmButtonColor: "#3482b3",
                            cancelButtonColor: "#d33",
                            confirmButtonText: changeLang ? "Evet" : "Yes",
                            cancelButtonText: changeLang ? "Vazgeç" : "Cancel"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                e.preventDefault();

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
                    }}
                >
                    <img className="h-6 lg:h-7 xl:h-8" alt="log-out" src={require("../assets/icons/17.png")} />
                </button>
            </div>
        </div>
    );
}

export default Navigation;
