import React, { useState } from "react";
import { Link } from "react-router-dom";

function Input() {
  const [stage, setStage] = useState<number>(10);

  function updateStage(value: number): void {
    setStage(value);
  }
  return (
    <div>
      <input
        type="number"
        placeholder="Enter amount of stages"
        defaultValue={10}
        onChange={(e) => updateStage(parseInt(e.target.value))}
      />
      <Link
        className=""
        to="build"
        state={{
          stage: stage
        }}
      >
        Start
      </Link>
    </div>
  );
}

export default Input;
