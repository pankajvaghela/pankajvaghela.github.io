import React from "react";
// import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

import "./InfoView.scss";

// import { CreativeLotusTextPath } from "../../common/icons/creativeLotusText";
import { LotivoAnimated } from "../../common/icons/LotivoAnimated";
import { Row, Col, Typography, Grid } from "antd";

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface InfoViewProps {}
export const InfoView: React.FC<InfoViewProps> = React.forwardRef(
  (props, ref) => {
    const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

    const screens = useBreakpoint();
    console.log("screens", screens);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: "20px 0",
        }}
      >
        <animated.div
          style={{
            opacity: spring.opacity.toString(),
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{}}>
            {/* <MyName /> */}
            {/* <div style={{ margin: "5px 0" }}>My Creative Space</div> */}
            {/* <div style={{ margin: "5px 0" }}> TECHNOLOGY | ART | PHOTOGRAPHY</div> */}
            <LotivoAnimated size={screens.lg ? 1.2 : 1} />
          </div>
        </animated.div>

        <Row>
          <Col span={16} offset={4}>
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <div style={{ display: "inline-block", marginRight: "10px" }}>
                <Text type="secondary">
                  Hi, Welcome to creative World of <Text> Pankaj Vaghela</Text>!
                </Text>
              </div>
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
