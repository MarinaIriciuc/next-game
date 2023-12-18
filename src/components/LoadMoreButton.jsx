"use client"
import {Button} from "@/components/ui/button";
import {useAtom} from "jotai";
import {activePageAtom, filteredGamesAtom, loadingGame} from "@/store";
import {useEffect, useState} from "react";
import {getGamesBySearch} from "@/lib/utils";
import Skeleton from "react-loading-skeleton";

export default function LoadMoreButton() {

  const [page, setPage] = useAtom(activePageAtom);
  const [, setFilteredGames] = useAtom(filteredGamesAtom);
  const [, setLoading] = useAtom(loadingGame);

  useEffect(() => {

    if (page > 1) {
      setLoading(true)
      getGamesBySearch("", page)
        .then((games) => {
          // console.log("DEPIND DE REZULTAT SI_L ASTEPT SA FIE REZOLVAT")
          setFilteredGames((prev) => [...prev, ...games])
          setLoading(false)
        })
      // console.log("NU DEPIND DE REZULTAT SI MERG MAI DEPARTE CHIT CA E GATA SAU NU")
    }
  }, [page]);


  return (
    <>
      <Button onClick={() => setPage(page + 1)} className="bg-blue-300 px-5 py-5 hover:bg-blue-300">
        Load More
      </Button>
    </>
  )
}
