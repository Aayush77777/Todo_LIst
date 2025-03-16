import React from "react";
import { ImCross } from "react-icons/im";
import delete_icon from "../assets/delete.png";
import { ImRadioUnchecked } from "react-icons/im";

const TodoItems = ({ text, isComplete, id, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={() => toggle(id)} className="flex flex-1 items-center">
        {isComplete ? (
          <ImCross className="text-red-500 w-4 h-4" />
        ) : (
          <ImRadioUnchecked className="text-red-500 w-4 h-4" />
        )}
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through decoration-slate-500" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="Delete"
        className="w-[33px] cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
