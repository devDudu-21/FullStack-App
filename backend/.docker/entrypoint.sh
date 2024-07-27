#!/bin/bash

sleep 5
npm install
npx prisma migrate dev
npm run build
npm run start:dev
