import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '@ant-design/v5-patch-for-react-19';
import "./scss/antd-adjust.scss";
import "./scss/main.scss";
import App from "./App.tsx";
import store from "./app/store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
