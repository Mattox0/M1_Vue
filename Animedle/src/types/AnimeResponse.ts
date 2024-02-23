export interface AnimeResponse {
	title: string;
	imgPath: string;
	season: number;
	seasonColor: Color;
	seasonLevel: Level;
	year: number;
	yearColor: Color;
	yearLevel: Level;
	genres: { name: string, color: Color }[];
	genresColor: Color;
	studio: string[];
	studioColor: Color;
	status: Status;
	statusColor: Color;
	type: string;
	typeColor: Color;
}

export enum Color {
	RED = "red",
	GREEN = "green",
	ORANGE = "orange"
}

export enum Level {
	UP = "up",
	DOWN = "down",
	SAME = ""
}

export enum Status {
	EN_COURS = "En cours",
	TERMINE = "Termine"
}