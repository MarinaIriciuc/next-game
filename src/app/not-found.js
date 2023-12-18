import Link from "next/link";

export default function NotFound() {
  return <>
    <div className="flex items-center gap-20 container-fluid justify-center content-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <img src="https://i.ibb.co/8rzhrQT/9-404-error-illustration-2048x908-vp03fkyu.png" alt=""/>
        <p className="text-[30px] text-blue-900 font-bold tracking-wider mt-10">
          Page not found!
        </p>
        <Link href="/">
          <button className="mt-10 bg-blue-900 px-10 py-3 rounded-md text-white text-[18px] font-bold">Go back</button>
        </Link>
      </div>
    </div>
  </>
}
