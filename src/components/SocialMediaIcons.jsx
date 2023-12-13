import {Facebook, Instagram, Twitter} from "lucide-react";
import Link from "next/link";

export default function SocialMediaIcons() {
  return (
    <>
      <div className="flex text-white gap-2">
        <Link href="https://www.facebook.com">
          <Facebook size={18}/>
        </Link>
        <Link href="https://www.instagram.com">
          <Instagram size={18}/>
        </Link>
        <Link href="https://www.twitter.com/">
          <Twitter size={18}/>
        </Link>
      </div>
    </>
  )
}
