const triangles = require('./day3-triangles')

console.log('Total entries: ', triangles.length)

const triangleCount = triangles.filter(([a,b,c] = [...triangle]) => a < b + c && b < a + c && c < a + b).length

console.log('Possible triangles: ', triangleCount)
