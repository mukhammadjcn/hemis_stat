import App from "./App";
import "./styles/main.scss";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
