const messages = require('./day6-messages')

let columns = []
let correctedMessage1 = ''
let correctedMessage2 = ''

// map columns to new arrays
messages.map((message, index) => {
	if (index === 0) {
		for (let i = 0;  i < message.length; i++) {
			columns.push([])
		}
	}
	message.split('').map((char, index) => {
		columns[index].push(char)
	})
})

// count char frequency
columns.map((column, index) => {
	let sortedChars = column.sort().join('')
	// regex to group by sequential char, sort by length
	let orderedChars = sortedChars.match(/([a-z])\1*/g).sort((a, b) => b.length - a.length)
	correctedMessage1+= orderedChars[0].charAt(0)
	correctedMessage2+= orderedChars[orderedChars.length - 1].charAt(0)
})

console.log('message1: ', correctedMessage1)
console.log('message2: ', correctedMessage2)