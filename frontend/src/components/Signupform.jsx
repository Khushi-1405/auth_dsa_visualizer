import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import React, { useEffect, useState } from "react";

function Signupform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use your local backend URL for testing, change to Render URL for final deployment
  const API_URL = "http://localhost:5000/api/auth/signup";

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration Successful! Please login.");
        // window.location.href = "/login"; // Redirect after success
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Check if your backend is running!");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- UI Animation Logic (Matched to your Login Page) ---
  const Colors = ["#DD335C", "#ff5e57", "#e073c5", "#1E67C6", "#CE84CF"];
  const color = useMotionValue(Colors[0]);

  useEffect(() => {
    animate(color, Colors, {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="h-[87vh] flex gap-5 items-center justify-center"
    >
      <motion.div className="rounded-2xl flex flex-col justify-center items-center space-y-6 p-4 h-[85%] w-[80%] md:w-[60%] lg:h-[75%] lg:w-[45%] shadow-md shadow-pink-500 bg-[#020617]/50 backdrop-blur-sm">
        <h1 className="text-5xl h-25 md:h-20 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Sign Up
        </h1>
        <form onSubmit={handleSignup} className="flex flex-col w-full relative z-5">
          <div className="flex flex-col gap-6 justify-center items-center container m-auto w-[90%] my-2">
            <motion.input
              style={{ border }}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[2.5rem] font-semibold outline-none shadow shadow-pink-800 text-gray-800 w-full rounded-md p-4 bg-white/90"
              placeholder="👤 Full Name"
            />
            <motion.input
              style={{ border }}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[2.5rem] font-semibold outline-none shadow shadow-pink-800 text-gray-800 w-full rounded-md p-4 bg-white/90"
              placeholder="✉️ Email Address"
            />
            <motion.input
              style={{ border }}
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[2.5rem] font-semibold outline-none shadow shadow-pink-800 text-gray-800 w-full rounded-md p-4 bg-white/90"
              placeholder="🔒 Create Password"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              disabled={isSubmitting}
              type="submit"
              className={`p-2 rounded-2xl text-white font-semibold text-sm md:text-xl w-[50%] md:w-[40%] shadow-purple-900 shadow-md ${
                isSubmitting ? "bg-gray-600 cursor-wait" : "bg-gradient-to-r from-purple-600 to-pink-600"
              }`}
            >
              {isSubmitting ? "Registering..." : "Join Now"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Signupform;