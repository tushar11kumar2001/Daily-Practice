const { Worker } = require("worker_threads");

const worker = new Worker("./nodeWorker1.js");


worker.on("online", ()=>{
    console.log("Worker is alive");
})
worker.postMessage(10);


worker.on("message", (data)=>{
    console.log("Result from worker : ", data);
    worker.terminate();
});

worker.on("messageerror", (error)=>{
    console.log("Message error : ", error);
});

worker.on("error", (error)=>{
    console.log("Error : ", error);
});

worker.on("exit", (code)=>{
    console.log("Worker exited with code : ", code);
});