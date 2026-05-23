import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData
      );

      console.log(res.data);

      toast.success("Welcome To Ravenoir 🩸");

    } catch (error) {
      console.log(error);

      toast.error("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-red-900/20 blur-[120px] rounded-full"></div>

      {/* FORM CARD */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 z-10 shadow-2xl">

        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ fontFamily: "Cinzel" }}
        >
          Join Ravenoir
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* USERNAME */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-red-900"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-red-900"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-red-900"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-red-900 hover:bg-red-800 transition"
          >
            Enter The Vault
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;