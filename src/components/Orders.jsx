import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Orders = ()=>{
const [orders, setOrders] = useState([]);

useEffect(() => {
  fetchOrders();
}, []);

const fetchOrders = async () => {
  const response = await fetch("http://localhost:3000/api/orders", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await response.json();

  setOrders(data);
};

return(

  <>
  <Navbar />
{orders.map((order) => (
  <div key={order._id}>
    <h2>{order.status}</h2>

    {order.products.map((item) => (
      <div key={item.productId}>
        <img src={item.thumbnail} width={80} />

        <p>{item.title}</p>

        <p>₹{item.price}</p>

        <p>Qty : {item.quantity}</p>
      </div>
    ))}

    <h3>Total : ₹{order.totalAmount}</h3>
  </div>
))}
</>
)
}

export default Orders;
