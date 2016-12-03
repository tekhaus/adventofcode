const triangles = require('./day3-triangles')

console.log('Total entries: ', triangles.length)

if (triangles.length % 3) console.log('data must divisble by 3')

const verticalTriangles = []

for (let i = 0; i < triangles.length; i = i + 3) {
	let triangle1 = [triangles[i][0], triangles[i+1][0], triangles[i+2][0]]
	let triangle2 = [triangles[i][1], triangles[i+1][1], triangles[i+2][1]]
	let triangle3 = [triangles[i][2], triangles[i+1][2], triangles[i+2][2]]
	verticalTriangles.push(triangle1, triangle2, triangle3)
}

const triangleCount = verticalTriangles.filter(([a,b,c] = [...triangle]) => a < b + c && b < a + c && c < a + b).length

console.log('Possible triangles: ', triangleCount)
