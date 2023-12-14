"use client"

import Link from "next/link";
import GameCard from "@/components/GameCard/GameCard";
import {useAtom} from "jotai";
import {activeMenu, filteredGamesAtom, loadingGame} from "@/store";
import {useEffect} from "react";
import Skeleton from "react-loading-skeleton";


export default function GameList({searchGames}) {

  const [filteredGames, setFileterdGames] = useAtom(filteredGamesAtom);
  const [isLoading, setLoading] = useAtom(loadingGame)

  useEffect(() => {
    setFileterdGames(searchGames)
  }, [searchGames]);


  const [currentMenu, setCurrentMenu] = useAtom(activeMenu);


  return <>
    <div className={`${currentMenu === 'grid' ? "grid grid-cols-3 gap-10 py-4" : "flex flex-col gap-10 py-4"}`}>
      {filteredGames.map(function (searchGame, index) {
        return (
          <Link key={index} href={`/game/${searchGame.slug}`}>
            <GameCard searchGame={searchGame} key={index}/>
          </Link>
        )
      })}
      {isLoading && (
        <>
          {filteredGames.map(function (searchGame, index) {
            return (
              <div className="flex items-center space-x-4 bg-pink-500">
                <Skeleton className="h-12 w-12 rounded-full"/>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]"/>
                  <Skeleton className="h-4 w-[200px]"/>
                </div>
              </div>
            )
          })}
        </>
      )}

    </div>
  </>
}
