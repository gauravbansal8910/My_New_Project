// yeh sahi chl rha hai 

import React from "react";
import ReactDOM from "react-dom/client";        // req for rendering react components
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"          // enables routing 
import {Provider} from "react-redux";           // connects redux store to app, making state available across components
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Toaster } from "react-hot-toast";      // display toast notifications
import ScrollToTop from "./Components/ScrollToTop";
import swDev from "./swDev";

const store= configureStore({
    reducer: rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>
);
swDev();        // The swDev function is responsible for registering a service worker in your app. 
                // It caches files to load resources faster. Ensures the app functions when there's no internet connection by serving cached content. 
                // Handles updates in the background to improve user experience.


                // 100: Continue – Request received, continue the process.
                // 101: Switching Protocols – Server is switching protocols as requested.

                // 200: OK – The request was successful.
                // 201: Created – Resource successfully created (e.g., POST request).
                // 204: No Content – Request succeeded, but no content is returned.

                // 301: Moved Permanently – Resource has been permanently moved to a new URL.
                // 302: Found – Temporary redirection to another URL.
                // 304: Not Modified – Cached version can be used.

                // 400: Bad Request – Invalid request parameters or syntax.
                // 401: Unauthorized – Authentication is required.
                // 403: Forbidden – Access denied despite authentication.
                // 404: Not Found – Resource not found on the server.
                // 429: Too Many Requests – Rate limiting due to excessive requests.


                // 500: Internal Server Error – Generic error on the server.
                // 502: Bad Gateway – Invalid response from an upstream server.
                // 503: Service Unavailable – Server is overloaded or under maintenance.
                // 504: Gateway Timeout – Upstream server failed to respond in time.