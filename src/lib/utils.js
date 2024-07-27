import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {notFound} from "next/navigation";
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const API_KEY = "51e8a8cc99234a3c8b0865bb011ab989"
const GAME_API = `https://api.rawg.io/api/games?key=${API_KEY}`

// my_api_key 37c1ca5c0b394b75896d3c2d7f76876f

async function getAllGames(genres = '') {
  let response
  if (genres) {
    response = await fetch(`${GAME_API}&genres=${genres}`)
  } else
    response = await fetch(`${GAME_API}`)

  const {results} = await response.json()
  return results.map(function (game) {
    return {
      id: game.id,
      title: game.name,
      image: game.background_image,
      released: game.released,
      metascore: game.metacritic,
      slug: game.slug,
      genres: game.genres,
      rating: game.rating,
      stores: game.stores
    }
  })
}

async function getGameBySlug(slug) {
  const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=${API_KEY}`)
  if (response.status === 404) return notFound()
  const game = await response.json()
  return {
    id: game.id,
    title: game.name,
    image: game.background_image,
    released: game.released,
    slug: game.slug,
    description: game.description_raw,
    website: game.website,
    reddit: game.reddit_url,
    tags: game.tags,
    metascore: game.metacritic,
    screenshots: game.short_screenshots,
    store: game.stores,
    ageRating: game.esrb_rating,
    genres: game.genres,
    rating: game.rating,
    ratings: game.ratings,
    platforms: game.platforms,
    reviews: game.ratings,
    reviewsNumber: game.reviews_count,
  }
}

async function getAchievementsBySlug(slug) {
  const response = await fetch(`https://api.rawg.io/api/games/${slug}/achievements?key=${API_KEY}`)
  const {results} = await response.json()
  return results.map(function (result) {
    return {
      id: result.id,
      name: result.name,
      description: result.description,
      image: result.image
    }
  })
}

async function getAllGenres() {
  const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  const {results} = await response.json();


  return results.map(function (genre) {
    return {
      id: genre.id,
      name: genre.name,
      image: genre.image_background
    }
  })
}

async function getPlatforms() {
  const response = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`, {})
  const {results} = await response.json();
  return results.map(function (platform) {
    return {
      id: platform.id,
      name: platform.name
    }
  })
}

async function getStores() {
  const response = await fetch(`https://api.rawg.io/api/stores?key=${API_KEY}`)
  const {results} = await response.json();
  return results.map(function (store) {
    return {
      id: store.id,
      name: store.name,
    }
  })
}


async function getGamesByStore(stores) {


}

async function getGamesBySearch(search, page = 1) {
  // try {
    const response = await fetch(`${GAME_API}&search=${search}&page=${page}`)
    const {results} = await response.json();
    return results.map(function (game) {
      return {
        id: game.id,
        title: game.name,
        image: game.background_image,
        released: game.released,
        metascore: game.metacritic,
        slug: game.slug,
        genres: game.genres,
        rating: game.rating,
        stores: game.stores
      }
    })
  // } catch (e) {
  //
  //   return {
  //     message: "Somethin went wrong."
  //   }
  // }
}

async function getGamesByGenre(genre, page=1) {
  try {
    const response = await fetch(`${GAME_API}&genres=${genre}&page=${page}`);
    const {results} = await response.json();
    return results.map(function (game) {
      return {
        id: game.id,
        title: game.name,
        image: game.background_image,
        released: game.released,
        metascore: game.metacritic,
        slug: game.slug,
        genres: game.genres,
        rating: game.rating
      }
    })
  } catch (e) {
    return {
      message: "Something went wrong."
    }
  }
}


export async function getGames(filters) {
  try {

    let url = `${GAME_API}`;
    if(filters.stores) { // "1,2,3,45,"
      url += `&stores=${filters.stores}`
    }
    if(filters.platforms) {
      url += `&platforms=${filters.platforms}`
    }
    if(filters.genres) {
      url += `&genres=${filters.genres}`
    }
    if(filters.searchInput) {
      url += `&search=${filters.searchInput}`
    }

    const response = await fetch(url);
    const {results} = await response.json();
    return results.map(function (game) {
      return {
        id: game.id,
        title: game.name,
        image: game.background_image,
        released: game.released,
        metascore: game.metacritic,
        slug: game.slug,
        genres: game.genres,
        rating: game.rating
      }
    })
  } catch (e) {
    return {
      message: "Something went wrong."
    }
  }
}




export {getAllGames, getAllGenres, getPlatforms, getStores, getGameBySlug, getGamesBySearch, getAchievementsBySlug, getGamesByGenre}
