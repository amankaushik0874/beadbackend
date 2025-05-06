import { dummyBeads } from "./data.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { beadId } = req.query;

    // If beadId is provided, return only that bead's metadata
    if (beadId) {
      const bead = dummyBeads[beadId];
      if (!bead) {
        return res.status(404).json({ error: `Bead ID ${beadId} not found` });
      }
      return res.status(200).json(bead);
    }

    // If no beadId, return all beads metadata without additional info
    return res.status(200).json(dummyBeads);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
