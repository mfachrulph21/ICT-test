import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, height:'100vh' }}>
        <Header />
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            items={[
              {
                label: "User Statistics",
                key: "/",
                icon: <PieChartOutlined />,
              },
              { label: "User Posts", key: "/posts", icon: <UserOutlined /> },
            ]}
          ></Menu>
          <Outlet />
        </div>
         <Footer/>
      </div>
    </>
  );
}
