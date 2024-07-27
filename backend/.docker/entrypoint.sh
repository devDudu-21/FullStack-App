#!/bin/bash

npm install
npx prisma migrate dev
npm run build
npm run start:dev
