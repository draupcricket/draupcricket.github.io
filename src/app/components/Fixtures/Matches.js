"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Matches.css';

const Matches = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {items.map(item => (
        <motion.div className="card flex" key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}>

          <motion.div className=" p-6 text-white dark:text-black ">
            <motion.div className="mt-4">
              <motion.span className="mr-2">{item.format}</motion.span>
            </motion.div>
            <motion.div className="mt-4">
              <motion.p className="text-sm">{item.matchInfo}</motion.p>
              <motion.p className="text-sm">{item.venue}</motion.p>
            </motion.div>
            <motion.div className="mt-4">
              <motion.div className="flex">
                <motion.img className="w-8 h-8 mr-2" src={item.teamALogo} alt={`${item.teamAName} Logo`} />
                <motion.h3 className="text-lg font-semibold">{item.teamAName}</motion.h3>
              </motion.div>
              <motion.div className="flex">
                <motion.img className="w-8 h-8 mr-2" src={item.teamBLogo} alt={`${item.teamBName} Logo`} />
                <motion.h3 className="text-lg font-semibold">{item.teamBName}</motion.h3>
              </motion.div>
              <motion.span className="text-sm">{item.matchTime}</motion.span>
            </motion.div>
            <motion.p className="mt-4 text-sm">{item.matchStatus}</motion.p>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div className='opened-card' key={selectedId} layoutId={selectedId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeIn" }}>
            <motion.button className="button_close" onClick={() => setSelectedId(null)} transition={{ duration: 0.5, ease: "easeInOut" }}> x </motion.button>
            <motion.div className=" border rounded-lg shadow-md p-6 text-white dark:text-black ">
              <motion.div className="mt-4">
                <motion.span className="mr-2">{items.find(item => item.id === selectedId).format}</motion.span>
              </motion.div>
              <motion.div className="mt-4">
                <motion.p className="text-sm">{items.find(item => item.id === selectedId).matchInfo}</motion.p>
                <motion.p className="text-sm">{items.find(item => item.id === selectedId).venue}</motion.p>
              </motion.div>
              <motion.div className=" mt-4">
                <motion.div className="flex">
                  <motion.img className="w-8 h-8 mr-2" src={items.find(item => item.id === selectedId).teamALogo} alt={`${items.find(item => item.id === selectedId).teamAName} Logo`} />
                  <motion.h3 className="text-lg font-semibold">{items.find(item => item.id === selectedId).teamAName}</motion.h3>
                </motion.div>
                <motion.div className="flex">
                  <motion.img className="w-8 h-8 mr-2" src={items.find(item => item.id === selectedId).teamBLogo} alt={`${items.find(item => item.id === selectedId).teamBName} Logo`} />
                  <motion.h3 className="text-lg font-semibold">{items.find(item => item.id === selectedId).teamBName}</motion.h3>
                </motion.div>
                <motion.span className="text-sm">{items.find(item => item.id === selectedId).matchTime}</motion.span>
              </motion.div>
              <motion.p className="mt-4 text-sm">{items.find(item => item.id === selectedId).matchStatus}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Matches;
