const code1 = 'DLRRRRLRLDRRRURRURULRLLULUURRRDDLDULDULLUUDLURLURLLDLUUUDUUUULDRDUUDUDDRRLRDDDUDLDLLRUURDRULUULRLRDULULLRLRLRLDRLUULDLDDDDRRLRUUUDDRURRULLLRURLUURULLRLUDDLDRUULDRURULRRRLLLRDLULDRRDDUDLURURLDULDRDRLDDUURRDUDDRDUURDULDUURDUDRDRULDUDUULRRULUUURDUURUDLDURDLRLURUUDRRDLRUDRULRURLDLLDLLRRDRDRLRRRULDRRLDUURLUUDLUUDDLLRULRDUUDURURLUURDRRRUDLRDULRRRLDRDULRUUDDDLRDUULDRLLDRULUULULRDRUUUULULLRLLLRUURUULRRLDDDRULRRRUDURUR'

const code2 = 'RULRUUUDLLUDURDRDDLLRLLUDRUDDRLRRDLDLDRDULDLULURDLUDDDUULURLDRUUURURLLRRDDDUUDRLRLLDLDRDDDRDUDLRDRDLLLDDLDUDDRUDUUDLLLLLDULRLURRRLLURUUULUDRLRLRLURRDRLLLRLLULRLLLDDLRLRDLUUUUUDULULDDULLUDUURDLRUDLRUDLRLLRLDLULRLDUDRURURDLRULDLULULDLLDLDLDLLLUDUDDLRLRRDULLUDRDDLLLDUURDULUDURLLLDRUDDDLRLULDLDRRDDDRDULDDUDRDDULLULRRLRUULRDUDURUDULUDUDURLDRDUUDDRRLRURDRRLRDDDDRUDLUDLDDLRDLUUDLRRURDDLURDLRDLLRDRDLDLDUUUURULUULDDDDLDULUURRRULUDLLLDRULDRURL'

const code3 = 'RRRLRDLLDUURDRRRLURDUULUDURDRRUUDURURRLDLLDRDLRRURDDUDDURLRUUDDULULRUUDRLUUDDLLDDDLRRRDLLLLLLRRURDULDLURRURRDDLDDDUDURRDURRRLUDRRULLRULDRLULRULDDRLLRDLRDUURULURLUURLRRULDULULUULDUDLRLDRDDRRRUUULULDUURLRLLURRLURDUUDDDRUULDLLLDRUURLRRLLDDUDRDLDDDULDRDDDUDRRLLLULURDUDLLUUURRLDULURURDDLUDLLRLDRULULURDLDRLURDLRRDRRUULLULDLURRDDUDRDDDLDUDLDRRUDRULDLDULRLLRRRRDDRLUURRRRDDLLRUURRLRURULDDULRLULRURRUULDUUDURDRRLRLUDRULDRUULUUDRDURDURRLULDDDULDDLRDURRUUUUUDDRRDLRDULUUDDL'

const code4 = 'DRRLLRRLULDDULRDDLRLDRURDDUDULURRDLUUULURRRLLRLULURLLRLLDLLUDDLLRDRURRDLDDURRURDRDDUDDDLLRLDLDLDDDDRRRRUDUDLRDUDDURLLRURRDUDLRLLUDDRLDUUDDLLLUDRRRLLDDULUDDRLLUDDULLDDLRLDLRURRLUDDLULULDLUURDLLUDUDRRRRDULUDLRRLRUDDUUDRRLLRUUDRRLDDLRRRUDRRDRRDDUDLULLURRUURLLLDRDDLUDDDUDDRURURDLRUULLRDRUUDRDUDRLULLDURUUULDDLDRDRUDRUDUULDDRLRDRRDRRRRLRLRUULDDUUDDLLLLRRRDUDLRDLDUDDUURLUDURLDRRRDRUDUDRLDLRLDRDDLUDRURLRDRDLDUDDDLRLULLUULURLDDDULDUDDDLDRLDLURULLUDLLDRULDLLLDUL'

const code5 = 'LDULURUULLUDLDDRLLDURRULRLURLLURLRRLRDLDDRUURULLRUURUURRUDDDLRRLDDLULDURLLRDURDLLLURLDRULLURLRLDRDRULURDULDLLDUULLLDUDULDURLUDRULRUUUUUUDUUDDDLLURDLDLRLRDLULRDRULUUDRLULLURLRLDURDRRDUDDDURLLUUDRRURUDLDUDRLRLDRLLLLDLLLURRUDDURLDDRULLRRRRDUULDLUDLDRDUUURLDLLLDLRLRRLDDULLRURRRULDLURLURRRRULUURLLUULRURDURURLRRDULLDULLUDURDUDRLUULULDRRDLLDRDRRULLLDDDRDUDLRDLRDDURRLDUDLLRUDRRRUDRURURRRRDRDDRULRRLLDDRRRLDLULRLRRRUDUDULRDLUDRULRRRRLUULRULRLLRLLURDLUURDULRLDLRLURDUURUULUUDRLLUDRULULULLLLRLDLLLDDDLUULUDLLLDDULRDRULURDLLRRDRLUDRD'

let startKey = 5

const key1 = calcKey(code1.split(''))
const key2 = calcKey(code2.split(''))
const key3 = calcKey(code3.split(''))
const key4 = calcKey(code4.split(''))
const key5 = calcKey(code5.split(''))

console.log('Keycode is: ', key1, key2, key3, key4, key5)

function calcKey(arr) {
	return arr.reduce((prev, next) => {
		return nextKey(prev, next)
	}, startKey)
}

function nextKey(pos, direction) {
	switch (pos) {
		case 1:
			switch (direction) {
				case 'L':
				case 'U':
					return 1
				case 'R':
					return 2
				case 'D':
					return 4
			}
		case 2:
			switch (direction) {
				case 'L':
					return 1
				case 'U':
					return 2
				case 'R':
					return 3
				case 'D':
					return 5
			}
		case 3:
			switch (direction) {
				case 'L':
					return 2
				case 'U':
				case 'R':
					return 3
				case 'D':
					return 6
			}
		case 4:
			switch (direction) {
				case 'L':
					return 4
				case 'U':
					return 1
				case 'R':
					return 5
				case 'D':
					return 7
			}
		case 5:
			switch (direction) {
				case 'L':
					return 4
				case 'U':
					return 2
				case 'R':
					return 6
				case 'D':
					return 8
			}
		case 6:
			switch (direction) {
				case 'L':
					return 5
				case 'U':
					return 3
				case 'R':
					return 6
				case 'D':
					return 9
			}
		case 7:
			switch (direction) {
				case 'L':
					return 7
				case 'U':
					return 4
				case 'R':
					return 8
				case 'D':
					return 7
			}
		case 8:
			switch (direction) {
				case 'L':
					return 7
				case 'U':
					return 5
				case 'R':
					return 9
				case 'D':
					return 8
			}
		case 9:
			switch (direction) {
				case 'L':
					return 8
				case 'U':
					return 6
				case 'R':
				case 'D':
					return 9
			}
	}
}