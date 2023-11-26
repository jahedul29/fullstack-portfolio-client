"use client";

import { DesktopOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaBlog,
  FaHandsHelping,
  FaProjectDiagram,
  FaUserEdit,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: (MenuItem & { link: string })[] = [
  {
    key: "dashboard",
    label: <Link href={"/admin/dashboard"}>Dashboard</Link>,
    icon: <DesktopOutlined className="!text-lg" />,
    link: "/admin/dashboard",
    className: "text-lg",
  },
  {
    key: "owner",
    label: <Link href={"/admin/dashboard"}>Owner</Link>,
    icon: <FaUserEdit className="!text-lg" />,
    link: "/admin/owner",
    className: "text-lg",
  },
  {
    key: "projects",
    label: "Projects",
    icon: <FaProjectDiagram className="!text-lg" />,
    link: "/admin/projects",
    className: "text-lg",
  },
  {
    key: "contributions",
    label: "Contributions",
    icon: <FaHandsHelping className="!text-lg" />,
    link: "/admin/contributions",
    className: "text-lg",
  },
  {
    key: "blogs",
    label: "Blogs",
    icon: <FaBlog className="!text-lg" />,
    link: "/admin/blogs",
    className: "text-lg",
  },
  {
    key: "experiences",
    label: "Experiences",
    icon: <MdOutlineWork className="!text-lg" />,
    link: "/admin/experiences",
    className: "text-lg",
  },
  {
    key: "skills",
    label: "Skills",
    icon: <GiSkills className="!text-lg" />,
    link: "/admin/skills",
    className: "text-lg",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const selectedKey = items.find((item) => pathname.includes(item.link))?.key;

  console.log({ pathname });

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="!bg-primaryBg"
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="w-full h-[64px] flex items-center justify-center">
        <h1 className="text-ternaryText font-bold text-2xl text-center">
          Jahedul
        </h1>
      </div>
      <Menu
        theme="dark"
        selectedKeys={[selectedKey as string]}
        mode="inline"
        items={items}
        className="!bg-primaryBg !pb-20"
      />
    </Sider>
  );
};

export default Sidebar;
