// custom find

Array.prototype.customFind = function(callback){
   let arr = this;
   for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
        return arr[i];
    }
   }
   return undefined;


}


const arr = [1,2,3,4,5];
const res = arr.customFind(e => e === 2);
console.log(res);