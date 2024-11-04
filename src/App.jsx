import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-green-800 border-4 border-red-300 w-[50%] m-auto bg-orange-200 p-4 rounded-md">
          "...REDUX-TODO..."
        </h1>
      </div>
    </>
  );
}

export default App;
