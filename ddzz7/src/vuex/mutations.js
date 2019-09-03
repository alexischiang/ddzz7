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
	}
}