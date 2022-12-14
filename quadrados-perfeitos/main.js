let lines = 12 //entrada
let n = parseInt(lines.shift())

const dp = new Array(n + 1).fill(Infinity)
dp[0] = 0

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.

const num_teste = n =>{
  if(n<4)return n
  
  let best = Infinity
    for(let x = 2; x <= Math.floor(Math.sqrt(n)); ++x){
    let k = Math.floor(n/(x * x))
    best = Math.min(best, k + num_teste(n-k*x*x))
  }
  return best
}

print(num_teste(n))