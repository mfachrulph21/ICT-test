import { Menu } from "antd";

function Sidebar() {
  return (
    <div style={{display: 'flex', flexDirection:'row'}}>
    <Menu
      items={[
        { label: "User Statistics" },
        { label: "User Posts" }
    ]}
    ></Menu>
    
    </div>
  );
}

export default Sidebar;
