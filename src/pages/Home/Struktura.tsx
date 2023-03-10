import {
  Pie,
  Bar,
  Column,
  PieConfig,
  BarConfig,
  ColumnConfig,
} from "@ant-design/plots";
import React from "react";
import Chart from "react-apexcharts";

const Struktura: React.FC = () => {
  const configPie: PieConfig = {
    height: 360,
    data: [
      {
        type: "Bakalavr",
        value: Math.floor(Math.random() * 20) + 20,
      },
      {
        type: "Magistr",
        value: Math.floor(Math.random() * 20) + 20,
      },
    ],
    appendPadding: 10,
    colorField: "type",
    angleField: "value",

    color: ["#7D7AFF", "#30DB5B"],
    legend: {
      itemHeight: 12,
      position: "bottom",
      itemName: {
        style: {
          fill: "white",
        },
      },
    },
  };

  const configBar: BarConfig = {
    data: [
      {
        name: "Fakultetlar",
        value: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kafedralar",
        value: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Boshqarmalar",
        value: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bo‘limlar",
        value: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Markazlar",
        value: Math.floor(Math.random() * 20) + 20,
      },
    ],
    yField: "name",
    xField: "value",
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
    },
    barStyle: {
      radius: [6, 6, 6, 6],
      fillOpacity: 1,
    },
  };

  const configColumn: ColumnConfig = {
    data: [
      {
        name: "1-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "2-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "3-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "4-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "5-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "6-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
    ],
    yField: "soni",
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
  };
  const apexConfig = {
    series: [
      {
        data: [
          {
            x: "Amaliy",
            y: 48,
          },
          {
            x: "Seminar",
            y: 24,
          },
          {
            x: "Ma’ruza",
            y: 32,
          },
          {
            x: "Laboratoriya",
            y: 30,
          },
          {
            x: "Komputer",
            y: 15,
          },
          {
            x: "Zamonaviy",
            y: 64,
          },
        ],
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

  return (
    <div className="home__teachers">
      <div className="row">
        <section
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <h2 className="title">Guruhlar</h2>
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
              Jami: <b>6000 ta</b>
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
              Jami: <b>6000 ta</b>
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
              Jami: <b>6000 ta</b>
            </h3>
          </div>

          <Bar {...configBar} />
        </section>
      </div>
    </div>
  );
};

export default Struktura;
