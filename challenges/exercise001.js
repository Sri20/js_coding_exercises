function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length) ;

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1)+'.'+lastName.substring(0,1)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice+(originalPrice*vatRate/100)).toFixed(2))
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice-(originalPrice*reduction/100)).toFixed(2))
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length%2==0){
    return (str.substr((str.length/2)-1,2))
    }
  else{
    return str.substr((str.length/2),1)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let wordrev=''
  for(let i=word.length-1;i>=0;i--){
    wordrev =wordrev.concat(word[i])
  }
    return wordrev
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordsnew=[]
  for(let i=0;i<=words.length-1;i++){
    let revstr =''
    let strw=words[i]
    for(let j=words[i].length-1;j>=0;j--){ 
      revstr = revstr.concat(strw[j])
    }
    wordsnew.push(revstr)
  }
  return(wordsnew)
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0
  for (let i=0;i<users.length;i++){
  if(users[i].type=='Linux'){   
    count += 1
  }  
  }
  return count
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum = 0
  for (let i=0;i<scores.length;i++) {
    sum = sum + scores[i] 
  }
  return parseFloat((sum/scores.length).toFixed(2))
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n%3==0 && n%5==0) {
    return 'fizzbuzz'
  }
  else if (n%3 == 0){
    return 'fizz'
  }
  else if (n%5 == 0){
    return'buzz'
  }
  else {
    return(n)
  }   

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
