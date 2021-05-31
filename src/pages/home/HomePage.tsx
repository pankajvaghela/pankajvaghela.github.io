import React from "react";
import { getQueryVariable } from "../../common/utils/url";
import { useNavigate, RouteComponentProps } from "@reach/router";
import { Layout, Space, Button, Row, Col, Divider, BackTop } from "antd";

import "./HomePage.css";
// import { Header } from "../../modules/nav/Header";
import { InfoView } from "./InfoView";
import { PersonalInfoView } from "./PersonalInfoView";

import { BoxWithBorder } from "../../common/components/BoxWithBorder";
// import { useSpring, animated } from "react-spring";

import { ArrowUpOutlined } from "@ant-design/icons";
const { Header, Footer, Content, Sider } = Layout;

type HomePageProps = {} & RouteComponentProps;

export const HomePage: React.FC<HomePageProps> = React.forwardRef(
  (props, ref) => {
    const navigate = useNavigate();

    React.useEffect(() => {
      const route = getQueryVariable("route");
      if (route) {
        navigate(route);
      }
    }, [navigate]);

    return (
      <Layout>
        <Content>
          <InfoView />
          <Divider />
          <PersonalInfoView />
          <BackTop>
            <Button
              type="primary"
              shape="round"
              icon={<ArrowUpOutlined />}
              size="middle"
            />
          </BackTop>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Handcrafted by Me ©{new Date().getFullYear()} Creative Lotus
        </Footer>
      </Layout>
    );
  }
);
