import React from "react";
// import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

import "./InfoView.scss";

import { CreativeLotusTextPath } from "../../common/icons/creativeLotusText";
import { LotivoAnimated } from "../../common/icons/LotivoAnimated";
import { Layout, Row, Col, Typography } from "antd";

const { Text, Link } = Typography;
interface InfoViewProps {}
export const InfoView: React.FC<InfoViewProps> = React.forwardRef(
  (props, ref) => {
    const spring = useSpring({ opacity: 1, from: { opacity: 0 } });
    console.log("spring", spring);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "98vh",
          padding: "20px 0",
        }}
      >
        <animated.div style={{ opacity: spring.opacity.toString(), flex: 1 }}>
          <div
            style={{
              margin: "30vh 0px 40px",
            }}
          >
            {/* <MyName /> */}
            {/* <div style={{ margin: "5px 0" }}>My Creative Space</div> */}
            {/* <div style={{ margin: "5px 0" }}> TECHNOLOGY | ART | PHOTOGRAPHY</div> */}
            <LotivoAnimated />
          </div>
        </animated.div>

        <Row>
          <Col span={16} offset={4}>
            <div>
              {[
                ` Mobile App & Web Developer, `,
                ` UI/UX enthusiast, `,
                ` Artist and Photographer.`,
              ].map((item) => (
                <div style={{ display: "inline-block", marginRight: "10px" }}>
                  <Text type="secondary">{item}</Text>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
);

// const MyName = () => {
//   const props = useSpring({
//     x: 100,
//     from: { x: 0 },
//     config: { duration: 3000 },
//   });

//   return (
//     <div
//       style={{
//         display: "inline-block",
//         borderBottom: "1.5px solid white",
//         borderRadius: "5px",
//         padding: "10px 15px 5px",
//       }}
//     >
//       <animated.svg
//         strokeDashoffset={props.x}
//         width="255"
//         height="40"
//         viewBox="0 0 102 16"
//       >
//         <CreativeLotusTextPath />
//       </animated.svg>
//     </div>
//   );
// };
