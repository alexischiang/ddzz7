let builds = [{
		name: "3光羽 德",
		no: 1,
		actived: true,
		detail: false,
		buff: ['4德鲁伊', '3光羽', '2野兽', '2人类', '3战士', '1恶魔', '2猎魔人'],
		finalBuild: [
			57,
			50,
			53,
			28,
			14,
			9,
			44,
			55,
			26
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [57, 53, [33, 44, 32]]
		}
	},
	{
		name: "6光羽 德猎",
		no: 2,
		actived: true,
		detail: false,
		buff: ['4德鲁伊', '6光羽', '3猎人'],
		finalBuild: [
			57,
			50,
			53,
			28,
			33,
			44,
			56,
			11
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [57, 53, 33, 44, 56, '光羽弩手']
		}
	},
	{
		name: "德刺",
		no: 3,
		actived: true,
		detail: false,
		buff: ['4德鲁伊', '3光羽', '2野兽', '6刺客', '1恶魔'],
		finalBuild: [
			57,
			50,
			53,
			28,
			32,
			23,
			54,
			38,
			25,
			33
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [32,
				23,
				54,
				38,
				25,
				33
			]
		}
	},
	{
		name: "4术 精英战",
		no: 4,
		actived: true,
		detail: false,
		buff: ['6战士', '4术士', '2野兽', '2人类', '2冰川族', '1恶魔', '2不眠族'],
		// to-do:缺少棋子 预言家
		finalBuild: [
			55,
			1,
			26,
			9,
			5,
			49,
			3,
			39,
			7
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [57, 53, [33, 44, 32]]
		}
	},
	{
		name: "新手精英战",
		no: 5,
		actived: true,
		detail: false,
		buff: ['9战士', '2海族', '2野兽', '2人类', '2洞洞族', '1恶魔'],
		finalBuild: [
			49,
			43,
			55,
			1,
			40,
			3,
			35,
			26,
			29,
			9
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [57, 53, [33, 44, 32]]
		}
	},
	{
		name: "test4",
		no: 6,
		actived: false,
		buff: ['4德鲁伊', '3光羽', '2野兽', '2人类', '3战士', '1恶魔', '2猎魔人'],
		finalBuild: [
			57,
			50,
			53,
			28,
			14,
			9,
			44,
			55,
			26
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [57, 53, [33, 44, 32]]
		}
	},
	{
		name: "test5",
		no: 7,
		actived: false,
		buff: ['4德鲁伊', '3光羽', '2野兽', '2人类', '3战士', '1恶魔', '2猎魔人'],
		finalBuild: [
			57,
			50,
			53,
			28,
			14,
			9,
			44,
			55,
			26
		],
		coreBuild: {
			coreBuild1: [57, 50, 53, 28],
			coreBuild2: [57, 53, [33, 44, 32]]
		}
	},

]

export default builds