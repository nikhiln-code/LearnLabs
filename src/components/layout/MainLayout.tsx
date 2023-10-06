import Header from "../header/Header";
import { useState } from "react";
import HeaderAfterLogin from "../header/HeaderAfterLogin";
import MyHeader from "../header/Header";
import Login from "../../pages/LoginPage";

function MainLayout() {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      {isLogin ? <HeaderAfterLogin /> : <MyHeader />}
      <Login />
    </>
  );
}

export default MainLayout;
