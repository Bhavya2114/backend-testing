FROM node:24-alpine3.22

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node","index.js"]

// Continous deploymen is set up using GitHub Actions, which automatically builds and deploys the Docker image to a container registry whenever changes are pushed to the main branch. This ensures that the latest version of the application is always available in production without manual intervention.