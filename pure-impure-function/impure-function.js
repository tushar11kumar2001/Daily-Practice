function giveDate(){
    return Date.now();
}

console.log(giveDate());

function giveRandom(){
    return Math.random();
}

console.log(giveRandom());

let count = 1;
function useExternalVaribale(num){
    return num*count;
};

console.log(useExternalVaribale(2));

function updateExternalVaribale(num){
    count++;
    return num;
};

updateExternalVaribale(2);
console.log(count);

function print(val){
    console.log(val);
}

print("tushar") // output can be predict but console.log still impure because it use external environment for print