import { useLocation } from "react-router-dom";

function Build() {
  const location = useLocation();
  console.log(location.state.stage);
  return <div>Build</div>;
}

export default Build;
