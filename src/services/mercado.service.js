const url = "https://api.mercadopago.com/checkout/preferences";
const axios = require("axios");

export  const createPayment = async (payer_email, quantity, unit_price , product) => {

  const body = {
    payer_email,
    items: [
      ...product
    ],
    back_urls: {
      failure: "http://localhost:3000/miscompras",
      pending: "/pending",
      success: `http://localhost:3000/miscompras?`
    },
  };

  const payment = await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer TEST-5638531087641241-062914-feae7337c391e50bebd204700cf86296-1145553302`,
    },
  });

  return payment.data;
};


