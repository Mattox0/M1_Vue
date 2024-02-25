export const messages = {
	en: {
		title: 'Animedle',
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
					imgPath: 'src/assets/images/luffy.svg'
				},
				mod2: {
					name: 'Emoji',
					link: '/emoji',
					description: 'Guess the anime with emojis',
					imgPath: 'src/assets/images/zoro.svg'
				},
				mod3: {
					name: 'Coming soon',
					link: '/',
					description: '',
					imgPath: 'src/assets/images/sanji.svg'
				}
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
				title: 'Which anime do these emojis describe ?'
			}
		},
		footer: {
			made: 'Made with ❤️ by',
			powered: 'Powered by'
		}
	},
	fr: {
		title: 'Animedle',
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
					imgPath: '/assets/images/luffy.svg'
				},
				mod2: {
					name: 'Emoji',
					link: '/emoji',
					description: 'Devine l\'animé avec des emojis',
					imgPath: '/assets/images/zoro.svg'
				},
				mod3: {
					name: 'Bientôt disponible',
					link: '/',
					description: '',
					imgPath: '/assets/images/sanji.svg'
				}
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
				title: 'Quel anime ces emojis decrivent ?'
			}
		},
		footer: {
			made: 'Crée avec le ❤️ par',
			powered: 'Construit en'
		}
	}
};

