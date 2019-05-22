const getPair = arr => arr.filter(number => number%2===0)
const multiply = arr => arr.map(number => number*2)

const test = [1,2,3,4,5] |> getPair |> multiply
console.log(test);
