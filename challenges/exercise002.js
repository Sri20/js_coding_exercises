function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return (person.city == 'Manchester')
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  if (people%40 != 0 && people%40 <40){
    return parseInt(people/40) + 1
  }
    return people/40

  }
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let count =0
  for (let i=0;i< arr.length;i++){
    if (arr[i] == 'sheep'){
      count += 1
    }
  }
  //console.log(count)
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  //const postc = person.address.postCode
  return ((person.address.postCode.substring(0,1) == 'M') && person.address.city== 'Manchester')  
 


}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
