import {
  Pie,
  Bar,
  Column,
  PieConfig,
  BarConfig,
  ColumnConfig,
} from "@ant-design/plots";
import { Segmented } from "antd";
import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Students: React.FC = () => {
  const location = useLocation();
  const [students, setStudents] = useState<any>({});
  const [isgrant, setIsGrant] = useState<boolean>(true);

  const GiveRegionStat = (
    name = "region",
    series = ["Bakalavr", "Magistr"]
  ) => {
    let a: any[] = [];
    series.forEach((type) => {
      for (let nomi in students?.[name]) {
        a.push({
          name: type,
          darajasi: nomi,
          soni: students?.[name]?.[nomi]?.[type],
        });
      }
    });
    return a;
  };

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
    data: GiveRegionStat("age", ["Erkak", "Ayol"]),
    isStack: true,
    yField: "darajasi",
    xField: "soni",
    seriesField: "name",
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
    },
  };

  const configNationColumn: ColumnConfig = {
    data: GiveRegionStat("citizenship"),
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
    data: GiveRegionStat("level", [
      "Ikkinchi oliy (kechki)",
      "Ikkinchi oliy (kunduzgi)",
      "Ikkinchi oliy (sirtqi)",
      "Kechki",
      "Kunduzgi",
      "Masofaviy",
      "Maxsus sirtqi",
      "Qo‘shma",
      "Sirtqi",
    ]),
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
    data: GiveRegionStat("education_form", ["Ayol", "Erkak"]),
    isStack: true,
    yField: "soni",
    xField: "darajasi",
    seriesField: "name",
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
    data: GiveRegionStat(),
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
      tickCount: 14,
      label: {
        style: {
          opacity: 1,
          fill: "white",
          fontSize: 11,
        },
      },
    },
  };

  const configBar: BarConfig = {
    data: GiveRegionStat("accommodation"),
    isStack: true,
    yField: "darajasi",
    xField: "soni",
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
          {
            value: isgrant
              ? students?.payment?.["Davlat granti"]?.Bakalavr
              : students?.payment?.["To‘lov-shartnoma"]?.Bakalavr,
            name: "Bakalavr",
          },
          {
            value: isgrant
              ? students?.payment?.["Davlat granti"]?.Magistr
              : students?.payment?.["To‘lov-shartnoma"]?.Magistr,
            name: "Magistr",
          },
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

  const GetStudents = async () => {
    let univer = location.search?.replace("?api=", "");

    const { data } = await axios.get(
      `${univer ?? "https://student.hemis.uz/rest/v2/"}v1/public/stat-student`
    );
    setStudents(data?.data);
  };

  useEffect(() => {
    GetStudents();
  }, []);

  return (
    <div className="home__teachers">
      <div className="students__top">
        <div data-aos="fade-up" className="student">
          <h2>Bakalavr</h2>
          <div className="flex">
            <div>
              <h3>{students?.education_type?.Bakalavr?.Erkak} ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>{students?.education_type?.Bakalavr?.Ayol} ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="student">
          <h2>Magistr</h2>
          <div className="flex">
            <div>
              <h3>{students?.education_type?.Magistr?.Erkak} ta</h3>
              <h4>Erkak</h4>
            </div>
            <div>
              <h3>{students?.education_type?.Magistr?.Ayol} ta</h3>
              <h4>Ayol</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="student">
          <h2>Jami</h2>
          <div className="flex">
            <h1>
              {students?.education_type?.Jami?.Ayol +
                students?.education_type?.Jami?.Erkak}{" "}
              ta
            </h1>
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
              defaultValue="Davlat granti"
              onChange={(val) =>
                val == "Davlat granti" ? setIsGrant(true) : setIsGrant(false)
              }
              style={{ background: "#4B5364" }}
              options={["Davlat granti", "To‘lov shartnoma"]}
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
            {/* <h3>
              Jami: <b>6000 ta</b>
            </h3> */}
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
