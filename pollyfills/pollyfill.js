//map pollyfill

Array.prototype.customMap = function(callback){
   let arr = this;
   let resArr = [];
   for(let i = 0; i < arr.length; i++){
     resArr.push(callback(arr[i], i, arr));
   }
   return resArr;
}


const arr = [1,2,3,4,5];
console.log(arr);

const modifyArr = arr.customMap(e => e+1);
console.log(modifyArr)