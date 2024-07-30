import SortSection from "@/components/SortSection";
import StoreFilter from "@/components/FilterSection/StoreFilter";
import GenreFilter from "@/components/FilterSection/GenreFilter";
import {
  getAllGames,
  getAllGenres,
  getGames,
  getGamesByGenre,
  getGamesBySearch,
  getPlatforms,
  getStores
} from "@/lib/utils";
import PlatformFilter from "@/components/FilterSection/PlatformFilter";
import LoadMoreButton from "@/components/LoadMoreButton";
import GameList from "@/components/GamesList";
import ClearFilterButton from "@/components/ClearFilterButton";
import {Suspense} from "react";


export default async function Home({searchParams}) {


  // const games = await getAllGames();
  const genres = await getAllGenres();
  const platforms = await getPlatforms();
  const stores = await getStores();
  // const searchGames = await getGamesBySearch(searchParams.search || "");

  const filteredGames = await getGames(searchParams)

  return (
    <>

      <div className="bg-main-blue text-white min-h-screen py-48">
        <div className="container-fluid">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[260px_auto]">
            <div>
              <div className="flex justify-between items-center">
                <p>Filter By</p>
                <ClearFilterButton/>
              </div>
              <div className="py-4 hidden md:block">
                <Suspense fallback={<>Loading...</>}>
                  <StoreFilter stores={stores}/>
                  <PlatformFilter platforms={platforms}/>
                  <GenreFilter genres={genres}/>
                </Suspense>
              </div>
            </div>
            <div>
              <div className="flex justify-end border border-blue-900 rounded-sm items-center py-2 pe-4">
                <SortSection/>
              </div>
              {filteredGames.length > 0 ? (
                <>
                  <GameList searchGames={filteredGames}/>
                </>
              ) : (
                <p
                  className="text-[28px] tracking-wide flex justify-center mt-32">{typeof searchGames === 'object' ? searchGames.message : 'There is no game with this name.'}</p>
              )}
              <div className="flex justify-center mt-12">
                <LoadMoreButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
