import Image from "next/image";

export default function GameImage({image}) {

    return (
        <>
          {image && (
            <>
              <Image
                src={image}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGP4/+H5wZ725fUt/x/8YTBXUhVlYJDn5XIydAQAvJQKrc5cDA0AAAAASUVORK5CYII="
                className="h-[300px] w-full rounded-t-sm object-cover"
                width="1000"
                height="1000"
                alt="game image"
              />
            </>
          )}
        </>
    )
}
