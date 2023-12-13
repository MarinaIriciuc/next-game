"use client"
import {Card} from "../ui/card";
import MovieImage from "./MovieImage";
import MovieTitle from "./MovieTitle";
import MovieDescription from "./MovieDescription";

export default function MovieCard({movie}) {

    console.log(movie)
    
    return (
        <>
            <Card className="border-0 bg-primary-blue text-white ">
                <MovieImage image={movie.image}/>
                <div className="px-5 py-2">
                    <MovieTitle title={movie.title}/>
                </div>
                <div className="flex  px-5 py-3 border-t border-[#7C87AB]">
                    <MovieDescription/>
                </div>
            </Card>
        </>
    )
}
