import { authKey } from "@/constants/storage-key";
import { removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, MenuProps } from "antd";
import { useRouter } from "next/navigation";
const { Header, Content, Footer, Sider } = Layout;

const AdminHeader = () => {
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          onClick={() => {
            removeUserInfo(authKey);
            router.push("/login");
          }}
        >
          Logout
        </span>
      ),
    },
  ];
  return (
    <Header className="bg-secondaryBg text-primaryText px-2">
      <div className="flex justify-end">
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <div className="flex gap-x-2 items-center text-primaryText ml-auto">
            <h2>Md Jahedul Hoque</h2>
            <Avatar shape="square" size="large" icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AdminHeader;
