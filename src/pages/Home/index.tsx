import { Tabs } from "antd";
import React from "react";
import Header from "src/components/home/Header";
import Struktura from "./Struktura";
import Students from "./Students";
import Teachers from "./Teachers";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home container">
        <Tabs
          style={{ color: "white" }}
          defaultActiveKey="1"
          items={[
            {
              label: `Talabalar`,
              key: "1",
              children: <Students />,
            },
            {
              label: `O‘qituvchilar`,
              key: "2",
              children: <Teachers />,
            },
            {
              label: `Struktura`,
              key: "3",
              children: <Struktura />,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
