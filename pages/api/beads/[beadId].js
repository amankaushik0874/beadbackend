// Dummy data for demonstration
const dummyBeads = {
  BEAD1234: {
    type: "Necklace",
    weight: 25,
    dimensions: "10x5x5",
    materials: "Gold",
    origin: "India",
    valid: true,
  },
  BEAD5678: {
    type: "Bracelet",
    weight: 15,
    dimensions: "7x3x3",
    materials: "Silver",
    origin: "Thailand",
    valid: true,
  },
  BEAD9012: {
    type: "Ring",
    weight: 8,
    dimensions: "2x2x2",
    materials: "Platinum",
    origin: "Dubai",
    valid: true,
  },
};

export default function handler(req, res) {
  const { beadId } = req.query;

  if (req.method === "GET") {
    const bead = dummyBeads[beadId];
    if (!bead) {
      return res.status(404).json({ error: `Bead ID ${beadId} not found` });
    }
    return res.status(200).json({
      beadId,
      metadata: bead,
      timestamp: new Date().toISOString(),
    });
  }

  if (req.method === "POST") {
    const { metadata } = req.body;

    if (!metadata) {
      return res.status(400).json({ error: "Missing metadata" });
    }

    // Simple validation logic
    const response = {
      beadId: beadId,
      timestamp: new Date().toISOString(),
      valid: dummyBeads[beadId] ? true : false,
      metadata: dummyBeads[beadId] || metadata,
    };

    return res.status(200).json(response);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
