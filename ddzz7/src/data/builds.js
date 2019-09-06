let builds = [{
		name: "3光羽德",
		actived: true,
		buff: ['4德鲁伊', '3光羽', '2野兽', '2人类', '3战士', '1恶魔', '2猎魔人'],
		finalBuild: [
			"WisperSeer",
			"Unicorn",
			"WarpwoodSage",
			"Razorclaw",
			"FallenWitcher",
			"DoomArbiter",
			"TabooWitcher",
			"Werewolf",
			"PirateCaptain"
		],
		coreBuild: {
			coreBuild1: ["WisperSeer", "Unicorn", "WarpwoodSage", "Razorclaw"],
			coreBuild2: ['WisperSeer', 'WarpwoodSage', ['ShiningAssassin', 'TabooWitcher', 'Shadowcrawler']]
		}
	},
	{
		name: "6光羽猎人德",
		actived: true,
		buff: ['4德鲁伊', '6光羽', '3猎人'],
		finalBuild: [
			"WisperSeer",
			"Unicorn",
			"WarpwoodSage",
			"Razorclaw",
			"光羽弩手",
			"ShiningAssassin",
			"TabooWitcher",
			"WindRanger",
			"DwarfSniper"
		],
		coreBuild: {
			coreBuild1: ["WisperSeer", "Unicorn", "WarpwoodSage", "Razorclaw"],
			coreBuild2: ['WisperSeer', 'WarpwoodSage', 'ShiningAssassin', 'TabooWitcher', 'WindRanger', '光羽弩手']
		}
	}
]

export default builds