"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Grid, Menu} from "lucide-react";
import {activeMenu} from "@/store";
import {useAtom} from "jotai";

export default function SortSection() {

  const [, setCurrentMenu] = useAtom(activeMenu);


  return (
    <>
      {/*<div className="flex items-center">*/}
      {/*  <p className="text-[15px]">Show:</p>*/}
      {/*  <Select>*/}
      {/*    <SelectTrigger className="w-[80px] ms-3 border-blue-900 rounded-md">*/}
      {/*      <SelectValue placeholder="15"/>*/}
      {/*    </SelectTrigger>*/}
      {/*    <SelectContent>*/}
      {/*      <SelectItem value="10">10</SelectItem>*/}
      {/*      <SelectItem value="15">15</SelectItem>*/}
      {/*      <SelectItem value="25">25</SelectItem>*/}
      {/*    </SelectContent>*/}
      {/*  </Select>*/}
      {/*</div>*/}
      {/*<div className="flex items-center">*/}
      {/*  <p className="text-[15px]">Sort by:</p>*/}
      {/*  <Select>*/}
      {/*    <SelectTrigger className="w-[150px] ms-3 border-blue-900 rounded-md">*/}
      {/*      <SelectValue placeholder="Recent movies"/>*/}
      {/*    </SelectTrigger>*/}
      {/*    <SelectContent>*/}
      {/*      <SelectItem value="relevance">Relevance</SelectItem>*/}
      {/*      <SelectItem value="date">Date added</SelectItem>*/}
      {/*      <SelectItem value="name">Name</SelectItem>*/}
      {/*      <SelectItem value="rating">Rating</SelectItem>*/}
      {/*      <SelectItem value="released">Released date</SelectItem>*/}
      {/*    </SelectContent>*/}
      {/*  </Select>*/}
      {/*</div>*/}
      <div className="gap-3 flex">
        <Grid onClick={() =>  setCurrentMenu("grid")}  className="cursor-pointer"/>
        <Menu onClick={() => setCurrentMenu("menu")} className="cursor-pointer"/>
      </div>
    </>
  )
}
