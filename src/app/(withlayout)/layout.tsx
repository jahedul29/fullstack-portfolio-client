"use client";

import AdminFooter from "@/components/common/Admin/AdminFooter";
import AdminHeader from "@/components/common/Admin/AdminHeader";
import Sidebar from "@/components/common/Admin/Sidebar";
import Loading from "@/components/common/Loading";
import { isLoggedIn } from "@/services/auth.service";

import type { MenuProps } from "antd";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode, Suspense, useEffect } from "react";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const AdminLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isUserLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
    // setIsLoading(true);
  }, [router]);

  return (
    <Suspense fallback={<Loading />}>
      <Layout hasSider={true} style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <AdminHeader />
          <Content style={{ margin: "0 16px" }}>{children}</Content>
          <AdminFooter />
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default AdminLayout;
