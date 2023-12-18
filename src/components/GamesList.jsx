"use client"

import Link from "next/link";
import GameCard from "@/components/GameCard/GameCard";
import {useAtom} from "jotai";
import {activeMenu, filteredGamesAtom, loadingGame} from "@/store";
import {useEffect} from "react";
import {Skeleton} from "@/components/ui/skeleton";


export default function GamesList({searchGames}) {

  const [filteredGames, setFileterdGames] = useAtom(filteredGamesAtom);
  const [isLoading] = useAtom(loadingGame);
  const [currentMenu] = useAtom(activeMenu);


  useEffect(() => {
    setFileterdGames(searchGames)
  }, [searchGames]);


  return <>
    <div className={`${currentMenu === 'grid' ? "grid grid-cols-2 gap-10 py-4 lg:grid-cols-3 md:grid-cols-2" : "flex flex-col gap-10 py-4"}`}>
      {filteredGames.map(function (searchGame, index) {
        return (
          <>
            {/*{isLoading ? (*/}
            {/*  <div className="flex items-center space-x-4 text-pink-300">*/}
            {/*    <Skeleton className="h-12 w-12 rounded-full"/>*/}
            {/*    <div className="space-y-2">*/}
            {/*      <Skeleton className="h-4 w-[250px]"/>*/}
            {/*      <Skeleton className="h-4 w-[200px]"/>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*) : (*/}
            <Link href={`/game/${searchGame.slug}`}>
              <GameCard searchGame={searchGame}/>
            </Link>
            {/*)}*/}
          </>
        )
      })}
    </div>
  </>
}
