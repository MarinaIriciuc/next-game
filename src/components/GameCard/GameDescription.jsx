import { Heart, Popcorn } from "lucide-react";

export default function MovieDescription(){
    return (
        <>
               <div className="flex">
                    <Heart/>
                    <p className="ms-2">88%</p>
                </div>
                <div className="flex mx-4">
                    <Popcorn/>
                    <p className="ms-2">90%</p>
                 </div>
        </>
    )
}