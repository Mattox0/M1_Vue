import axios from "axios";

interface PostMethod {
    method: string;
    headers: {
        'Content-Type': string;
        Authorization?: string;
    };
    body: string;
}

const animes: any[] = [
    {
        "title": "Demon Slayer",
        "season": 3,
        "year": 2019,
        "genres": [
            "Aventure",
            "Dark Fantasy",
            "Arts Martiaux"
        ],
        "studio": ["Ufotable"],
        "status": "En cours",
        "type": "Shonen",
        "imgPath": "src/assets/images/demon-slayer.png"
    },
    {
        "title": "Attack on titans",
        "season": 4,
        "year": 2013,
        "genres": [
            "Action",
            "Dark Fantasy",
            "Tragedie",
            "Horreur",
            "Thriller",
            "Mystere"
        ],
        "studio": ["Wit Studio", "MAPPA"],
        "status": "Termine",
        "type": "Shonen",
        "imgPath": "src/assets/images/attack-on-titans.png"
    },
    {
        "title": "Jujustu Kaisen",
        "season": 2,
        "year": 2020,
        "genres": [
            "Action",
            "Drame",
            "Surnaturel"
        ],
        "studio": ["MAPPA"],
        "status": "En cours",
        "type": "Shonen",
        "imgPath": "src/assets/images/jujustu-kaisen.png"
    }
];

const postAnimeData = async (anime: any) => {
    try {
        await axios.post('http://localhost:3000/anime', anime, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.info("L'animé a été ajouté avec succès !");
    } catch (error) {
        console.log("ERROR POST REQUEST:");
        console.error(error);
    }
};

for (const anime of animes) {
    postAnimeData(JSON.stringify(anime));
}