import React, { useEffect } from "react";
import { browser } from "webextension-polyfill-ts";
import css from "./styles.module.css";

export const Main: React.FC = () => {
    // Sends the `mainMounted` event
    useEffect(() => {
        browser.runtime.sendMessage({ mainMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div className={css.popupContainer}>
            <div className="mx-4 my-4"></div>
        </div>
    );
};
