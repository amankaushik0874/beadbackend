import { dummyBeads } from "./data.js";

export default function handler(req, res) {
  const { beadId } = req.query;

  if (req.method === "GET") {
    const bead = dummyBeads[beadId];
    if (!bead) {
      return res.status(404).json({ error: `Bead ID ${beadId} not found` });
    }
    // Return the bead data directly, as expected by the Chainlink Function
    return res.status(200).json(bead);
  }

  // Other methods are not allowed for this simplified example
  return res.status(405).json({ error: "Method not allowed" });
}
