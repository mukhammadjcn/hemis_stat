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
import { GetStudentsConfig } from "src/server/config/Urls";
import { useLocation } from "react-router-dom";

const Students: React.FC = () => {
  const location = useLocation();
  const [students, setStudents] = useState<any>({});
  const [isgrant, setIsGrant] = useState<boolean>(true);

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
        value: students?.age?.["30 yoshgacha"]?.Erkak,
        type: "Erkak",
      },
      {
        year: "30 yoshdan katta",
        value: students?.age?.["30 yoshdan katta"]?.Erkak,
        type: "Erkak",
      },
      {
        year: "30 yoshgacha",
        value: students?.age?.["30 yoshgacha"]?.Ayol,
        type: "Ayol",
      },
      {
        year: "30 yoshdan katta",
        value: students?.age?.["30 yoshdan katta"]?.Ayol,
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
        soni: students?.citizenship?.["O‘zbekiston Respublikasi fuqarosi"]
          ?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Xorijiy davlat fuqarosi",
        soni: students?.citizenship?.["Xorijiy davlat fuqarosi"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Fuqaroligi yo‘q shaxs",
        soni: students?.citizenship?.["Fuqaroligi yo‘q shaxslar"]?.Bakalavr,
      },
      {
        name: "Magistr",
        darajasi: "O‘zbekiston fuqarosi",
        soni: students?.citizenship?.["O‘zbekiston Respublikasi fuqarosi"]
          ?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Xorijiy davlat fuqarosi",
        soni: students?.citizenship?.["Xorijiy davlat fuqarosi"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Fuqaroligi yo‘q shaxs",
        soni: students?.citizenship?.["Fuqaroligi yo‘q shaxslar"]?.Magistr,
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
        soni: students?.level?.["1-kurs"].Kunduzgi,
      },
      {
        name: "Kunduzgi",
        darajasi: "2-kurs",
        soni: students?.level?.["2-kurs"].Kunduzgi,
      },
      {
        name: "Kunduzgi",
        darajasi: "3-kurs",
        soni: students?.level?.["3-kurs"].Kunduzgi,
      },
      {
        name: "Kunduzgi",
        darajasi: "4-kurs",
        soni: students?.level?.["4-kurs"].Kunduzgi,
      },
      {
        name: "Kunduzgi",
        darajasi: "5-kurs",
        soni: students?.level?.["5-kurs"].Kunduzgi,
      },
      {
        name: "Kunduzgi",
        darajasi: "6-kurs",
        soni: students?.level?.["6-kurs"].Kunduzgi,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "1-kurs",
        soni: students?.level?.["1-kurs"]?.["Maxsus sirtqi"],
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "2-kurs",
        soni: students?.level?.["2-kurs"]?.["Maxsus sirtqi"],
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "3-kurs",
        soni: students?.level?.["3-kurs"]?.["Maxsus sirtqi"],
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "4-kurs",
        soni: students?.level?.["4-kurs"]?.["Maxsus sirtqi"],
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "5-kurs",
        soni: students?.level?.["5-kurs"]?.["Maxsus sirtqi"],
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "6-kurs",
        soni: students?.level?.["6-kurs"]?.["Maxsus sirtqi"],
      },
      {
        name: "Kechki",
        darajasi: "1-kurs",
        soni: students?.level?.["1-kurs"]?.Kechki,
      },
      {
        name: "Kechki",
        darajasi: "2-kurs",
        soni: students?.level?.["2-kurs"]?.Kechki,
      },
      {
        name: "Kechki",
        darajasi: "3-kurs",
        soni: students?.level?.["3-kurs"]?.Kechki,
      },
      {
        name: "Kechki",
        darajasi: "4-kurs",
        soni: students?.level?.["4-kurs"]?.Kechki,
      },
      {
        name: "Kechki",
        darajasi: "5-kurs",
        soni: students?.level?.["5-kurs"]?.Kechki,
      },
      {
        name: "Kechki",
        darajasi: "6-kurs",
        soni: students?.level?.["6-kurs"]?.Kechki,
      },
      {
        name: "Sirtqi",
        darajasi: "1-kurs",
        soni: students?.level?.["1-kurs"]?.Sirtqi,
      },
      {
        name: "Sirtqi",
        darajasi: "2-kurs",
        soni: students?.level?.["2-kurs"]?.Sirtqi,
      },
      {
        name: "Sirtqi",
        darajasi: "3-kurs",
        soni: students?.level?.["3-kurs"]?.Sirtqi,
      },
      {
        name: "Sirtqi",
        darajasi: "4-kurs",
        soni: students?.level?.["4-kurs"]?.Sirtqi,
      },
      {
        name: "Sirtqi",
        darajasi: "5-kurs",
        soni: students?.level?.["5-kurs"]?.Sirtqi,
      },
      {
        name: "Sirtqi",
        darajasi: "6-kurs",
        soni: students?.level?.["6-kurs"]?.Sirtqi,
      },
      {
        name: "Qo‘shma",
        darajasi: "1-kurs",
        soni: students?.level?.["1-kurs"]?.["Qo‘shma"],
      },
      {
        name: "Qo‘shma",
        darajasi: "2-kurs",
        soni: students?.level?.["2-kurs"]?.["Qo‘shma"],
      },
      {
        name: "Qo‘shma",
        darajasi: "3-kurs",
        soni: students?.level?.["3-kurs"]?.["Qo‘shma"],
      },
      {
        name: "Qo‘shma",
        darajasi: "4-kurs",
        soni: students?.level?.["4-kurs"]?.["Qo‘shma"],
      },
      {
        name: "Qo‘shma",
        darajasi: "5-kurs",
        soni: students?.level?.["5-kurs"]?.["Qo‘shma"],
      },
      {
        name: "Qo‘shma",
        darajasi: "6-kurs",
        soni: students?.level?.["6-kurs"]?.["Qo‘shma"],
      },
      {
        name: "Masofaviy",
        darajasi: "1-kurs",
        soni: students?.level?.["1-kurs"]?.Masofaviy,
      },
      {
        name: "Masofaviy",
        darajasi: "2-kurs",
        soni: students?.level?.["2-kurs"]?.Masofaviy,
      },
      {
        name: "Masofaviy",
        darajasi: "3-kurs",
        soni: students?.level?.["3-kurs"]?.Masofaviy,
      },
      {
        name: "Masofaviy",
        darajasi: "4-kurs",
        soni: students?.level?.["4-kurs"]?.Masofaviy,
      },
      {
        name: "Masofaviy",
        darajasi: "5-kurs",
        soni: students?.level?.["5-kurs"]?.Masofaviy,
      },
      {
        name: "Masofaviy",
        darajasi: "6-kurs",
        soni: students?.level?.["6-kurs"]?.Masofaviy,
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
        soni: students?.education_form?.["Kunduzgi"]?.Erkak,
      },
      {
        name: "Kunduzgi",
        darajasi: "Ayol",
        soni: students?.education_form?.["Kunduzgi"]?.Ayol,
      },
      {
        name: "Kechki",
        darajasi: "Erkak",
        soni: students?.education_form?.["Kechki"]?.Erkak,
      },
      {
        name: "Kechki",
        darajasi: "Ayol",
        soni: students?.education_form?.["Kechki"]?.Ayol,
      },
      {
        name: "Sirtqi",
        darajasi: "Erkak",
        soni: students?.education_form?.["Sirtqi"]?.Erkak,
      },
      {
        name: "Sirtqi",
        darajasi: "Ayol",
        soni: students?.education_form?.["Sirtqi"]?.Ayol,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "Erkak",
        soni: students?.education_form?.["Maxsus sirtqi"]?.Erkak,
      },
      {
        name: "Maxsus sirtqi",
        darajasi: "Ayol",
        soni: students?.education_form?.["Maxsus sirtqi"]?.Ayol,
      },
      {
        name: "Qo'shma",
        darajasi: "Erkak",
        soni: students?.education_form?.["Qo'shma"]?.Erkak,
      },
      {
        name: "Qo'shma",
        darajasi: "Ayol",
        soni: students?.education_form?.["Qo'shma"]?.Ayol,
      },
      {
        name: "Masofaviy",
        darajasi: "Erkak",
        soni: students?.education_form?.["Masofaviy"]?.Erkak,
      },
      {
        name: "Masofaviy",
        darajasi: "Ayol",
        soni: students?.education_form?.["Masofaviy"]?.Ayol,
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
        soni: students?.region?.["Qoraqalpog‘iston Resp."]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Xorazm",
        soni: students?.region?.["Xorazm viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Buxoro",
        soni: students?.region?.["Buxoro viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Navoiy",
        soni: students?.region?.["Navoiy viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Qashqadaryo",
        soni: students?.region?.["Qashqadaryo viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Surxondaryo",
        soni: students?.region?.["Surxondaryo viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Samarqand",
        soni: students?.region?.["Samarqand viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Jizzax",
        soni: students?.region?.["Jizzah viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Sirdaryo",
        soni: students?.region?.["Sirdaryo viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Farg‘ona",
        soni: students?.region?.["Farg'ona viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Namangan",
        soni: students?.region?.["Namangan viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Andijon",
        soni: students?.region?.["Andijon viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Toshkent",
        soni: students?.region?.["Toshkent viloyati"]?.Bakalavr,
      },
      {
        name: "Bakalavr",
        darajasi: "Toshkent shahri",
        soni: students?.region?.["Toshkent shahri"]?.Bakalavr,
      },

      {
        name: "Magistr",
        darajasi: "Qoraqalpog‘iston",
        soni: students?.region?.["Qoraqalpog‘iston Resp."]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Xorazm",
        soni: students?.region?.["Xorazm viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Buxoro",
        soni: students?.region?.["Buxoro viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Navoiy",
        soni: students?.region?.["Navoiy viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Qashqadaryo",
        soni: students?.region?.["Qashqadaryo viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Surxondaryo",
        soni: students?.region?.["Surxondaryo viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Samarqand",
        soni: students?.region?.["Samarqand viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Jizzax",
        soni: students?.region?.["Jizzah viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Sirdaryo",
        soni: students?.region?.["Sirdaryo viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Farg‘ona",
        soni: students?.region?.["Farg'ona viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Namangan",
        soni: students?.region?.["Namangan viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Andijon",
        soni: students?.region?.["Andijon viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Toshkent",
        soni: students?.region?.["Toshkent viloyati"]?.Magistr,
      },
      {
        name: "Magistr",
        darajasi: "Toshkent shahri",
        soni: students?.region?.["Toshkent shahri"]?.Magistr,
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
        value: students?.accommodation?.["O‘z uyida"]?.Bakalavr,
        type: "Bakalavr",
      },
      {
        year: "Qarindoshing uyida",
        value: students?.accommodation?.["Qarindoshining uyida"]?.Bakalavr,
        type: "Bakalavr",
      },
      {
        year: "Tanishing uyida",
        value: students?.accommodation?.["Tanishining uyida"]?.Bakalavr,
        type: "Bakalavr",
      },
      {
        year: "Ijaradagi uyda",
        value: students?.accommodation?.["Ijaradagi uyda"]?.Bakalavr,
        type: "Bakalavr",
      },
      {
        year: "Talabalar turar joyida",
        value: students?.accommodation?.["Talabalar turar joyida"]?.Bakalavr,
        type: "Bakalavr",
      },
      {
        year: "O‘z uyida",
        value: students?.accommodation?.["O‘z uyida"]?.Magistr,
        type: "Magistr",
      },
      {
        year: "Qarindoshing uyida",
        value: students?.accommodation?.["Qarindoshining uyida"]?.Magistr,
        type: "Magistr",
      },
      {
        year: "Tanishing uyida",
        value: students?.accommodation?.["Tanishining uyida"]?.Magistr,
        type: "Magistr",
      },
      {
        year: "Ijaradagi uyda",
        value: students?.accommodation?.["Ijaradagi uyda"]?.Magistr,
        type: "Magistr",
      },
      {
        year: "Talabalar turar joyida",
        value: students?.accommodation?.["Talabalar turar joyida"]?.Magistr,
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
    let univer = location.pathname?.split("https://student.")[1]?.split(".")[0];
    const { data } = await GetStudentsConfig(univer);
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
