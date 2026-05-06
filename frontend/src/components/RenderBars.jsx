import { motion } from "motion/react";
import { useState } from "react";

function RenderBars({ arr, steps, currentStep,raceMode,algorithm,algorithmType, searchTarget}) {
  const current = steps[currentStep] || {
    array: arr,
    compare: [],
    swap: [], 
    sorted: [],
  ...(algorithmType ==="searching" ? {
    current:-1,
    found:-1,
    left:-1,
    right:-1,
    mid:-1,
    target:searchTarget
  }:{})
  }
  const [viewMode, setViewMode] = useState("box");

  const barWidth = 42;
  const barSpacing = 50;
  const boxSize = 60;
  const gap = 10;
  const baseHeight = 200 + arr.length * 10;
  const maxValue = arr.length > 0 ? Math.max(...arr) : 1;
  const scale = baseHeight / maxValue

  const getColor = (index, current) => {
    if(algorithmType ==="searching"){
            if(current.found === index) return "#16e53c";
            if(current.current === index) return "#ff1c1ce9";
            if(current.mid === index) return "orange";
            if(current.left <= index & index <= current.right) return "purple";
            return "steelblue";
        }
    else{
    if (current.sorted?.includes(index)) return "#16e53c";
    if (current.swap?.includes(index)) return "orange";
    if (current.compare?.includes(index)) return "#ff1c1ce9";
    return "steelblue";
  }
};
  
    const isSearchComplete = currentStep === steps.length - 1;
    const isFound = current.found !== -1;

  return (
    <div className="relative flex flex-col justify-center items-center">
      <button className={`shadow mt-2 active:scale-90 shadow-gray-500 font-semibold text-green-700 hover:text-yellow-600 hover:shadow-gray-400 ${algorithm.length>=2?" md:mt-1 absolute top-[-30px] right-0 md:top-0 md:relative py-1 mt-1 md:px-4 md:py-2 px-2 text-[10px]":"px-4 py-2"}  rounded-2xl cursor-pointer`} onClick={() => setViewMode(viewMode === "bars" ? 'box' : 'bars')}>{viewMode==='bars'?'Box':'Bars'}</button>

            {algorithmType === "searching" && isSearchComplete && (
                <motion.div
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5,ease:"easeOut"}}
                className="mt-3 text-sm lg:text-xl font-semibold">
                {isFound? <div className="rounded-md p-1 shadow-sm shadow-green-500 text-green-500"> <strong className="font-extrabold">{searchTarget}</strong> Found 🎉😊</div>: <div className="rounded-md p-1 shadow-sm shadow-rose-500 text-rose-500"> <strong className="font-extrabold text-rose-700">{searchTarget}</strong> not found 🥲</div>}
                </motion.div>
            )}

      
            {algorithmType === "sorting" && currentStep === steps.length - 1 && (
                <motion.div
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5,ease:"easeOut"}}
                className={`mt-2 shadow shadow-gray-500 p-1 ${algorithm.length >= 2 ? "lg:text-[10px]" : ""} text-[10px] mx-4 lg:text-xl font-semibold text-white`}>
               ✅ Sorting Completed 🎉 Sorted Array : [{current.array.join(", ")}]
                </motion.div>
            )}
      
      <svg className={`p-2 w-full ${algorithm.length==2?"flex-row h-[20vh]":"flex-col"} ${raceMode && algorithm.length==3?"h-[15vh]  lg:h-[60vh] ":"h-[26vh] lg:h-[60vh]"} `}
        viewBox={`0 0 ${(arr.length * (viewMode === "bars" ? barSpacing : (boxSize + gap)))} ${baseHeight + 50}`}
      >
        {
          current.array.map((value, index) => (
            <g key={index}>
              {viewMode === "bars" ? (
                <motion.rect
                  x={index * barSpacing}
                  y={baseHeight - value * scale}
                  width={barWidth}
                  rx={5} ry={5}
                  height={value * scale}
                  fill={getColor(index, current)}
                  transition={{ duration: 0.3, ease: 'linear' }}
                />
              ) : (
                <motion.rect
                  x={index * (boxSize + gap)}
                  y={130}
                  width={boxSize}
                  height={boxSize}
                  rx={10} ry={10}
                  fill={getColor(index, current)}
                  transition={{ duration: 0.3, ease: 'linear' }}
                />
              )}
              <text
                x={index * (viewMode === "bars" ? barSpacing : (boxSize + gap)) + (viewMode === "bars" ? barWidth / 2 : boxSize / 2)}
                y={viewMode === "bars" ? baseHeight - 4 : 170}
                textAnchor="middle"
                fill="yellow"
                fontWeight='bold'
                fontSize={25}
              >
                {value}
              </text>
              <text
                x={index * (viewMode === "bars" ? barSpacing : (boxSize + gap)) + (viewMode === "bars" ? barWidth / 2 : boxSize / 2)}
                y={viewMode === "bars" ? baseHeight + 25 : boxSize + 160}
                textAnchor="middle"
                fill="white"
                fontWeight='bold'
                fontSize={20}
              >
                {index}
              </text>

            </g>
          ))
        }
      </svg>
      <ul className="absolute bottom-2 text-white flex justify-center gap-2 text-[4px] sm:left-5 sm:text-[9px] left-3 lg:left-5 lg:gap-10 md:text-[9px]">
        {algorithmType === "searching" ? (
      <>
       <li>🔴 Current</li>
        <li>🟠 Mid</li>
        <li>🟣 Range</li>
        <li>🟢 Found</li>
      </>
        ) : (
      <>
        <li>🔴 Compared</li>
        <li>🟠 Swapped</li>
        <li>🟢 Sorted</li>
      </>
      )}
      </ul>
    </div>
  )
}

export default RenderBars;
