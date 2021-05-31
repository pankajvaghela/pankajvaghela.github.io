import React from "react";
import { Row, Col, Typography, Grid, Layout, Divider } from "antd";
import PankajImg from "./../../common/images/pankaj-vaghela-white-shirt-clipped.png";
import {
  StyledTitle,
  StyledInlineDiv,
} from "./../../common/components/Typography";
import styled from "styled-components";

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

interface PersonalInfoViewProps {}

const StyledImage = styled.img`
  width: 90%;
`;

const PersonalDataWrapper = styled.div`
  margin-top: 20px;
`;

const FullScreenSection = styled.div`
  @media (min-width: 600px) {
    height: 100vh;
  }
`;

export const PersonalInfoView: React.FC<PersonalInfoViewProps> = React.forwardRef(
  (props, ref) => {
    const screens = useBreakpoint();

    return (
      <Layout>
        <FullScreenSection style={{ display: "flex", alignItems: "center" }}>
          <Row justify="space-around" style={{ flex: 1, padding: "10px 20px" }}>
            <Col xs={{ span: 18 }} sm={{ span: 7 }} md={{ span: 7 }}>
              <StyledImage src={PankajImg} alt="Pankaj Vaghela White Shirt" />
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 15 }} md={{ span: 14 }}>
              <PersonalDataWrapper>
                <StyledTitle level={screens.md ? 1 : 3}>
                  Pankaj Vaghela
                </StyledTitle>
                <div style={{}}>
                  {[
                    ` Mobile App & Full-Stack Web Developer, `,
                    ` UI/UX enthusiast, `,
                  ].map((item) => (
                    <div
                      style={{ display: "inline-block", marginRight: "10px" }}
                    >
                      <Text>{item}</Text>
                    </div>
                  ))}
                </div>

                {/* <div>
                  <div style={{ display: "inline-block" }}>
                    <Text>
                      Mobile App and Full-Stack Web Developer, UI/UX enthusiast,{" "}
                    </Text>
                  </div>{" "}
                </div> */}
                <div>
                  <div style={{ display: "inline-block" }}>
                    <Text type="secondary">
                      part-time Artist and Photographer
                    </Text>
                  </div>
                </div>

                <Divider />
              </PersonalDataWrapper>
            </Col>
          </Row>
        </FullScreenSection>

        <Divider />
      </Layout>
    );
  }
);

// img {
// }
