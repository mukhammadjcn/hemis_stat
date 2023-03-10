import {
  Pie,
  Bar,
  Column,
  PieConfig,
  BarConfig,
  ColumnConfig,
} from "@ant-design/plots";
import { Segmented } from "antd";
import React from "react";
import ReactEcharts from "echarts-for-react";

const Students: React.FC = () => {
  const configPie: PieConfig = {
    radius: 0.9,
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
          color: "white",
        },
        content: "567 ta",
      },
    },
    color: ["#7D7AFF", "#30DB5B"],
    legend: {
      itemHeight: 12,
      position: "bottom",
      color: "#ffffff",
      itemName: {
        style: {
          fill: "white",
        },
      },
      fill: "#ffffff",
    },
    style: {
      color: "white",
    },
  };

  const configAgeBar: BarConfig = {
    data: [
      {
        year: "30 yoshgacha",
        value: 1000,
        type: "Erkak",
      },
      {
        year: "30 yoshdan katta",
        value: 2000,
        type: "Erkak",
      },
      {
        year: "30 yoshgacha",
        value: 3000,
        type: "Ayol",
      },
      {
        year: "30 yoshdan katta",
        value: 650,
        type: "Ayol",
      },
    ],
    isStack: true,
    yField: "year",
    xField: "value",
    seriesField: "type",
    color: ["#70D7FF", "#DA8FFF"],
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
      subTickLine: {
        style: {
          stroke: "black",
          lineWidth: 2,
          lineDash: [4, 5],
          strokeOpacity: 0.7,
          shadowColor: "black",
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: "pointer",
        },
      },
    },
  };

  const configNationColumn: ColumnConfig = {
    data: [
      {
        name: "Bakalavr",
        darajasi: "O‘zbekiston fuqarosi",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Xorijiy davlat fuqarosi",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Fuqaroligi yo‘q shaxs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "O‘zbekiston fuqarosi",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Xorijiy davlat fuqarosi",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Fuqaroligi yo‘q shaxs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
    ],
    isGroup: true,
    yField: "soni",
    xField: "darajasi",
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

  const kamalakColumn: ColumnConfig = {
    data: [
      {
        name: "Kunduzgi",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kunduzgi",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kunduzgi",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kunduzgi",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kunduzgi",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kunduzgi",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "1-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "2-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "3-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "4-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "5-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "6-kurs",
        soni: Math.floor(Math.random() * 20) + 20,
      },
    ],
    isStack: true,
    yField: "soni",
    xField: "darajasi",
    seriesField: "name",
    color: ["#DA8FFF", "#FF6482", "#FFD426", "#7D7AFF", "#30DB5B"],
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

  const kamalakTypeColumn: ColumnConfig = {
    data: [
      {
        name: "Kunduzgi",
        darajasi: "Erkak",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kunduzgi",
        darajasi: "Ayol",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "Erkak",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Kechki",
        darajasi: "Ayol",
        soni: Math.floor(Math.random() * 20) + 20,
      },

      {
        name: "Sirtqi",
        darajasi: "Erkak",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Sirtqi",
        darajasi: "Ayol",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "Erkak",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "Ayol",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Qo'shma",
        darajasi: "Erkak",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Qo'shma",
        darajasi: "Ayol",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Masofaviy",
        darajasi: "Erkak",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Masofaviy",
        darajasi: "Ayol",
        soni: Math.floor(Math.random() * 20) + 20,
      },
    ],
    isStack: true,
    yField: "soni",
    xField: "name",
    seriesField: "darajasi",
    color: ["#DA8FFF", "#70D7FF"],
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

  const configColumnHududlar: ColumnConfig = {
    data: [
      {
        name: "Bakalavr",
        darajasi: "Qoraqalpog‘iston",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Xorazm",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Buxoro",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Navoiy",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Qashqadaryo",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Surxondaryo",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Samarqand",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Jizzax",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Sirdaryo",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Farg‘ona",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Namangan",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Andijon",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Toshkent",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Bakalavr",
        darajasi: "Toshkent shahri",
        soni: Math.floor(Math.random() * 20) + 20,
      },

      {
        name: "Magistr",
        darajasi: "Qoraqalpog‘iston",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Xorazm",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Buxoro",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Navoiy",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Qashqadaryo",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Surxondaryo",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Samarqand",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Jizzax",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Sirdaryo",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Farg‘ona",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Namangan",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Andijon",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Toshkent",
        soni: Math.floor(Math.random() * 20) + 20,
      },
      {
        name: "Magistr",
        darajasi: "Toshkent shahri",
        soni: Math.floor(Math.random() * 20) + 20,
      },
    ],
    isStack: true,
    yField: "soni",
    xField: "darajasi",
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
      offsetY: 10,
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

  const configBar: BarConfig = {
    data: [
      {
        year: "O‘z uyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Bakalavr",
      },
      {
        year: "Qarindoshing uyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Bakalavr",
      },
      {
        year: "Tanishing uyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Bakalavr",
      },
      {
        year: "Ijaradagi uyda",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Bakalavr",
      },
      {
        year: "Talabalar turar joyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Bakalavr",
      },
      {
        year: "O‘z uyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Magistr",
      },
      {
        year: "Qarindoshing uyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Magistr",
      },
      {
        year: "Tanishing uyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Magistr",
      },
      {
        year: "Ijaradagi uyda",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Magistr",
      },
      {
        year: "Talabalar turar joyida",
        value: Math.floor(Math.random() * 20) + 20,
        type: "Magistr",
      },
    ],
    isStack: true,
    yField: "year",
    xField: "value",
    seriesField: "type",
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

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "0%",
      left: "center",
      textStyle: {
        color: "white",
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["80%", "65%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 4,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 28,
            color: "white",
          },
        },
        data: [
          { value: 1048, name: "Bakalavr" },
          { value: 735, name: "Magistr" },
        ],
        color: ["#7D7AFF", "#30DB5B"],
      },
    ],
  };

  const optionBar = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    series: [
      {
        name: "Direct",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: "Mail Ad",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Affiliate Ad",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ad",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: "Search Engine",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  return (
    <div className="home__teachers">
      <div className="students__top">
        <div data-aos="fade-up" className="student">
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
        <div data-aos="fade-up" data-aos-delay="200" className="student">
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
        <div data-aos="fade-up" data-aos-delay="400" className="student">
          <h2>Jami</h2>
          <div className="flex">
            <h1>3000 ta</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <section
          data-aos="fade-up-right"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <h2 className="title">Talaba ( Yosh bo‘yicha)</h2>
          <Bar {...configAgeBar} />
        </section>
        <section
          data-aos="fade-up-left"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">Talabalar (To‘lov shakli bo‘yicha)</h2>
            <Segmented
              style={{ background: "#4B5364" }}
              options={["Davlat granti", "To‘lov shartnoma"]}
              defaultValue="Davlat granti"
            />
          </div>
          <ReactEcharts option={option} style={{ height: 400 }} />
        </section>
      </div>
      <div className="row">
        <section
          data-aos="fade-up"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <h2 className="title">Talaba ( Hududlar bo‘yicha)</h2>
          <Column {...configColumnHududlar} />
        </section>
      </div>
      <div className="row">
        <section
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <h2 className="title">Talaba ( Fuqarolik bo‘yicha)</h2>
          <Column {...configNationColumn} />
        </section>
        <section
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">Talabalar turar joy bo‘yicha</h2>
            <h3>
              Jami: <b>6000 ta</b>
            </h3>
          </div>

          <Bar {...configBar} />
        </section>
      </div>
      <div className="row">
        <section
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <h2 className="title">Talaba ( Kurslar bo‘yicha)</h2>
          <Column {...kamalakColumn} />
        </section>
        <section
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <h2 className="title">Talaba ( Ta’lim shakli bo‘yicha)</h2>
          <Column {...kamalakTypeColumn} />
        </section>
      </div>
    </div>
  );
};

export default Students;
