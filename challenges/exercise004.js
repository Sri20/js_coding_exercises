function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result=nums.filter(function(item){
    if(item<1){
      return true
    }
    else{
      return false
    }
  }
  )
  //console.log(result)
  return result
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const result=names.filter(function(item){
    if(item[0]==char){
      return true
    }
    else{
      return false
    }
  }
  )
 // console.log(result)
  return result
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const result=words.filter(function(item){
    //console.log(item.substr(0,3))
    if(item.substr(0,3)=='to '){
      
      return true
    }
    else {
      return false
    }
  })
  //console.log(result)
  return result

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result =nums.filter(function(item){
   return  Number.isInteger(item)
    //return typeof(item)== 'int'
  })
//console.log(result)
return result
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let result=[]
  users.forEach(function(item){
    if(item.data.city.displayName){
      //console.log( item.data.city.displayName)
      result.push(item.data.city.displayName)
    }
  })
  //console.log(result)
  return result

}

function getSquareRoots(nums)  {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let result=[]
  nums.forEach( function(item){
    let sqra = Math.sqrt(item)
    let t =sqra
    if(!Number.isInteger(sqra)) {
      t= parseFloat(sqra.toFixed(2))
      //console.log(sqra.toFixed(2))
    }  
    result.push(t)
  } )
  //console.log(result)
  return result
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let result=[]
  sentences.forEach(function(item){
  
    
    //console.log(strarr.includes(str))
   //newstr= item.toLowercase().includes(str.toLowercase)
   //let itemign = /item/i
    //if(itemign.match(str) ){

    //var strfound =item.search(new RegExp(str,"i"))  
    //if (strfound >0){
    //  result.push(item)
    //}

    if(item.toLowerCase().includes(str.toLowerCase()))
    {
      result.push(item)
    }

   // console.log(str)
    //let newstr=''
     //const yesfound=strarr.find(str => )
  
       /*function(word){
      if(word==str){
      console.log(word,str)
      result.push(item)
      }*/
     
     //console.log(newstr)
  })
//console.log(result)
return result
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let result=[]
  triangles.forEach(function (singletri){
    longside=0
    singletri.forEach(function(side){
      if (side>longside)
        longside=side
      })
    result.push(longside)
    })
    return result
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
