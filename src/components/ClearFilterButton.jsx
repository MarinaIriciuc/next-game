"use client"
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function ClearFilterButton(){

  const router = useRouter();

  return(
    <>
      <Button onClick={()=>router.push("?")} className="bg-transparent text-red-500">Clear All</Button>
    </>
  )
}
