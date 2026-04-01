function sum(a,b){
    return a+b;
}
console.log(sum(1,2));


let arr = [1,2,3,4,5];

let resMap = arr.map(num => num*2);

console.log(resMap);

let resFilter = arr.filter(num => num%2 === 0);

console.log(resFilter);

let resReduce = arr.reduce((acc, curr) => {
    if(curr%2 === 0) acc.push(curr*2);
    return acc;

},[]);

console.log(resReduce);
