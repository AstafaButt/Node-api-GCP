# Use official Node image
FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
#RUN npm ci --only=production
RUN npm install --omit=dev

COPY . .

EXPOSE 8080
CMD ["node", "app.js"]
