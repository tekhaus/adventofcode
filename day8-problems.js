const instructions = require('./day8-data')

// const instructions = [
// 'rect 3x2', // creates a small rectangle in the top-left corner:
// 'rotate column x=1 by 1', // rotates the second column down by one pixel:
// 'rotate row y=0 by 4', // rotates the top row right by four pixels:
// 'rotate column x=1 by 1' // again rotates the second column down by one pixel, causing the bottom pixel to wrap back to the top:
// ]

// create zeroed matrix
const grid = [
	Array(50).fill(0),
	Array(50).fill(0),
	Array(50).fill(0),
	Array(50).fill(0),
	Array(50).fill(0),
	Array(50).fill(0)
]

for (instruction of instructions) {
	const parts = instruction.split(' ')

	if (parts[0] === 'rect') { // turn on
		const [width, height] = parts[1].split('x')
		
		for (let rowNumber of Array(parseInt(height)).keys()) {
			for (let colNumber of Array(parseInt(width)).keys()) {
				grid[rowNumber][colNumber] = 1
			}
		}
	} else { // rotate
		if (parts[1] === 'row') { // shift row
			const rowNumber = parseInt(parts[2].slice(2))
			const shiftBy = parseInt(parts[4])

			for (let i of Array(shiftBy).keys()) {
				grid[rowNumber].unshift(grid[rowNumber].pop())
			}
		} else { // shift column
			const colNumber = parseInt(parts[2].slice(2))
			const shiftBy = parseInt(parts[4])
			const column = []

			// build temp column
			for (let rowNumber in grid) {
				column.push(grid[Math.abs(rowNumber - shiftBy + grid.length) % grid.length][colNumber])
			}

			// update grid from temp column
			for (let rowNumber in grid) {
				grid[rowNumber][colNumber] = column[rowNumber]
			}
		}
	}
}

const pixels = grid.reduce((total, row) => total + row.reduce((sum, curr) => sum + curr), 0)

const letters = grid.map(row => row.join(''))

console.log('active pixels: ', pixels) // 123
console.log(letters) // AFBUPZBJPS

