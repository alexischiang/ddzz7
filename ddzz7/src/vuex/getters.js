export default {
	// 返回数组 [{棋子名字:{种族:xx,职业:xx}},...]
	// 为筛选器做输入数组因为需要使用filter方法
	chessArray: function (state) {
		let myArray = [];
		for (let key in state.chessdata) {
			const temp = {};
			let race = "";
			if (state.chessdata[key].races == "Glacier Clan") {
				race = "Glacier";
			} else if (state.chessdata[key].races == "Cave Clan") {
				race = "caveclan";
			} else {
				race = state.chessdata[key].races;
			}
			temp[key] = {
				races: race,
				"2races": state.chessdata[key]["2races"],
				classes: state.chessdata[key].classes
			};
			myArray.push(temp);
		}
		return myArray;
	},
	// 逻辑解释：
	// 1.R -> C：先筛选R （过滤） 变换被CR监听 再选C (过滤)
	// 2.C -> R: 先筛选C (过滤) 没有被R监听 再选R （过滤） 变换被CR监听 （过滤）
	RacefilteredArray: (state, getters) => {
		if (state.isActiveRace[14]["none"]) {
			console.log("all");
			return getters.chessArray;
		} else {
			console.log("race-filter");
			return getters.chessArray.filter(a => {
				for (let key in a) {
					for (let i = 0; i < 14; i++) {
						if (
							state.isActiveRace[i][a[key].races.toLowerCase()] ||
							state.isActiveRace[i][a[key]["2races"].toLowerCase()]
						) {
							return true;
						}
					}
				}
				return false;
			});
		}
	},
	ClassRacefilteredArray: (state, getters) => {
		if (state.isActiveClass[10]["none"]) {
			console.log("all");
			return getters.RacefilteredArray;
		} else {
			console.log("race-class-filter");
			return getters.RacefilteredArray.filter(a => {
				for (let key in a) {
					for (let i = 0; i < 10; i++) {
						if (state.isActiveClass[i][a[key].classes.toLowerCase()]) {
							return true;
						}
					}
				}
				return false;
			});
		}
	},
	// 筛选返回激活的卡组
	buildsActivedArray: (state) => {
		return state.builds.filter(build => build.actived)
	},
	// recChess: [{光羽德:[xxx,xxx,xxx,...]},{..},..]

	// recChess: (state, getters) => {
	// 	let output = [];
	// 	for (let i = 0; i < getters.buildsActivedArray.length; i++) {
	// 		let a = [];
	// 		let obj = {};
	// 		for (let j = 0; j < getters.buildsActivedArray[i].finalBuild.length; j++) {
	// 			a.push(getters.buildsActivedArray[i].finalBuild[j])
	// 		}
	// 		obj[getters.buildsActivedArray[i].name] = a;
	// 		output.push(obj);
	// 	}
	// 	return output
	// },

	// 根据pickedChess的内容动态改变recChess的内容
	recChessFilter: (state, getters) => {
		function getRecChess(arr) {
			let output = [];
			for (let i = 0; i < arr.length; i++) {
				let a = [];
				let obj = {};
				for (let j = 0; j < arr[i].finalBuild.length; j++) {
					a.push(arr[i].finalBuild[j])
				}
				obj[arr[i].name] = a;
				output.push(obj);
			}
			return output
		};
		let recChessCopy = getRecChess(getters.buildsActivedArray)
		for (let i = 0; i < state.pickedChess.length; i++) {
			for (let j = 0; j < recChessCopy.length; j++) {
				for (let buildname in recChessCopy[j]) {
					for (let k = 0; k < recChessCopy[j][buildname].length; k++) {
						if (state.pickedChess[i]['name'] == recChessCopy[j][buildname][k]) {
							recChessCopy[j][buildname].splice(k, 1)
						}
					}
				}
			}
		}
		return recChessCopy
	},
	beastBuff: (state) => {
		let arr = [];
		if (state.raceCount[0]['beast'] == 2 || state.raceCount[0]['beast'] == 3) {
			console.log(`you got 2 beast`)
			arr.push(state.racebuffdata[8])
		} else if (state.raceCount[0]['beast'] == 4 || state.raceCount[0]['beast'] == 5) {
			console.log(`you got 4 beast`)
			arr.pop()
			arr.push(state.racebuffdata[9])
		} else if (state.raceCount[0]['beast'] == 6) {
			console.log(`you got 6 beast`)
			arr.pop()
			arr.push(state.racebuffdata[10])
		} else if (state.raceCount[0]['beast'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	caveclanBuff: (state) => {
		let arr = [];
		if (state.raceCount[1]['caveclan'] == 2 || state.raceCount[1]['caveclan'] == 3) {
			console.log(`you got 2 caveclan`)
			arr.push(state.racebuffdata[11])
		} else if (state.raceCount[1]['caveclan'] == 4) {
			console.log(`you got 4 caveclan`)
			arr.pop()
			arr.push(state.racebuffdata[12])
		} else if (state.raceCount[1]['caveclan'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	demonBuff: (state) => {
		let arr = [];
		if (state.raceCount[2]['demon'] == 1) {
			console.log(`you got 1 demon`)
			arr.push(state.racebuffdata[5])
		} else if (state.raceCount[2]['demon'] < 1 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	godBuff: (state) => {
		let arr = [];
		if (state.raceCount[3]['god'] == 1) {
			console.log(`you got 1 god`)
			arr.push(state.racebuffdata[19])
		} else if (state.raceCount[3]['god'] == 2) {
			console.log(`you got 2 god`)
			arr.pop()
			arr.push(state.racebuffdata[20])
		} else if (state.raceCount[3]['god'] < 1 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	dragonBuff: (state) => {
		let arr = [];
		if (state.raceCount[4]['dragon'] == 3) {
			console.log(`you got 3 dragon`)
			arr.push(state.racebuffdata[21])
		} else if (state.raceCount[4]['dragon'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	dwarfBuff: (state) => {
		let arr = [];
		if (state.raceCount[5]['dwarf'] == 1 || state.raceCount[5]['dwarf'] == 2) {
			console.log(`you got 1 dwarf`)
			arr.push(state.racebuffdata[24])
		} else if (state.raceCount[5]['dwarf'] < 1 && arr.length == 1) {
			console.log('you got no dwarf')
			arr.pop()
		}
		return arr;
	},
	egersisBuff: (state) => {
		let arr = [];
		if (state.raceCount[6]['egersis'] == 2) {
			console.log(`you got 2 egersis`)
			arr.push(state.racebuffdata[15])
		} else if (state.raceCount[6]['egersis'] == 4) {
			console.log(`you got 4 egersis`)
			arr.pop()
			arr.push(state.racebuffdata[16])
		} else if (state.raceCount[6]['egersis'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	featheredBuff: (state) => {
		let arr = [];
		if (state.raceCount[7]['feathered'] == 3 || state.raceCount[7]['feathered'] == 4 || state.raceCount[7]['feathered'] == 5) {
			console.log(`you got 3 feathered`)
			arr.push(state.racebuffdata[3])
		} else if (state.raceCount[7]['feathered'] == 6) {
			console.log(`you got 6 feathered`)
			arr.pop()
			arr.push(state.racebuffdata[4])
		} else if (state.raceCount[7]['feathered'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	glacierBuff: (state) => {
		let arr = [];
		if (state.raceCount[8]['glacier'] == 2 || state.raceCount[8]['glacier'] == 3) {
			console.log(`you got 2 glacier`)
			arr.push(state.racebuffdata[17])
		} else if (state.raceCount[8]['glacier'] == 4) {
			console.log(`you got 4 glacier`)
			arr.pop()
			arr.push(state.racebuffdata[18])
		} else if (state.raceCount[8]['glacier'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	goblinBuff: (state) => {
		let arr = [];
		if (state.raceCount[9]['goblin'] == 3 || state.raceCount[9]['goblin'] == 4 || state.raceCount[9]['goblin'] == 5) {
			console.log(`you got 3 goblin`)
			arr.push(state.racebuffdata[6])
		} else if (state.raceCount[9]['goblin'] == 6) {
			console.log(`you got 6 goblin`)
			arr.pop()
			arr.push(state.racebuffdata[7])
		} else if (state.raceCount[9]['goblin'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	humanBuff: (state) => {
		let arr = [];
		if (state.raceCount[10]['human'] == 2 || state.raceCount[10]['human'] == 3) {
			console.log(`you got 2 human`)
			arr.push(state.racebuffdata[0])
		} else if (state.raceCount[10]['human'] == 4 || state.raceCount[10]['human'] == 5) {
			console.log(`you got 4 human`)
			arr.pop()
			arr.push(state.racebuffdata[1])
		} else if (state.raceCount[10]['human'] == 6) {
			console.log(`you got 6 human`)
			arr.pop()
			arr.push(state.racebuffdata[2])
		} else if (state.raceCount[10]['human'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	marineBuff: (state) => {
		let arr = [];
		if (state.raceCount[12]['marine'] == 2 || state.raceCount[12]['marine'] == 3) {
			console.log(`you got 2 marine`)
			arr.push(state.racebuffdata[13])
		} else if (state.raceCount[12]['marine'] == 4) {
			console.log(`you got 4 marine`)
			arr.pop()
			arr.push(state.racebuffdata[14])
		} else if (state.raceCount[12]['marine'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	spiritBuff: (state) => {
		let arr = [];
		if (state.raceCount[13]['spirit'] == 2 || state.raceCount[13]['spirit'] == 3) {
			console.log(`you got 2 spirit`)
			arr.push(state.racebuffdata[22])
		} else if (state.raceCount[13]['spirit'] == 4) {
			console.log(`you got 4 spirit`)
			arr.pop()
			arr.push(state.racebuffdata[23])
		} else if (state.raceCount[13]['spirit'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	assassinBuff: (state) => {
		let arr = [];
		if (state.classCount[0]['assassin'] == 3 || state.classCount[0]['assassin'] == 4 || state.classCount[0]['assassin'] == 5) {
			console.log(`you got 3 ass`)
			arr.push(state.classbuffdata[8])
		} else if (state.classCount[0]['assassin'] == 6) {
			console.log(`you got 6 ass`)
			arr.pop()
			arr.push(state.classbuffdata[9])
		} else if (state.classCount[0]['assassin'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	druidBuff: (state) => {
		let arr = [];
		if (state.classCount[1]['druid'] == 2 || state.classCount[1]['druid'] == 3) {
			console.log(`you got 2 druid`)
			arr.push(state.classbuffdata[10])
		} else if (state.classCount[1]['druid'] == 4) {
			console.log(`you got 4 druid`)
			arr.pop()
			arr.push(state.classbuffdata[11])
		} else if (state.classCount[1]['druid'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	hunterBuff: (state) => {
		let arr = [];
		if (state.classCount[2]['hunter'] == 3 || state.classCount[2]['hunter'] == 4 || state.classCount[3]['hunter'] == 5) {
			console.log(`you got 3 hunter`)
			arr.push(state.classbuffdata[5])
		} else if (state.classCount[2]['hunter'] == 6) {
			console.log(`you got 6 hunter`)
			arr.pop()
			arr.push(state.classbuffdata[6])
		} else if (state.classCount[2]['hunter'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	knightBuff: (state) => {
		let arr = [];
		if (state.classCount[3]['knight'] == 2 || state.classCount[3]['knight'] == 3) {
			console.log(`you got 2 knight`)
			arr.push(state.classbuffdata[12])
		} else if (state.classCount[3]['knight'] == 4 || state.classCount[3]['knight'] == 5) {
			console.log(`you got 4 knight`)
			arr.pop()
			arr.push(state.classbuffdata[13])
		} else if (state.classCount[3]['knight'] == 6) {
			console.log(`you got 6 knight`)
			arr.pop()
			arr.push(state.classbuffdata[14])
		} else if (state.classCount[3]['knight'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	mageBuff: (state) => {
		let arr = [];
		if (state.classCount[4]['mage'] == 3 || state.classCount[4]['mage'] == 4 || state.classCount[4]['mage'] == 5) {
			console.log(`you got 3 mage`)
			arr.push(state.classbuffdata[15])
		} else if (state.classCount[4]['mage'] == 6) {
			console.log(`you got 6 mage`)
			arr.pop()
			arr.push(state.classbuffdata[16])
		} else if (state.classCount[4]['mage'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	mechBuff: (state) => {
		let arr = [];
		if (state.classCount[5]['mech'] == 2 || state.classCount[5]['mech'] == 3) {
			console.log(`you got 2 mech`)
			arr.push(state.classbuffdata[20])
		} else if (state.classCount[5]['mech'] == 4) {
			console.log(`you got 4 mech`)
			arr.pop()
			arr.push(state.classbuffdata[21])
		} else if (state.classCount[5]['mech'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	shamanBuff: (state) => {
		let arr = [];
		if (state.classCount[6]['shaman'] == 2) {
			console.log(`you got 2 shaman`)
			arr.push(state.classbuffdata[7])
		} else if (state.classCount[6]['shaman'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	warlockBuff: (state) => {
		let arr = [];
		if (state.classCount[7]['warlock'] == 2 || state.classCount[7]['warlock'] == 3) {
			console.log(`you got 2 warlock`)
			arr.push(state.classbuffdata[17])
		} else if (state.classCount[7]['warlock'] == 4 || state.classCount[7]['warlock'] == 5) {
			console.log(`you got 4 warlock`)
			arr.pop()
			arr.push(state.classbuffdata[18])
		} else if (state.classCount[7]['warlock'] == 6) {
			console.log(`you got 6 warlock`)
			arr.pop()
			arr.push(state.classbuffdata[19])
		} else if (state.classCount[7]['warlock'] < 2 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	warriorBuff: (state) => {
		let arr = [];
		if (state.classCount[8]['warrior'] == 3 || state.classCount[8]['warrior'] == 4 || state.classCount[8]['warrior'] == 5) {
			console.log(`you got 3 warrior`)
			arr.push(state.classbuffdata[2])
		} else if (state.classCount[8]['warrior'] == 6 || state.classCount[8]['warrior'] == 7 || state.classCount[8]['warrior'] == 8) {
			console.log(`you got 6 warrior`)
			arr.pop()
			arr.push(state.classbuffdata[3])
		} else if (state.classCount[8]['warrior'] == 9) {
			console.log(`you got 9 warrior`)
			arr.pop()
			arr.push(state.classbuffdata[4])
		} else if (state.classCount[8]['warrior'] < 3 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	witcherBuff: (state) => {
		let arr = [];
		if (state.classCount[9]['witcher'] == 1) {
			console.log(`you got 1 witcher`)
			arr.push(state.classbuffdata[0])
		} else if (state.classCount[9]['witcher'] == 2) {
			console.log(`you got 2 witcher`)
			arr.pop()
			arr.push(state.classbuffdata[1])
		} else if (state.classCount[9]['witcher'] < 1 && arr.length == 1) {
			arr.pop()
		}
		return arr;
	},
	raceBuffArray: (state, getters) => {
		return [
			getters.beastBuff,
			getters.caveclanBuff,
			getters.demonBuff,
			getters.godBuff,
			getters.dragonBuff,
			getters.dwarfBuff,
			getters.egersisBuff,
			getters.featheredBuff,
			getters.glacierBuff,
			getters.goblinBuff,
			getters.humanBuff,
			getters.marineBuff,
			getters.spiritBuff
		]
	},
	classBuffArray: (state, getters) => {
		return [
			getters.assassinBuff,
			getters.druidBuff,
			getters.hunterBuff,
			getters.knightBuff,
			getters.mageBuff,
			getters.mechBuff,
			getters.shamanBuff,
			getters.warlockBuff,
			getters.warriorBuff,
			getters.witcherBuff
		]
	}
}