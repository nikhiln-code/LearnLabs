import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Header from "./components/header/HeaderAfterLogin";
import MainLayout from "./components/layout/MainLayout";
import MyRoutes from "./Routes.js";

function App() {
  //const [count, setCount] = useState(0)
  return <MyRoutes />;
}

export default App;
