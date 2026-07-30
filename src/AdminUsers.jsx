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
console.log(users[1])
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

//deleteOrder

  const deleteOrder = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/admin/orders/${id}`,
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
      getOrders(); // Refresh orders
    } else {
      toast.error(data.message);
    }
  } catch (err) {
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

    <div className="min-h-screen bg-[#F6EFE8] p-8">

    <h1 className="text-4xl font-bold text-[#3E2723] text-center mt-20 mb-10">
      Admin Dashboard
    </h1>


    <div className="space-y-6">

    {users.map((user)=>{

    const userOrders = orders.filter(
      (order)=> order.user?._id === user._id
    );


    return (

    <div
    key={user._id}
    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#e2dfd6]"
    >


    {/* User Header */}

    <div className="bg-[#3F5B4B] text-white px-6 py-4 flex justify-between items-center">

    <div> <h2 className="text-2xl font-semibold">  {user.name} </h2>
    <p className="text-sm opacity-80"> {user.email} </p>

    </div>  <span className="bg-white text-[#3F5B4B] px-4 py-1 rounded-full font-medium">   {user.role} </span>  </div>



    <div className="grid md:grid-cols-3 gap-6 p-6">


    {/* User Data */}
 <div className="bg-[#F6EFE8] rounded-xl p-5"> <h3 className="text-xl font-bold text-[#3E2723] mb-4">
    User Details
    </h3>


    <p>
    Name:
    <span className="font-semibold">
    {" "}{user.name}
    </span>
    </p>


    <p>
    Email: <span className="font-semibold">
    {" "}{user.email} </span>
    </p>


    <p>
    Status:
    <span className="font-semibold">
    {" "}{user.isVerified ? "Verified":"Not Verified"}
    </span>
    </p>


    <button
    onClick={()=>deleteUser(user._id)}
    className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
    >
    Delete User
    </button>


    </div>




    {/* Orders */}

    <div className="md:col-span-2">


    <h3 className="text-xl font-bold text-[#3E2723] mb-4">
    Orders
    </h3>


    {
    userOrders.length === 0 ?

    <p className="text-gray-500">
    No orders yet
    </p>


    :

    userOrders.map((order)=>(


    <div
    key={order._id}
    className="border rounded-xl p-4 mb-4 bg-[#FFFAF5]"
    >


    <div className="flex justify-between mb-3">

    <p className="font-semibold">
    Order ID: {order._id.slice(-6)}
    </p>


    <p className="font-bold text-[#3F5B4B]">
    ₹{Number(order.totalAmount).toLocaleString("en-IN")}
    </p>

    </div>



    <div className="mb-3">

    {
    order.products.map((item)=>(
    <p key={item.productId}>
    {item.title} × {item.quantity}
    </p>
    ))
    }

    </div>



    <div className="flex justify-between items-center">


    <select
    value={order.status}
    onChange={(e)=>
    updateStatus(order._id,e.target.value)
    }
    className="border rounded-lg px-6 py-2"
    >

    <option>Pending</option>
    <option>Shipped</option>
    <option>Delivered</option>
    <option>Cancelled</option>

    </select>



    <button
    onClick={()=>deleteOrder(order._id)}
    className="bg-red-600 text-white px-4 py-2 rounded-lg"
    >
    Delete Order
    </button>


    </div>


    </div>


    ))

    }


    </div>


    </div>


    </div>


    )

    })}


    </div>


    </div>

    </>
  );
  
};

export default Admin;