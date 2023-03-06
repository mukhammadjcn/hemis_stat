import {
  Pie,
  Bar,
  Column,
  Funnel,
  PieConfig,
  BarConfig,
  ColumnConfig,
  FunnelConfig,
} from "@ant-design/plots";
import { Switch } from "antd";
import React from "react";

const Teachers: React.FC = () => {
  const configPie: PieConfig = {
    radius: 0.9,
    height: 360,
    data: [
      {
        type: "Stajer o‘qituvchi",
        value: 27,
      },
      {
        type: "Asisstent",
        value: 25,
      },
      {
        type: "Katta o'qituvchi",
        value: 18,
      },
      {
        type: "Dotsent",
        value: 15,
      },
      {
        type: "Professor",
        value: 10,
      },
      {
        type: "Kafedra mudiri",
        value: 5,
      },
    ],
    innerRadius: 0.8,
    appendPadding: 10,
    colorField: "type",
    angleField: "value",
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 0,
      },
    },
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "white",
        },
        content: "567 ta",
      },
    },
    color: ["#1677FF", "#52C41A", "#EB2F96", "#FA8C16", "#722ED1", "#F5222D"],
  };
  const configRahbarPie: PieConfig = {
    radius: 0.9,
    height: 360,
    data: [
      {
        type: "Prorektorlar",
        value: 27,
      },
      {
        type: "Dekanlar",
        value: 25,
      },
      {
        type: "Kafedra mudiri",
        value: 18,
      },
    ],
    innerRadius: 0.6,
    appendPadding: 10,
    colorField: "type",
    angleField: "value",
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 0,
      },
    },
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "white",
        },
        content: "567 ta",
      },
    },
    color: ["#1677FF", "#52C41A", "#EB2F96", "#FA8C16", "#722ED1", "#F5222D"],
    legend: {
      itemHeight: 12,
      position: "bottom",
    },
  };
  const configIlmiyPie: PieConfig = {
    height: 360,
    data: [
      {
        type: "O'qituvchilar (Ilmiy darajali)",
        value: Math.floor(Math.random() * 1000),
      },
      {
        type: "O'qituvchilar (Ilmiy darajasiz)",
        value: Math.floor(Math.random() * 1000),
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

  const configColumn: ColumnConfig = {
    data: [
      {
        name: "Erkak",
        darajasi: "Darajasiz",
        soni: 18,
      },
      {
        name: "Erkak",
        darajasi: "Fan nomzodi, PHD",
        soni: 28,
      },
      {
        name: "Erkak",
        darajasi: "Fan doktori, DCs",
        soni: 24,
      },
      {
        name: "Ayol",
        darajasi: "Darajasiz",
        soni: 12,
      },
      {
        name: "Ayol",
        darajasi: "Fan nomzodi, PHD",
        soni: 16,
      },
      {
        name: "Ayol",
        darajasi: "Fan doktori, DCs",
        soni: 20,
      },
    ],
    isGroup: true,
    yField: "soni",
    xField: "darajasi",
    seriesField: "name",
    color: ["#1677FF", "#EB2F96"],
    legend: {
      position: "bottom",
      itemHeight: 12,
    },
    columnStyle: {
      style: {
        borderRadius: 10,
      },
      radius: [6, 6, 6, 6],
    },
  };

  const configBar: BarConfig = {
    data: [
      {
        year: "Unvonsiz",
        value: 18,
        type: "Erkak",
      },
      {
        year: "Dotsent",
        value: 12,
        type: "Erkak",
      },
      {
        year: "Katta ilmiy xodim",
        value: 8,
        type: "Erkak",
      },
      {
        year: "Professor",
        value: 16,
        type: "Erkak",
      },
      {
        year: "Unvonsiz",
        value: 16,
        type: "Ayol",
      },
      {
        year: "Dotsent",
        value: 14,
        type: "Ayol",
      },
      {
        year: "Katta ilmiy xodim",
        value: 12,
        type: "Ayol",
      },
      {
        year: "Professor",
        value: 20,
        type: "Ayol",
      },
    ],
    isStack: true,
    yField: "year",
    xField: "value",
    seriesField: "type",
    color: ["#1677FF", "#EB2F96"],
    legend: {
      itemHeight: 12,
      position: "bottom",
    },
    barStyle: {
      radius: [6, 6, 6, 6],
    },
  };
  const configAgeBar: BarConfig = {
    data: [
      {
        year: "24-29 yosh",
        value: 18,
        type: "Erkak",
      },
      {
        year: "30-35 yosh",
        value: 12,
        type: "Erkak",
      },
      {
        year: "36-41 yosh",
        value: 8,
        type: "Erkak",
      },
      {
        year: "42-47 yosh",
        value: 16,
        type: "Erkak",
      },
      {
        year: "48-53 yosh",
        value: 16,
        type: "Erkak",
      },
      {
        year: "66+ yosh",
        value: 16,
        type: "Erkak",
      },
      {
        year: "24-29 yosh",
        value: 16,
        type: "Ayol",
      },
      {
        year: "30-35 yosh",
        value: 14,
        type: "Ayol",
      },
      {
        year: "36-41 yosh",
        value: 12,
        type: "Ayol",
      },
      {
        year: "42-47 yosh",
        value: 20,
        type: "Ayol",
      },
      {
        year: "48-53 yosh",
        value: 16,
        type: "Ayol",
      },
      {
        year: "66+ yosh",
        value: 16,
        type: "Ayol",
      },
    ],
    isStack: true,
    yField: "year",
    xField: "value",
    seriesField: "type",
    color: ["#1677FF", "#EB2F96"],
    legend: {
      itemHeight: 12,
      position: "bottom",
    },
    barStyle: {
      radius: [6, 6, 6, 6],
    },
  };

  const configFunnel: FunnelConfig = {
    data: [
      { name: "Asosiy ish joyi", number: 4500 },
      { name: "O‘rindoshlik (ichki asosiy)", number: 3500 },
      { name: "O‘rindoshlik ( ichki-qo‘shimcha)", number: 3000 },
      { name: "O‘rindoshlik tashqi", number: 2500 },
      { name: "Soatbay", number: 1000 },
    ],
    xField: "name",
    yField: "number",
    legend: false,
    label: {
      formatter: (datum) => {
        return `${datum?.name}`;
      },
    },
    conversionTag: {
      formatter: (datum) => {
        return `${datum?.number} ta`;
      },
    },
    color: ["#1677FF", "#52C41A", "#EB2F96", "#FA8C16", "#722ED1"],
  };

  return (
    <div className="home__teachers">
      <section className="home__teachers-pie">
        <div>
          <h2 className="title">O‘qituvchilar lavozimi bo‘yicha</h2>
          <Pie {...configPie} />
        </div>
        <div>
          <h2 className="title">O‘qituvchilar (Jins bo‘yicha)</h2>
          <div className="statbox blue">
            <h3>Erkaklar</h3>
            <span>20 556 ta</span>
          </div>
          <div className="statbox pink">
            <h3>Ayollar</h3>
            <span>20 556 ta</span>
          </div>
          <div className="statbox green">
            <h3>Jami o‘qituvchilar soni</h3>
            <span>20 556 ta</span>
          </div>
        </div>
        <div>
          <h2 className="title">O‘qituvchilar (Fuqarolik bo‘yicha)</h2>
          <div className="statbox purple">
            <h3>O‘zbekiston fuqarosi</h3>
            <span>20 556 ta</span>
          </div>
          <div className="statbox mango">
            <h3>Xorijiy davlat </h3>
            <span>20 556 ta</span>
          </div>
          <div className="statbox yellow">
            <h3>Fuqaroligi yo‘q shaxslar</h3>
            <span>20 556 ta</span>
          </div>
        </div>
      </section>
      <div className="row">
        <section className="home__teachers-bar">
          <div className="flex">
            <h2 className="title">O‘qituvchilar ilmiy daraja bo‘yicha</h2>
            <h3 className="info">
              Umumiy
              <Switch style={{ marginLeft: 16, background: "#4B5364" }} />
            </h3>
          </div>
          <Column {...configColumn} />
        </section>
        <section className="home__teachers-bar">
          <div className="flex">
            <h2 className="title">
              O‘qituvchilar ilmiy(unvon) daraja bo‘yicha
            </h2>
            <h3>
              Jami: <b>6000 ta</b>
            </h3>
          </div>
          <Bar {...configBar} />
        </section>
      </div>

      <div className="row">
        <section className="home__teachers-bar">
          <div className="flex">
            <h2 className="title">Raxbar xodimlar</h2>
          </div>
          <Pie {...configRahbarPie} />
        </section>
        <section className="home__teachers-bar">
          <div className="flex">
            <h2 className="title">Ilmiy salohiyat</h2>
            <h3>
              Jami: <b>200 ta</b>
            </h3>
          </div>
          <Pie {...configIlmiyPie} />
        </section>
      </div>

      <div className="row">
        <section className="home__teachers-bar">
          <div className="flex">
            <h2 className="title">O‘qituvchilar yoshi bo‘yicha</h2>
            <h3>
              Jami: <b>6000 ta</b>
            </h3>
          </div>
          <Bar {...configAgeBar} />
        </section>
        <section className="home__teachers-bar">
          <div className="flex">
            <h2 className="title">O‘qituvchilar mehnat shakli bo‘yicha</h2>
            <h3>
              Jami: <b>6000 ta</b>
            </h3>
          </div>
          <Funnel {...configFunnel} />
        </section>
      </div>
    </div>
  );
};

export default Teachers;
