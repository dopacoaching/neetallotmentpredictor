# Dr Bhatia MDS Kerala — NEET Allotment Predictor

A full-stack MERN application for predicting NEET MDS seat allotments based on historical data.

## Project Structure

- `/client`: Next.js frontend application.
- `/server`: Express.js backend with Prisma (MongoDB).

## Local Development

1. Install dependencies in the root, client, and server:
   ```bash
   npm install
   npm install --prefix client
   npm install --prefix server
   ```

2. Set up environment variables:
   - Create `client/.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:5000`
   - Create `server/.env`: `DATABASE_URL=your_mongodb_url`, `PORT=5000`

3. Initialize Prisma:
   ```bash
   cd server
   npx prisma generate
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Frontend (Vercel)
- Link the `/client` directory to Vercel.
- Set `NEXT_PUBLIC_API_URL` to your production backend URL.

### Backend (Railway/Render/Render/etc.)
- Deploy the `/server` directory.
- Ensure `DATABASE_URL` is configured in the environment.
- Run `npx prisma db push` (or generate) during the build process.

## Admin Access
- URL: `/admin`
- Credentials: `itdopa` / `dopa1234`
