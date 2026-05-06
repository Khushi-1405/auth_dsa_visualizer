import { useState,useEffect,useRef } from "react";
import algoIcon from "../assets/icon.png";
import { NavLink, useNavigate } from 'react-router'
import { House, Activity, Search, LogIn } from 'lucide-react';
import { motion,useMotionTemplate,useMotionValue,animate, easeInOut } from "motion/react"


function Navbar({ algorithm, setAlgorithm }) {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef(null);
  const labelRef = useRef(null);
  const Colors = ["#DD335C", "#ff5e57", "#e073c5", "#1E67C6", "#CE84CF"];
  const color = useMotionValue(Colors[0]);
  const navigate = useNavigate();

  useEffect(() => {
    animate(color, Colors, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })

        const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        labelRef.current &&
        !labelRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%, ${color})`;
  const boxShadow = useMotionTemplate`0px 4px 6px ${color}`;

  const algorithmsList = [
    { name: "Bubble Sort", key: "Bubble Sort" },
    { name: "Selection Sort", key: "Selection Sort" },
    { name: "Insertion Sort", key: "Insertion Sort" },
    { name: "Merge Sort", key: "Merge Sort" },
    { name: "Quick Sort", key: "Quick Sort" },
];

  const filterAlgorithms = algorithmsList.filter((algo) => algo.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleAlgorithmSelection = (algokey) => {
    setAlgorithm([algokey]);
    navigate('/Visualizer')
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleKeyPress =  (e)=>{
    if(e.key === "Enter" && filterAlgorithms.length>0){
      handleAlgorithmSelection(filterAlgorithms[0].key)
    }
  }


  return (
    <>

      <nav className="pb-2 relative z-50 " >
        {/* desktop view */}
        <div className="hidden lg:block w-full ">
          <motion.div className="container m-auto w-[40rem] flex justify-around items-center font-bold rounded-xl gap-2 py-4 text-white text-lg  " style={{ backgroundImage, boxShadow }}>
            <img src={algoIcon} className="w-10 h-10" alt="Algorithm Visualizer" />
            <div className="flex gap-10 rounded-md text-[15px]">
              <NavLink className="flex items-center hover:text-blue-600 " to="/"><House />&nbsp;<span>Home</span></NavLink>
              <label ref={labelRef} htmlFor="search1" className="flex items-center cursor-pointer hover:text-blue-600" onClick={() => setShowSearch(!showSearch)}><Search />&nbsp;<span>Search</span></label>
              <NavLink className="flex items-center hover:text-blue-600 " to="/Visualizer"><Activity />&nbsp;<span>Visualizer</span></NavLink>
            </div>

            <NavLink className="rounded-md p-1 border text-[15px] flex items-center text-blue-500 hover:text-blue-400" to="/Login"><span>Login</span>&nbsp;<LogIn /></NavLink>

            <motion.div
              ref={searchRef}
              initial={false}
              animate={{ y: showSearch ? 135 : -500 }}
              transition={{ duration: 0.7, ease: 'anticipate' }}
              className={`absolute z-10  ${showSearch ? "block" : ""} rounded-md w-[30%] shadow-[0px_0px_5px] shadow-green-700 mx-4 `}
            >
              <motion.input
                type="search"
                placeholder="🔍 Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                className={`rounded-md w-[100%] font-semibold text-white shadow-blue-800 shadow outline-none p-4 backdrop-blur-xl h-12 `} id="search1" />
              {searchQuery && filterAlgorithms.length > 0 && (
                <ul
                  className="absolute top-full left-0 w-full cursor-pointer shadow-[0px_0px_5px] p-2 rounded-md mt-4 z-20 max-h-140 overflow-y-auto"
                >
                  {filterAlgorithms.length > 0 ? (
                    filterAlgorithms.map((algo) => (
                      <li
                        key={algo.key}
                        onClick={() => handleAlgorithmSelection(algo.key)}
                        className=""
                      >
                        {algo.name}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 hover:bg-gray-200 cursor-pointer text-gray-400">No algorithms found!</li>
                  )
                  }
                </ul>
              )}
            </motion.div>
          </motion.div>
        </div>


        <div className="w-[100%] h-14 fixed z-10 text-black  bottom-0 lg:hidden">

          <motion.div className="flex justify-around items-center shadow-[0px_-80px_20px_-35px_inset] shadow-gray-950 text-gray-400  gap-10 h-15">
            <NavLink className="font-bold flex flex-col gap-1 items-center hover:text-blue-600 " to="/"><House /> <span className="text-[12px]">Home</span></NavLink>
            <label htmlFor="search" onClick={() => setShowSearch(!showSearch)} className="font-bold  flex flex-col gap-1 items-center hover:text-blue-600 "><Search /><span className="text-[12px]">Search</span></label>
            <NavLink className="font-bold  flex flex-col gap-1 items-center hover:text-blue-600 " to="/Visualizer"><Activity /> <span className="text-[12px]">Visualizer</span></NavLink>
            <NavLink className="font-bold flex flex-col gap-1 items-center hover:text-blue-600 " to="/Login"><LogIn /> <span className="text-[12px]">Login</span></NavLink>
          </motion.div>

          <motion.div
              initial={false}
              animate={{ y: showSearch ? 20 : -100 }}
              transition={{ duration: 0.7, ease: 'anticipate' }}
              className={`${showSearch ? "block" : ""} m-auto fixed top-1 rounded-md w-[92%] mx-4 md:hidden`}
            >
              <motion.input
                type="search"
                placeholder="🔍 Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                className="w-[100%] m-auto shadow-[0px_0px_5px]  shadow-green-700 p-4 font-semibold rounded-md h-12 bg-white text-gray-600 outline-none"
                 id="search"
                 />
              {searchQuery && filterAlgorithms.length > 0 && (
                <ul
                  className="absolute top-full left-0 w-full text-white bg-gray-950 shadow-rose-700 shadow-[0px_0px_5px] p-2 space-y-2 rounded-md mt-2 z-20 max-h-140 overflow-y-auto"
                >
                  {filterAlgorithms.length > 0 ? (
                    filterAlgorithms.map((algo) => (
                      <li
                        key={algo.key}
                        onClick={() => handleAlgorithmSelection(algo.key)}
                        className=""
                      >
                        {algo.name}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 hover:bg-gray-200 cursor-pointer text-gray-400">No algorithms found!</li>
                  )
                  }
                </ul>
              )}
            </motion.div>
           

        </div>

      </nav>

    </>
  )
}

export default Navbar
