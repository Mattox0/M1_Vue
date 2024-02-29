# Animedle

Animedle est un jeu basé sur le fait de deviner des animés.
Pour le moment, l'application est en cours de développement, et comporte 3 modes de jeux.
- Classique : Le joueur doit deviner l'animé en fonction 

## Installation

```bash
# Installation de l'API
cd Animedle_API

# Installation de la base de données
docker-compose up -d

# Installation des dépendances
npm install

# Lancement de l'API
npm run start:dev

# Dans un autre terminal, faites un build
# changez préalablement le fichier build/build.ts pour changer l'adresse de votre base de donnée
npm run build:dev
```

```bash
# Installation de l'application
cd Animedle

# Installation des dépendances
npm install
```

## Lancement

```bash
# Lancement de l'API
cd Animedle_API
npm run start:dev

# Lancement de l'application
cd Animedle
npm run dev
```
