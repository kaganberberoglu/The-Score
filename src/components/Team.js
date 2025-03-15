import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    Popover,
    PopoverHandler,
    PopoverContent
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faCircleXmark, faCoins, faCircleMinus, faCircleCheck, faFutbol } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../AppContext";
import Navigation from "./Navigation";
import Clubs from "./Clubs";

const Team = () => {

    const { theme, changeLang, selectedPlayers, dropPlayers, lineupAfterDrop } = useContext(AppContext);

    const columnPlayersTitle = [
        {
            id: 1,
            sort: "Player",
            titleEng: "Player",
            titleTurk: "Oyuncu",
            contEng: "Name & Surname of the Player",
            contTurk: "Oyuncunun Adı ve Soyadı"
        },
        {
            id: 2,
            sort: "Team",
            titleEng: "Team",
            titleTurk: "Takım",
            contEng: "The Team that Player Plays For",
            contTurk: "Oyuncunun Oynadığı Takım"
        },
        {
            id: 3,
            sort: "Value",
            titleEng: "Value",
            titleTurk: "Değer",
            contEng: "Value of the Player",
            contTurk: "Oyuncunun Değeri"
        },
        {
            id: 4,
            sort: "Nation",
            titleEng: "Nation",
            titleTurk: "Ülke",
            contEng: "Nationality of The Player",
            contTurk: "Oyuncunun Uyruğu"
        },
        {
            id: 5,
            sort: "Pos",
            titleEng: "Pos",
            titleTurk: "Poz",
            contEng: "Position of the Player",
            contTurk: "Oyuncunun Pozisyonu"
        },
        {
            id: 6,
            sort: "Age",
            titleEng: "Age",
            titleTurk: "Yaş",
            contEng: "Age of the Player",
            contTurk: "Oyuncunun Yaşı"
        },
        {
            id: 7,
            sort: "MP",
            titleEng: "MP",
            titleTurk: "OM",
            contEng: "Matches Played",
            contTurk: "Oynanan Maç Sayısı"
        },
        {
            id: 8,
            sort: "Min",
            titleEng: "Min",
            titleTurk: "Dak",
            contEng: "Total Minutes Played",
            contTurk: "Toplam Oynanan Dakika"
        },
        {
            id: 9,
            sort: "G",
            titleEng: "G",
            titleTurk: "G",
            contEng: "Goals",
            contTurk: "Gol"
        },
        {
            id: 10,
            sort: "A",
            titleEng: "A",
            titleTurk: "A",
            contEng: "Assists",
            contTurk: "Asist"
        },
        {
            id: 11,
            sort: "G+A",
            titleEng: "G+A",
            titleTurk: "G+A",
            contEng: "Total Goals and Assists",
            contTurk: "Toplam Gol ve Asist"
        },
        {
            id: 12,
            sort: "YC",
            titleEng: "YC",
            titleTurk: "SK",
            contEng: "Yellow Cards",
            contTurk: "Sarı Kart"
        },
        {
            id: 13,
            sort: "RC",
            titleEng: "RC",
            titleTurk: "KK",
            contEng: "Red Cards",
            contTurk: "Kırmızı Kart"
        }
    ];

    const teamPlayers = [];
    for (let i = 0; i < selectedPlayers.length; i++) {
        if (selectedPlayers[i].id !== 0) {
            teamPlayers.push(selectedPlayers[i]);
        }
    };

    return (
        <div>
            <Navigation />
            <Clubs />
            <div className="pb-4 flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <div>
                        <Link to="/league/team">
                            <button className={theme ? "text-xs lg:text-sm xl:text-base bg-stone-300 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-500 mt-2" : "text-xs lg:text-sm xl:text-base bg-stone-200 rounded py-0.5 px-1 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-400 mt-2"}>
                                <FontAwesomeIcon
                                    icon={faPeopleGroup}
                                />
                            </button>
                        </Link>
                        <Link to="/league/team/4-4-2">
                            <button
                                className={theme ? "text-xs lg:text-sm xl:text-base bg-stone-300 rounded py-0.5 px-3 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-500 mt-2" : "text-xs lg:text-sm xl:text-base bg-stone-200 rounded py-0.5 px-3 mx-1 font-semibold border-2 border-black drop-shadow-md hover:bg-stone-400 mt-2"}
                            >
                                {changeLang ?
                                    <div>
                                        Takımı kur <FontAwesomeIcon icon={faFutbol} />
                                    </div>
                                    :
                                    <div>
                                        Build the team <FontAwesomeIcon icon={faFutbol} />
                                    </div>}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row justify-center py-3 px-3">
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
                <table className="bg-white table-auto text-xs md:text-sm lg:text-sm xl:text-base">
                    <thead>
                        <tr className={theme ? "bg-cyan-900 text-white divide-x divide-black/25" : "bg-cyan-700 text-white divide-x divide-black/25"}>
                            {Object.values(columnPlayersTitle).map((item) => {
                                return (
                                    <Popover>
                                        <PopoverHandler>
                                            <th
                                                className="py-1 px-0.5 text-center font-bold underline cursor-pointer"
                                            >
                                                {changeLang ? item.titleTurk : item.titleEng}
                                            </th>
                                        </PopoverHandler>
                                        <PopoverContent
                                            className={theme ? "bg-slate-100 text-xs md:text-sm lg:text-base xl:text-base py-3 px-3" : "bg-white text-xs md:text-sm lg:text-base xl:text-base py-3 px-3"}
                                        >
                                            <p><b>{changeLang ? item.contTurk : item.contEng}</b></p>
                                        </PopoverContent>
                                    </Popover>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {teamPlayers.map((item) => {
                            return (
                                <tr
                                    className={theme ? "hover:border-collapse hover:bg-white border-y border-black/25 odd:bg-slate-200 text-left" : "hover:border-collapse hover:bg-white border-y border-black/25 odd:bg-slate-100 text-left"}
                                >
                                    <td className="pl-0.5 py-0.5 font-semibold border-r border-black/25">
                                        <div>
                                            <p>
                                                {item.player}
                                            </p>
                                            <button
                                                value={item.player}
                                                id={item.id}
                                                onClick={(e) => {
                                                    dropPlayers(e);
                                                    lineupAfterDrop(e);
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    className={theme ? "text-cyan-900 drop-shadow-xl hover:text-red-500 hover:cursor-pointer" : "text-cyan-700 drop-shadow-xl hover:text-red-500 hover:cursor-pointer"}
                                                    icon={faCircleMinus}
                                                />
                                            </button>
                                            <FontAwesomeIcon
                                                className="text-green-500 drop-shadow-xl pl-0.5"
                                                icon={faCircleCheck}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">
                                        <div className="flex flex-row items-center">
                                            <Link to="/league/table">
                                                <img className="rounded h-5 md:h-7 lg:h-8 xl:h-9" key={item.team} alt={item.team} src={require(`../assets/club-logos/${item.team}.png`)} />
                                            </Link>
                                            <div className={`${theme ? "bg-cyan-900" : "bg-cyan-700"} text-white px-0.5 ml-0.5 rounded-md`}>
                                                {item.tr}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">
                                        <p>
                                            {item.value}
                                        </p>
                                        <FontAwesomeIcon
                                            className={theme ? "text-cyan-900 drop-shadow-xl" : "text-cyan-700 drop-shadow-xl"}
                                            icon={faCoins}
                                        />
                                    </td>
                                    <td className="font-semibold border-r border-black/25">
                                        {item.nation}
                                        <img className="h-4 md:h-5 lg:h-5 xl:h-6 pb-1" alt={item.nation} src={`https://flagcdn.com/${item.flagcode.toLowerCase()}.svg`} />
                                    </td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.pos}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.age}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.mp}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.min}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.g}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.a}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.ga}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.yc}</td>
                                    <td className="py-0.5 font-semibold border-r border-black/25">{item.rc}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Team;
