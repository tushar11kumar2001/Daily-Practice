// custom filter


Array.prototype.customFilter = function(callback){
    let arr = this;
    let resArr = [];
    for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
        resArr.push(arr[i]);
    }
    }
    return resArr;
}


const arr = [1,2,3,4,5];
console.log(arr);
const filterArr = arr.customFilter(e => e%2===0);
console.log(filterArr);

