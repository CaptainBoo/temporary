import autotile from 'autotile';
const myLevel = [
	[0, 1, 0, 0, 0, 0, 0],
	[0, 1, 0, 1, 1, 1, 0],
	[0, 1, 1, 1, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 1, 0, 1, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 0, 1, 1, 1, 0, 1],
	[0, 0, 1, 1, 1, 0, 0],
	[1, 0, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[0, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 1, 1, 0, 0],
	[0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0],
];

const tiles = autotile(myLevel);

console.log(tiles);
