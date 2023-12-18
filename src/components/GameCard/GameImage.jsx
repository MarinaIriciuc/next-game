import Image from "next/image";

export default function GameImage({image}) {
    return (
        <>
          {image && (
            <>
              <Image src={image} className="h-[300px] w-full rounded-t-sm object-cover" width="1000" height="1000"  alt="game image" />
            </>
          )}
        </>
    )
}
