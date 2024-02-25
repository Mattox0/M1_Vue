import type {Anime} from "@/types/Anime";

export const checkEmoji = (emoji: Anime, anime: Anime) => {
  return {
    ...emoji,
    color: emoji.id === anime.id ? 'green' : 'red'
  }
}