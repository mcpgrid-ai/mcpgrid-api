# Dockerfile

# Base image
FROM node:20.18.3

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY env.d.ts ./
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src

RUN yarn
RUN yarn build

# Expose the port (default for NestJS is 3000)
EXPOSE 3000

# Run the app
CMD ["node", "dist/main"]
