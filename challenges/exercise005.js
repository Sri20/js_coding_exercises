const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let result=null
  let pointn=nums.indexOf(n)
  if(pointn != '-1' && (pointn+1)!=nums.length){
    result=nums[pointn+1]
  }
  return result
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var strarr = str.split('')
  var countarr= strarr.reduce(function(numarr,num){
    numarr[num]=numarr[num]+1 || 1
    return numarr
  },{})
  if (!('0' in countarr)){
  countarr['0'] = 0
  }
  if (!('1' in countarr)){
    countarr['1'] = 0
  }
  return countarr
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(n.toString().split('').reverse().join('')) 
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let result= 0
  let subtotal=0
  arrs.forEach(function(item){
    subtotal = item.reduce(function(a,b){
      return a+b
    },0)
    result=result+subtotal
  })
return result
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length>=2) {
    var firstelement=arr[0]
    var lastelement = arr.pop()
    arr[0]=lastelement
    arr.push(firstelement)
  }
  return arr

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let  data=(Object.values(haystack))
  let found=0
  data.forEach(function(item){
    if ((typeof(item)=='string') &&
    (item.toLowerCase().includes(searchTerm.toLowerCase()))) {
    found =1
  }  
  if(item==searchTerm){
    found=1
  }
})
return(found==1)
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var strarr = ((str.replace(/[^0-9a-zA-Z. ]/g, '')).toLowerCase()).split(' ')
  var countarr= strarr.reduce(function(newarr,word){
    newarr[word] =newarr[word]+1 || 1
    return newarr
  },{})
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
