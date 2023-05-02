// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [, first ] = data.lists[0] || []
const [, second ] = data.lists[1] || []
const [, third ] = data.lists[2] || []

const result = []

const extractBiggest = () => {

	let firstLastNum = first[first.length - 1]
	let secondLastNum = second[second.length - 1]
	let thirdLastNum = third[third.length - 1]


	if (firstLastNum > secondLastNum &&
		firstLastNum > thirdLastNum) 
		{
		return first.pop()
	}

	if (secondLastNum > firstLastNum &&
		secondLastNum > thirdLastNum) 
		{
		return second.pop()
	}
	
	if (thirdLastNum > firstLastNum &&
		thirdLastNum > secondLastNum)
		{
	return third.pop()
	}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

// -------------------------------

