const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance)
const leo = `${leoName} ${leoSurname} Owed: R ${leoBalance}`
const sarah = `\n ${sarahName} ${sarahSurname} Owed: R ${sarahBalance}`
const total = "\n Total amount owed: "
const result = `${leo} ${sarah} \n ${divider} ${total} ${owed} \n ${divider}`

console.log(result)