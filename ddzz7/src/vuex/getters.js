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
	ClassRacefilteredArray: function (state, getters) {
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
	}
}