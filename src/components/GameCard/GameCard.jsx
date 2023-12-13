"use client"
import {Card} from "../ui/card";
import GameImage from "./GameImage";
import GameTitle from "./GameTitle";
import GameDescription from "./GameDescription";

export default function GameCard({searchGame}) {


  return (
    <>
      <Card className="border-0 bg-primary-blue text-white transform transition-transform hover:scale-105">
        <GameImage image={searchGame?.image}/>
        <div className="p-2">
          <GameTitle title={searchGame?.title}/>
        </div>
        <div className="flex p-3 border-t border-[#7C87AB]">
          <GameDescription rating={searchGame?.rating} released={searchGame?.released}/>
        </div>
      </Card>
    </>
  )
}
