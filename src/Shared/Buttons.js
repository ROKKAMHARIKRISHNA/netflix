import React from "react";

const Buttons = (props) => {
  return (
    <button
      className={
        "mx-3 p-3 text-xl text-white bg-opacity-50 rounded-lg " +
        props.background
      }
    >
      <span className="mx-2">{props?.icon}</span>
      <span>{props?.text}</span>
    </button>
  );
};

export default Buttons;
