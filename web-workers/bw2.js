self.onmessage = (e) => {
    const { delay } = e.data;
    const startTime = Date.now();
    console.log("W2 started at ", new Date(startTime));
    let endTime = startTime;

    while (endTime < startTime + delay) {
        endTime = Date.now();
    }

    self.postMessage({ endTime });
    self.close();
};