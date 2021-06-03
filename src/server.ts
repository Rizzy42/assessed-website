import { createServer } from "http";
import * as app from "./dist/App.js";

createServer((req, res) => {
    const { html } = app.render({ url: req.url })
})