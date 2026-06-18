import { useState } from "react";

const GetUserById = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const getUser = async () => {
    if (!id) {
      setMessage("Please enter user ID");
      return;
    }

    setLoading(true);
    setMessage("");
    setUser(null);

    try {
      const response = await
       fetch(`http://localhost:4000/api/getbyid/${id}`)
      ;

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "User not found");
        setLoading(false);
        return;
      }

      setUser(data.user);
    } catch (error) {
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "40px", padding: "40px" }}>
      <input
        type="text"
        placeholder="Enter User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    <br />
      <button onClick={getUser} disabled={loading}>
        {loading ? "Loading..." : "Get User"}
      </button>

      {message && <p>{message}</p>}
    <br />
      {user && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Name:</strong> {user.firstname}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default GetUserById;

