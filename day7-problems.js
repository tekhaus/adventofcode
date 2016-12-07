const ips = require('./day7-ips')

let supportTLScount = 0
let supportSSLcount = 0

ips.map(ip => {
	let parts = ip.split('[')
	let outside = [] // supernets
	let inside = [] // hypernets
	let abas = []

	parts.map(part => {
		bracketPos = part.indexOf(']')
		if (bracketPos > -1) {
			inside.push(part.slice(0, bracketPos))
			outside.push(part.slice(bracketPos + 1))
		} else {
			outside.push(part)
		}
	})

	// supports TLS: check for any outside abba and NO abba inside
	if (inside.some(seq => hasAbba(seq)) === false && outside.some(seq => hasAbba(seq))) supportTLScount++

	// build array of aba matches
	for (seq of outside) getAbas(abas, seq)

	// supports SSL: check if any outside aba matches bab inside
	if (abas.some(([a, b] = aba) => inside.some(seq => seq.includes(`${b}${a}${b}`)))) supportSSLcount++
})

function hasAbba(str) {
	for (let i = 1; i < str.length - 2; i++) {
		if (str.charAt(i) === str.charAt(i+1)) {
			if (str.charAt(i) !== str.charAt(i-1)) {
				if (str.charAt(i-1) === str.charAt(i+2)) {
					return true
				}
			} 
		}
	}
	return false
}

function getAbas(abas, str) {
	for (let i = 0; i < str.length - 2; i++) {
		if (str.charAt(i) === str.charAt(i+2) && str.charAt(i) !== str.charAt(i+1)) {
			abas.push(str.slice(i, i+3))
		}
	}
}

console.log('Support TLS: ', supportTLScount)
console.log('Support SSL: ', supportSSLcount)