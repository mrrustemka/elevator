import { FC } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Build from "./Components/Build";
import Input from "./Components/Input";

const router = createBrowserRouter([
  {
    path: "elevator",
    element: (
      <div className="app__div">
        <Input />
      </div>
    )
  },
  {
    path: "elevator/build",
    element: (
      <div className="app__div">
        <Build />
      </div>
    )
  }
]);

const App: FC = () => (
  <div className="app">
    <RouterProvider router={router} />
  </div>
);

export default App;
