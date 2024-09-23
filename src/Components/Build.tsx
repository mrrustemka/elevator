import { useLocation } from "react-router-dom";
import Stage from "./Stage";

function Build() {
  const location = useLocation();
  const stage: number = location.state.stage;

  return (
    <div>
      {Array.from({ length: stage }, (_, index) => (
        <Stage key={index} />
      ))}
    </div>
  );
}

export default Build;
