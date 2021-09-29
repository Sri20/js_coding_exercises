const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let result=null
  let pointn=nums.indexOf(n)
  if(pointn != '-1' && (pointn+1)!=nums.length){
    result=nums[pointn+1]
  }
  return result
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  //console.log(str)
  
  //console.log(strarr)
  /* finding number of zeroes
  var count0= strarr.reduce(function(n,val){
    return n+(val== '0')
  },0)
  console.log(count0)*/
  
  var strarr = str.split('')
  var countarr= strarr.reduce(function(numarr,num){
    numarr[num]=numarr[num]+1 || 1
   //console.log(numarr)
    return numarr
  },{})

  //console.log(typeof(countarr))
  if (!('0' in countarr)){
    //console.log('only 1s')
   countarr['0'] = 0
  }
  if (!('1' in countarr)){
   // console.log('only 0s')
    countarr['1'] = 0

  }
  return countarr
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //let strngn = n.toString().split('').reverse().join('')
  //console.log(strngn)
  return Number(n.toString().split('').reverse().join(''))
  
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let result= 0
  let subtotal=0
  arrs.forEach(function(item){
    subtotal = item.reduce(function(a,b){
      return a+b
    },0)
    result=result+subtotal
  })
 //console.log(result)
 return result
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  
  if(arr.length>=2) {
    var firstelement=arr[0]
    var lastelement = arr.pop()
    arr[0]=lastelement
    arr.push(firstelement)
  }
  //console.log(arr)
  return arr

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  
  
  var data=(Object.values(haystack))
  
  //console.log(data1)
  //console.log(searchTerm,data)
  let found=0
  data.forEach(function(item){
    //console.log(item,searchTerm)
    if ((typeof(item)=='string') &&
    (item.toLowerCase().includes(searchTerm.toLowerCase()))) {
    //console.log(typeof(item))
    //console.log('found')
    //console.log(item) 
    found =1
  }  
  if(item==searchTerm){
    found=1
  }
})
// console.log(found)
return(found==1)
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  
  //var strarr = (str.toLowerCase()).split(' ')
  var strarr = ((str.replace(/[^0-9a-zA-Z. ]/g, '')).toLowerCase()).split(' ')
  //console.log(strarr)
  var countarr= strarr.reduce(function(newarr,word){
    newarr[word] =newarr[word]+1 || 1
   //console.log(numarr)
    return newarr
  },{})
//console.log(countarr)
return countarr


};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
