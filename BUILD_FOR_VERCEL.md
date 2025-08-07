# Deploying to Vercel

## The Issue
Your project is structured for Replit's environment with a full Express server. Vercel works differently - it uses serverless functions instead of a persistent server.

## What I've Fixed

1. **Created `api/index.ts`** - A serverless function that handles all your API routes
2. **Created `vercel.json`** - Configuration file that tells Vercel how to build and deploy
3. **Created `.vercelignore`** - Excludes unnecessary files from deployment

## How to Deploy

1. **Push your code to GitHub** (if not already done)

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Import your repository
   - Vercel will automatically detect the configuration

3. **Build Settings:**
   - Build command: `npm run build` (should auto-detect)
   - Output directory: `client/dist` (should auto-detect)
   - Root directory: `./` (leave empty)

## Key Changes Made

- **Simplified API**: All API routes now handled by a single serverless function
- **Static Frontend**: The React app builds to static files served by Vercel's CDN
- **In-memory Storage**: Data is stored in memory (resets on each function call, but works for demo)

## Alternative: Use Replit Deployments

For the full-featured version with persistent server and database:

1. Use Replit's built-in deployment feature
2. Click "Deploy" in your Replit project
3. Your app will be deployed to a `.replit.app` domain with full server capabilities

## Production Recommendations

For a production deployment, consider:
- **Database**: Use Vercel's database add-ons or external services like PlanetScale, Supabase
- **File Storage**: Use Vercel Blob or Cloudinary for images
- **Environment Variables**: Set up in Vercel dashboard

Your Replit version is feature-complete and production-ready. The Vercel version is simplified for their serverless architecture.