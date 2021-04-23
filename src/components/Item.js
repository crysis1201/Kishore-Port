import React from "react";
import { motion } from "framer-motion";
//import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }) {
  const { category, title } = items.find(item => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="fixed lg:max-w-3xl max-w-md pl-2 pr-2 m-auto lg:pt-20 pt-0 bottom-0 lg:bottom-auto block z-10 top-0 max-h-96 right-0 left-0">
          <motion.div
            className="card-image-container lg:max-w-3xl m-auto rounded-2xl overflow-hidden"
            layoutId={`card-image-container-${id}`}
          >
            <video className="card-image" src={`Videos/${id}.mp4`} />
          </motion.div>
          <motion.div id="body" className="text-white tracking-wider font-medium pt-4 pl-1 uppercase">
            {title}
            <p id="body" className="pt-2 text-gray-400 ">{category}</p>
          </motion.div>
      </div>
    </>
  );
}
