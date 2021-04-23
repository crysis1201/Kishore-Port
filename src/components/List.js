import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, category, theme }) {
  return (
    <li className=" flex items-center max-w-md lg:m-0 m-auto lg:pl-20 lg:pt-20 lg:pb-20 pt-4 pb-4 ">
      <Link to={id}>
      <div className=" max-w-md flex">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <video className="card-image" src={`Videos/${id}.mp4`}  />
          </motion.div>
        </motion.div>
      </div>
      </Link>
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </ul>
  );
}
