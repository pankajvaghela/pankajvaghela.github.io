import React from "react";
import { getQueryVariable } from "../../common/utils/url";
import { useNavigate, RouteComponentProps } from "@reach/router";
import { Layout, Space, Button, Row, Col } from "antd";
import "./HomePage.css";
// import { Header } from "../../modules/nav/Header";
import { InfoView } from "./InfoView";

import { BoxWithBorder } from "../../common/components/BoxWithBorder";
// import { useSpring, animated } from "react-spring";

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
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} | Creative Lotus
        </Footer>
      </Layout>
    );
  }
);
