"use client"
export default function GameDescription({rating,released}){
    return (
        <div>
            <div className="flex">
                <p>Rating</p>
                <p className="ms-3">{rating}</p>
            </div>
            <div className="flex flex-wrap">
                <p>Release date:</p>
                <p className="ms-3">{released}</p>
            </div>
        </div>
    )
}