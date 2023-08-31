// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
var lines = "{}"

// TODO: Implemente a logica de caracreres validos e retorne se a s:

function IsValid(s){
  const stack = ['(',')','[',']','{','}']
  let string = s.split("",2)
  
  if(string[0] === stack[0]){
    if(string[1] === stack[1]){
      return true
    }
    else{
      return false
    }
  }
  
  if(string[0] === stack[2]){
    if(string[1] === stack[3]){
      return true
    }else{
      return false
    }
  }
  
  if(string[0] === stack[4]){
    if(string[1] === stack[5]){
      return true
    }else{
      return false
    }
  }
}

console.log(IsValid(lines))