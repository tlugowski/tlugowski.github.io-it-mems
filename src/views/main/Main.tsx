import React from "react";
import { SelectEventHandler } from "rc-menu/lib/interface";
import "antd/dist/antd.css";

import { Container } from "./Main.components";
import { Layout, Menu } from "antd";
import { LineChartOutlined, RiseOutlined } from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Outlet, useNavigate } from "react-router-dom";
import { MainSider } from "./Main.components";

const menuElements: ItemType[] = [
  {
    key: "hot",
    label: "Hot",
    icon: <RiseOutlined />,
  },
  {
    key: "regular",
    label: "Regular",
    icon: <LineChartOutlined />,
  },
];

const { Header, Content } = Layout;

const Main: React.FC = () => {

  const navigate = useNavigate();

  const onMenuChange: SelectEventHandler = (info) => {
    const routeName: string = info.key;
    navigate(`/${routeName}`);
  };

  return (
    <Layout>
      <Container>
        <Header>
          <div className="logo" />
        </Header>
      </Container>
      <Layout>
        <MainSider>
          <Menu onSelect={onMenuChange} mode="inline" items={menuElements} />
        </MainSider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
