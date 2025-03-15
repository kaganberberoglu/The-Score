import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Popover,
    PopoverHandler,
    PopoverContent
} from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faPeopleGroup, faCircleXmark, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../AppContext";
import Navigation from "./Navigation";
import Clubs from "./Clubs";

const LeagueTable = () => {
    const { theme, changeLang, teams, leagueName, selectedPlayers, dropPlayers, lineupAfterDrop, teamCalc } = useContext(AppContext);

    const navigate = useNavigate();

    const [sortLeagueTableData, setSortLeagueTableData] = useState(teams);

    const [orderRk, setOrderRk] = useState("ASC");
    const [orderTeam, setOrderTeam] = useState("ASC");
    const [orderLeague, setOrderLeague] = useState("ASC");
    const [orderMP, setOrderMP] = useState("ASC");
    const [orderW, setOrderW] = useState("ASC");
    const [orderD, setOrderD] = useState("ASC");
    const [orderL, setOrderL] = useState("ASC");
    const [orderGF, setOrderGF] = useState("ASC");
    const [orderGA, setOrderGA] = useState("ASC");
    const [orderGD, setOrderGD] = useState("ASC");
    const [orderPts, setOrderPts] = useState("ASC");
    const [orderPtsMP, setOrderPtsMP] = useState("ASC");

    const columnLeagueTableTitle = [
        {
            id: 1,
            sort: "Rk",
            order: orderRk,
            manageOrder: setOrderRk,
            titleEng: "Rk",
            titleTurk: "Sr",
            contEng: "Rank",
            contTurk: "Sıralama"
        },
        {
            id: 2,
            sort: "Team",
            order: orderTeam,
            manageOrder: setOrderTeam,
            titleEng: "Team",
            titleTurk: "Takım",
            contEng: "Name of the Team",
            contTurk: "Takım İsmi"
        },
        {
            id: 3,
            sort: "League",
            order: orderLeague,
            manageOrder: setOrderLeague,
            titleEng: "League",
            titleTurk: "Lig",
            contEng: "The League that Team Plays For",
            contTurk: "Takımın Oynadığı Lig"
        },
        {
            id: 4,
            sort: "MP",
            order: orderMP,
            manageOrder: setOrderMP,
            titleEng: "MP",
            titleTurk: "OM",
            contEng: "Matches Played",
            contTurk: "Oynanan Maç Sayısı"
        },
        {
            id: 5,
            sort: "W",
            order: orderW,
            manageOrder: setOrderW,
            titleEng: "W",
            titleTurk: "G",
            contEng: "Wins",
            contTurk: "Galibiyet"
        },
        {
            id: 6,
            sort: "D",
            order: orderD,
            manageOrder: setOrderD,
            titleEng: "D",
            titleTurk: "B",
            contEng: "Draws",
            contTurk: "Beraberlik"
        },
        {
            id: 7,
            sort: "L",
            order: orderL,
            manageOrder: setOrderL,
            titleEng: "L",
            titleTurk: "M",
            contEng: "Losses",
            contTurk: "Mağlubiyet"
        },
        {
            id: 8,
            sort: "GF",
            order: orderGF,
            manageOrder: setOrderGF,
            titleEng: "GF",
            titleTurk: "AG",
            contEng: "Goals For",
            contTurk: "Atılan Gol"
        },
        {
            id: 9,
            sort: "GA",
            order: orderGA,
            manageOrder: setOrderGA,
            titleEng: "GA",
            titleTurk: "YG",
            contEng: "Goals Against",
            contTurk: "Yenilen Gol"
        },
        {
            id: 10,
            sort: "+/-",
            order: orderGD,
            manageOrder: setOrderGD,
            titleEng: "+/-",
            titleTurk: "+/-",
            contEng: "Goal Difference",
            contTurk: "Averaj"
        },
        {
            id: 11,
            sort: "Pts",
            order: orderPts,
            manageOrder: setOrderPts,
            titleEng: "Pts",
            titleTurk: "P",
            contEng: "Points",
            contTurk: "Puan"
        },
        {
            id: 12,
            sort: "Pts/MP",
            order: orderPtsMP,
            manageOrder: setOrderPtsMP,
            titleEng: "Pts/MP",
            titleTurk: "P/MP",
            contEng: "Points Per Match Played",
            contTurk: "Maç Başına Puan Ortalaması"
        }
    ];

    const sorting = (order, setOrder, column) => {
        for (let i = 0; i < columnLeagueTableTitle.length; i++) {
            if (columnLeagueTableTitle[i].manageOrder !== setOrder) {
                columnLeagueTableTitle[i].manageOrder("ASC");
            }
        }
        if (order === "ASC") {
            const sortFiltered = [...sortLeagueTableData].sort((a, b) =>
                a[column] > b[column] ? 1 : -1
            );
            setSortLeagueTableData(sortFiltered);
            setOrder("DESC");
        } else if (order === "DESC") {
            const sortFiltered = [...sortLeagueTableData].sort((a, b) =>
                a[column] < b[column] ? 1 : -1
            );
            setSortLeagueTableData(sortFiltered);
            setOrder("DEFAULT");
        } else if (order === "DEFAULT") {
            setSortLeagueTableData(teams);
            setOrder("ASC");
        }
    };

    return (
        <div>
            <Navigation />
            <Clubs />
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
                                                        <span className="font-bold">{item.value}</span>
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
                            navigate("/league/team/4-4-2");
                    }}
                >
                    <p className="font-semibold text-sm xl:text-lg hover:text-white">
                        {changeLang ? "MAÇA GİT!" : "GO TO THE MATCH!"}
                    </p>
                </button>
                <table className="bg-white table-auto text-xs md:text-sm lg:text-sm xl:text-base sticky top-0 z-30">
                    <thead className="sticky top-0 z-40">
                        <tr className={theme ? "bg-cyan-900 text-white divide-x divide-black/25" : "bg-cyan-700 text-white divide-x divide-black/25"}>
                            {Object.values(columnLeagueTableTitle).map((item) => {
                                return (
                                    <Popover>
                                        <PopoverHandler>
                                            <th
                                                className="py-0.5 px-1 text-center font-bold underline cursor-pointer"
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
                                        <PopoverContent className={theme ? "bg-slate-100 text-sm lg:text-base xl:text-base py-3 px-3" : "bg-white text-sm lg:text-base xl:text-base py-3 px-3"}>
                                            <p><b>{changeLang ? item.contTurk : item.contEng}</b></p>
                                        </PopoverContent>
                                    </Popover>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {sortLeagueTableData.map((item) => {
                            return (
                                <tr
                                    className={theme ? "hover:border-collapse hover:bg-white border-y border-black/25 odd:bg-slate-200 text-left" : "hover:border-collapse hover:bg-white border-y border-black/25 odd:bg-slate-100 text-left"}
                                    key={item.Id}
                                >
                                    {
                                        leagueName.name === "Football League" ?
                                            <td className="pl-0.5 py-0.5 font-semibold border-r border-black/25">{item.Id}</td>
                                            :
                                            <td className="pl-0.5 py-0.5 font-semibold border-r border-black/25">{item["League Ranking"]}</td>
                                    }
                                    <td className="py-0.5 font-semibold border-r border-black/25">
                                        {item.Team}
                                        <Link to={`/league/${item.Team.split(" ").join("-").toLowerCase()}`}>
                                            <FontAwesomeIcon
                                                className={theme ? "text-cyan-900 drop-shadow-xl hover:text-amber-500 pl-1" : "text-cyan-700 drop-shadow-xl hover:text-amber-500 pl-1"}
                                                icon={faPeopleGroup}
                                            />
                                        </Link>
                                    </td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">
                                        {item.League}
                                        <img
                                            className="h-4 md:h-5 lg:h-5 xl:h-6 pb-1"
                                            alt={item.League}
                                            src={`https://flagcdn.com/${item["Nation Flag Code"].toLowerCase()}.svg`}
                                        />
                                    </td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.MP}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.W}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.D}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.L}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item["Goals For"]}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item["Goals Against"]}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item["+/-"]}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.Pts}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item["Pts/MP"].toFixed(2)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LeagueTable;
