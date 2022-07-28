const url = "https://api.mercadopago.com/checkout/preferences";
const axios = require("axios");

export  const createPayment = async (payer_email, quantity, unit_price) => {

  const body = {
    payer_email,
    items: [
      {
        title: "Compra en Ebooks",
        description: "Tu mejor opcion en Libros",
        picture_url: "http://www.myapp.com/myimage.jpg",
        category_id: "category123",
        quantity: quantity,
        unit_price: unit_price
      },
    ],
    back_urls: {
      failure: "/",
      pending: "/pending",
      success: `http://localhost:3000/home/${payer_email}`
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


