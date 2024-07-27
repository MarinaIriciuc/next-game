import {getPlaiceholder} from "plaiceholder";


export async function getBase64ImageUrl(imageUrl) {
  // fetch image and convert it to base64
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const {base64} = await getPlaiceholder(buffer);

  return base64;
}


