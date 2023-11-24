import { Layout, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const AdminHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <h2>This is header</h2>
    </Header>
  );
};

export default AdminHeader;
