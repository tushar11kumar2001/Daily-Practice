const polling = (paymentId)=>{
    const interval = setInterval(async()=>{
          const res = await fetch(`/payment-status/${paymentId}`);
          const data = await res.json();

          if(data.status === "SUCCESS" || data.status === "FAILED"){
          clearInterval(interval);
          return data;
          }
    },3000);
}
const startPayment = async (amount)=>{
    const response = await  fetch("/payment", {amount});
    const { orderId } = await response.json();
    return orderId;
}

const orderId = startPayment(100);

polling(orderId);

