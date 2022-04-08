"use strict";
// const axios = require("axios");
// const express = require("express");
// const cors = require("cors");
// const app = express();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.use(cors());
// app.get("/read10kbfile/:path", async (req, res) => {
//     const resp = await axios("https://www.10kb.site/" + req.params.path + "-offer", {
//         method: "GET",
//     })
//     res.send(resp.data);
// })
// app.listen("3001");
// export default async function handler(
//   request,
//   response,
// ) {
//     const resp = await axios("https://www.10kb.site/" + request.params.path + "-offer", {
//         method: "GET",
//     })
//     response.send(resp.data);
// }
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
// import cors from "cors"; // for CORS setup, usage: app.use(cors());
const app = (0, express_1.default)();
const port = process.env.PORT || 3030; // default port to listen
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello!`);
});
app.get("/api/:path", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield (0, axios_1.default)("https://www.10kb.site/" + req.params.path + "-offer", {
        method: "GET",
    });
    res.send(resp.data);
}));
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=app.js.map