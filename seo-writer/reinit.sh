#!/bin/bash

# Kill processes on port 3000 (Backend)
echo "Stopping processes on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Kill processes on port 5173 (Frontend)
echo "Stopping processes on port 5173..."
lsof -ti:5173 | xargs kill -9 2>/dev/null

# Install dependencies
echo "Installing dependencies..."
npm install

# Generate Prisma Client
echo "Generating Prisma Client..."
npx prisma generate

# Push DB schema
echo "Pushing DB schema..."
npx prisma db push

# Start Development Server
echo "Starting development server..."
npm run dev
