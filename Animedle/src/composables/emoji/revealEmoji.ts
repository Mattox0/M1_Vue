import type {Emoji} from "@/types/Emoji";

export const revealEmoji = (emojis: Emoji[]) => {
  for (const emoji of emojis) {
    if (!emoji.display) {
      emoji.display = true;
      break;
    }
  }
  return emojis;
}

export const revealAllEmoji = (emojis: Emoji[]) => {
  for (const emoji of emojis) {
    emoji.display = true;
  }
  return emojis;
}