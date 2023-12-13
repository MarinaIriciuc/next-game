"use client"

export default function ShowMore() {
    return (
        <button onClick={() => setShowAll(!showAll)} className="text-[#929DC1] mt-5">
            {showAll ? "Show less" : "Show more"}
        </button>
    )
}