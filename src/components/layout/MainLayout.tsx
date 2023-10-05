import Header from "../header/Header";
import HeaderAfterLogin from "../header/HeaderAfterLogin";
import Login from "../../pages/LoginPage";

function MainLayout() {
  return (
    <>
      <HeaderAfterLogin />
      <Login />
    </>
  );
}

export default MainLayout;
