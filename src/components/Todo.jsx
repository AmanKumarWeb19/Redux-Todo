import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  console.log(inputData);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="border-4 border-green-500 rounded-md p-4 w-[60%] m-auto">
        <h1 className="text-3xl font-bold underline text-green-800 border-4 border-red-300 w-[80%] m-auto bg-orange-200 p-4 rounded-md">
          "...REDUX-TODO..."
        </h1>
        <div>
          <figure>
            <figcaption className="mt-8 font-bold text-2xl text-orange-500">
              Add Your List Here...✌️
            </figcaption>
          </figure>

          <div className="border-4 border-red-500  rounded-md w-[80%] flex justify-evenly p-2 m-auto mt-10">
            <input
              className="border-2  rounded-md w-[70%]"
              type="text"
              placeholder="✍️   Add Items......"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />

            <div className="border-4 border-green-500 rounded-md w-[10%] bg-red-300 cursor-pointer">
              <i
                className="fa-solid fa-check"
                onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
