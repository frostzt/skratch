import * as React from "react";
import * as ReactDOM from "react-dom";
import { browser } from "webextension-polyfill-ts";
import { Main } from "./component";
import "../css/app.css";

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<Main />, document.getElementById("main-ext"));
});
