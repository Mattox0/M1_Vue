import axios from 'axios'

export async function getAllAnime() {
	const response = await axios.get(import.meta.env.VITE_BASE_URL + '/anime')
  return response.data;
}

export async function getRandomAnime() {
	const response = await axios.get(import.meta.env.VITE_BASE_URL + '/anime/random')
	return response.data;
}