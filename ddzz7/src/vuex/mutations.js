export default {

	chooseRace(state, race) {
		for (let i = 0; i < 14; i++) {
			for (let key in state.isActiveRace[i]) {
				if (key == race) {
					if (state.isActiveRace[i][key]) {
						state.isActiveRace[i][key] = false;
						state.isActiveRace[14]["none"] = true;
					} else {
						state.isActiveRace[i][key] = true;
						state.isActiveRace[14]["none"] = false;
					}
				} else {
					state.isActiveRace[i][key] = false;
				}
			}
		}
	},
	chooseClass(state, theclass) {
		for (var i = 0; i < 10; i++) {
			for (var key in state.isActiveClass[i]) {
				if (key == theclass) {
					if (state.isActiveClass[i][key]) {
						state.isActiveClass[i][key] = false;
						state.isActiveClass[10]["none"] = true;
					} else {
						state.isActiveClass[i][key] = true;
						state.isActiveClass[10]["none"] = false;
					}
				} else {
					state.isActiveClass[i][key] = false;
				}
			}
		}
	},
	pickChess(state, chessinfo) {
		for (let i = 0; i < state.pickedChess.length; i++) {
			if (chessinfo[1] == state.pickedChess[i].cnname || i == 9) {
				return 0;
			}
		}
		let chessObj = {
			name: chessinfo[0],
			cnname: chessinfo[1],
			race: chessinfo[2],
			class: chessinfo[3]
		}
		state.pickedChess.push(chessObj);
		for (let i = 0; i < state.raceCount.length; i++) {
			for (let key in state.raceCount[i]) {
				if (chessObj.race.toLowerCase() == key) {
					state.raceCount[i][key] += 1;
				}
			}
		}
		for (let i = 0; i < state.classCount.length; i++) {
			for (let key in state.classCount[i]) {
				if (chessObj.class.toLowerCase() == key) {
					state.classCount[i][key] += 1;
				}
			}
		}
	},
	cancelChess(state, chessname) {
		for (let i = 0; i < state.pickedChess.length; i++) {
			if (chessname == state.pickedChess[i].cnname) {
				for (let j = 0; j < state.raceCount.length; j++) {
					for (let key in state.raceCount[j]) {
						if (state.pickedChess[i].race.toLowerCase() == key) {
							state.raceCount[j][key] -= 1;
						}
					}
				}
				for (let j = 0; j < state.classCount.length; j++) {
					for (let key in state.classCount[j]) {
						if (state.pickedChess[i].class.toLowerCase() == key) {
							state.classCount[j][key] -= 1;
						}
					}
				}
				state.pickedChess.splice(i, 1);
			}
		}
	}
}