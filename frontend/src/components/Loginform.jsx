import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  AnimatePresence,
} from "motion/react";
import React, { useEffect, useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // Toggle state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for Signup
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic API URL based on mode
  const API_URL = isLogin 
    ? "http://localhost:5000/api/auth/login" 
    : "http://localhost:5000/api/auth/signup";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          alert("Login successful!");
        } else {
          alert("Registration successful! Please login.");
          setIsLogin(true); // Switch to login after successful signup
        }
      } else {
        alert(data.message || "Action failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Is the backend running?");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- UI ANIMATION LOGIC (Kept Original) ---
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
      className="h-[87vh] flex gap-5 items-center justify-center overflow-hidden"
    >
      <motion.div className="rounded-2xl flex flex-col justify-center items-center space-y-6 p-4 h-[85%] w-[80%] md:w-[60%] lg:h-[75%] lg:w-[45%] shadow-md shadow-pink-500 bg-[#020617]/50 backdrop-blur-sm">
        
        {/* Dynamic Heading */}
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-center">
          {isLogin ? "Login now" : "Create Account"}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full relative z-5">
          <div className="flex flex-col gap-6 justify-center items-center container m-auto w-[90%] my-2">
            
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  style={{ border }}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[2.5rem] font-semibold outline-none shadow shadow-pink-800 text-gray-800 w-full rounded-md p-4 bg-white/90"
                  placeholder="👤 Full Name"
                />
              )}
            </AnimatePresence>

            <motion.input
              style={{ border }}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[2.5rem] font-semibold outline-none shadow shadow-pink-800 text-gray-800 w-full rounded-md p-4 bg-white/90"
              placeholder="✉️ Your Email"
            />

            <motion.input
              style={{ border }}
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[2.5rem] font-semibold outline-none shadow shadow-pink-800 text-gray-800 w-full rounded-md p-4 bg-white/90"
              placeholder="🔒 Password"
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              disabled={isSubmitting}
              type="submit"
              className={`p-2 rounded-2xl text-white font-semibold text-sm md:text-xl w-[60%] shadow-purple-900 shadow-md ${
                isSubmitting ? "bg-gray-600" : "bg-gradient-to-r from-purple-600 to-pink-600"
              }`}
            >
              {isSubmitting ? "Processing..." : (isLogin ? "Login" : "Sign Up")}
            </motion.button>
          </div>
        </form>

        {/* Toggle Button */}
        <div className="text-gray-400 font-medium">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-500 font-bold hover:underline underline-offset-4"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AuthForm;