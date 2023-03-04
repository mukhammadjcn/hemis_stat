import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
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
          defaultActiveKey="1"
          type="card"
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
