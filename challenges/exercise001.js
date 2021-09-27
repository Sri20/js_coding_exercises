function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  //console.log(word.substring(0,1).toUpperCase()+ word.substring(1,word.length))
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length) ;

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  //console.log(firstName.substring(0,1)+'.'+lastName.substring(0,1))
  return firstName.substring(0,1)+'.'+lastName.substring(0,1)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
 //console.log((originalPrice+(originalPrice*vatRate/100)).toFixed(2))
  return parseFloat((originalPrice+(originalPrice*vatRate/100)).toFixed(2))
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return parseFloat((originalPrice-(originalPrice*reduction/100)).toFixed(2))
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  //console.log(str)
  if(str.length%2==0){
    //console.log(str.substr((str.length/2)-1,2))
    return (str.substr((str.length/2)-1,2))
    }
  else{
    return str.substr((str.length/2),1)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let wordrev=''
  for(let i=word.length-1;i>=0;i--){
    wordrev =wordrev.concat(word[i])
  }
  //console.log(wordrev)
  return wordrev
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
 let wordsnew=[]
  for(let i=0;i<=words.length-1;i++){
    //console.log(words[i])
    let revstr =''
    let strw=words[i]
    for(let j=words[i].length-1;j>=0;j--){ 
      //console.log(j)
      revstr = revstr.concat(strw[j])
      //console.log(revstr)
    }
    wordsnew.push(revstr)
  }
  //console.log(wordsnew)
  return(wordsnew)
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let count = 0
  for (let i=0;i<users.length;i++){
   // console.log(users[i].type)
  if(users[i].type=='Linux'){
   
    count += 1
  }  
  }
  //console.log(count)
  return count
  
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let sum = 0
  for (let i=0;i<scores.length;i++) {
    sum = sum + scores[i] 
  }
  return parseFloat((sum/scores.length).toFixed(2))
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
