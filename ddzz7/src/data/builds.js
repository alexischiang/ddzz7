let builds = [{
		name: "3光羽 德",
		no: 0,
		actived: false,
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
		earlyBuild: [37, 30, 19],
		midBuild: [57, 50, 53, 28, 55],
		coreBuild: [{
				chess: [37, 30, 19],
				introduction: '前期打工棋子'
			},
			{
				chess: [],
				introduction: '可以选择空城利用德鲁伊快速成型'
			},
		]
	},
	{
		name: "6光羽 德猎",
		no: 1,
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
		earlyBuild: [37, 30, 19],
		midBuild: [],
		coreBuild: [{
				chess: [37, 30, 19],
				introduction: '前期打工棋子'
			},
			{
				chess: [],
				introduction: '可以选择空城利用德鲁伊快速成型'
			},
		]
	},
	{
		name: "德刺",
		no: 2,
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
		earlyBuild: [37, 30, 19],
		midBuild: [57, 53, 32, 25, 38],
		coreBuild: [{
				chess: [37, 30, 19],
				introduction: '前期打工棋子'
			},
			{
				chess: [],
				introduction: '可以选择空城利用德鲁伊快速成型'
			},
			{
				chess: [],
				introduction: '中期尽可能拿到3光羽3刺'
			},
		]
	},
	{
		name: "4术 精英战",
		no: 3,
		actived: false,
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
		earlyBuild: [49, 29, 43, 1, 25],
		midBuild: [49, 29, 43, 1, 39],
		coreBuild: [{
				chess: [25, 14],
				introduction: '前期打工棋子'
			},
			{
				chess: [],
				introduction: '术士羁绊加强'
			},
			{
				chess: [],
				introduction: '战士成型简单'
			}
		]
	},
	{
		name: "9精英战",
		no: 4,
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
			26,
			29,
			9,
			15
		],
		earlyBuild: [49, 29, 43, 1],
		midBuild: [49, 29, 43, 1, 55, 3],
		coreBuild: [{
			chess: [9, 3],
			introduction: '核心输出点'
		}, {
			chess: [],
			introduction: '优先升人口凑战士羁绊提高坦度'
		}, {
			chess: [15],
			introduction: '补足输出'
		}]

	},
	{
		name: "冰川骑士",
		no: 5,
		actived: true,
		detail: false,
		buff: ['4冰川族', '4骑士', '2术士', '2不眠族', '1恶魔', ],
		finalBuild: [
			3,
			6,
			7,
			16,
			39,
			13,
			21,
			22,
			5
		],
		earlyBuild: [37, 30, 19],
		midBuild: [3, 6, 7, 16, 21],
		coreBuild: [{
				chess: [3],
				introduction: '核心输出点'
			},
			{
				chess: [21],
				introduction: '核心前排'
			},
			{
				chess: [39],
				introduction: '不眠+术士buff'
			}
		]
	},
	{
		name: "双猎魔人流",
		no: 6,
		actived: true,
		detail: false,
		buff: ['6战士', '2人类', '2猎魔人', '2海族', '1恶魔', ],
		finalBuild: [
			14, 49, 55, 26, 18, 1, 9, 44, 35, 41
		],
		earlyBuild: [40, 18, 49, 29, 44],
		midBuild: [40, 55, 49, 29, 44, 14],
		coreBuild: [{
				chess: [40, 29],
				introduction: '前期打工棋子'
			},
			{
				chess: [44, 14],
				introduction: '双猎魔人核心'
			}
		]
	},

]

export default builds