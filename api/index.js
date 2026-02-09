import express from "express";
import cors from "cors";
import { mockScan } from "../../shared/riskScore.ts";

const app = express();
app.use(cors());

app.get("/scan/:address", (req, res) => {
  const address = req.params.address;
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return res.status(400).json({ error: "Invalid address" });
  }
  res.json(mockScan(address));
});

app.listen(5050, () => {
  console.log("MoonScan API running on http://localhost:5050");
});
