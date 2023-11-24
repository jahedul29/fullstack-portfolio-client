"use client";

import AdminFooter from "@/components/common/Admin/AdminFooter";
import AdminHeader from "@/components/common/Admin/AdminHeader";
import Sidebar from "@/components/common/Admin/Sidebar";
import Loading from "@/components/common/Loading";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, theme } from "antd";
import { ReactNode, Suspense } from "react";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const AdminLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Suspense fallback={<Loading />}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
          <AdminHeader />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            {children}
          </Content>
          <AdminFooter />
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default AdminLayout;
