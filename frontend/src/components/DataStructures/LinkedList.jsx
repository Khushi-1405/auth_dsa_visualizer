import { motion, AnimatePresence } from "motion/react"

function LinkedList({ list }) {
    return (
        <div className="flex flex-col items-center justify-center p-2 rounded-xl h-[50vh]">
            <div className="bg-clip-text text-transparent p-2 rounded-xl  bg-gradient-to-r text-2xl from-purple-400 via-green-500 to-white font-bold mb-20">The length of Linked List : {list.length}</div>
            <div className="flex items-center w-full overflow-auto px-1 py-4 rounded-lg mb-20 md:mb-0">
                <AnimatePresence mode="popLayout">
                    {list.length === 0 ? (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-gray-400 text-center py-8 w-full"
                        >Linked List is empty</motion.p>
                    ) : (
                        list.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center"
                                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                animate={{
                                    opacity: 1, x: 0, scale: 1, transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                        delay: index * 0.1
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    x: 50,
                                    scale: 0.8,
                                    transition: {
                                        duration: 0.5
                                    }
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="bg-gradient-to-r from-green-600 to-green-400 text-sm md:text-2xl font-extrabold text-center text-black py-2 w-13 md:w-20 md:p-4 rounded-lg shadow-lg shadow-green-500/20 backdrop-blur-sm"
                                >
                                    {item}
                                <div className="text-[12px] text-green-900 font-bold">
                                    Node  {index}
                                </div>
                                </motion.div>

                                {
                                    index < list.length - 1 && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{
                                                scale: 1,
                                                transition: {
                                                    delay: (index + 1) * 0.1
                                                }
                                            }}
                                            className="flex items-center mx-2"
                                        >
                                            <div className="w-1.5 h-1 md:w-4 bg-gradient-to-r from-green-500/50 to-green-300/50 rounded-full"
                                            />

                                            <div className="w-2 h-2 md:h-3 md:w-3 border-t-2 border-r-2 border-green-400/50 transform rotate-45 -ml-1" />

                                        </motion.div>
                                    )
                                }
                            </motion.div>
                        ))
                    )

                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default LinkedList