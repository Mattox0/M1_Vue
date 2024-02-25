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
        "imgPath": "src/assets/images/demon-slayer.jpg",
        "emoji": [
          "JAPANESE GOBLIN",
          "BOAR",
          "HIGH VOLTAGE SIGN",
          "NINJA"
        ]
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
        "imgPath": "src/assets/images/attack-on-titans.jpg",
        "emoji": [
            "FLEUR-DE-LIS",
            "SCARF",
            "CROSSED SWORDS",
            "JAPANESE SYMBOL FOR BEGINNER"
        ]
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
        "imgPath": "src/assets/images/jujustu-kaisen.webp",
        "emoji": [
            "WHITE LEFT POINTING BACKHAND INDEX",
            "PANDA FACE",
            "INFINITY",
            "SMILING FACE WITH HORNS"
        ]
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
        "imgPath": "src/assets/images/death-note.jpg",
        "emoji": [
            "NOTEBOOK",
            "MAHJONG TILE RED DRAGON",
            "WRITING HAND",
            "SKULL AND CROSSBONES"
        ]
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
        "imgPath": "src/assets/images/MHA.jpg",
        "emoji": [
            "SCHOOL",
            "MAN SUPERHERO",
            "COLLISION SYMBOL",
            "RIGHT-FACING FIST"
        ]
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
        "imgPath": "src/assets/images/one-punch-man.jpg",
        "emoji": [
            "MAN: BALD",
            "BOXING GLOVE",
            "UNAMUSED FACE"
        ]
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
        "imgPath": "src/assets/images/sword-art-online.webp",
        "emoji": [
            "DROP OF BLOOD",
            "MEAT ON BONE",
            "MAN VAMPIRE",
            "HOCHO"
        ]
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
        "imgPath": "src/assets/images/naruto.jpg",
        "emoji": [
            "FOX FACE",
            "MAN RUNNING FACING RIGHT",
            "STEAMING BOWL",
            "FISH CAKE WITH SWIRL DESIGN"
        ]
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