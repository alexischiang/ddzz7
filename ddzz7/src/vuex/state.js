import chessdatajson from "../data/chessdata.json";
import builds from '../data/builds'
import classbuffdata from '../data/classbuffdata'
import racebuffdata from '../data/racebuffdata'
export default {
	chessdata: chessdatajson,
	builds: builds,
	racebuffdata: racebuffdata,
	classbuffdata: classbuffdata,
	isActiveRace: [{
			beast: false
		},
		{
			caveclan: false
		},
		{
			demon: false
		},
		{
			god: false
		},
		{
			dragon: false
		},
		{
			dwarf: false
		},
		{
			egersis: false
		},
		{
			feathered: false
		},
		{
			glacier: false
		},
		{
			goblin: false
		},
		{
			human: false
		},
		{
			kira: false
		},
		{
			marine: false
		},
		{
			spirit: false
		},
		{
			none: true
		}
	],
	isActiveClass: [{
			assassin: false
		},
		{
			druid: false
		},
		{
			hunter: false
		},
		{
			knight: false
		},
		{
			mage: false
		},
		{
			mech: false
		},
		{
			shaman: false
		},
		{
			warlock: false
		},
		{
			warrior: false
		},
		{
			witcher: false
		},
		{
			none: true
		}
	],
	// pickedChess:[ {cnname:xx,name:xx,race:xx,class:xx},{...},.. ]
	pickedChess: [],
	raceCount: [{
			beast: 0
		},
		{
			caveclan: 0
		},
		{
			demon: 0
		},
		{
			god: 0
		},
		{
			dragon: 0
		},
		{
			dwarf: 0
		},
		{
			egersis: 0
		},
		{
			feathered: 0
		},
		{
			glacier: 0
		},
		{
			goblin: 0
		},
		{
			human: 0
		},
		{
			kira: 0
		},
		{
			marine: 0
		},
		{
			spirit: 0
		}
	],
	classCount: [{
			assassin: 0
		},
		{
			druid: 0
		},
		{
			hunter: 0
		},
		{
			knight: 0
		},
		{
			mage: 0
		},
		{
			mech: 0
		},
		{
			shaman: 0
		},
		{
			warlock: 0
		},
		{
			warrior: 0
		},
		{
			witcher: 0
		}
	]

};