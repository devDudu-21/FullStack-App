#!/bin/bash

echo "Waiting for the database to start..."
sleep 10
echo "Database should be ready, running migrations..."

npm install
npx prisma migrate dev
npm run build
npm run start:dev
