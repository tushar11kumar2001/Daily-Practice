const polling = (paymentId, maxAttempt, delay) => {
  return new Promise((resolve, reject) => {
    let attempt = 0;

    const poll = async () => {
      attempt++;
      console.log(`Attempt ${attempt}`);

      try {
        const data = await new Promise((res) => {
          setTimeout(() => {
            const statuses = ["PENDING", "SUCCESS", "FAILED"];
            const status = statuses[Math.floor(Math.random() * 3)];
            res({ status });
          }, 1000);
        });

        console.log("Status:", data.status);

        if (data.status === "SUCCESS") return resolve(data);
        if (data.status === "FAILED") return reject(data);
        if (attempt >= maxAttempt) return reject({ message: "Timeout" });

        // ⏳ wait before next call (no overlap)
        setTimeout(poll, delay);

      } catch (err) {
        reject(err);
      }
    };

    poll(); // start
  });
};
const startPayment = async (amount) => {
  const response = await fetch("/payment", { amount });
  const { orderId } = await response.json();
  return orderId;
};

(async ()=>{
    try{
        const orderId = await startPayment(100);
        const result = await polling(orderId, 5, 3);

        console.log('Payment success : ', result)
    }catch(err){
        console.log("Payment failed : ", err )
    }
})()
