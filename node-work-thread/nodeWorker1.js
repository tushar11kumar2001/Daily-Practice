const { parentPort } = require("worker_threads");


parentPort.on("message",(input)=>{
  let result = 0;
  for(let i=0; i<input; i++){
    result += i;
  }
  parentPort.postMessage(result);
  parentPort.close();
})

