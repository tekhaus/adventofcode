const directions = ['L5', 'R1', 'L5', 'L1', 'R5', 'R1', 'R1', 'L4', 'L1', 'L3', 'R2', 'R4', 'L4', 'L1', 'L1', 'R2', 'R4', 'R3', 'L1', 'R4', 'L4', 'L5', 'L4', 'R4', 'L5', 'R1', 'R5', 'L2', 'R1', 'R3', 'L2', 'L4', 'L4', 'R1', 'L192', 'R5', 'R1', 'R4', 'L5', 'L4', 'R5', 'L1', 'L1', 'R48', 'R5', 'R5', 'L2', 'R4', 'R4', 'R1', 'R3', 'L1', 'L4', 'L5', 'R1', 'L4', 'L2', 'L5', 'R5', 'L2', 'R74', 'R4', 'L1', 'R188', 'R5', 'L4', 'L2', 'R5', 'R2', 'L4', 'R4', 'R3', 'R3', 'R2', 'R1', 'L3', 'L2', 'L5', 'L5', 'L2', 'L1', 'R1', 'R5', 'R4', 'L3', 'R5', 'L1', 'L3', 'R4', 'L1', 'L3', 'L2', 'R1', 'R3', 'R2', 'R5', 'L3', 'L1', 'L1', 'R5', 'L4', 'L5', 'R5', 'R2', 'L5', 'R2', 'L1', 'L5', 'L3', 'L5', 'L5', 'L1', 'R1', 'L4', 'L3', 'L1', 'R2', 'R5', 'L1', 'L3', 'R4', 'R5', 'L4', 'L1', 'R5', 'L1', 'R5', 'R5', 'R5', 'R2', 'R1', 'R2', 'L5', 'L5', 'L5', 'R4', 'L5', 'L4', 'L4', 'R5', 'L2', 'R1', 'R5', 'L1', 'L5', 'R4', 'L3', 'R4', 'L2', 'R3', 'R3', 'R3', 'L2', 'L2', 'L2', 'L1', 'L4', 'R3', 'L4', 'L2', 'R2', 'R5', 'L1', 'R2']

let facing = 'N'
let northBlocks = 0,
	southBlocks = 0,
	eastBlocks = 0,
	westBlocks = 0

for (let path of directions) {
	let turn = path.slice(0,1)
	let blocks = path.slice(1)

	switch (facing) {
		case 'N':
			turn === 'L' ? move('W', blocks) : move('E', blocks)
			break
		case 'S':
			turn === 'L' ? move('E', blocks) : move('W', blocks)
			break
		case 'E':
			turn === 'L' ? move('N', blocks) : move('S', blocks)
			break
		case 'W':
			turn === 'L' ? move('S', blocks) : move('N', blocks)
	}
}

function move(direction, distance) {
	switch (direction) {
		case 'N':
			facing = 'N'
			northBlocks+= parseInt(distance)
			break
		case 'S':
			facing = 'S'
			southBlocks+= parseInt(distance)
			break
		case 'E':
			facing = 'E'
			eastBlocks+= parseInt(distance)
			break
		case 'W':
			facing = 'W'
			westBlocks+= parseInt(distance)
	}
}

const distanceFromHQ = Math.abs(northBlocks - southBlocks) + Math.abs(eastBlocks - westBlocks)

console.log('HQ Distance: ', distanceFromHQ)