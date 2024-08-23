import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import data from "../data.js";
import { AppContext } from "../AppContext.js";

import "./SweetAlert.css";

const Clubs = () => {
    const { changeLang, setMatch, match, setRivalTotalScore, setYourTotalScore, money, setMoney, setShowNumberOne, setShowNumberTwo, setShowNumberThree, setShowNumberFour, setShowNumberFive, setShowNumberSix, setShowNumberSeven, setShowNumberEight, setShowNumberNine, setShowNumberTen, setShowNumberEleven } = useContext(AppContext);

    const navigate = useNavigate();

    return (
        <div className="grid justify-items-center lg:flex lg:justify-center xl:flex xl:justify-center pb-3 pt-6 bg-white">
            <div className="grid grid-cols-7 gap-2.5 lg:flex lg:flex-row xl:flex xl:flex-row">
                <button
                    data-cy="premier-league-logo"
                    key="league-table"
                    id="league-table"
                    className="grid justify-items-center w-9 xl:w-12 hover:saturate-0 hover:font-semibold"
                    onClick={() => {
                        if (match === false) {
                            navigate("/premierleague/league/table");
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
                                    setTimeout(() => navigate("/premierleague/league/table"), 500);
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
                    <img alt="premierleague" src={require("../assets/league-logo/3.png")} />
                    <p className="bg-white rounded-b px-1 my-1 text-xs xl:text-base drop-shadow-xl">TBL</p>
                </button>
                {data.clubs.map((item) => {
                    return (
                        <div>
                            {match === false ?
                                <Link to={`/premierleague/league/${item.Squad.split(" ").join("-").toLowerCase()}`}>
                                    <button
                                        id={item.Rk}
                                        key={item.Rk}
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
                                        className="grid justify-items-center w-9 xl:w-12 hover:saturate-0 hover:font-semibold"
                                    >
                                        <img key={item.Rk} alt={item.Squad} src={require(`../assets/club-logos/${item.Rk}.png`)} />
                                        <p className="bg-white rounded-b px-1 my-1 text-xs xl:text-base drop-shadow-xl">
                                            {item.Short}
                                        </p>
                                    </button>
                                </Link>
                                :
                                <button
                                    id={item.Rk}
                                    key={item.Rk}
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
                                                setTimeout(() => navigate(`/premierleague/league/${item.Squad.split(" ").join("-").toLowerCase()}`), 500);
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
                                    className="grid justify-items-center w-9 xl:w-12 hover:saturate-0 hover:font-semibold"
                                >
                                    <img key={item.Rk} alt={item.Squad} src={require(`../assets/club-logos/${item.Rk}.png`)} />
                                    <p className="bg-white rounded-b px-1 my-1 text-xs xl:text-base drop-shadow-xl">
                                        {item.Short}
                                    </p>
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
