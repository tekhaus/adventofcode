const rooms = require('./day4-rooms.js')

// let sumOfSectorIds = 0
let realRooms = []

rooms.map(room => {
	let parts = room.split('-')
	let end = parts.pop()
	let [sectorId, checksum] = end.slice(0, end.length - 1).split('[')

	// rejoin remainder, split into single characters for sorting, then join for regex
	let encryptedChars = parts.join('').split('').sort().join('')

	// regex to group by sequential char, sort by length, else alpha for same length
	let uniqueChars = encryptedChars.match(/([a-z])\1*/g).sort((a, b) => b.length - a.length || a.localeCompare(b))

	// char of first 5 unique groups should match the checksum characters
	if (checksum.split('').every((char, index) => uniqueChars[index].charAt(0) === char)) {
		let decryptedChars = parts.map(part => {
			return part.split('').map(char => {
				// a-z = 97-122 decimal
				return String.fromCharCode(((char.charCodeAt(0) - 96  + parseInt(sectorId)) % 26) + 96)
			}).join('')
		}).join(' ')
		if (decryptedChars === 'northpole object storage') console.log('Room', sectorId)
	}
})
