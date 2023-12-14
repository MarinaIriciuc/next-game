import {Button} from "@/components/ui/button";
import SortSection from "@/components/SortSection";
import StoreFilter from "@/components/FilterSection/StoreFilter";
import GenreFilter from "@/components/FilterSection/GenreFilter";
import {getAllGames, getAllGenres, getGamesBySearch, getPlatforms, getStores} from "@/lib/utils";
import PlatformFilter from "@/components/FilterSection/PlatformFilter";
import LoadMoreButton from "@/components/LoadMoreButton";
import GameList from "@/components/GamesList";


export default async function Home({searchParams}) {

  const games = await getAllGames();
  const genres = await getAllGenres();
  const platforms = await getPlatforms();
  const stores = await getStores();
  const searchGames = await getGamesBySearch(searchParams.search || "")


  return (
    <>

      <div className="bg-main-blue text-white min-h-screen py-48">
        <div className="container-fluid">
          <div className="grid grid-cols-[260px_auto] gap-12">
            <div>
              <div className="flex justify-between items-center">
                <p>Filter By</p>
                <Button className="bg-transparent text-red-500">Clear All</Button>
              </div>
              <div className="py-4">
                <StoreFilter stores={stores}/>
                <PlatformFilter platforms={platforms}/>
                <GenreFilter genres={genres}/>
              </div>
            </div>
            <div>
              <div className="flex justify-between border border-blue-900 rounded-sm items-center py-2 px-16">
                <SortSection/>
              </div>

              {searchGames.length > 0 ? (
                <>
                  <GameList searchGames={searchGames}/>
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
