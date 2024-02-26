import axios from "axios";
import {animes} from "./animes";

const postAnimeData = async (anime: any) => {
    try {
        await axios.post('http://localhost:3000/anime', anime, {
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

for (const anime of animes) {
    postAnimeData(JSON.stringify(anime));
}