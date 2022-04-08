// const axios = require("axios");
// const express = require("express");
// const cors = require("cors");
// const app = express();

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

import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
// import cors from "cors"; // for CORS setup, usage: app.use(cors());

const app = express();
const port = process.env.PORT || 3030;  // default port to listen

app.get('/api', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello!`);
});

app.get("/api/:path", async (req, res) => {
  const resp = await axios("https://www.10kb.site/" + req.params.path + "-offer", {
      method: "GET",
  })
  res.send(resp.data);
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;