import axios from "axios";
import {animes} from "./animes";

const postAnimeData = async (anime: any) => {
    try {
        await axios.post('https://animedle-33f8a6a51951.herokuapp.com/anime', anime, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.info("L'animé a été ajouté avec succès !");
    } catch (error) {
        if (error.response?.status === 409) {
            console.error(`L'animé ${JSON.parse(anime).title} existe déjà !`);
        } else {
            console.log("ERROR POST REQUEST:");
            console.error(error.message);
        }
    }
};
const deleteAnimeData = async (id: number) => {
    try {
        await axios.delete(`https://animedle-33f8a6a51951.herokuapp.com/anime/${id}`);
        console.info("L'animé a été supprimé avec succès !");
    } catch (error) {
        console.log("ERROR DELETE REQUEST:");
        console.error(error.message);
    }
}

for (const anime of animes) {
    postAnimeData(JSON.stringify(anime));
}