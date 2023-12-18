"use client"
import {Card} from "@/components/ui/card";
import {useState} from "react";
import ShowMoreButton from "@/components/ShowMoreButton";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import {Checkbox} from "@/components/ui/checkbox";


export default function GenreFilter({genres}) {


  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  if (!showAll) {
    genres = genres.slice(0, 7)
  }

  const searchParams = useSearchParams();

  const selectedGenres = searchParams.get('genres')?.split(',') || [];

  function filterGenres(toggle, genreId) {
    const existingSearchParams = new URLSearchParams(searchParams);
    // Actualizează URL-ul bazat pe starea curentă a checkbox-urilor
    const updatedGenres = toggle ? [...selectedGenres, genreId] : selectedGenres.filter((id) => Number(id) !== genreId);

    existingSearchParams.set('genres', updatedGenres.join(','));

    router.push(`?${existingSearchParams}`, {
      scroll: false
    })
  }




  return (
    <>
      <Card className="bg-primary-blue text-white mt-6 p-7 rounded-sm w-60 border-0">
        <p className="uppercase">Genres</p>
        {
          genres.map(function (genre, index) {
            return (
                <div key={index} className="flex items-center mt-6">
                  <Checkbox
                    name="filters"
                    value={genre.id}
                    onCheckedChange={toggle => filterGenres(toggle, genre.id)}
                    checked={!!selectedGenres.find(selectedGenres => Number(selectedGenres) === genre.id)}
                  />
                  {genre.image && (
                    <>
                      <Image src={genre.image} className="w-[40px] h-[40px] rounded-md mx-2 object-cover"
                             height="1000" width="1000"
                             alt=""/>
                    </>
                  )}
                  <p className="text-[#7C87AB] text-[14px] uppercase">{genre.name}</p>
                </div>
            )
          })
        }
        <ShowMoreButton showAll={showAll} setShowAll={setShowAll}/>

      </Card>
    </>
  )
}
