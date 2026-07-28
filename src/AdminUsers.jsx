import {useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";


const Admin = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
const [orders, setOrders] = useState([]);
  
  // Get all users
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(data.user);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Server Error");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        getUsers();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Server Error");
    }
  };

  // Search user
  const searchUser = async (value) => {
    setSearch(value);

    if (value === "") {
      getUsers();
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/search?query=${value}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUsers(data.user);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Server Error");
    }
  };

  useEffect(() => {
    getUsers();
     getOrders();
  }, []);

  const getOrders = async () => {
    console.log("orders")
  try {
    const response = await fetch(
      "http://localhost:3000/api/admin/orders",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      setOrders(data);
    } else {
      toast.error(data.message);
    }
  } catch {
    toast.error("Server Error");
  }
};
const updateStatus = async (id, status) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/admin/orders/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);
      getOrders();
    } else {
      toast.error(data.message);
    }
  } catch {
    toast.error("Server Error");
  }
};
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mt-20 text-center mb-8">
        Admin Dashboard
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => searchUser(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 w-[400px]"
        />
      </div>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#264653] text-white">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b text-center hover:bg-gray-50"
              >
                <td className="p-4">{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
    <div className="bg-white shadow-lg rounded-xl overflow-hidden mt-10">

  <h2 className="text-3xl font-bold text-center py-6">
    Orders
  </h2>

  <table className="w-full">

    <thead className="bg-[#264653] text-white">
      <tr>
        <th className="p-4">Customer</th>
        <th>Total</th>
        <th>Products</th>
        <th>Status</th>
        <th>Update</th>
      </tr>
    </thead>

    <tbody>

      {orders.map((order) => (
        <tr
          key={order._id}
          className="border-b text-center"
        >
          <td>{order.user.name}</td>

          <td>₹{order.totalAmount}</td>
          <td>
  {order.products.map((item) => (
    <div key={item.productId}>
      {item.title} × {item.quantity}
    </div>
  ))}
</td>

          <td>{order.status}</td>

          <td>
            <select
              value={order.status}
              onChange={(e) =>
                updateStatus(order._id, e.target.value)
              }
              className="border rounded px-2 py-1"
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </td>
        </tr>
      ))}

    </tbody>

  </table>

</div>
    </>
    
  );
  
};

export default Admin;