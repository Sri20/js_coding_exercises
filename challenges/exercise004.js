function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const result=nums.filter(function(item){
    return (item<1)
  }
  )
  return result
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const result=names.filter(function(item){
  return (item[0]==char)
  }
  )
  return result
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const result=words.filter(function(item){
    return (item.substr(0,3)=='to ')
  })
  return result
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const result =nums.filter(function(item){
  return  Number.isInteger(item)
  })
return result
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let result=[]
  users.forEach(function(item){
    if(item.data.city.displayName){
      result.push(item.data.city.displayName)
    }
  })
  return result

}

function getSquareRoots(nums)  {
  if (!nums) throw new Error("nums is required");
  let result=[]
  nums.forEach( function(item){
    let sqra = Math.sqrt(item)
    let t =sqra
    if(!Number.isInteger(sqra)) {
      t= parseFloat(sqra.toFixed(2))
    }  
    result.push(t)
  } )
  return result
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result=[]
  sentences.forEach(function(item){
    if(item.toLowerCase().includes(str.toLowerCase()))
    {
      result.push(item)
    }
  })
return result
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let result=[]
  triangles.forEach(function (singletri){
    let longside=0
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
