import {
  Pie,
  Bar,
  Column,
  PieConfig,
  BarConfig,
  ColumnConfig,
} from "@ant-design/plots";
import { Segmented } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useLocation } from "react-router-dom";

const Struktura: React.FC = () => {
  const location = useLocation();
  const [data, setData] = useState<any>();
  const [audi, setAudi] = useState<any[]>([]);
  const [bolim, setbolim] = useState<any[]>([]);
  const [guruh, setguruh] = useState<any[]>([]);
  const [yonalish, setyonalish] = useState<any[]>([]);
  const [guruhType, setGuruhType] = useState<"Bakalavr" | "Magistr">(
    "Bakalavr"
  );

  const configPie: PieConfig = {
    height: 360,
    data: yonalish,
    appendPadding: 10,
    colorField: "name",
    angleField: "count",
    color: ["#7D7AFF", "#30DB5B", "#FF6482", "#FFD426"],
    legend: {
      itemHeight: 12,
      position: "bottom",
      itemName: {
        style: {
          fill: "white",
        },
      },
    },
    label: {
      style: {
        opacity: 1,
        fill: "white",
        fontSize: 14,
      },
    },
  };
  const configBar: BarConfig = {
    data: bolim,
    yField: "name",
    xField: "count",
    seriesField: "name",
    color: ["#7D7AFF", "#30DB5B"],
    legend: {
      itemHeight: 12,
      position: "bottom",
      itemName: {
        style: {
          fill: "white",
        },
      },
      flipPage: false,
    },
    barStyle: {
      radius: [6, 6, 6, 6],
      fillOpacity: 1,
    },
    yAxis: {
      label: {
        style: {
          opacity: 1,
          fill: "white",
          fontSize: 14,
        },
      },
    },
    xAxis: {
      tickCount: 6,
      label: {
        style: {
          opacity: 1,
          fill: "white",
          fontSize: 14,
        },
      },
    },
  };
  const configColumn: ColumnConfig = {
    data: guruh,
    yField: "count",
    xField: "name",
    seriesField: "name",
    color: ["#7D7AFF", "#30DB5B"],
    legend: {
      position: "bottom",
      itemHeight: 12,
      itemName: {
        style: {
          fill: "white",
        },
      },
    },
    columnStyle: {
      radius: [6, 6, 6, 6],
      fillOpacity: 1,
    },
    yAxis: {
      label: {
        style: {
          opacity: 1,
          fill: "white",
          fontSize: 14,
        },
      },
    },
    xAxis: {
      tickCount: 6,
      label: {
        style: {
          opacity: 1,
          fill: "white",
          fontSize: 14,
        },
      },
    },
  };
  const apexConfig = {
    series: [
      {
        data: audi,
      },
    ],
    options: {
      chart: {
        id: "treemap",
        toolbar: {
          show: false,
        },
      },
    },
  };

  const GiveGuruh = () => {
    let final = [];
    for (let nomi in data?.groups?.[guruhType]) {
      final.push({
        name: nomi,
        count: data?.groups?.[guruhType]?.[nomi],
      });
    }
    setguruh(final);
  };

  const GetStudents = async () => {
    let univer = location.search?.replace("?api=", "");

    const { data } = await axios.get(
      `${
        univer ? univer : "https://student.hemis.uz/rest/"
      }v1/public/stat-structure`
    );
    setData(data?.data);
    setAudi(
      data?.data?.auditoriums?.reduce(
        (a: any, b: any) => [{ x: b?.name, y: b?.count }, ...a],
        []
      )
    );
    setbolim(data?.data?.departments);
    setyonalish(data?.data?.specialities);
  };

  useEffect(() => {
    GiveGuruh();
  }, [data, guruhType]);

  useEffect(() => {
    GetStudents();
  }, []);

  return (
    <div className="home__teachers">
      <div className="row">
        <section
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex" style={{ alignItems: "flex-start" }}>
            <h2 className="title">Guruhlar</h2>
            <Segmented
              defaultValue="Bakalavr"
              onChange={(val: any) => setGuruhType(val)}
              style={{ background: "#4B5364" }}
              options={["Bakalavr", "Magistr"]}
            />
          </div>
          <Column {...configColumn} />
        </section>
        <section
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">Auditoriyalar soni</h2>
            <h3>
              Jami: <b>{audi.reduce((a, b) => a + b?.y, 0)} ta</b>
            </h3>
          </div>

          <Chart
            series={apexConfig.series}
            options={apexConfig.options}
            type="treemap"
            height={360}
          />
        </section>
      </div>
      <div className="row">
        <section
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">Yo‘nalishlar</h2>
            <h3>
              Jami: <b>{yonalish.reduce((a, b) => a + b?.count, 0)} ta</b>
            </h3>
          </div>

          <Pie {...configPie} />
        </section>
        <section
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">Bo‘limlar</h2>
            <h3>
              Jami: <b>{bolim.reduce((a, b) => a + b?.count, 0)} ta</b>
            </h3>
          </div>

          <Bar {...configBar} />
        </section>
      </div>
    </div>
  );
};

export default Struktura;
