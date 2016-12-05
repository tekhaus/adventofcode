// abc -> 18f47a30
// ugkcyxxp -> d4cd2ee1
const md5 = require('blueimp-md5')
const doorId = 'ugkcyxxp'
let password = ''
let i = 0

do {
	let hash = md5(doorId + i)
	if (hash.slice(0, 5) === '00000') {
		password+= hash.charAt(5)
		console.log('partial: ', password)
	}
	i++
} while (password.length < 8)

console.log('full: ', password)