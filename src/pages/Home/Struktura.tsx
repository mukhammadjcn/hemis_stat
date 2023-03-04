import {
  Pie,
  Bar,
  Column,
  PieConfig,
  BarConfig,
  ColumnConfig,
  CirclePacking,
  CirclePackingConfig,
} from "@ant-design/plots";
import React from "react";

const Struktura: React.FC = () => {
  const configPie: PieConfig = {
    height: 360,
    data: [
      {
        type: "Bakalavr",
        value: Math.floor(Math.random() * 20),
      },
      {
        type: "Magistr",
        value: Math.floor(Math.random() * 20),
      },
    ],
    appendPadding: 10,
    colorField: "type",
    angleField: "value",

    color: ["#1677FF", "#52C41A"],
    legend: {
      itemHeight: 12,
      position: "bottom",
    },
  };

  const configBar: BarConfig = {
    data: [
      {
        name: "Fakultetlar",
        value: Math.floor(Math.random() * 20),
      },
      {
        name: "Kafedralar",
        value: Math.floor(Math.random() * 20),
      },
      {
        name: "Boshqarmalar",
        value: Math.floor(Math.random() * 20),
      },
      {
        name: "Bo‘limlar",
        value: Math.floor(Math.random() * 20),
      },
      {
        name: "Markazlar",
        value: Math.floor(Math.random() * 20),
      },
    ],
    yField: "name",
    xField: "value",
    seriesField: "name",
    color: ["#1677FF", "#52C41A"],
    legend: {
      itemHeight: 12,
      position: "bottom",
    },
  };

  const configCircle: CirclePackingConfig = {
    data: {
      name: "Asosiy",
      children: [
        {
          name: "Amaliy",
          value: Math.floor(Math.random() * 20),
        },
        {
          name: "Kafedralar",
          value: Math.floor(Math.random() * 20),
        },
        {
          name: "Boshqarmalar",
          value: Math.floor(Math.random() * 20),
        },
        {
          name: "Bo‘limlar",
          value: Math.floor(Math.random() * 20),
        },
        {
          name: "Markazlar",
          value: Math.floor(Math.random() * 20),
        },
      ],
    },
    autoFit: true,
    label: {
      formatter: ({ name }) => {
        return name !== "Asosiy" ? name : "";
      },
      offsetY: 10,
      style: {
        fontSize: 13,
        textAlign: "center",
        fill: "white",
      },
    },

    legend: false,
    hierarchyConfig: {
      sort: (a, b) => b.depth - a.depth,
    },
    color: "rgb(230,244,255)-rgb(56,158,13)-rgb(83,29,171)",
  };

  const configColumn: ColumnConfig = {
    data: [
      {
        name: "1-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "2-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "3-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "4-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "5-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "6-kurs",
        soni: Math.floor(Math.random() * 20),
      },
    ],
    yField: "soni",
    xField: "name",
    seriesField: "name",
    color: ["#1677FF", "#52C41A"],
    legend: {
      position: "bottom",
      itemHeight: 12,
    },
  };

  return (
    <div className="home__teachers">
      <div className="row">
        <section className="home__teachers-bar">
          <h2 className="title">Guruhlar</h2>
          <Column {...configColumn} />
        </section>
        <section className="home__teachers-bar">
          <h2 className="title">Auditoriyalar soni</h2>
          <CirclePacking {...configCircle} />
        </section>
      </div>
      <div className="row">
        <section className="home__teachers-bar">
          <h2 className="title">Yo‘nalishlar</h2>
          <Pie {...configPie} />
        </section>
        <section className="home__teachers-bar">
          <h2 className="title">Bo‘limlar</h2>
          <Bar {...configBar} />
        </section>
      </div>
    </div>
  );
};

export default Struktura;
