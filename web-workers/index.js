
const startTime = Date.now();
console.log("Main thread started at ", new Date(startTime));

const w1 = new Worker('./bw1.js');
const w2 = new Worker('./bw2.js');

w1.postMessage({ delay: 10000 });

w1.onmessage = (e) => {
    const { endTime } = e.data;
    console.log("w1 ended at : ", new Date(endTime));
    w1.terminate();
};

w1.onerror = (err) => {
    console.log("ERROR : ", err);
};

w2.postMessage({ delay: 10000 });

w2.onmessage = (e) => {
    const { endTime } = e.data;
    console.log("w2 ended at : ", new Date(endTime));
    w2.terminate();
};

w2.onerror = (err) => {
    console.log("ERROR : ", err);
};

const randomFunc = ()=>{
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

randomFunc();