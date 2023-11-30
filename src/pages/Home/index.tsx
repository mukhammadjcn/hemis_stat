import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import Header from "src/components/home/Header";
import Struktura from "./Struktura";
import Students from "./Students";
import Teachers from "./Teachers";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();
  const [univerInfo, setuniverInfo] = useState<any>();
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const GetUniverInfo = async () => {
    let univer = location.search?.replace("?api=", "");
    const { data } = await axios.get(
      `${
        univer ? univer : "https://student.hemis.uz/rest/"
      }v2/public/university-profile`
    );
    setuniverInfo(data);
  };

  useEffect(() => {
    GetUniverInfo();
  }, []);
  return (
    <>
      <Header />
      <div className="home container">
        <h2 className="home__universityName">
          {univerInfo?.universityForm?.name}
        </h2>
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
