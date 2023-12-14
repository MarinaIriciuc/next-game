import SearchInput from "@/components/SearchInput";
import Link from "next/link";


export default function Navbar() {

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row justify-between items-center text-blue-300 fixed z-50 py-4 bg-primary-blue">
        <Link href="/">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-0">Game Nexus</p>
        </Link>
        <div className="flex flex-grow justify-center sm:justify-end items-center gap-3 w-full sm:w-80">
          <SearchInput/>
        </div>
      </div>

      {/*<div className="flex items-center gap-3">*/}
      {/*  <Button className="rounded-full bg-blue-300 hover:bg-blue-400">IM</Button>*/}
      {/*  <p className="text-[15px] cursor-pointer">My account</p>*/}
      {/*</div>*/}
    </>
  )
}
