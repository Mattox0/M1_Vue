import type { Anime } from "@/types/Anime";
import { Color, Level } from "@/types/AnimeResponse";

export function compareAnime(anime: Anime, selectAnime: Anime) {
	let season = compareSeason(anime, selectAnime);
	let year = compareYear(anime, selectAnime);
	let type = compareType(anime, selectAnime);
	let studio = compareStudio(anime, selectAnime);
	let status = compareStatus(anime, selectAnime);
	let genres = compareGenres(anime, selectAnime);
	return {
		...anime,
		seasonColor: season.color,
		seasonLevel: season.level,
		yearColor: year.color,
		yearLevel: year.level,
		typeColor: type.color,
		studioColor: studio.color,
		statusColor: status.color,
		genresColor: genres.color,
		genres: genres.genres
	}
}

const compareSeason = (anime: Anime, selectAnime: Anime) => anime.season > selectAnime.season ? { level: Level.DOWN, color: Color.RED } : anime.season < selectAnime.season ? { level: Level.UP, color: Color.RED } : { level: Level.SAME, color: Color.GREEN };

const compareYear = (anime: Anime, selectAnime: Anime) => anime.year > selectAnime.year ? { level: Level.DOWN, color: Color.RED } : anime.year < selectAnime.year ? { level: Level.UP, color: Color.RED } : { level: Level.SAME, color: Color.GREEN };

const compareType = (anime: Anime, selectAnime: Anime) => anime.type === selectAnime.type ? { color: Color.GREEN } : { color: Color.RED };

const compareStudio = (anime: Anime, selectAnime: Anime) => {
	const hasSameStudios = JSON.stringify(anime.studio) === JSON.stringify(selectAnime.studio);
	const hasCommonStudios = anime.studio.some(studio => selectAnime.studio.includes(studio));
	
	if (hasSameStudios) return { color: Color.GREEN };
	else if (hasCommonStudios) return { color: Color.ORANGE };
	return { color: Color.RED };
}

const compareStatus = (anime: Anime, selectAnime: Anime) => anime.status === selectAnime.status ? { color: Color.GREEN } : { color: Color.RED };

const compareGenres = (anime: Anime, selectAnime: Anime) => {
	const color: Color = anime.genres.every(genre => selectAnime.genres.includes(genre)) ? Color.GREEN : anime.genres.some(genre => selectAnime.genres.includes(genre)) ? Color.ORANGE : Color.RED;
	const genreDetails = anime.genres.map(genre => ({ name: genre, color: selectAnime.genres.includes(genre) ? Color.GREEN : Color.RED }));
	
	return { color, genres: genreDetails };
};