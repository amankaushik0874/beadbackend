import { dummyBeads } from "./data.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      beads: dummyBeads,
      total: Object.keys(dummyBeads).length,
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
