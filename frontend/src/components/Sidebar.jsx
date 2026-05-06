import { motion } from "motion/react"
import { useState } from "react"

function Sidebar({ algorithm, setAlgorithm, raceMode, setRaceMode,setAlgorithmType}) {
    const [sortDropdown, setSortDropdown] = useState(false);
    const [searchDropdown, setSearchDropdown] = useState(false);
    const [graphDropdown, setGraphDropdown] = useState(false);
    const [dynamicProgrammingDropdown, setDynamicProgrammingDropdown] = useState(false);
    const [greedyDropdown, setGreedyDropdown] = useState(false);
    const [backtrackingDropdown, setBacktrackingDropdown] = useState(false);
    const [treeDropdown, setTreeDropdown] = useState(false);
    const [dataStructureDropdown, setDataStructureDropdown] = useState(false);


    const sortingAlgoList = [ 
        { name: "Bubble Sort", key: "Bubble Sort" },
        { name: "Selection Sort", key: "Selection Sort" },
        { name: "Insertion Sort", key: "Insertion Sort" },
        { name: "Merge Sort", key: "Merge Sort" },
        { name: "Quick Sort", key: "Quick Sort" },
    ];

    const searchingAlgoList = [
        { name: "Linear Search", key: "Linear Search" },
        { name: "Binary Search", key: "Binary Search" },
    ];

     const graphAlgoList = [
        { name: "BFS", key: "BFS" },
        { name: "DFS", key: "DFS" },
        { name: "Dijkstra's,", key: "Dijkstra's" },
        { name: "Prim's", key: "Prim's" },
        { name: "Kruskal's", key: "Kruskal's" },
    ];
    const dyanamicProgrammingAlgoList = [
        { name: "Fibonacci", key: "Fibonacci" },
        { name: "Knapsack", key: "Knapsack" },
        { name: "LCS", key: "LCS" },
        { name: "LIS ", key: "LIS " },
    ];

    const greedygAlgoList = [
        { name: "Activity Selection", key: "Activity Selection" },
        { name: "Huffman Coding", key: "Huffman Coding" },
    ];
    const backtrackingAlgoList = [
        { name: "N-Queens", key: "N-Queens" },
        { name: "Sudoku Solver", key: "Sudoku Solver" },
    ];
    const treeAlgoList = [
        { name: "Tree Traversals", key: "Tree Traversals" },
        { name: "BST Operations", key: "BST Operations" },
        { name: " AVL Rotations", key: " AVL Rotations" },
        { name: "LCA", key: "LCA" },
    ];

    const supportedAlgorithms = [
        "Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort","Linear Search","Binary Search","Array","Stack","Linked List"];

    const handleAlgorithmSelection = (algokey) => {
        if (!supportedAlgorithms.includes(algokey)) {
            alert(`${algokey} is not yet implemented!`);
            return;
        }
        if (raceMode) {
            if (algorithm.includes(algokey)) {
                setAlgorithm(algorithm.filter((a) => a !== algokey));
            } else {
                setAlgorithm([...algorithm, algokey])
            }
        } else {
            setAlgorithm([algokey]);
        }
    };

    const isSelected = (algokey) => {
        return algorithm.includes(algokey);
    };

    return (
        <div className="flex flex-col gap-2 text-[8px] mb-20 font-bold sm:text-[14px] text-center md:text-[14px]">
            <h1 className='text-sm md:text-[18px] md:py-4 md:px-2 lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Select Algorithms</h1>
              
            <button className={`p-2 rounded-md cursor-pointer transition ${raceMode ? "text-white bg-gradient-to-tl from-rose-700 to-rose-950 hover:text-rose-300" : "text-white bg-gradient-to-tl from-green-700 to-green-950 hover:text-green-400"}`} onClick={() => setRaceMode(!raceMode)}>
                {raceMode ? "Disable Race Mode" : "Enable Race Mode"}
            </button>
            
            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setSortDropdown(!sortDropdown); setSearchDropdown(false); setDataStructureDropdown(false); setAlgorithmType("sorting"); setAlgorithm([]);}}>
                Sorting Algorithms
            </button>

            <motion.ul
                initial={false}
                animate={{ height: sortDropdown ? "auto" : "0px", opacity: sortDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    sortingAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: sortDropdown ? 1 : 0, y: sortDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={`p-2 rounded-md text-gray-700 hover:bg-gray-900 hover:text-white cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : ""} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && " Not Implemented"}
                        </motion.li>
                    ))}
            </motion.ul>



            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setSearchDropdown(!searchDropdown); setSortDropdown(false); setDataStructureDropdown(false); setAlgorithmType("searching"); setAlgorithm([]); setRaceMode(false);}}>
                Searching Algorithms
            </button>

            <motion.ul
                initial={false}
                animate={{ height: searchDropdown ? "auto" : "0px", opacity: searchDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    searchingAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: searchDropdown ? 1 : 0, y: searchDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={` p-2 rounded-md  text-gray-700 hover:bg-gray-900 hover:text-white  cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : "hover:bg-gray-100"} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && " Not Implemented"}
                        </motion.li>
                    ))}
            </motion.ul>

            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer"
                onClick={() => { setDataStructureDropdown(!dataStructureDropdown); setSortDropdown(false); setSearchDropdown(false); }}>
                Data Structures
            </button>
            <motion.div initial={false} animate={{ height: dataStructureDropdown ? "auto" : "0px", opacity: dataStructureDropdown ? 1 : 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-5 rounded-md overflow-hidden">
            <button className="p-1 rounded-md text-gray-700 hover:bg-gray-900 hover:text-white cursor-pointer transition" initial={{ opacity: 0, y: -10 }} animate={{ opacity: dataStructureDropdown ? 1 : 0, y: dataStructureDropdown ? 0 : -10 }} onClick={() => { setAlgorithmType("stack");  setAlgorithm([]); setRaceMode(false); handleAlgorithmSelection("Stack") }}>
                Stack
            </button>
            <button  className="p-1 rounded-md text-gray-700 hover:bg-gray-900 hover:text-white cursor-pointer transition" initial={{ opacity: 0, y: -10 }} animate={{ opacity: dataStructureDropdown ? 1 : 0, y: dataStructureDropdown ? 0 : -10 }} onClick={() => { setAlgorithmType("linkedlist"); setAlgorithm([]); setRaceMode(false); handleAlgorithmSelection("Linked List") }}>
                Linked List
            </button>
            <button className="p-1 rounded-md text-gray-700 hover:bg-gray-900 hover:text-white cursor-pointer transition" initial={{ opacity: 0, y: -10 }} animate={{ opacity: dataStructureDropdown ? 1 : 0, y: dataStructureDropdown ? 0 : -10 }} onClick={() => { setAlgorithmType("array"); setAlgorithm([]); setRaceMode(false); handleAlgorithmSelection("Array")}}>
                Array
            </button>
            </motion.div>

            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setGraphDropdown(!graphDropdown);}}>
            Graph Algorithms <strong className="text-[10px]">(coming soon)</strong>
            </button>

            <motion.ul
                initial={false}
                animate={{ height: graphDropdown ? "auto" : "0px", opacity: graphDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    graphAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: graphDropdown ? 1 : 0, y: graphDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={` p-2 rounded-md  text-gray-700 hover:bg-gray-900 hover:text-white  cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : "hover:bg-gray-100"} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && "Coming Soon"}
                        </motion.li>
                    ))}
            </motion.ul>

            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setDynamicProgrammingDropdown(!dynamicProgrammingDropdown);}}>
            Dynamic Programming <strong className="text-[10px]">(coming soon)</strong>
            </button>

            <motion.ul
                initial={false}
                animate={{ height: dynamicProgrammingDropdown ? "auto" : "0px", opacity: dynamicProgrammingDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    dyanamicProgrammingAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: dynamicProgrammingDropdown ? 1 : 0, y: dynamicProgrammingDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={` p-2 rounded-md  text-gray-700 hover:bg-gray-900 hover:text-white  cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : "hover:bg-gray-100"} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && "Coming Soon"}
                        </motion.li>
                    ))}
            </motion.ul>

            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setGreedyDropdown(!greedyDropdown);}}>
            Greedy Algorithms <strong className="text-[10px]">(coming soon)</strong>
            </button>

            <motion.ul
                initial={false}
                animate={{ height: greedyDropdown ? "auto" : "0px", opacity: greedyDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    greedygAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: greedyDropdown ? 1 : 0, y: greedyDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={` p-2 rounded-md  text-gray-700 hover:bg-gray-900 hover:text-white  cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : "hover:bg-gray-100"} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && "Coming Soon"}
                        </motion.li>
                    ))}
            </motion.ul>

            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setBacktrackingDropdown(!backtrackingDropdown);}}>
            Backtracking Algorithms <strong className="text-[10px]">(coming soon)</strong>
            </button>

            <motion.ul
                initial={false}
                animate={{ height: backtrackingDropdown ? "auto" : "0px", opacity: backtrackingDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    backtrackingAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: backtrackingDropdown ? 1 : 0, y: backtrackingDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={` p-2 rounded-md  text-gray-700 hover:bg-gray-900 hover:text-white  cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : "hover:bg-gray-100"} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && "Coming Soon"}
                        </motion.li>
                    ))}
            </motion.ul>

            <button className="border p-2 w-[100%] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow shadow-pink-900 rounded-md cursor-pointer" onClick={() =>{ setTreeDropdown(!treeDropdown);}}>
            Tree Algorithms <strong className="text-[10px]">(coming soon)</strong>
            </button>

            <motion.ul
                initial={false}
                animate={{ height: treeDropdown ? "auto" : "0px", opacity: treeDropdown ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-5 rounded-md overflow-hidden"
            >
                {
                    treeAlgoList.map((algo) => (
                        <motion.li
                            key={algo.key}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: treeDropdown ? 1 : 0, y: treeDropdown ? 0 : -10 }}
                            onClick={() => handleAlgorithmSelection(algo.key)}
                            className={` p-2 rounded-md  text-gray-700 hover:bg-gray-900 hover:text-white  cursor-pointer transition ${isSelected(algo.key) ? "bg-green-300 text-black! text-[.9rem] hover:bg-green-400" : "hover:bg-gray-100"} ${!supportedAlgorithms.includes(algo.key) ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {algo.name} {!supportedAlgorithms.includes(algo.key) && "Coming Soon"}
                        </motion.li>
                    ))}
            </motion.ul>

        </div>
    )
}

export default Sidebar
