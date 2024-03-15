import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faGamepad } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../AppContext";

const Play = () => {
    const { randomTeam, selectedTeam, buildTeam, tactic, chosenGK, chosenDF, chosenMF, chosenFW, selectedPlayers, changeLang } = useContext(AppContext);

    const navigate = useNavigate();

    const randomGK = selectedTeam.GK.filter(item => item.tactic === tactic);
    const randomDF = selectedTeam.DF.filter(item => item.tactic === tactic);
    const randomMF = selectedTeam.MF.filter(item => item.tactic === tactic);
    const randomFW = selectedTeam.FW.filter(item => item.tactic === tactic);

    const DF = selectedTeam.DF.filter(item => item.tactic === tactic);
    const MF = selectedTeam.MF.filter(item => item.tactic === tactic);
    const FW = selectedTeam.FW.filter(item => item.tactic === tactic);

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

    const randomSUBS = selectedSubs.filter(item => item.tactic === tactic);

    const notRandomGK = buildTeam.GK.filter(item => item.tactic === tactic);
    const notRandomDF = buildTeam.DF.filter(item => item.tactic === tactic);
    const notRandomMF = buildTeam.MF.filter(item => item.tactic === tactic);
    const notRandomFW = buildTeam.FW.filter(item => item.tactic === tactic);
    const notRandomSUBS = buildTeam.SUBS.filter(item => item.tactic === tactic);

    return (
        <div className="grid justify-items-center">
            <div className="flex flex-row justify-center py-3 px-3">
                <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1">
                    {selectedPlayers.map((item) => {
                        return (
                            <div className={item.bg ? "grid justify-items-start rounded-lg border-2 border-black p-1 bg-green-200 drop-shadow-md text-xs lg:text-sm xl:text-sm" : "grid justify-items-start rounded-lg border-2 border-black p-1 bg-red-200 drop-shadow-md text-xs lg:text-sm xl:text-sm"}>
                                <div className="flex flex-row items-center">
                                    <img className="h-7 lg:h-9 xl:h-9 pr-1" alt="player" src={require(`../assets/icons/${item.image}.png`)} />
                                    <div className="flex flex-col">
                                        <p className="font-bold">
                                            {item.player.toUpperCase()}
                                        </p>
                                        <p className="font-semibold">{changeLang ? "Poz: " : "Pos: "}
                                            <span className="font-bold">{item.pos}</span>
                                        </p>
                                        <p className="font-semibold">{changeLang ? "Değ: " : "Val: "}
                                            <span className="font-bold">{item.coin}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-row mb-3">
                <button
                    className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 px-3 mx-1 font-semibold border-2 border-black drop-shadow-md"
                    onClick={() => {
                        navigate("/team");
                    }}
                >
                    {changeLang ?
                        <div>
                            Takıma geri dön<FontAwesomeIcon icon={faBackward} />
                        </div>
                        :
                        <div>
                            Back to the team<FontAwesomeIcon icon={faBackward} />
                        </div>
                    }
                </button>
                <button
                    className="text-xs lg:text-sm xl:text-base bg-amber-200 hover:bg-amber-300 rounded py-1 px-3 mx-1 font-semibold border-2 border-black drop-shadow-md"
                >
                    {changeLang ?
                        <div>
                            Oyuna başla<FontAwesomeIcon icon={faGamepad} />
                        </div>
                        :
                        <div>
                            Start the game<FontAwesomeIcon icon={faGamepad} />
                        </div>
                    }
                </button>
            </div>
            {
                randomTeam ? (
                    <>
                        <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-3">
                            <div>
                                {randomGK.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mb-3 mt-8">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "GK" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-row">
                                {randomDF.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 my-3">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "DF" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-row">
                                {randomMF.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 my-3">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "MF" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-row">
                                {randomFW.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 mt-3 mb-8">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "FW" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-row bg-yellow-200 rounded-lg drop-shadow-md border-2 border-black my-5 mx-3">
                            {randomSUBS.map((item) => {
                                return (
                                    <div className="grid justify-items-center content-center mx-2 my-8">
                                        <img className="h-8 lg:h-10 xl:h-12" alt="sub" src={require(`../assets/icons/${item.image}.png`)} />
                                        {item.player === "Player" ?
                                            <div className="grid justify-items-center">
                                                <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                    <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.player}
                                                    </p>
                                                </div>
                                                <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                    <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <div className="grid justify-items-center">
                                                <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                    <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.player}
                                                    </p>
                                                </div>
                                                <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                    <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="grid justify-items-center gap-1 bg-green-200 rounded-lg drop-shadow-md border-2 border-black mx-3">
                            <div>
                                {notRandomGK.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mb-3 mt-8">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "GK" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-row">
                                {notRandomDF.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 my-3">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "DF" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-row">
                                {notRandomMF.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 my-3">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "MF" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-row">
                                {notRandomFW.map((item) => {
                                    return (
                                        <div className="grid justify-items-center content-center mx-2 mt-3 mb-8">
                                            <img className="h-8 lg:h-10 xl:h-12" alt="gk" src={require(`../assets/icons/${item.image}.png`)} />
                                            {item.player === "Player" || item.position !== "FW" ?
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                                :
                                                <div className="grid justify-items-center">
                                                    <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                        <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.player}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                        <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                            {item.position}
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex flex-row bg-yellow-200 rounded-lg drop-shadow-md border-2 border-black my-5 mx-3">
                            {notRandomSUBS.map((item) => {
                                return (
                                    <div className="grid justify-items-center content-center mx-2 my-8">
                                        <img className="h-8 lg:h-10 xl:h-12" alt="sub" src={require(`../assets/icons/${item.image}.png`)} />
                                        {item.player === "Player" ?
                                            <div className="grid justify-items-center">
                                                <div className="flex justify-center bg-red-400 xl:w-16 lg:w-16 w-10 px-1 mt-1.5 rounded">
                                                    <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.player}
                                                    </p>
                                                </div>
                                                <div className="flex justify-center bg-red-400 px-1 mt-1 rounded">
                                                    <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <div className="grid justify-items-center">
                                                <div className="flex justify-center bg-stone-400 xl:w-20 lg:w-20 md:w-16 w-12 px-1 mt-1.5 rounded">
                                                    <p className="truncate text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.player}
                                                    </p>
                                                </div>
                                                <div className="flex justify-center bg-stone-400 px-1 mt-1 rounded">
                                                    <p className="text-xs lg:text-sm xl:text-base font-semibold">
                                                        {item.position}
                                                    </p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            }
        </div >
    );
}

export default Play;
