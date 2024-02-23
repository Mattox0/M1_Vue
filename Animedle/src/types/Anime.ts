import type { Status } from "./AnimeResponse";

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
}