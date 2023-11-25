import Login from "@/components/common/Admin/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Admin panel",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
