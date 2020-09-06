import React from "react";
// import Typist from "react-typist";
// import { Layout, Menu} from 'antd';
import logo from "../../common/icons/logo.svg";
import "./Header.scss";

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = React.forwardRef((props, ref) => {
  return (
    <header className="App-header glass">
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <a
          className="App-link"
          href="https://github.com/pankajvaghela"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Pankaj Vaghela */}
        </a>
      </div>
      <div className="flex"></div>
    </header>
  );
});

// const Typistthing = () => {
//   return (
//     <span>
//       <Typist
//         cursor={{
//           show: false,
//           blink: true,
//           element: " | ",
//           hideWhenDone: true,
//           hideWhenDoneDelay: 100,
//         }}
//         className="typist-inline"
//       >
//         <span> App </span>
//         <Typist.Backspace count={4} delay={200} />
//         <span> Web </span>
//       </Typist>
//       Developer
//     </span>
//   );
// };
