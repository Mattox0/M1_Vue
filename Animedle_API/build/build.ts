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
        "imgPath": "src/assets/images/attack-on-titans.jpg"
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
        "imgPath": "src/assets/images/jujustu-kaisen.webp"
    },
    {
        "title": "Death Note",
        "season": 1,
        "year": 2006,
        "genres": [
            "Policier",
            "Dark Fantasy",
            "Thriller",
            "Tragedie",
            "Surnaturel",
            "Mystere",
            "Psychologique"
        ],
        "studio": ["Madhouse"],
        "status": "Termine",
        "type": "Shonen",
        "imgPath": "src/assets/images/death-note.jpg"
    },
    {
        "title": "My Hero Academia",
        "season": 6,
        "year": 2016,
        "genres": [
            "Action",
            "Ecole",
            "Science Fiction",
            "Fantastique",
            "Super Heros"
        ],
        "studio": ["Bones"],
        "status": "En cours",
        "type": "Shonen",
        "imgPath": "src/assets/images/MHA.jpg"
    },
    {
        "title": "One Punch Man",
        "season": 2,
        "year": 2015,
        "genres": [
            "Action",
            "Aventure",
            "Drame",
            "Comedie",
            "Humour",
            "Surrealiste",
            "Parodie",
            "Surnaturel",
            "Science Fiction",
            "Fantastique"
        ],
        "studio": ["Madhouse","JC Staff"],
        "status": "En cours",
        "type": "Seinen",
        "imgPath": "src/assets/images/one-punch-man.jpg"
    },
    {
        "title": "Tokyo Ghoul",
        "season": 2,
        "year": 2014,
        "genres": [
            "Action",
            "Fantastique",
            "Drame",
            "Science Fiction",
            "Psychologique"
        ],
        "studio": ["Pierrot"],
        "status": "Termine",
        "type": "Seinen",
        "imgPath": "src/assets/images/death-note.jpg"
    },
    {
        "title": "Sword Art Online",
        "season": 3,
        "year": 2012,
        "genres": [
            "Action",
            "Fantaisie",
            "Aventure",
            "Romance",
            "Science Fiction"
        ],
        "studio": ["A-1 Picture"],
        "status": "Termine",
        "type": "Shonen",
        "imgPath": "src/assets/images/sword-art-online.webp"
    },
    {
        "title": "Naruto / Shippuden",
        "season": 2,
        "year": 2002,
        "genres": [
            "Action"
        ],
        "studio": ["Pierrot"],
        "status": "Termine",
        "type": "Shonen",
        "imgPath": "src/assets/images/naruto.jpg"
    }
]

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