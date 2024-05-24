import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {
    Popover,
    PopoverHandler,
    PopoverContent
} from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faCirclePlus, faCircleMinus, faCoins, faCircleXmark, faCircleCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../AppContext.js";
import dataSecond from "../dataSecond.js";

const ClubPlayersSecond = () => {
    const { theme, changeLang, selectPlayers, selectedPlayers, dropPlayers, arr, findPlayer, lineupAfterDrop, teamCalc } = useContext(AppContext);

    const navigate = useNavigate();

    const { Club } = useParams();
    const players = dataSecond.players.filter(players => players.Club.split(" ").join("-").toLowerCase() === String(Club));
    const shuffleData = [...players].sort(() => 0.5 - Math.random());
    const [sortClubPlayersData, setsortClubPlayersData] = useState(shuffleData);

    const [orderPlayer, setOrderPlayer] = useState("ASC");
    const [orderClub, setOrderClub] = useState("ASC");
    const [orderCoin, setOrderCoin] = useState("ASC");
    const [orderNation, setOrderNation] = useState("ASC");
    const [orderPos, setOrderPos] = useState("ASC");
    const [orderAge, setOrderAge] = useState("ASC");
    const [orderMP, setOrderMP] = useState("ASC");
    const [orderStarts, setOrderStarts] = useState("ASC");
    const [orderMin, setOrderMin] = useState("ASC");
    const [orderGls, setOrderGls] = useState("ASC");
    const [orderAst, setOrderAst] = useState("ASC");
    const [orderPK, setOrderPK] = useState("ASC");
    const [orderPKatt, setOrderPKatt] = useState("ASC");
    const [orderCrdY, setOrderCrdY] = useState("ASC");
    const [orderCrdR, setOrderCrdR] = useState("ASC");

    const columnClubPlayersTitle = [
        {
            id: 1,
            sort: "Player",
            order: orderPlayer,
            manageOrder: setOrderPlayer,
            titleEng: "Player",
            titleTurk: "Oyuncu",
            contEng: "Name & Surname of the Player",
            contTurk: "Oyuncunun Adı ve Soyadı"
        },
        {
            id: 2,
            sort: "Club",
            order: orderClub,
            manageOrder: setOrderClub,
            titleEng: "Club",
            titleTurk: "Kulüp",
            contEng: "The Team that Player Plays For",
            contTurk: "Oyuncunun Oynadığı Kulüp"
        },
        {
            id: 3,
            sort: "Coin",
            order: orderCoin,
            manageOrder: setOrderCoin,
            titleEng: "Value",
            titleTurk: "Değer",
            contEng: "Value of the Player",
            contTurk: "Oyuncunun Değeri"
        },
        {
            id: 4,
            sort: "Nation",
            order: orderNation,
            manageOrder: setOrderNation,
            titleEng: "Nation",
            titleTurk: "Ülke",
            contEng: "Nationality of The Player",
            contTurk: "Oyuncunun Uyruğu"
        },
        {
            id: 5,
            sort: "Pos",
            order: orderPos,
            manageOrder: setOrderPos,
            titleEng: "Pos",
            titleTurk: "Poz",
            contEng: "Position of the Player",
            contTurk: "Oyuncunun Pozisyonu"
        },
        {
            id: 6,
            sort: "Age",
            order: orderAge,
            manageOrder: setOrderAge,
            titleEng: "Age",
            titleTurk: "Yaş",
            contEng: "Age of the Player",
            contTurk: "Oyuncunun Yaşı"
        },
        {
            id: 7,
            sort: "MP",
            order: orderMP,
            manageOrder: setOrderMP,
            titleEng: "MP",
            titleTurk: "OM",
            contEng: "Matches Played",
            contTurk: "Oynanan Maç Sayısı"
        },
        {
            id: 8,
            sort: "Starts",
            order: orderStarts,
            manageOrder: setOrderStarts,
            titleEng: "St",
            titleTurk: "Bş",
            contEng: "Game or Games Started by Player",
            contTurk: "İlk 11 Başladığı Maç Sayısı"
        },
        {
            id: 9,
            sort: "Min",
            order: orderMin,
            manageOrder: setOrderMin,
            titleEng: "Min",
            titleTurk: "Dak",
            contEng: "Total Minutes Played",
            contTurk: "Toplam Oynanan Dakika"
        },
        {
            id: 10,
            sort: "Gls",
            order: orderGls,
            manageOrder: setOrderGls,
            titleEng: "Gl",
            titleTurk: "Gl",
            contEng: "Goals",
            contTurk: "Gol"
        },
        {
            id: 11,
            sort: "Ast",
            order: orderAst,
            manageOrder: setOrderAst,
            titleEng: "As",
            titleTurk: "As",
            contEng: "Assists",
            contTurk: "Asist"
        },
        {
            id: 12,
            sort: "PK",
            order: orderPK,
            manageOrder: setOrderPK,
            titleEng: "PK",
            titleTurk: "PV",
            contEng: "Goals Scored From Penalty",
            contTurk: "Golle Sonuçlanan Penaltılar"
        },
        {
            id: 13,
            sort: "PKatt",
            order: orderPKatt,
            manageOrder: setOrderPKatt,
            titleEng: "PKA",
            titleTurk: "PVG",
            contEng: "Penalty Kicks Attempted",
            contTurk: "Penaltı Vuruşu Girişimi"
        },
        {
            id: 14,
            sort: "CrdY",
            order: orderCrdY,
            manageOrder: setOrderCrdY,
            titleEng: "YC",
            titleTurk: "SK",
            contEng: "Yellow Cards",
            contTurk: "Sarı Kart"
        },
        {
            id: 15,
            sort: "CrdR",
            order: orderCrdR,
            manageOrder: setOrderCrdR,
            titleEng: "RC",
            titleTurk: "KK",
            contEng: "Red Cards",
            contTurk: "Kırmızı Kart"
        }
    ];

    const sorting = (order, setOrder, column) => {
        for (let i = 0; i < columnClubPlayersTitle.length; i++) {
            if (columnClubPlayersTitle[i].manageOrder !== setOrder) {
                columnClubPlayersTitle[i].manageOrder("ASC");
            }
        }
        if (order === "ASC") {
            const sortFiltered = [...sortClubPlayersData].sort((a, b) =>
                a[column] > b[column] ? 1 : -1
            );
            setsortClubPlayersData(sortFiltered);
            setOrder("DESC");
        } else if (order === "DESC") {
            const sortFiltered = [...sortClubPlayersData].sort((a, b) =>
                a[column] < b[column] ? 1 : -1
            );
            setsortClubPlayersData(sortFiltered);
            setOrder("DEFAULT");
        } else if (order === "DEFAULT") {
            setsortClubPlayersData(shuffleData);
            setOrder("ASC");
        }
    };

    return (
        <div className="pb-4 flex flex-col justify-center">
            <div className="flex flex-row justify-center pb-5 pt-2 px-3">
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
                                                    <span className="font-bold">{item.coin}</span>
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
            <button
                className={teamCalc() === 15 ? "bg-green-200 mb-5 hover:bg-green-400" : "bg-red-200 mb-5 hover:bg-red-400"}
                onClick={(e) => {
                    e.preventDefault();
                    teamCalc() !== 15 ?
                        changeLang ?
                            (theme ?
                                toast.info(<div>{"Oyuncu listelerinde bulunan"} <FontAwesomeIcon icon={faCirclePlus} bounce /> {"ikonuna basarak takımını kurabilirsin. Takımına toplamda 15 oyuncu dahil etmen gerekiyor."}</div>, { theme: "dark" })
                                :
                                toast.info(<div>{"Oyuncu listelerinde bulunan"} <FontAwesomeIcon icon={faCirclePlus} bounce /> {"ikonuna basarak takımını kurabilirsin. Takımına toplamda 15 oyuncu dahil etmen gerekiyor."}</div>, { theme: "light" }))
                            :
                            (theme ?
                                toast.info(<div>{"You can build your team by pressing the"} <FontAwesomeIcon icon={faCirclePlus} bounce /> {"icon in the player sections. You need to include a total of 15 players in your team."}</div>, { theme: "dark" })
                                :
                                toast.info(<div>{"You can build your team by pressing the"} <FontAwesomeIcon icon={faCirclePlus} bounce /> {"icon in the player sections. You need to include a total of 15 players in your team."}</div>, { theme: "light" }))
                        :
                        navigate("/bundesliga/team/4-4-2");
                }}
            >
                <p className="font-semibold text-sm xl:text-lg hover:text-white">
                    {changeLang ? "MAÇA GİT!" : "GO TO THE MATCH!"}
                </p>
            </button>
            <table className="bg-white table-auto text-xs md:text-sm lg:text-sm xl:text-base sticky top-0 z-30">
                <thead className="sticky top-0 z-40">
                    <tr className={theme ? "bg-cyan-900 text-white divide-x divide-black/25" : "bg-cyan-700 text-white divide-x divide-black/25"}>
                        {Object.values(columnClubPlayersTitle).map((item) => {
                            return (
                                <Popover>
                                    <PopoverHandler>
                                        <th
                                            className="py-0.5 px-0.5 text-center font-bold underline cursor-pointer"
                                        >
                                            {changeLang ? item.titleTurk : item.titleEng}
                                            <br />
                                            <button
                                                className={theme ? "hover:text-cyan-700" : "hover:text-cyan-900"}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    sorting(item.order, item.manageOrder, item.sort);
                                                }}
                                            >
                                                {
                                                    item.order === "ASC" ? <FontAwesomeIcon icon={faSort} /> :
                                                        item.order === "DESC" ? <FontAwesomeIcon className={theme ? "text-cyan-700" : "text-cyan-900"} icon={faSortUp} /> :
                                                            item.order === "DEFAULT" ? <FontAwesomeIcon className={theme ? "text-cyan-700" : "text-cyan-900"} icon={faSortDown} /> : ""
                                                }
                                            </button>
                                        </th>
                                    </PopoverHandler>
                                    <PopoverContent className={theme ? "bg-slate-100 text-xs md:text-sm lg:text-base xl:text-base py-3 px-3" : "bg-white text-xs md:text-sm lg:text-base xl:text-base py-3 px-3"}>
                                        <p><b>{changeLang ? item.contTurk : item.contEng}</b></p>
                                    </PopoverContent>
                                </Popover>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {sortClubPlayersData.map((item) => {
                        return (
                            <tr
                                className={theme ? "hover:border-collapse hover:bg-white border-y border-black/25 odd:bg-slate-200 text-left" : "hover:border-collapse hover:bg-white border-y border-black/25 odd:bg-slate-100 text-left"}
                            >
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">
                                    <div
                                        className="flex flex-col"
                                        id={item.id}
                                    >
                                        <p>
                                            {item.Player}
                                        </p>
                                        <div className="flex flex-row items-center">
                                            <button
                                                id={item.id}
                                                onClick={selectPlayers}
                                            >
                                                <FontAwesomeIcon
                                                    className={theme ? "text-cyan-900 drop-shadow-xl hover:text-green-500 hover:cursor-pointer" : "text-cyan-700 drop-shadow-xl hover:text-green-500 hover:cursor-pointer"}
                                                    icon={faCirclePlus}
                                                />
                                            </button>
                                            <button
                                                value={item.Player}
                                                id={item.id}
                                                onClick={(e) => {
                                                    dropPlayers(e);
                                                    lineupAfterDrop(e);
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    className={theme ? "text-cyan-900 drop-shadow-xl hover:text-red-500 hover:cursor-pointer pl-0.5" : "text-cyan-700 drop-shadow-xl hover:text-red-500 hover:cursor-pointer pl-0.5"}
                                                    icon={faCircleMinus}
                                                />
                                            </button>
                                            <button
                                                id={item.id}
                                                onClick={(e) => {
                                                    changeLang ?
                                                        (theme ?
                                                            toast.info(<div>{`${dataSecond.players[e.currentTarget.id - 1].Player} sezon içerisinde transfer oldu ve iki farklı takımda görev aldı. Bu nedenle ${findPlayer(e)} kadrosunda da ismi geçiyor.`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                                                            :
                                                            toast.info(<div>{`${dataSecond.players[e.currentTarget.id - 1].Player} sezon içerisinde transfer olarak iki farklı takımda görev aldı. Bu nedenle ${findPlayer(e)} kadrosunda da ismi geçiyor.`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }))
                                                        :
                                                        (theme ?
                                                            toast.info(<div>{`${dataSecond.players[e.currentTarget.id - 1].Player} was transferred during the season and played in two different teams. For this reason, his name is also mentioned in the ${findPlayer(e)} squad.`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "dark" })
                                                            :
                                                            toast.info(<div>{`${dataSecond.players[e.currentTarget.id - 1].Player} was transferred during the season and played in two different teams. For this reason, his name is also mentioned in the ${findPlayer(e)} squad.`} <FontAwesomeIcon icon={faCircleInfo} bounce /></div>, { theme: "light" }));
                                                }}
                                            >
                                                {arr.map((element) => {
                                                    if (element === item.Player) {
                                                        return (
                                                            <FontAwesomeIcon
                                                                className={theme ? "text-cyan-900 drop-shadow-xl hover:text-amber-500 hover:cursor-pointer pl-0.5" : "text-cyan-700 drop-shadow-xl hover:text-amber-500 hover:cursor-pointer pl-0.5"}
                                                                icon={faCircleInfo}
                                                            />
                                                        )
                                                    } else {
                                                        return (
                                                            <div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </button>
                                            <div className="pl-0.5">
                                                {selectedPlayers.map((element) => {
                                                    if (element.player === item.Player) {
                                                        return (
                                                            <FontAwesomeIcon
                                                                className="text-green-500 drop-shadow-xl"
                                                                icon={faCircleCheck}
                                                            />
                                                        )
                                                    } else {
                                                        return (
                                                            <div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-0.5 md:pl-1 lg:pl-1 xl:pl-1 py-0.5 font-semibold border-r border-black/25">
                                    <Link to="/bundesliga/league/table">
                                        <img className="rounded h-5 md:h-7 lg:h-8 xl:h-9" key={item.Club} alt={item.Club} src={require(`../assets/club-logos-second/${item.Club === "Leverkusen" ? 1 : item.Club === "Stuttgart" ? 2 : item.Club === "Bayern Munich" ? 3 : item.Club === "RB Leipzig" ? 4 : item.Club === "Dortmund" ? 5 : item.Club === "Eint Frankfurt" ? 6 : item.Club === "Hoffenheim" ? 7 : item.Club === "Heidenheim" ? 8 : item.Club === "Werder Bremen" ? 9 : item.Club === "Freiburg" ? 10 : item.Club === "Augsburg" ? 11 : item.Club === "Wolfsburg" ? 12 : item.Club === "Mainz 05" ? 13 : item.Club === "M'Gladbach" ? 14 : item.Club === "Union Berlin" ? 15 : item.Club === "Bochum" ? 16 : item.Club === "Köln" ? 17 : 18}.png`)} />
                                    </Link>
                                </td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">
                                    <p>
                                        {item.Coin}
                                    </p>
                                    <FontAwesomeIcon
                                        className={theme ? "text-cyan-900 drop-shadow-xl" : "text-cyan-700 drop-shadow-xl"}
                                        icon={faCoins}
                                    />
                                </td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 font-semibold border-r border-black/25">
                                    {item.Nation}
                                    <img
                                        className="h-4 md:h-5 lg:h-5 xl:h-6 pb-1"
                                        alt={item.Nation}
                                        src={`https://flagcdn.com/${item.Flag}.svg`}
                                    />
                                </td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.Pos}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.Age}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.MP}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.Starts}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.Min}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.Gls}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.Ast}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.PK}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.PKatt}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.CrdY}</td>
                                <td className="px-0.5 md:px-1 lg:px-1 xl:px-1 py-0.5 font-semibold border-r border-black/25">{item.CrdR}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ClubPlayersSecond;
