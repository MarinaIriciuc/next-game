"use client"

export default function ShowMoreButton({showAll, setShowAll}) {
    return (
        <button onClick={() => setShowAll(!showAll)} className="text-[#929DC1] mt-5">
            {showAll ? "Show less" : "Show more"}
        </button>
    )
}