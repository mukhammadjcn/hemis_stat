import {
  Pie,
  Bar,
  Column,
  PieConfig,
  BarConfig,
  ColumnConfig,
} from "@ant-design/plots";
import React from "react";

const Students: React.FC = () => {
  const configPie: PieConfig = {
    radius: 0.9,
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
    innerRadius: 0.8,
    appendPadding: 10,
    colorField: "type",
    angleField: "value",
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "567 ta",
      },
    },
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
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Erkak",
        darajasi: "Fan nomzodi, PHD",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Erkak",
        darajasi: "Fan doktori, DCs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Ayol",
        darajasi: "Darajasiz",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Ayol",
        darajasi: "Fan nomzodi, PHD",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Ayol",
        darajasi: "Fan doktori, DCs",
        soni: Math.floor(Math.random() * 20),
      },
    ],
    isGroup: true,
    yField: "soni",
    xField: "darajasi",
    seriesField: "name",
    color: ["#1677FF", "#52C41A"],
    legend: {
      position: "bottom",
      itemHeight: 12,
    },
  };

  const kamalakColumn: ColumnConfig = {
    data: [
      {
        name: "Kunduzgi",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kunduzgi",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kunduzgi",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kunduzgi",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kunduzgi",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kunduzgi",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kechki",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kechki",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kechki",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kechki",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kechki",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Kechki",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Sirtqi",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Sirtqi",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Sirtqi",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Sirtqi",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Sirtqi",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Sirtqi",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20),
      },
    ],
    isStack: true,
    yField: "soni",
    xField: "darajasi",
    seriesField: "name",
    color: ["#13C2C2", "#EB2F96", "#FADB14", "#722ED1", "#F5222D"],
    legend: {
      position: "bottom",
      itemHeight: 12,
    },
  };

  const configColumnHududlar: ColumnConfig = {
    data: [
      {
        name: "Bakalavr",
        darajasi: "Qoraqalpog‘iston Respublikasi",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Xorazm viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Buxoro viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Navoiy viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Qashqadaryo viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Surxondaryo viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Samarqand viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Jizzax viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Sirdaryo viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Farg‘ona viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Namangan viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Andijon viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Toshkent viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Bakalavr",
        darajasi: "Toshkent shahri",
        soni: Math.floor(Math.random() * 20),
      },

      {
        name: "Magistr",
        darajasi: "Qoraqalpog‘iston Respublikasi",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Xorazm viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Buxoro viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Navoiy viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Qashqadaryo viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Surxondaryo viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Samarqand viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Jizzax viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Sirdaryo viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Farg‘ona viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Namangan viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Andijon viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Toshkent viloyati",
        soni: Math.floor(Math.random() * 20),
      },
      {
        name: "Magistr",
        darajasi: "Toshkent shahri",
        soni: Math.floor(Math.random() * 20),
      },
    ],
    isGroup: true,
    yField: "soni",
    xField: "darajasi",
    seriesField: "name",
    color: ["#1677FF", "#52C41A"],
    legend: {
      position: "bottom",
      itemHeight: 12,
    },
  };

  const configBar: BarConfig = {
    data: [
      {
        year: "Unvonsiz",
        value: Math.floor(Math.random() * 20),
        type: "Erkak",
      },
      {
        year: "Dotsent",
        value: Math.floor(Math.random() * 20),
        type: "Erkak",
      },
      {
        year: "Professor",
        value: Math.floor(Math.random() * 20),
        type: "Erkak",
      },
      {
        year: "Unvonsiz",
        value: Math.floor(Math.random() * 20),
        type: "Ayol",
      },
      {
        year: "Dotsent",
        value: Math.floor(Math.random() * 20),
        type: "Ayol",
      },
      {
        year: "Professor",
        value: Math.floor(Math.random() * 20),
        type: "Ayol",
      },
    ],
    isStack: true,
    yField: "year",
    xField: "value",
    seriesField: "type",
    color: ["#1677FF", "#52C41A"],
    legend: {
      itemHeight: 12,
      position: "bottom",
    },
  };

  return (
    <div className="home__teachers">
      <div className="students__top">
        <div className="student">
          <h2>Bakalavr</h2>
          <div className="flex">
            <div>
              <h3>3000 ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>1000 ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div className="student">
          <h2>Magistr</h2>
          <div className="flex">
            <div>
              <h3>3000 ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>1000 ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div className="student">
          <h2>Ordinatura</h2>
          <div className="flex">
            <div>
              <h3>3000 ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>1000 ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div className="student">
          <h2>Doktorantura (PhD)</h2>
          <div className="flex">
            <div>
              <h3>3000 ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>1000 ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div className="student">
          <h2>Doktorantura (DSc)</h2>
          <div className="flex">
            <div>
              <h3>3000 ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>1000 ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div className="student">
          <h2>Jami</h2>
          <div className="flex">
            <h1>3000 ta</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <section className="home__teachers-bar">
          <h2 className="title">Talabalar (To‘lov shakli bo‘yicha)</h2>
          <Pie {...configPie} />
        </section>
        <section className="home__teachers-bar">
          <h2 className="title">Talabalar (To‘lov shakli bo‘yicha)</h2>
          <Pie {...configPie} />
        </section>
      </div>
      <div className="row">
        <section className="home__teachers-bar">
          <h2 className="title">Talaba ( Hududlar bo‘yicha)</h2>
          <Column {...configColumnHududlar} />
        </section>
      </div>
      <div className="row">
        <section className="home__teachers-bar">
          <h2 className="title">O‘qituvchilar ilmiy daraja bo‘yicha 1</h2>
          <Column {...kamalakColumn} />
        </section>
        <section className="home__teachers-bar">
          <h2 className="title">O‘qituvchilar ilmiy daraja bo‘yicha 2</h2>
          <Column {...kamalakColumn} />
        </section>
      </div>
      <div className="row">
        <section className="home__teachers-bar">
          <h2 className="title">O‘qituvchilar ilmiy daraja bo‘yicha</h2>
          <Column {...configColumn} />
        </section>
        <section className="home__teachers-bar">
          <h2 className="title">O‘qituvchilar ilmiy daraja bo‘yicha</h2>
          <Bar {...configBar} />
        </section>
      </div>
    </div>
  );
};

export default Students;
