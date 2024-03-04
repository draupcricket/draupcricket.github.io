"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Matches.css';

const Matches = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust the breakpoint as needed
    };

    // Call handleResize once to set initial value
    handleResize();

    // Add event listener to update isDesktop on window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (itemId) => {
    if (isDesktop) {
      setSelectedId(itemId);
    }
  };


  return (
    <>
      {items.map(item => (
        <motion.div className="card dark:bg-white flex max-sm: mb-8" key={item.id} layoutId={item.id} onClick={() => handleClick(item.id)}  initial={{ opacity: 1 }}
        animate={{ opacity: selectedId === item.id ? 0 : 1 }} >

          <motion.div className=" p-6 text-white dark:text-black ">
            <motion.div className="mt-4">
              <motion.span className="mr-2 text-black dark:text-white">{item.format}</motion.span>
            </motion.div>
            <motion.div className="mt-4">
              <motion.p className="text-sm text-black dark:text-white">{item.matchInfo}</motion.p>
              <motion.p className="text-sm text-black dark:text-white">{item.venue}</motion.p>
            </motion.div>
            <motion.div className="mt-4">
              <motion.div className="flex items-center md:p-2 text-black dark:text-white">
                <motion.img className="w-12 h-12 mr-2 text-black dark:text-white" src={item.teamALogo} alt={`${item.teamAName} Logo`} />
                <motion.h3 className="text-lg font-semibold text-black dark:text-white">{item.teamAName}</motion.h3>
              </motion.div>
              <motion.div className="flex items-center md:p-2 ">
                <motion.img className="w-12 h-12 mr-2" src={item.teamBLogo} alt={`${item.teamBName} Logo`} />
                <motion.h3 className="text-lg font-semibold text-black dark:text-white">{item.teamBName}</motion.h3>
              </motion.div>
            </motion.div>
            <motion.p className="mt-4 text-sm text-black dark:text-white">{item.matchStatus}</motion.p>
          </motion.div>
        </motion.div>
      ))}

<AnimatePresence>
  {selectedId && (
    <motion.div>
      <motion.div
        className='opened-card dark:bg-white'
        key={selectedId}
        layoutId={selectedId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <motion.div className="  shadow-md p-6 text-white dark:text-black ">
        <motion.button
          className="button_close"
          onClick={() => setSelectedId(null)}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          x
        </motion.button>
          <motion.div className="">
            <motion.span className="mr-2 text-black dark:text-white">{items.find(item => item.id === selectedId).format}</motion.span>
          </motion.div>
          <motion.div className="mt-4">
            <motion.p className="text-sm text-black dark:text-white">{items.find(item => item.id === selectedId).matchInfo}</motion.p>
            <motion.p className="text-sm text-black dark:text-white">{items.find(item => item.id === selectedId).venue}</motion.p>
          </motion.div>
          <motion.div className=" mt-4">
            <motion.div className="flex items-center md:p-2">
              <motion.img className="w-12 h-12 mr-2" src={items.find(item => item.id === selectedId).teamALogo} alt={`${items.find(item => item.id === selectedId).teamAName} Logo`} />
              <motion.h3 className="text-lg font-semibold text-black dark:text-white">{items.find(item => item.id === selectedId).teamAName}</motion.h3>
            </motion.div>
            <motion.div className="flex items-center md:p-2">
              <motion.img className="w-12 h-12 mr-2" src={items.find(item => item.id === selectedId).teamBLogo} alt={`${items.find(item => item.id === selectedId).teamBName} Logo`} />
              <motion.h3 className="text-lg font-semibold text-black dark:text-white">{items.find(item => item.id === selectedId).teamBName}</motion.h3>
            </motion.div>
          </motion.div>
          <motion.p className="mt-4 text-sm text-black dark:text-white">{items.find(item => item.id === selectedId).matchStatus}</motion.p>
        </motion.div>
      </motion.div>
      <motion.div  transition={{ duration: 0.5, ease: "easeIn" }}         initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }} className='layout_backdrop'></motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
};

export default Matches;
