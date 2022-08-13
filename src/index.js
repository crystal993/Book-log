import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { lightTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import "./styles/fonts.css";
// import { Provider } from "react";
import store from "./redux/store";
//라우팅
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
