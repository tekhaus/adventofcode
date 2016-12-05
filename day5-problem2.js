// abc -> 05ace8e3
// ugkcyxxp -> f2c730e5
const md5 = require('blueimp-md5')
const doorId = 'ugkcyxxp'
let password = {}
let i = 0

do {
	let hash = md5(doorId + i)
	if (hash.slice(0, 5) === '00000') {
		if (hash.charAt(5) >= 0 && hash.charAt(5) <= 7) {
			if (!password[hash.charAt(5)]) {
				password[hash.charAt(5)] = hash.charAt(6)
				console.log('partial: ', password)
			}
		}
	}
	i++
} while (Object.keys(password).length < 8)

console.log('password: ', Object.values(password).join(''))