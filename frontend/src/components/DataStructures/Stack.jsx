import { motion, AnimatePresence } from "motion/react"

function Stack({ stack }) {
    return (
        <div className='flex flex-col items-center p-2 h-full rounded-xl'>
             <div className="bg-clip-text text-transparent p-1 rounded-xl  bg-gradient-to-r text-2xl from-purple-400 via-green-500 to-white font-bold mb-4 md:mb-15">The length of Stack : {stack.length}</div>
            <div className='flex flex-col-reverse pt-10 gap-3 lg:w-[50%] md:w-[60%] w-[80%] h-[44vh] md:h-[60vh] overflow-auto p-4 shadow-md shadow-pink-800 rounded-lg'>
                <AnimatePresence mode="popLayout">
                    {stack.length === 0 ? (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-gray-400 text-center py-8"
                        >Stack is empty </motion.p>
                    ) : (
                        stack.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{
                                    opacity: 1, y: 0, scale: 1, transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                        // delay: index * 0.1
                                    }
                                }}
                                exit={{
                                    y: -50,
                                    opacity: 0.8,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    },
                                    background: "red"
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                className="bg-gradient-to-r  from-blue-600 text-3xl to-blue-400 text-white font-bold p-4 rounded-lg text-center shadow-lg shadow-blue-500/20 backdrop-blur-sm"
                            >
                                {item}
                            </motion.div>

                        ))
                    )}
                </AnimatePresence >

            </div >
        </div >
    );
}

export default Stack
