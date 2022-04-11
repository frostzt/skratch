import { browser } from "webextension-polyfill-ts";

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener((request: { mainMounted: boolean }) => {
    // Log statement if request.mainMounted is true
    // NOTE: this request is sent in `main/component.tsx`
    if (request.mainMounted) {
        console.log("backgroundPage notified that Main.tsx has mounted.");
    }
});
