import React, { useMemo } from "react";
import { SelectEventHandler } from "rc-menu/lib/interface";
import "antd/dist/antd.css";

import {
  CustomContent,
  CustomHeader,
  LogoWrapper,
  MenuWrapper,
  SiderWrapper,
} from "./Main.components";
import { Layout } from "antd";
import {
  LineChartOutlined,
  RiseOutlined,
  PlusCircleOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Outlet, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../hooks/WindowSize";

const windowBrakingWidth = 768;

const menuElements: ItemType[] = [
  {
    key: "favourites",
    label: "Favourites",
    icon: <HeartOutlined />,
  },
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
  {
    key: "add-mem",
    label: "Add mems",
    icon: <PlusCircleOutlined />,
  },
];

const Main: React.FC = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const isCollapsed = useMemo<boolean>(
    () => width <= windowBrakingWidth,
    [width]
  );

  const onMenuChange: SelectEventHandler = (info) => {
    const routeName: string = info.key;
    navigate(`/${routeName}`);
  };

  return (
    <Layout>
      <CustomHeader>
        <LogoWrapper className="logo" to="/home">
          IT ME👀MS
        </LogoWrapper>
      </CustomHeader>
      <Layout>
        <SiderWrapper collapsed={isCollapsed}>
          <MenuWrapper
            onSelect={onMenuChange}
            mode="inline"
            items={menuElements}
          />
        </SiderWrapper>
        <Layout>
          <CustomContent>
            <Outlet />
          </CustomContent>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
