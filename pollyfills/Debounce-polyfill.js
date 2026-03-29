//debounc

const createDebounce = function(callBack, delay){
   let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>callBack.apply(this, args), delay);
    }
}
const callBack = function(){

}
const debounce = createDebounce(callBack, delay)