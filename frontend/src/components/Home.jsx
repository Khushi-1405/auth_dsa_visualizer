import Tilt from 'react-parallax-tilt'
import { useEffect, useState,useRef } from 'react'
import CodeVizImg from '../assets/software-dev.jpg'
import sorting from '../assets/sorting.gif'
import Graph from '../assets/Graph.gif'
import Dp from '../assets/DP.gif'
import algorithm from '../assets/algorithms.jpg'
import TimeSpaceComplexity from '../assets/TimeSpaceComplexity.avif'
import InterviewPreparation from '../assets/InterviewPreparation.png'
import RealWorldApplication from '../assets/RealWorldApplication.jpeg'
import { Code, BarChart4, Network, Braces, GitCompare, Cpu, Layers, Brain, Zap, Clock, Sparkles, Rocket, Code2, BookOpen, Lightbulb, ArrowRight, Github, Linkedin, Mail, Twitter, Repeat } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, animate,useInView } from 'motion/react'
import { easeInOut, stagger } from 'motion'
import { NavLink } from 'react-router'


function Home({setAlgorithm}) {
  const [position, setPosition] = useState({ x: "0px", y: "0px" });
  const Colors = ["#DD335C", "#ff5e57", "#e073c5", "#1E67C6", "#CE84CF"];
  const color = useMotionValue(Colors[0]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    animate(color, Colors, {
      ease: easeInOut,
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;


  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPosition({ x: `${mouseX}px`, y: `${mouseY}px` })
  };


  const contVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.9 },
    hidden: { opacity: 0,y: 20},
    visible: { opacity: 1, y:0, transition: { duration: 2.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
  };

 
  return (
    <div className='flex flex-col scroll-smooth gap-30 md:gap-80 overflow-hidden pb-10 md:pb-5 '>
      <motion.div style={{ backgroundImage, boxShadow }} className='flex flex-col justify-between w-[100%] m-auto md:flex-row  md:h-[88vh]' >

        <div className='h-[100%]  w-[100%] rounded-2xl m-auto overflow-hidden md:w-[90%] md:h-[93%]'>

          <motion.div
            variants={contVariants}
            initial="hidden"
            animate="visible"
            onMouseMove={handleMouseMove}
            className='flex flex-col md:flex-row items-center justify-center h-[50%]  md:w-[100%] md:h-[100%] p-6 md:p-10'
            style={{ '--x': position.x, '--y': position.y }}>
            <div className='relative z-10 w-[full] md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6'>

              <motion.div variants={textVariants} className='flex items-center space-x-3 '>
                <Code size={48} className='text-purple-500' />
                <h1 className='text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>CodeViz</h1>
              </motion.div>
              <motion.p variants={textVariants} className='text-xl md:text-2xl text-gray-300 text-center md:text-left'>
                Visualize, understand, and master algorithms through interactive exploration
              </motion.p>
              <div className='flex space-x-4 mt-6'>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="hidden"
            animate="visible"

                  className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium flex items-center space-x-2 hover:opacity-90 transition-all'>
                  <Rocket size={20} />
                   <NavLink to="/Visualizer">Get Started</NavLink>
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="hidden"
            animate="visible"

                  className='px-6  py-3 bg border border-purple-500 bg-transparent rounded-full text-white font-medium flex items-center space-x-2 hover:bg-purple-900/20 transition-all'>
                  <Sparkles size={20} className='text-yellow-400' />
                  <a href='#content' >Explore</a>
                </motion.button>
              </div>
            </div>

            <motion.div variants={imageVariants} className='w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center'>
              <div className='relative'>
                <div className='shadow-lg shadow-gray-950 relative  rounded-lg overflow-hidden'>
                  <img src={CodeVizImg} className='rounded-t-2xl  w-full h-64 object-cover' />
                  <div className='mt-4 space-y-3 p-2'>
                    <motion.div  initial={{ opacity: 0, x: -520 }} animate={{ opacity: 1, x: 0}} transition={{ duration: 2.5 }} className='flex items-center space-x-3'>
                      <Sparkles className='text-yellow-400' />
                      <span className='text-lg font-medium text-gray-200'>Interactive Visualizations</span>
                    </motion.div>

                    <motion.div  initial={{ opacity: 0, x: -520 }} animate={{ opacity: 1, x: 0}} transition={{ duration: 2.5 }} className='flex items-center space-x-3'>
                      <GitCompare className='text-green-400' />
                      <span className='text-lg font-medium text-gray-200'>Algorithm Comparisons</span>
                    </motion.div>

                    <motion.div  initial={{ opacity: 0, x: -520 }} animate={{ opacity: 1, x: 0}} transition={{ duration: 2.5 }} className='flex items-center space-x-3'>
                      <Brain className='text-blue-400' />
                      <span className='text-lg font-medium text-gray-200'>Intuitive Learning</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>

      <div id="content" className='flex flex-col justify-between gap-30 md:gap-5 w-[100%] md:w-[90%] m-auto rounded-2xl  md:flex-row md:h-[85vh]'>
        <Tilt
          tiltMaxAngleX={-5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1500}
          scale={1}
          glareEnable={true}
          glareMaxOpacity={0}
          glarePosition="all"
          className='h-[100%] m-auto rounded-2xl md:w-[48%] overflow-hidden mb-5 md:mb-0'
        >
          <motion.div 
          
          initial={{ opacity: 0, y: -100 }} 
          whileInView={{ opacity: 1, y: 0}} 
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 0.5,}}  
          onMouseMove={handleMouseMove} className='box md:shadow-[0px_0px_20px_inset] shadow-sky-400 relative h-full rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
             initial={{ opacity: 0, y: -100 }} 
             whileInView={{ opacity: 1, y: 0}} 
             viewport={{once:false,amount:0.3}}
             transition={{ duration: 0.5,}}  
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <motion.div 
               
                className='flex items-center space-x-3'>
                  <div className='p-3 bg-blue-500/20 rounded-xl'>
                    <Code className='text-blue-400 h-8 w-8' />
                  </div>
                  <motion.h2   className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Sorting Algorithms</motion.h2>
                </motion.div>
                <span className='px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full'>
                  Interactive
                </span>
              </div>

              <motion.p 
             
              className='text-gray-300 mb-6'>
                Explore the fascinating world of sorting algorithms, from the simple Bubble Sort to the efficient Quick Sort. Understand how different algorithms perform under various conditions and data sets.
              </motion.p>

              <NavLink to="/Visualizer" onClick={()=>setAlgorithm(["Insertion Sort"])} className='relative overflow-hidden rounded-xl mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-[1rem]'></div>

                <img src={sorting} alt="Sorting Algorithms Visualization" className='w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500' />
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <span className='text-white font-medium'>visualize sorting in real-time</span>
                </div>

              </NavLink>

              <div className='space-y-3 mt-auto'>
                <div className='flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg'>
                  <Clock className='text-yellow-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-yellow-300'>Time Complexity Analysis</span>
                    <p className='text-sm text-gray-400'>Visualize how algorithms scale with input size</p>
                  </div>
                  <div>

                  </div>
                </div>
                <div className='flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg'>
                  <BarChart4 className='text-green-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-green-300'>Performance Comparisons</span>
                    <p className='text-sm text-gray-400'>See real-time speed differences between algorithms</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg'>
                  <GitCompare className='text-purple-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-purple-300'>Step-by-Step Execution</span>
                    <p className='text-sm text-gray-400'>Watch how each algorithm transforms data</p>
                  </div>
                </div>

              </div>
              <NavLink  to="/visualizer" onClick={()=>setAlgorithm(["Selection Sort"])} className='mt-6 group flex items-center text-blue-400 font-medium'>
                <span>Try sorting algorithms</span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </NavLink>
            </motion.div>
          </motion.div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={-5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1500}
          scale={1}
          glareEnable={true}
          glareMaxOpacity={0}
          glarePosition="all"
          className='h-[100%] rounded-2xl md:w-[48%] overflow-hidden mb-5 md:mb-0'
        >
          <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0}} 
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 0.8,}}  
          onMouseMove={handleMouseMove} className='box5 relative w-[98%] md:shadow-[0px_0px_20px_inset] shadow-pink-700 h-full rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
           initial={{ opacity: 0, y: 100 }} 
           whileInView={{ opacity: 1, y: 0}} 
           viewport={{once:false,amount:0.3}}
           transition={{ duration: 0.8,}}  
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-3 bg-green-500/20 rounded-xl'>
                    <Network className='text-green-400 h-8 w-8' />
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300'>Graph Algorithms</h2>
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full'>
                  Advanced
                </span>
              </div>

              <p className='text-gray-300 mb-6'>
                Dive into the powerful world of graph algorithms that solve complex problems in networks, pathfinding, and optimization. Visualize how these algorithms navigate through connected data structures.
              </p>

              <div className='relative overflow-hidden rounded-xl mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 mix-blend-luminosity rounded-[1rem]'></div>

                <img src={Graph} alt="Graph Algorithms Visualization" className='w-full h-48 object-cover group-hover:scale-105 group-hover:opacity-90 transition-transform duration-500' />
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <span className='text-white font-medium'>Explore network optimization</span>
                </div>
              </div>

              <div className='space-y-3 mt-auto'>
                <div className='flex items-center gap-3 bg-yellow-900/20 p-3 rounded-lg'>
                  <Zap className='text-yellow-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-yellow-300'>Shortest Path Algorithms</span>
                    <p className='text-sm text-gray-400'>Dijkstra's, A*, and Bellman-Ford visualized</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg'>
                  <Layers className='text-blue-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-blue-300'>Minimum Spanning Trees</span>
                    <p className='text-sm text-gray-400'>Kruskal's and Prim's algorithms in action</p>
                  </div>
                </div>

                <div className='flex items-center gap-3 bg-purple-900/20 p-3 rounded-lg'>
                  <Brain className='text-purple-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-purple-300'>Network Flow</span>
                    <p className='text-sm text-gray-400'>Ford-Fulkerson and Push-Relabel methods</p>
                  </div>
                </div>
              </div>

              <button className='mt-6 group flex items-center text-green-400 font-medium'>
                <span>Discover graph algorithms <strong className='text-red-500'>(coming soon)</strong></span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>
            </motion.div>
          </motion.div>
        </Tilt>
      </div>

      <div
        className='flex flex-col md:flex-row justify-between gap-30 md:gap-5 w-[100%] md:w-[90%] m-auto rounded-2xl'>
        <Tilt
          tiltMaxAngleX={-5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1500}
          scale={1}
          glareEnable={true}
          glareMaxOpacity={0}
          glarePosition="all"
          className='h-[100%] md:w-[32%] rounded-2xl overflow-hidden mb-5 md:mb-0'>

          <motion.div 
           initial={{ opacity: 0, x: 100 }} 
           whileInView={{ opacity: 1, x: 0}} 
           viewport={{once:false,amount:0.3}}
           transition={{ duration: 1,}} 
          onMouseMove={handleMouseMove} className='box  md:shadow-[0px_0px_20px_inset] shadow-rose-800  h-full rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0}} 
            viewport={{once:false,amount:0.3}}
            transition={{ duration: 1,}} 
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-3 bg-orange-500/20 rounded-2xl'>
                    <Braces className='text-orange-400 h-8 w-8' />
                  </div>
                  <h2 className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300'>Data Structures</h2>
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-orange-500/20 text-orange-300 rounded-full'>Fundamentals</span>
              </div>

              <p className='text-gray-300 mb-6'>
                Understand the building blocks of efficient algorithms through interactive visualizations of fundamental data structures.
              </p>
              <NavLink to="/visualizer" className='relative rounded-2xl overflow-hidden mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-pink-600/20 to-blue-600/20 overflow-hidden'></div>

                <img src={algorithm} alt="Data Structures Visualization" className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500' />

                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/100 to-transparent'>
                  <span className='text-white font-medium'>Explore Data organization</span>
                </div>
              </NavLink>

              <div className='space-y-2 mt-auto'>
                <div className='p-2 rounded-lg bg-red-900/20'>
                  <span className='font-semibold text-red-400'>Array & Linked Lists</span>
                </div>
                <div className='p-2 rounded-lg bg-blue-900/20'>
                  <span className='font-semibold text-blue-400'>Tree & Heaps</span>
                </div>
                <div className='p-2 rounded-lg bg-green-900/20'>
                  <span className='font-semibold text-green-400'>Hash Tables</span>
                </div>
                <div className='p-2 rounded-lg bg-purple-900/20'>
                  <span className='font-semibold text-purple-400'>Stacks & Queues</span>
                </div>
              </div>

              <NavLink to="/visualizer"  className='mt-6 group flex items-center text-orange-400 font-medium '>
                <span>Try Data Structures</span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </NavLink>
            </motion.div>
          </motion.div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={-5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1500}
          scale={1}
          glareEnable={true}
          glareMaxOpacity={0}
          glarePosition="all"
          className='h-[100%] md:w-[32%] rounded-2xl overflow-hidden mb-5 md:mb-0'>

          <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            whileInView={{ opacity: 1, y: 0}} 
            viewport={{once:false,amount:0.3}}
            transition={{ duration: 0.5,}}  
          onMouseMove={handleMouseMove} className='box4 h-full  md:shadow-[0px_0px_20px_inset] shadow-purple-900 rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
              initial={{ opacity: 0, y: -100 }} 
              whileInView={{ opacity: 1, y: 0}} 
              viewport={{once:false,amount:0.3}}
              transition={{ duration: 0.5,}} 
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-3 bg-purple-500/20 rounded-2xl'>
                    <Cpu className='text-purple-400 h-8 w-8' />
                  </div>
                  <h2 className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-300'> Dynamic Programming</h2>
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full'>Advanced</span>
              </div>

              <p className='text-gray-300 mb-6'>
                Master the art of solving complex problems by breaking them down into simpler subproblems with optimized solutions.
              </p>
              <div className='relative overflow-hidden rounded-2xl mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 mix-blend-luminosity '></div>

                <img src={Dp} alt="Dynamic programming visualization" className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500' />

                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <span className='text-white font-medium'>Optimize complex problems</span>
                </div>
              </div>

              <div className='space-y-2 mt-auto'>
                <div className='p-2 rounded-lg bg-yellow-900/20'>
                  <span className='font-semibold text-yellow-400'>Fibonacci Sequence</span>
                </div>
                <div className='p-2 rounded-lg bg-green-900/20'>
                  <span className='font-semibold text-green-400'>Knapsack Problem</span>
                </div>
                <div className='p-2 rounded-lg bg-green-900/20'>
                  <span className='font-semibold text-blue-400'>Longest Common Subsequence</span>
                </div>
                <div className='p-2 rounded-lg bg-red-900/20'>
                  <span className='font-semibold text-red-400'>Matrix Chain Multiplication</span>
                </div>
              </div>

              <button className='mt-6 group flex items-center text-purple-400 font-medium '>
                <span>Dynamic programming <strong className='text-red-500'>(coming soon)</strong></span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>
            </motion.div>
          </motion.div>
        </Tilt>

        <Tilt
          tiltMaxAngleX={-5}
          tiltMaxAngleY={5}
          perspective={1000}
          transitionSpeed={1500}
          scale={1}
          glareEnable={true}
          glareMaxOpacity={0}
          glarePosition="all"
          className='h-[100%] md:w-[32%] rounded-2xl overflow-hidden mb-5 md:mb-0'>

          <motion.div
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0}} 
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 0.5,}}
          onMouseMove={handleMouseMove} className='box2 md:shadow-[0px_0px_20px_inset] shadow-sky-700 h-full rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
            initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0}} 
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 0.5,}}
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-3 bg-blue-500/20 rounded-2xl'>
                    <GitCompare className='text-blue-400 h-8 w-8' />
                  </div>
                  <h2 className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300'>Algorithm Complexity</h2>
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full'>Theoretical</span>
              </div>

              <p className='text-gray-300 mb-6'>
                Understand the theoretical foundations of algorithm analysis and learn to predict performance characteristics.
              </p>
              <div className='relative overflow-hidden rounded-xl mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 mix-blend-luminosity rounded-[1rem]'></div>
                <img src={TimeSpaceComplexity} className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500' />

                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <span className='text-white font-medium'>Analyze algorithm efficiency</span>
                </div>
              </div>

              <div className='space-y-2 mt-auto'>
                <div className='p-2 rounded-lg bg-green-900/20'>
                  <span className='font-semibold text-green-400'>Big O Notation</span>
                </div>
                <div className='p-2 rounded-lg bg-yellow-900/20'>
                  <span className='font-semibold text-yellow-400'>Space Complexity</span>
                </div>
                <div className='p-2 rounded-lg bg-purple-900/20'>
                  <span className='font-semibold text-purple-400'>Amortized Analysis</span>
                </div>
                <div className='p-2 rounded-lg bg-red-900/20'>
                  <span className='font-semibold text-red-400'>Recurrence Relations</span>
                </div>
              </div>

              <button className='mt-6 group flex items-center text-orange-400 font-medium '>
                <span>Explore complexity analysis <strong className='text-red-500'>(coming soon)</strong></span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>
            </motion.div>
          </motion.div>
        </Tilt>
      </div>


      <motion.div
    
      style={{ border, boxShadow, }} className='flex flex-col justify-between gap-30  md:gap-5  w-[100%] md:w-[90%] m-auto rounded-2xl  md:flex-row mb-10'>
        <div

          className='h-[100%]  rounded-2xl md:w-[48%] overflow-hidden mb-5 md:mb-0'
        >
          <motion.div 
          initial={{ opacity: 0, y: 200 }} 
          whileInView={{ opacity: 1, y: 0}} 
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 0.7,}}  
          onMouseMove={handleMouseMove} className='box4 relative h-full rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-3 bg-green-500/20 rounded-xl'>
                    <Brain className='text-green-400 h-8 w-8' />
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300'>Interview Preparation</h2>
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full'>
                  Career
                </span>
              </div>

              <p className='text-gray-300 mb-6'>
                Ace your technical interviews with our comprehensive collection of common DSA problems. Practice with interactive visualizations that help you understand the underlying patterns and solutions.
              </p>

              <div className='relative overflow-hidden rounded-xl mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-greenq-600/20 to-teal-600/20  rounded-[1rem] '></div>

                <img src={InterviewPreparation} className='w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500' />
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <span className='text-white font-medium'>Prepare for tech interviews</span>
                </div>

              </div>

              <div className='space-y-3 mt-auto'>
                <div className='flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg'>
                  <BookOpen className='text-blue-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-blue-300'>LeetCode-style Problems</span>
                    <p className='text-sm text-gray-400'>Interactive solutions with visualizations</p>
                  </div>
                  <div>

                  </div>
                </div>
                <div className='flex items-center gap-3 bg-purple-900/20 p-3 rounded-lg'>
                  <Lightbulb className='text-purple-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-purple-300'>Pattern Recognition</span>
                    <p className='text-sm text-gray-400'>Learn to identify problem categories</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 bg-yellow-900/20 p-3 rounded-lg'>
                  <Clock className='text-yellow-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-yellow-300'>Time & Space Analysis</span>
                    <p className='text-sm text-gray-400'>Optimize your solutions</p>
                  </div>
                </div>
              </div>

              <button className='mt-6 group flex items-center text-green-400 font-medium'>
                <span>Start interview prep</span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div

          className='h-[100%]  rounded-2xl md:w-[48%] overflow-hidden mb-5 md:mb-0'>
          <motion.div 
           initial={{ opacity: 0, y: -200 }} 
           whileInView={{ opacity: 1, y: 0}} 
           viewport={{once:false,amount:0.3}}
           transition={{ duration: 0.7,}}  
          onMouseMove={handleMouseMove} className='box5 relative h-full rounded-2xl overflow-hidden' style={{ '--x': position.x, '--y': position.y }}>
            <motion.div 
           
            className='relative z-10 p-6 h-full flex flex-col'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-3 bg-yellow-500/20 rounded-xl'>
                    <Zap className='text-yellow-400 h-8 w-8' />
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-300'>Real-world Applications</h2>
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-yellow-500/20 text-green-300 rounded-full'>
                  Practical
                </span>
              </div>

              <p className='text-gray-300 mb-6'>
                Discover how DSA powers the technology we use every day. From search engines to social networks, understand the algorithms behind modern applications through interactive case studies.
              </p>

              <div className='relative overflow-hidden rounded-xl mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-600/20 to-blue-600/20 rounded-[1rem]'></div>

                <img src={RealWorldApplication} className='w-full h-50 object-cover group-hover:scale-105 transition-transform duration-500' />
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <span className='text-white font-medium'>See algorithms in action</span>
                </div>
              </div>

              <div className='space-y-3 mt-auto'>
                <div className='flex items-center gap-3 bg-green-900/20 p-3 rounded-lg'>
                  <Zap className='text-green-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-green-300'>Search Engines</span>
                    <p className='text-sm text-gray-400'>PageRank and indexing algorithms</p>
                  </div>
                </div>

                <div className='flex items-center gap-3 bg-blue-900/20 p-3 rounded-lg'>
                  <Lightbulb className='text-blue-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-blue-300'>Recommendation Systems</span>
                    <p className='text-sm text-gray-400'>Collaborative filtering visualized</p>
                  </div>
                </div>

                <div className='flex items-center gap-3 bg-purple-900/20 p-3 rounded-lg'>
                  <Network className='text-purple-400 h-5 w-5 flex-shrink-0' />
                  <div>
                    <span className='font-semibold text-purple-300'>Route Planning</span>
                    <p className='text-sm text-gray-400'>GPS navigation algorithms</p>
                  </div>
                </div>
              </div>

              <button className='mt-6 group flex items-center text-yellow-400 font-medium'>
                <span>Explore real-world cases</span>
                <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className='flex flex-col justify-between m-auto rounded-2xl md:flex-row md:w-[90%] md:h-[85vh] mb-5 md:5'>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={-5}
          perspective={1000}
          transitionSpeed={1500}
          scale={1}
          glareEnable={true}
          glareMaxOpacity={0}
          glarePosition="all"
          className='rounded-2xl   overflow-hidden md:w-[100%] md:h-[100%]'>

          <motion.div
          initial={{ opacity: 0, scale:0.5 }} 
          whileInView={{ opacity: 1, scale:1}} 
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 0.7,}} 
          onMouseMove={handleMouseMove} className='box flex flex-col items-center justify-center h-[50%]  md:w-[100%] md:h-[100%] p-6 md:p-10' style={{ '--x': position.x, '--y': position.y }}>

            <div className='flex relative z-10 flex-col gap-4 md:gap-10 md:flex-row'>
              <div className='space-y-2 rounded-2xl p-4 pl-5 shadow-lg shadow-blue-300 md:w-[50%]'>
                <div>
                  <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'><Code size={48} className='text-purple-500 inline-flex' /> CodeViz</h1>
                  <p className='text-sm text-left md:text-xl text-gray-400'>
                    Empowering developers with interactive data structure visualizations and comprehensive learning resources.
                  </p>
                </div>
                <div className='flex gap-10'>

                  <div className='space-y-2'>
                    <h1 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Resources</h1>
                    <ul className='p-2 space-y-2 font-semibold text-gray-500'>
                      <li className='cursor-pointer'>Documentation</li>
                      <li className='cursor-pointer'>Tutorials</li>
                      <li className='cursor-pointer'>Examples</li>
                      <li className='cursor-pointer'>Blogs</li>
                    </ul>
                  </div>
                  <div className='space-y-2'>
                    <h1 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Community</h1>
                    <ul className='p-2 space-y-2 font-semibold shadow-amber-200 text-gray-500'>
                      <li className='cursor-pointer'>Github</li>
                      <li className='cursor-pointer'>Discord</li>
                      <li className='cursor-pointer'>Forums</li>
                      <li className='cursor-pointer'>Newsletter</li>
                    </ul>
                  </div>
                </div>

                <div className='flex flex-col text-white space-y-5'>
                  <h1 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Connect</h1>
                  <div className='flex  space-x-5'>
                   <a href="https://github.com/Khushi-1405"> <Github className='bg-gray-800  w-10 h-10 p-2 rounded-md' /> </a>
                    <a href="https://www.linkedin.com/in/khushi-dubey-916b84221/"> <Linkedin className='bg-gray-800  w-10 h-10 p-2 rounded-md' /> </a>
                    <Mail className='bg-gray-800 cursor-pointer w-10 h-10 p-2 rounded-md' />
                    <Twitter className='bg-gray-800 cursor-pointer w-10 h-10 p-2 rounded-md' />
                  </div>
                  <p className='text-[0.9rem] text-left md:text-[0.9rem] text-gray-300 md:text-left'>
                    Empowering developers with interactive data structure visualizations and comprehensive learning resources.
                  </p>
                </div>

              </div>

              <div className=' w-full md:w-1/2 mt-7 md:mt-22'>
                <motion.div 
                initial={{ opacity: 0, y:200}} 
                whileInView={{ opacity:1, y:0}} 
                viewport={{once:false,amount:0.3}}
                transition={{ duration: 0.7,}} 
                style={{ border, boxShadow, }} className='relative rounded-2xl'>
                  <div className='relative rounded-2xl overflow-hidden'>
                    <form action="" className='flex flex-col'>
                      <div className='flex flex-col gap-5 justify-center items-center container m-auto w-[90%]  my-5'>
                        <input type="text" className='h-[2.5rem] outline-none shadow shadow-pink-800 text-gray-500 w-full rounded-md p-4' placeholder='Your Name' />
                        <input type="email" className='h-[2.5rem] outline-none shadow  shadow-pink-800  text-gray-500 w-full rounded-md p-4' placeholder='Your Email' />
                        <textarea name="" id="" cols="20" rows="5" placeholder='Your Feedback' className='w-full text-gray-500 p-4 outline-none shadow shadow-pink-800 rounded-md'></textarea>
                        <input type="submit" value='Submit' className='cursor-pointer p-2 rounded-2xl text-white text-xl w-[50%] md:w-[30%] shadow-amber-100 shadow' />
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className='relative z-10 flex flex-col md:flex-row text-sm justify-between items-center mt-10 w-full text-gray-500'>
              <p className='mb-2'>© 2026 CodeViz. All rights reserved.Khushi Dubey.</p>
              <ul className='flex space-x-4 '>
                <li>Privacy policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  )
}

export default Home
