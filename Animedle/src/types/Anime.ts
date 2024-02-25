import type { Status } from "./AnimeResponse";
import type {Emoji} from "@/types/Emoji";

export interface Anime {
	id: string;
	title: string;
	imgPath: string;
	genres: string[];
	type: string;
	year: number;
	season: number;
	studio: string[];
	status: Status;
	emoji: string[] | Emoji[];
}