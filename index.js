import express from "express";
import os from "node:os";

const hostname = os.hostname();
const app = express();
const port = 7777;

app.get("/", async (req, res) => {
  res.send(`Hello from ${hostname}!. Ingnite!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
