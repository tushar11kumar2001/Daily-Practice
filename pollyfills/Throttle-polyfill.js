// throttle

const createThrottle = function(callback, delay){
    let flag = true;
    return function(...args){
       if(flag){
        flag = false;
        callback.apply(this, args);
        setTimeout(()=>{flag = true}, delay)
       }
    }
}
const throttle = createThrottle(callBack, delay);