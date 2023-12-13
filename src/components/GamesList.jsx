"use client"

import Link from "next/link";
import GameCard from "@/components/GameCard/GameCard";
import {useAtom} from "jotai";
import {activeMenu} from "@/store";

export default function GameList({searchGames}) {

  // const [filteredGames, setFileterdGames] = useState();
  // console.log(searchGames)
  // useEffect(() => {
  //     console.log(games)
  // }, [])

  const [currentMenu, setCurrentMenu] = useAtom(activeMenu);


  return <>
    <div className={`${currentMenu === 'grid' ? "grid grid-cols-3 gap-10 py-4" : "flex flex-col gap-10 py-4"}`}>
      {searchGames.map(function (searchGame, index) {
        return (
          <Link key={index} href={`/game/${searchGame.slug}`}>
            <GameCard searchGame={searchGame} key={index}/>
          </Link>
        )
      })}
    </div>
  </>
}
