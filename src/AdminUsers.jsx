import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  // Get all users
  const getUsers = async () => {
    try {
      const response = await fetch("https://reactbackend-hg62.onrender.com/api/admin/users", {
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
  console.log(users[1]);
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
        },
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
        `https://reactbackend-hg62.onrender.com/api/admin/orders/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
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
        `https://reactbackend-hg62.onrender.com/api/admin/search?query=${value}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
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
    console.log("orders");
    try {
      const response = await fetch("https://reactbackend-hg62.onrender.com/api/admin/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

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
        `https://reactbackend-hg62.onrender.com/api/admin/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ status }),
        },
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
      <div
        className={`min-h-screen ${
          darkMode ? "bg-[#141916]" : "bg-[#F6EFE8]"
        } p-8`}
      >
        <h1
          className={`text-4xl font-bold ${
            darkMode ? "text-[#F0EEE7]" : "text-[#3E2723]"
          } text-center mt-20 mb-10`}
        >
          Admin Dashboard
        </h1>

        <div className="space-y-6">
          {users.map((user) => {
            const userOrders = orders.filter(
              (order) => order.user?._id === user._id,
            );

            return (
              <div
                key={user._id}
                className={`${
                  darkMode
                    ? "bg-[#181D1A] border-[#2A332D]"
                    : "bg-white border-[#E2DFD6]"
                } rounded-2xl shadow-lg overflow-hidden border`}
              >
                {/* User Header */}

                <div
                  className={`${
                    darkMode ? "bg-[#32473D]" : "bg-[#3F5B4B]"
                  } text-white px-6 py-4 flex justify-between items-center`}
                >
                  <div>
                    <h2 className="text-2xl font-semibold">{user.name}</h2>

                    <p className="text-sm opacity-80">{user.email}</p>
                  </div>

                  <span
                    className={`${
                      darkMode
                        ? "bg-[#F0EEE7] text-[#32473D]"
                        : "bg-white text-[#3F5B4B]"
                    } px-4 py-1 rounded-full font-medium`}
                  >
                    {user.role}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* User Data */}

                  <div
                    className={`${
                      darkMode
                        ? "bg-[#202621] border border-[#2A332D]"
                        : "bg-[#F6EFE8]"
                    } rounded-xl p-5`}
                  >
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-[#F0EEE7]" : "text-[#3E2723]"
                      } mb-4`}
                    >
                      User Details
                    </h3>

                    <p
                      className={darkMode ? "text-[#A9ADA7]" : "text-gray-600"}
                    >
                      Name:
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2723]"
                        }`}
                      >
                        {" "}
                        {user.name}
                      </span>
                    </p>

                    <p
                      className={darkMode ? "text-[#A9ADA7]" : "text-gray-600"}
                    >
                      Email:
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-[#F0EEE7]" : "text-[#3E2723]"
                        }`}
                      >
                        {" "}
                        {user.email}
                      </span>
                    </p>

                    <p
                      className={darkMode ? "text-[#A9ADA7]" : "text-gray-600"}
                    >
                      Status:
                      <span
                        className={`font-semibold ${
                          darkMode ? "text-[#A8D5B2]" : "text-[#3E2723]"
                        }`}
                      >
                        {" "}
                        {user.isVerified ? "Verified" : "Not Verified"}
                      </span>
                    </p>

                    <button
                      onClick={() => deleteUser(user._id)}
                      className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete User
                    </button>
                  </div>

                  {/* Orders */}

                  <div className="md:col-span-2">
                    <h3
                      className={`text-xl font-bold ${
                        darkMode ? "text-[#F0EEE7]" : "text-[#3E2723]"
                      } mb-4`}
                    >
                      Orders
                    </h3>

                    {userOrders.length === 0 ? (
                      <p
                        className={
                          darkMode ? "text-[#A9ADA7]" : "text-gray-500"
                        }
                      >
                        No orders yet
                      </p>
                    ) : (
                      userOrders.map((order) => (
                        <div
                          key={order._id}
                          className={`border rounded-xl p-4 mb-4 ${
                            darkMode
                              ? "bg-[#181D1A] border-[#2A332D]"
                              : "bg-[#FFFAF5] border-[#E5DDD3]"
                          }`}
                        >
                          <div className="flex justify-between mb-3">
                            <p
                              className={`font-semibold ${
                                darkMode ? "text-[#F0EEE7]" : "text-[#2F2A26]"
                              }`}
                            >
                              Order ID: {order._id.slice(-6)}
                            </p>

                            <p className="font-bold text-[#78917C]">
                              ₹
                              {Number(order.totalAmount).toLocaleString(
                                "en-IN",
                              )}
                            </p>
                          </div>

                          <div
                            className={`mb-3 ${
                              darkMode ? "text-[#A9ADA7]" : "text-gray-600"
                            }`}
                          >
                            {order.products.map((item) => (
                              <p key={item.productId}>
                                {item.title} × {item.quantity}
                              </p>
                            ))}
                          </div>

                          <div className="flex justify-between items-center">
                            <select
                              value={order.status}
                              onChange={(e) =>
                                updateStatus(order._id, e.target.value)
                              }
                              className={`border rounded-lg px-6 py-2 outline-none ${
                                darkMode
                                  ? "bg-[#202621] border-[#2A332D] text-[#F0EEE7]"
                                  : "bg-white border-[#DDD5CB] text-[#2F2A26]"
                              }`}
                            >
                              <option>Pending</option>
                              <option>Shipped</option>
                              <option>Delivered</option>
                              <option>Cancelled</option>
                            </select>

                            <button
                              onClick={() => deleteOrder(order._id)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                              Delete Order
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;
