import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AppContext } from "../AppContext.js";

import "./SweetAlert.css";

const Clubs = () => {
    const { changeLang, leagueName, setClubName, teams, setMatch, match, setRivalTotalScore, setYourTotalScore, money, setMoney, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className="grid justify-items-center lg:flex lg:justify-center xl:flex xl:justify-center pb-3 pt-6 bg-white">
            <div className={leagueName.name === "Football League" ? "grid grid-flow-col grid-rows-11 md:grid-rows-6 lg:grid-rows-5 xl:grid-rows-4 gap-1.5" : "grid grid-flow-col grid-rows-3 lg:grid-rows-1 xl:grid-rows-1 gap-2"}>
                <button
                    key="league-table"
                    id="league-table"
                    className="w-8 lg:w-10 xl:w-11 hover:saturate-0 hover:font-semibold"
                    onMouseEnter={() => {
                        setClubName(leagueName.name)
                    }}
                    onMouseLeave={() => {
                        setClubName("")
                    }}
                    onClick={() => {
                        if (match === false) {
                            navigate("/league/table");
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
                                    setTimeout(() => navigate("/league/table"), 500);
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
                    <img alt={leagueName.name} src={require(`../assets/league-logos-icon/${leagueName.icon}.png`)} />
                </button>
                {teams.map((item) => {
                    return (
                        <div>
                            {match === false ?
                                <Link to={`/league/${item.Team.split(" ").join("-").toLowerCase()}`}>
                                    <button
                                        id={item.Id}
                                        key={item.Id}
                                        onMouseEnter={() => {
                                            setClubName(item.Team)
                                        }}
                                        onMouseLeave={() => {
                                            setClubName("")
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
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
                                        className="w-8 lg:w-10 xl:w-11 hover:saturate-0 hover:font-semibold"
                                    >
                                        <img key={item.Id} alt={item.Team} src={require(`../assets/club-logos/${item.Team}.png`)} />
                                    </button>
                                </Link>
                                :
                                <button
                                    id={item.Id}
                                    key={item.Id}
                                    onMouseEnter={() => {
                                        setClubName(item.Team)
                                    }}
                                    onMouseLeave={() => {
                                        setClubName("")
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
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
                                                setTimeout(() => navigate(`/league/${item.Team.split(" ").join("-").toLowerCase()}`), 500);
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
                                    }}
                                    className="w-8 lg:w-10 xl:w-11 hover:saturate-0 hover:font-semibold"
                                >
                                    <img key={item.Id} alt={item.Team} src={require(`../assets/club-logos/${item.Team}.png`)} />
                                </button>
                            }
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Clubs;
