import FloatingLinks from "@/components/common/User/FloatingLinks";
import Footer from "@/components/common/User/Footer";
import GotoTopButton from "@/components/common/User/GotoTopButton";
import UserNavbar from "@/components/common/User/UserNavbar";
import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen min-h-screen bg-primaryBg relative">
      <FloatingLinks />
      <GotoTopButton />
      <UserNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
