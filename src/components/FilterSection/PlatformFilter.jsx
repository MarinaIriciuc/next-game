"use client"
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {useState} from "react";
import ShowMoreButton from "@/components/ShowMoreButton";

export default function PlatformFilter({platforms}){
    const [showAll, setShowAll] = useState(false);
    if (!showAll) {
        platforms = platforms.slice(0, 7)
    }
    return (
        <>
            <Card className="bg-primary-blue text-white mt-6 p-7 rounded-sm w-60 border-0">
                <p className="uppercase">Platforms</p>
                {platforms.map(function (platform, index){
                    return (

                            <div key={index} className="flex items-center mt-6">
                                <Checkbox/>
                                <p className="text-[#7C87AB] text-[14px] mx-2 uppercase">{platform}</p>
                            </div>

                    )
                })}
                <ShowMoreButton showAll={showAll} setShowAll={setShowAll} />

            </Card>
        </>
    )
}