#!/bin/bash

# Script to run the development server with Node.js compatibility fixes

# Set environment variables
export GENERATE_SOURCEMAP=false
export SKIP_PREFLIGHT_CHECK=true
export NODE_OPTIONS="--openssl-legacy-provider --no-deprecation"

# Clear any existing processes on port 3000
echo "Clearing port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Start the development server
echo "Starting development server..."
npm start