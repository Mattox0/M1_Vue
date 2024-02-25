import type {Emoji} from "@/types/Emoji";
import type {Anime} from "@/types/Anime";

export const hideEmoji = (emojis: string[]) => {
  return emojis.map((emoji: string, index: number): Emoji => {
    return index === 0 ? { name: emoji, display: true } : { name: emoji, display: false };
  });
}