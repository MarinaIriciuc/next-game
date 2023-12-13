"use client"
import {Card} from "@/components/ui/card";
import {useState} from "react";
import ShowMoreButton from "@/components/ShowMoreButton";


export default function GenreFilter({genres}) {

    const [showAll, setShowAll] = useState(false);
    if (!showAll) {
        genres = genres.slice(0, 7)
    }





    return (
        <>
            <Card className="bg-primary-blue text-white mt-6 p-7 rounded-sm w-60 border-0">
                <p className="uppercase">Genres</p>
                {
                    genres.map(function (genre, index) {
                        return (
                            <>
                                <div key={index} className="flex items-center mt-6">
                                    {/*<Checkbox />*/}
                                    <input name={genre.name}
                                           type="checkbox"
                                           className="form-checkbox h-5 w-5 text-indigo-600"/>
                                    <img src={genre.image} className="w-[40px] h-[40px] rounded-md mx-2 object-cover"
                                         alt=""/>
                                    <p className="text-[#7C87AB] text-[14px] uppercase">{genre.name}</p>
                                </div>
                            </>
                        )
                    })
                }
                <ShowMoreButton showAll={showAll} setShowAll={setShowAll}/>

            </Card>
        </>
    )
}