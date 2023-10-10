import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Page404 from "./pages/errorPages/404";
import Page500 from "./pages/errorPages/500";
import ForgetPassword from "./pages/ForgetPassword";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/500" element={<Page500 />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
