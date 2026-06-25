import { useState } from "react";

const Backend = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        mobile: "",
        country: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("https://backend-fiyc.onrender.com/api/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    mobile: Number(formData.mobile)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || "Something went wrong");
                setLoading(false);
                return;
            }

            setMessage("User created successfully");
            setFormData({
                firstname: "",
                email: "",
                mobile: "",
                country: "",
                password: ""
            });
        } catch (error) {
            setMessage("Server error");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div style={{ maxWidth: "400px", margin: "40px auto" }}>
            <h2>Create User</h2>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create User"}
                </button>
                
            </form>
        </div>
    );
};

export default Backend;