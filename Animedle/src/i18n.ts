import {createI18n} from "vue-i18n";

export const messages = {
	en: {
		title: 'Animedle',
		language: {
			title: 'Choose your language',
			select: 'Choose your language'
		},
		home: {
			guess: {
				anime: "Guess your anime",
			},
			mods: {
				name: 'Mods',
				mod1: {
					name: 'Classic',
					description: 'Get clue on every try',
					link: '/classic',
					imgPath: 'luffy.svg'
				},
				mod2: {
					name: 'Emoji',
					link: '/emoji',
					description: 'Guess the anime with emojis',
					imgPath: 'zoro.svg'
				},
				mod3: {
					name: 'Discover',
					link: '/blur',
					description: 'Guess the anime by its cover',
					imgPath: 'sanji.svg'
				},
				mod4: {
					name: 'Coming soon',
					link: '/',
					description: '',
					imgPath: 'zoro.svg'
				},
			}
		},
		classic: {
			text: {
				title: 'Guess the good anime',
				text: 'Tape any anime to begin.'
			},
			game: {
				name: 'Anime',
				season: 'Season/Movie',
				year: 'Release year',
				genres: 'Genres',
				studio: 'Studio',
				status: 'Status',
				type: 'Type'
			},
			streaks: {
				title: "Streak",
			},
			color: {
				title: 'Color Indicator',
				correct: 'Correct',
				partial: 'Partial',
				wrong: 'Incorrect'
			},
			win: {
				title: 'Congratulations, you have guessed right anime',
				guess: 'You have guessed',
				try: 'Number of tries',
				next: 'Next mode',
				replay: 'Replay',
				thanks:"Thanks a lot for playing and see you soon for the next mode ❤️"
			},
		},
		emoji: {
			box: {
				title: 'Which anime do these emojis describe ?',
				footer: 'Each try unlocks an emoji.'
			}
		},
		blur: {
			loose: {
				title: 'Sorry, you lost',
				guess: 'The right answer was'
			},
		},
		help: {
			title1: 'How to play ?',
			title2: 'Properties',
			classic: {
				how: {
					1: 'Just type the name of an anime for its properties to be revealed',
					2: 'The color of the tiles will change to show how close your guess was to the anime to find.',
					3: "Green",
					4: "indicates that the property is an exact match.",
					5: "Orange",
					6: "indicates that the property is partially correct.",
					7: "Red",
					8: "indicates that there is no common thing between your guess and the property.",
					9: "⬇️ ⬆️ The arrows also indicate if the property of the answer is greater or less than your guess."
				},
				props: {
					1: 'Here is the detail of each of the properties columns :',
					2: 'Genres :',
					3: 'Possible values:',
					4: 'Action, Adventure, Drama, etc...',
					5: 'Release year :',
					6: '2000, 2001, 2002, etc...',
					7: 'Season/Movie :',
					8: 'Movie, 1, 2, etc...',
					9: 'Type :',
					10: 'Shonen, Seinen, Isekai, etc...',
					11: 'Studio :',
					12: 'Madhouse, Toei Animation, etc...',
					13: 'Status :',
					14: 'Ongoing, Finished, etc...',
					15: 'The genres of the anime to find, hover to see if the genre in question is present in the anime to find.',
					16: 'The release year of the anime to find.',
					17: 'The number of seasons or the movie of the anime to find.',
					18: 'The type of the anime to find.',
					19: 'The studio of the anime to find.',
					20: 'The status of the anime to find.'
				},
			},
			emoji: {
				title: 'Mode emoji',
				how: {
					1: 'Emojis are displayed to describe an anime.',
					2: 'Guess the anime with the emojis !',
					3: 'Each try unlocks a new emoji.',
				},
				footer: 'Good luck !'
			},
			image: {
				how: {
					1: 'An image of the cover of an anime is displayed but it is blurred.',
					2: 'You have your 8 lives ❤️, arrived at 0, you have lost.',
					3: 'Each attempt makes the cover less blurry.',
				},
			}
		},
		footer: {
			made: 'Made with ❤️ by',
			powered: 'Powered by'
		}
	},
	fr: {
		title: 'Animedle',
		language: {
			title: 'Choisis ta langue',
			select:'Choisis ta langue'
		},
		home: {
			guess: {
				anime: "Devine l'animé"
			},
			mods: {
				name: 'Modes',
				mod1: {
					name: 'Classique',
					link: '/classic',
					description: 'Obtiens des indices à chaque essai',
					imgPath: 'luffy.svg'
				},
				mod2: {
					name: 'Emoji',
					link: '/emoji',
					description: 'Devine l\'animé avec des emojis',
					imgPath: 'zoro.svg'
				},
				mod3: {
					name: 'Image',
					link: '/blur',
					description: 'Devine l\'animé par sa couverture',
					imgPath: 'sanji.svg'
				},
				mod4: {
					name: 'Bientôt disponible',
					link: '/',
					description: '',
					imgPath: 'sanji.svg'
				},
			}
		},
		classic: {
			text: {
				title: 'Devine le bon anime',
				text: 'Tape n\'importe quel anime pour commencer.'
			},
			game: {
				name: 'Anime',
				season: 'Saison/Film',
				year: 'Annee de sortie',
				genres: 'Genres',
				studio: 'Studio',
				status: 'Statut',
				type: 'Type'
			},
			streaks: {
				title: "Serie",
			},
			color: {
				title: 'Indicateurs de couleurs',
				correct: 'Correct',
				partial: 'Partiel',
				wrong: 'Incorrect'
			},
			win: {
				title: 'Félicitation, tu as deviné l\'anime',
				guess: 'Tu as deviné',
				try: 'Nombre d\'essais',
				next: 'Prochain mode',
				replay: 'Rejouer',
				thanks: "Merci beaucoup d'avoir joué et à bientôt pour le prochain mode ❤️"
			},
		},
		emoji: {
			box: {
				title: 'Quel anime ces emojis decrivent ?',
				footer: 'Chaque essai débloque un emoji.'
			}
		},
		blur: {
			loose: {
				title: 'Désolé, tu as perdu',
				guess: 'La bonne réponse était'
			},
		},
		help: {
			title1: 'Comment jouer ?',
			title2: 'Propriétés',
			classic: {
				how: {
					1: 'Il suffit de taper le nom d\'un animé pour que ses propriétés soient révélées.',
					2: 'La couleur des tuiles changera pour montrer à quel point ton essai était proche de l\'animé à trouver.',
					3: "Vert",
					4: "indique que la propriété est une correspondance exacte.",
					5: "Jaune",
					6: "indique que la propriété est partiellement correcte.",
					7: "Rouge",
					8: "indique qu'il n'y a pas de chose en commun entre ton essai et la propriété.",
					9: "⬇️ ⬆️ Les flèches indiquent également si la propriété de la réponse est supérieure ou inférieure à ton essai."
				},
				props: {
					1: 'Voici le détail de chacune des colonnes de propriétés :',
					2: 'Genres :',
					3: 'Valeurs possibles: ',
					4: 'Action, Aventure, Dramme, etc...',
					5: 'Annee de sortie :',
					6: '2000, 2001, 2002, etc...',
					7: 'Saison/Film :',
					8: 'Film, 1, 2, etc...',
					9: 'Type :',
					10: 'Shonen, Seinen, Isekai, etc...',
					11: 'Studio :',
					12: 'Madhouse, Toei Animation, etc...',
					13: 'Statut :',
					14: 'En cours, Terminé, etc...',
					15: 'Les genres de l\'animé recherché, survolez pour voir si le genre en question est présent dans l\'animé recherché.',
					16: 'L\'année de sortie de l\'animé recherché.',
					17: 'Le nombre de saisons ou le film de l\'animé recherché.',
					18: 'Le type de l\'animé recherché.',
					19: 'Le studio de l\'animé recherché.',
					20: 'Le statut de l\'animé recherché.'
				},
			},
			emoji: {
				title: 'Mode emoji',
				how: {
					1: 'Des emojis sont affichés pour décrire un animé.',
					2: 'Devine l\'animé avec les emojis !',
					3: 'Chaque essai débloque un nouvel emoji.',
				},
				footer: 'Bon courage !'
			},
			image: {
				how: {
					1: 'Une image de la couverture d\'un animé est affichée mais elle est floutée.',
					2: 'Vous avez vos 8 vies ❤️, arrivé à 0, vous avez perdu.',
					3: 'Chaque tentative rends la couverture moins floue.',
				},
			}
		},
		footer: {
			made: 'Crée avec le ❤️ par',
			powered: 'Construit en'
		}
	}
};

const i18n = createI18n({
	locale: 'fr',
	legacy: false,
	inheriteLocale: true,
	messages
});

export default i18n;
