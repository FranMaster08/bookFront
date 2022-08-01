const url = "https://api.mercadopago.com/checkout/preferences";
const axios = require("axios");

const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const createPayment = async (
  payer_email,
  quantity,
  unit_price,
  product
) => {
  const result = product.reduce(
    (prev, current) => prev + serialize(current) + "&",
    ""
  );
  const itemsComprados = product.map((libros) => ({
    title: libros.titulo,
    description: "Tu mejor opcion en Libros",
    picture_url: "http://www.myapp.com/myimage.jpg",
    category_id: "libros",
    quantity: libros.cantidad,
    unit_price: libros.precio,
  }));

  const body = {
    payer_email,
    items: [...itemsComprados],
    back_urls: {
      failure: `http://localhost:4000/miscompras?${result}user=${payer_email}`,
      pending: "/pending",
      success: `http://localhost:4000/miscompras?${result}user=${payer_email}`,
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
