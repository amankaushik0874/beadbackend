# Bead NFT Backend API

This is a Next.js backend API for Bead NFT metadata validation.

## API Endpoints

- `GET /api/beads` - Get all beads
- `GET /api/beads/[beadId]` - Get specific bead metadata
- `POST /api/beads/[beadId]` - Validate bead metadata

## Deployment Instructions

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Install dependencies:

```bash
npm install
```

3. Deploy to Vercel:

```bash
vercel
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/beads`
