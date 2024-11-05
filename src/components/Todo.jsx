import React from "react";

const Todo = () => {
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
            />

            <div className="border-4 border-green-500 rounded-md w-[10%] bg-red-300 cursor-pointer">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
