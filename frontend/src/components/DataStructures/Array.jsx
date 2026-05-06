import { motion, AnimatePresence } from "motion/react"

function Array({ list }) {
    return (
        <div className="flex flex-col items-center justify-center p-2 rounded-xl h-[50vh]">
            <div className="bg-clip-text text-transparent p-1 rounded-xl  bg-gradient-to-r text-2xl from-purple-400 via-green-500 to-white font-bold mb-15">The length of Array : {list.length}</div>
            <div className="flex items-center gap-2 w-full overflow-auto px-1 py-4 rounded-lg ">
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
                                    y: -100,
                                    scale: 0.8,
                                    transition: {
                                        duration: 0.6
                                    }
                                }}
                            >
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="bg-gradient-to-r from-green-600 to-green-400 font-extrabold  text-black   w-15 md:w-20 py-4 md:p-6 text-xl md:text-3xl text-center  rounded-lg shadow-lg shadow-green-500/20 backdrop-blur-sm"
                                    >
                                        {item}
                                    </motion.div>
                                    <div className="font-semibold text-xl mt-2 text-yellow-400">
                                        {index}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Array