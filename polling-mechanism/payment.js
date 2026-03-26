const polling = (paymentId) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/payment-status/${paymentId}`);
        const data = await res.json();

        if (data.status === "SUCCESS" || data.status === "FAILED") {
          clearInterval(interval);
          console.log(data);
          resolve(data);
        }
      } catch (err) {
        clearInterval(interval);
        console.log(err);
        reject(err);
      }
    }, 3000);
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
        const result = await polling(orderId);

        console.log('Payment success : ', result)
    }catch(err){
        console.log("Payment failed : ", err )
    }
})()
