# Music API

A simple REST API for serving music data with pagination support. Built with Express.js and optimized for deployment on Vercel.

## Features

- RESTful API with pagination
- CORS enabled for Expo applications
- Serverless deployment ready
- Easy to deploy on Vercel

## API Endpoints

### GET /
Health check endpoint that returns API status and available endpoints.

### GET /api/songs
Returns paginated list of songs.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Example:**
```
GET /api/songs?page=1&limit=10
```

**Response:**
```json
{
  "status": "success",
  "page": 1,
  "limit": 10,
  "total": 100,
  "totalPages": 10,
  "data": [...]
}
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your API will be live at: `https://your-project-name.vercel.app`

## Using the API in Your Expo App

```javascript
const API_URL = 'https://your-project-name.vercel.app';

// Fetch songs
const fetchSongs = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${API_URL}/api/songs?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
};
```

## CORS Configuration

This API is configured to accept requests from any origin, making it perfect for Expo applications. The CORS settings include:
- Origin: `*` (all origins allowed)
- Methods: GET, POST, PUT, DELETE, OPTIONS
- Headers: Content-Type, Authorization
- Preflight requests are handled automatically

## Project Structure

```
MusicAPI/
├── api/
│   └── songs.js          # Legacy serverless function
├── index.js              # Main application file
├── songs.json            # Music data
├── package.json          # Dependencies and scripts
├── vercel.json           # Vercel configuration
└── README.md             # This file
```

## Environment Variables

No environment variables are required for basic operation. The API uses:
- `PORT`: Server port (default: 3000) - automatically set by Vercel
- `NODE_ENV`: Environment mode - set to 'production' on Vercel

## License

MIT
