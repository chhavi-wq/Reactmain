import { useState } from "react";

const GetUserById = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(
      `http://localhost:4000/api/getuser/${id}`
    );

    const data = await response.json();

    if (response.ok) {
      setUser(data.user);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={getUser}>
        Get User
      </button>

      {user && (
        <div>
          <p>{user.firstname}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default GetUserById;