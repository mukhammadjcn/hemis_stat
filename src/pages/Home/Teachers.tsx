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
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetTeachersConfig } from "src/server/config/Urls";

const Teachers: React.FC = () => {
  const location = useLocation();
  const [teachers, setTeachers] = useState<any>({});

  const configPie: PieConfig = {
    radius: 0.9,
    height: 360,
    data: [
      {
        type: "Stajer o‘qituvchi",
        value: teachers?.position?.["Stajer-o‘qituvchi"],
      },
      {
        type: "Asisstent",
        value: teachers?.position?.["Assistent"],
      },
      {
        type: "Katta o'qituvchi",
        value: teachers?.position?.["Katta o‘qituvchi"],
      },
      {
        type: "Dotsent",
        value: teachers?.position?.["Dotsent"],
      },
      {
        type: "Professor",
        value: teachers?.position?.["Professor"],
      },
      {
        type: "Kafedra mudiri",
        value: teachers?.position?.["Kafedra mudiri"],
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
        content: `35 ta`,
      },
    },
    color: ["#DA8FFF", "#30DB5B", "#FF6482", "#70D7FF", "#FFD426", "#7D7AFF"],
    legend: {
      itemName: {
        style: {
          fill: "white",
        },
      },
    },
  };
  const configRahbarPie: PieConfig = {
    radius: 0.9,
    height: 360,
    data: [
      {
        type: "Prorektorlar",
        value: teachers?.direction?.Prorektor,
      },
      {
        type: "Dekanlar",
        value: teachers?.direction?.Dekan,
      },
      {
        type: "Kafedra mudiri",
        value: teachers?.direction?.["Kafedra mudiri"],
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
    color: ["#FF6482", "#FFD426", "#DA8FFF"],
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
  const configIlmiyPie: PieConfig = {
    height: 360,
    data: [
      {
        type: "O'qituvchilar (Ilmiy darajali)",
        value: teachers?.academic?.Darajali,
      },
      {
        type: "O'qituvchilar (Ilmiy darajasiz)",
        value: teachers?.academic?.Darajasiz,
      },
    ],
    appendPadding: 10,
    colorField: "type",
    angleField: "value",

    color: ["#30DB5B", "#FF6482", "#FFD426"],
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

  const configColumn: ColumnConfig = {
    data: [
      {
        name: "Erkak",
        darajasi: "Darajasiz",
        soni: teachers?.academic_degree?.Darajasiz?.Erkak,
      },
      {
        name: "Erkak",
        darajasi: "Fan nomzodi, PHD",
        soni: teachers?.academic_degree?.["Fan nomzodi, PhD"]?.Erkak,
      },
      {
        name: "Erkak",
        darajasi: "Fan doktori, DCs",
        soni: teachers?.academic_degree?.["Fan doktori, DSc"]?.Erkak,
      },
      {
        name: "Ayol",
        darajasi: "Darajasiz",
        soni: teachers?.academic_degree?.Darajasiz?.Ayol,
      },
      {
        name: "Ayol",
        darajasi: "Fan nomzodi, PHD",
        soni: teachers?.academic_degree?.["Fan nomzodi, PhD"]?.Ayol,
      },
      {
        name: "Ayol",
        darajasi: "Fan doktori, DCs",
        soni: teachers?.academic_degree?.["Fan doktori, DSc"]?.Ayol,
      },
    ],
    isGroup: true,
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
      style: {
        borderRadius: 10,
      },
      radius: [6, 6, 6, 6],
      fillOpacity: 1,
    },
  };

  const configBar: BarConfig = {
    data: [
      {
        year: "Unvonsiz",
        value: teachers?.academic_rank?.Unvonsiz?.Erkak,
        type: "Erkak",
      },
      {
        year: "Dotsent",
        value: teachers?.academic_rank?.Dotsent?.Erkak,
        type: "Erkak",
      },
      {
        year: "Katta ilmiy xodim",
        value: teachers?.academic_rank?.["Katta ilmiy xodim"]?.Erkak,
        type: "Erkak",
      },
      {
        year: "Professor",
        value: teachers?.academic_rank?.["Professor"]?.Erkak,
        type: "Erkak",
      },
      {
        year: "Unvonsiz",
        value: teachers?.academic_rank?.Unvonsiz?.Ayol,
        type: "Ayol",
      },
      {
        year: "Dotsent",
        value: teachers?.academic_rank?.Dotsent?.Ayol,
        type: "Ayol",
      },
      {
        year: "Katta ilmiy xodim",
        value: teachers?.academic_rank?.["Katta ilmiy xodim"]?.Ayol,
        type: "Ayol",
      },
      {
        year: "Professor",
        value: teachers?.academic_rank?.["Professor"]?.Ayol,
        type: "Ayol",
      },
    ],
    isStack: true,
    yField: "year",
    xField: "value",
    seriesField: "type",
    color: ["#DA8FFF", "#70D7FF"],
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
    color: ["#DA8FFF", "#70D7FF"],
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
    color: ["#70D7FF", "#30DB5B", "#FF6482", "#FFD426", "#DA8FFF"],
  };

  const GetTeachers = async () => {
    let univer = location.pathname
      ?.replace("https://hemis.vercel.app/?api=", "")
      ?.split("https://student.")[1]
      ?.split(".")[0];
    const { data } = await GetTeachersConfig(univer);
    setTeachers(data?.data);
  };

  useEffect(() => {
    GetTeachers();
  }, []);

  return (
    <div className="home__teachers">
      <section className="home__teachers-pie">
        <div>
          <h2 className="title">O‘qituvchilar lavozimi bo‘yicha</h2>
          <Pie {...configPie} />
        </div>
        <div>
          <h2 className="title">O‘qituvchilar (Jins bo‘yicha)</h2>
          <div data-aos="fade-left" className="statbox blue">
            <h3>Erkaklar</h3>
            <span>{teachers?.gender?.Erkak} ta</span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="statbox pink"
          >
            <h3>Ayollar</h3>
            <span>{teachers?.gender?.Ayol} ta</span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="statbox green"
          >
            <h3>Jami o‘qituvchilar soni</h3>
            <span>{teachers?.gender?.Jami} ta</span>
          </div>
        </div>
        <div>
          <h2 className="title">O‘qituvchilar (Fuqarolik bo‘yicha)</h2>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="statbox purple"
          >
            <h3>O‘zbekiston Respublikasi fuqarosi</h3>
            <span>
              {teachers?.citizenship?.["O‘zbekiston Respublikasi fuqarosi"]} ta
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="statbox mango"
          >
            <h3>Xorijiy davlat fuqarosi </h3>
            <span>{teachers?.citizenship?.["Xorijiy davlat fuqarosi"]} ta</span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="statbox yellow"
          >
            <h3>Fuqaroligi yo‘q shaxslar</h3>
            <span>
              {teachers?.citizenship?.["Fuqaroligi yo‘q shaxslar"]} ta
            </span>
          </div>
        </div>
      </section>
      <div className="row">
        <section
          data-aos="fade-right"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">O‘qituvchilar ilmiy daraja bo‘yicha</h2>
            <h3 className="info">
              Umumiy
              <Switch style={{ marginLeft: 16, background: "#4B5364" }} />
            </h3>
          </div>
          <Column {...configColumn} />
        </section>
        <section
          data-aos="fade-left"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
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
        <section
          data-aos="fade-right"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">Raxbar xodimlar</h2>
          </div>
          <Pie {...configRahbarPie} />
        </section>
        <section
          data-aos="fade-left"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
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
        <section
          data-aos="fade-right"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
          <div className="flex">
            <h2 className="title">O‘qituvchilar yoshi bo‘yicha</h2>
            <h3>
              Jami: <b>6000 ta</b>
            </h3>
          </div>
          <Bar {...configAgeBar} />
        </section>
        <section
          data-aos="fade-left"
          data-aos-duration="1500"
          className="home__teachers-bar"
        >
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
