// 1.)

const numbers = [1,8,9,15,2,3,27]
const overFive = numbers.filter(num => num > 5)
console.log(overFive)

// 2.)

const numberz = [1,5,2,4,87,24,66]
const evenNumbers = numberz.filter(even => even % 2 === 0)
console.log(evenNumbers)

// 3.) *

const things = ["Cat", "Puppies", "Shoe", "Hippos", "Cars", "Hat"]
const underFive = things.filter(string => string === things.length > 5)
console.log(underFive)

// 4.) *

const theGuys = [
    {name: 'Lebron', member: true},
    {name: 'Jordan', member: false},
    {name: 'Shaq', member: true},
    {name: 'Bird', member: false},
    {name: 'Magic', member: false},
]
const clubMembers = theGuys.filter(player => player === theGuys.member)
console.log(clubMembers)

// 5.) *

const visitors = [
    {name: 'Lebron', age: 16},
    {name: 'Jordan', age: 91},
    {name: 'Shaq', age: 22},
    {name: 'Bird', age: 3},
    {name: 'Magic', age: 7},
]
const oldEnough = visitors.filter(old => old === visitors.age)
console.log(oldEnough)
