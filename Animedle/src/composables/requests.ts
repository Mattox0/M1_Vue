import axios from 'axios'
import type {Anime} from "@/types/Anime";
import * as crypto from 'crypto';

export async function getAllAnime() {
	const response = await axios.get(import.meta.env.VITE_BASE_URL + '/anime')
  return response.data.sort((a: Anime, b: Anime) => a.title.localeCompare(b.title));
}

export async function getRandomAnime() {
	const response = await axios.get(import.meta.env.VITE_BASE_URL + '/anime/random')
	return response.data;
}
