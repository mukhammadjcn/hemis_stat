import { Tabs } from "antd";
import React, { useEffect } from "react";
import Header from "src/components/home/Header";
import Struktura from "./Struktura";
import Students from "./Students";
import Teachers from "./Teachers";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <div className="home container">
        <Tabs
          className="home_tabs"
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
