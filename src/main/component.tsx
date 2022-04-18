import React, { useEffect } from "react";
import { browser } from "webextension-polyfill-ts";

export const Main: React.FC = () => {
    // Sends the `mainMounted` event
    useEffect(() => {
        browser.runtime.sendMessage({ mainMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div>
            <div className="mx-4 my-4"></div>
        </div>
    );
};
