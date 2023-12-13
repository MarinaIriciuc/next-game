"use client"
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";

export default function SearchInput() {

  const route = useRouter();


  return (
    <div>
      <Input onChange={(event)=>route.push(`?search=${event.target.value}`)} placeholder="Search for a game..." className="md:w-96 w-80"/>
    </div>
  )
}
