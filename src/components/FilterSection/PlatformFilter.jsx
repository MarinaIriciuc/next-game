"use client"
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {useState} from "react";
import ShowMoreButton from "@/components/ShowMoreButton";
import {useRouter, useSearchParams} from "next/navigation";

export default function PlatformFilter({platforms}){
    const [showAll, setShowAll] = useState(false);
    if (!showAll) {
        platforms = platforms.slice(0, 7)
    }

  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedPlatforms = searchParams.get('platforms')?.split(',') || [];


  function filterPlatforms(toggle, platformId) {
    const existingSearchParams = new URLSearchParams(searchParams);

    // Actualizează URL-ul bazat pe starea curentă a checkbox-urilor
    const updatedPlatforms = toggle
      ? [...selectedPlatforms, platformId]
      : selectedPlatforms.filter((id) => Number(id) !== platformId);

    existingSearchParams.set('platforms', updatedPlatforms.join(','));

    router.push(`?${existingSearchParams}`, {
      scroll: false
    })
  }




  return (
        <>
            <Card className="bg-primary-blue text-white mt-6 p-7 rounded-sm w-60 border-0">
                <p className="uppercase">Platforms</p>
                {platforms.map(function (platform, index){
                    return (

                            <div key={index} className="flex items-center mt-6">
                              <Checkbox
                                name="filters"
                                value={platform.id}
                                onCheckedChange={toggle => filterPlatforms(toggle, platform.id)}
                                checked={!!selectedPlatforms.find(selectedPlatform => Number(selectedPlatform) === platform.id)}
                              />
                                <p className="text-[#7C87AB] text-[14px] mx-2 uppercase">{platform.name}</p>
                            </div>

                    )
                })}
                <ShowMoreButton showAll={showAll} setShowAll={setShowAll} />

            </Card>
        </>
    )
}
