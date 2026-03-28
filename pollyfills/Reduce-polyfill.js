// custom reduce


Array.prototype.customReduce = function(callback, val) {
    let arr = this;
    let acc;
    let startIndex;

    if (arguments.length > 1) {
        acc = val;
        startIndex = 0;
    } else {
        if (arr.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        acc = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i]);
    }

    return acc;
};

const arr = [1,2,3,4,5];
const reduceArr = arr.customReduce((acc, curr)=>{
    if(curr%2 === 0)acc.push(curr);
    return acc;
},[])


console.log(reduceArr);

