import {getAchievementsBySlug, getGameBySlug} from "@/lib/utils";
import {Card} from "@/components/ui/card";
import Image from "next/image";


export default async function GamePage({params}) {

  const game = await getGameBySlug(params.slug);
  const achievements = await getAchievementsBySlug(params.slug);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-6 sm:py-28 px-4 sm:px-20 min-h-screen gap-4 sm:gap-20 bg-blue-100">
        <div>
          <p className="text-md bg-blue-300 w-28 flex justify-center rounded-md text-white sm:mt-0 mt-32">{game.released}</p>
          <p className="text-[55px] font-bold">{game.title}</p>
          <p className="text-[25px] font-bold mt-16">Ratings</p>
          <div className="xl:flex grid">
            {game.reviews.map(function (item) {
              return (
                <>
                  <div className="flex mt-3 items-center ">
                    <p className="text-[16px] uppercase text-primary-blue font-semibold">{item.title}</p>
                    <p
                      className="font-medium w-12 mx-2 flex justify-center rounded-md  bg-blue-300 text-white">{item.count}</p>
                  </div>
                </>

              )
            })}
          </div>
          <p className="text-[25px] font-bold mt-[50px]">Description</p>
          <p className="text-[15px] font-medium text-gray-800">{game.description}</p>
          <div className="grid grid-cols-2 mt-14">
            <div>
              <p className="text-[18px] font-semibold ">Release date</p>
              <p className="mt-2">{game.released}</p>
            </div>
            <div>
              <p className="text-[18px] font-semibold">Age rating</p>
              <p className="mt-2">{game.ageRating?.name}</p>
            </div>
            <div>
              <p className="text-[18px] font-semibold mt-5">Metascore</p>
              <p
                className="text-[18px] text-blue-300 mt-2 border border-blue-300 w-9 flex justify-center font-medium">{game.metascore}</p>
            </div>
            <div>
              <p className="text-[18px] font-semibold mt-5">Total reviews</p>
              <p
                className="text-[18px] text-blue-300 mt-2 border border-blue-300 w-14 flex justify-center font-medium">{game.reviewsNumber}</p>
            </div>
            <div>
              <p className="text-[18px] font-semibold mt-5">Genre</p>
              {game.genres.map(function (item) {
                return (
                  <>
                    <p className="mt-2">{item.name}</p>
                  </>
                )
              })}
            </div>
            <div>
              <p className="text-[18px] font-semibold mt-5">Platforms</p>
              {game.platforms.map(function (item) {
                return (
                  <>
                    <ul>
                      <li className="mt-2">
                        {item.platform.name}
                      </li>
                    </ul>
                  </>
                )
              })}
            </div>
            <div>
              <p className="text-[18px] font-semibold mt-5">Tags</p>
              {game.tags.map(function (item) {
                return (
                  <>
                    <p>{item.name}</p>
                  </>
                )
              })}
            </div>
          </div>
          <div>
            <p className="text-[18px] font-semibold mt-5">Website</p>
            <a href={game.website} className="mt-2">{game.website}</a>
          </div>
          <div>
            <p className="text-[18px] font-semibold mt-5">Reddit</p>
            <a href={game.reddit} className="mt-2">{game.reddit}</a>
          </div>
        </div>
        <div>
          {game.image && (
            <Image src={game.image} width="1000" height="1000" alt="" layout="responsive"/>
          )}
          <p className="mt-4 text-[25px] font-semibold">Where to buy</p>
          <div className="grid grid-cols-2 ">
            {game.store.map(function (item) {
              return (
                <>
                  <a href={`https:${item.store.domain}`}
                     className="rounded-md bg-blue-300 text-white w-40 py-3 flex justify-center mt-2 hover:transition-all hover:scale-110">{item.store.name}</a>
                </>
              )
            })}
          </div>
          <p className="mt-10 text-[25px] font-semibold">Achievements</p>
          {achievements.map(function (item, index) {
            return (
              <>
                <Card className="mt-5  hover:scale-105 transition-all duration-300" key={index}>
                  <div className="flex items-center gap-6">
                    {item.image && (
                      <Image src={item.image} className="w-16 object-cover" width="1000" height="1000" alt="" />
                    )}
                    <div>
                      <p className="text-[18px] font-medium">{item.name}</p>
                      <p className="text-[13px] font-medium text-blue-950">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
