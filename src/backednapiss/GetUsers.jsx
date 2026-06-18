import { useState } from 'react';

const GetUsers = () => {
    const [data, SetData] = useState([]);

    const Users = async () => {
        const response = await fetch("http://localhost:4000/api/getall");

        const result = await response.json();

        console.log(result);

        SetData(result.use);
        console.log("abccccc",result.use)
    };

    return (
      <>
      <div style={{ textAlign: "center",  marginTop: "30px", marginBottom: "20px" }}>
  <button
    onClick={Users}
    style={{
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer"
    }}
  >
    Get Users
  </button>
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  }}
>
  {data.map((item) => (
    <div
      key={item._id}
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <img
        src={`http://localhost:4000/${item?.avatar[0]}`}
        alt="avatar"
        width="100"
      />
      <p>{item.firstname}</p>
      <p>{item._id}</p>
    </div>
  ))}
</div>
</>
    )
};

export default GetUsers;