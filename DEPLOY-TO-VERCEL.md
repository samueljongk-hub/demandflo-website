# Deploying DemandFlo to Vercel

This guide will help you deploy the DemandFlo website (frontend + backend) to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Git repository with your code (GitHub, GitLab, or Bitbucket)
3. Vercel CLI (optional, for command-line deployment)

## Project Structure

The project is configured for Vercel deployment with:
- **Frontend**: React + Vite app in `client/` directory
- **Backend**: Express API as serverless functions in `api/` directory
- **Configuration**: `vercel.json` for routing and build settings

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository
   - Vercel will automatically detect the Vite configuration

3. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` or `vite build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install`

4. **Environment Variables** (if needed)
   - Click "Environment Variables"
   - Add any required variables:
     - `NODE_ENV` = `production`
     - Add any API keys or secrets your app needs

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a live URL like `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **demandflo** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## How It Works

### Frontend Deployment
- Vercel builds your Vite React app using `npm run build`
- Static files are served from `client/dist/`
- All routes are handled by React Router (via `vercel.json` rewrites)

### Backend Deployment
- Express API is converted to serverless functions
- All `/api/*` routes are handled by `api/index.ts`
- Memory storage is maintained per-request (suitable for demo/MVP)

### Routing Configuration
The `vercel.json` file handles:
- API requests (`/api/*`) → serverless function in `api/index.ts`
- All other requests → React app (`client/dist/index.html`)
- Proper SPA routing for React

## Post-Deployment

### Custom Domain
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `www.demandflo.ai`)
4. Follow DNS configuration instructions

### Environment Variables
If you need to add or update environment variables after deployment:
1. Go to Project Settings → Environment Variables
2. Add/Edit variables
3. Redeploy for changes to take effect

### Continuous Deployment
Once connected to Git, Vercel automatically:
- Deploys every push to `main` branch to production
- Creates preview deployments for pull requests
- Provides unique URLs for each deployment

## API Endpoints

After deployment, your API will be available at:
- `https://your-project.vercel.app/api/blog/posts`
- `https://your-project.vercel.app/api/blog/posts/:slug`
- `https://your-project.vercel.app/api/contact`

## Monitoring & Logs

View deployment logs and analytics:
1. Go to your project in Vercel Dashboard
2. Click "Deployments" to see build logs
3. Click "Analytics" for traffic and performance data
4. Click "Logs" for runtime logs

## Important Notes

### Memory Storage Limitation
- The current implementation uses in-memory storage
- This means data (blog posts, contact submissions) will reset on each deployment
- For production, consider:
  - Adding a database (Vercel Postgres, MongoDB Atlas, etc.)
  - Using Vercel's KV storage for simple key-value data
  - Implementing persistent storage solution

### Serverless Function Limits
- Max execution time: 10 seconds (Hobby), 60 seconds (Pro)
- Max payload size: 4.5 MB
- Functions are stateless - no shared memory between requests

### Calendly Links
All Calendly links are configured to point to:
`https://calendly.com/samueljong/discovery`

Update this in the code before deployment if needed.

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### API Routes Not Working
- Verify `vercel.json` routing configuration
- Check that API routes are prefixed with `/api/`
- Review function logs in Vercel Dashboard

### 404 on React Routes
- Ensure `vercel.json` has proper SPA fallback configuration
- Check that routes are defined in your React app

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite on Vercel Guide](https://vercel.com/docs/frameworks/vite)
- [Serverless Functions](https://vercel.com/docs/functions/serverless-functions)

## Local Development

For local development, continue using:
```bash
npm run dev
```

This runs the Express server with Vite HMR, which is different from the production serverless setup.
