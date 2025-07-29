# # Dockerfile

# # Base image
# FROM node:20.18.3

# # Set working directory
# WORKDIR /app

# # Copy package files and install dependencies
# COPY env.d.ts ./
# COPY package.json ./
# COPY yarn.lock ./
# COPY tsconfig*.json ./
# COPY nest-cli.json ./
# COPY src ./src

# RUN yarn
# RUN yarn build

# # Expose the port (default for NestJS is 3000)
# EXPOSE 8080

# # Run the app
# CMD ["node", "dist/main"]

# Multi-stage build for optimal image size
# Multi-stage build with Debian base
FROM node:20-slim AS builder

# Set working directory
WORKDIR /usr/src/app

# Enable Corepack to use Yarn
RUN corepack enable

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY env.d.ts ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src

# Build the application
RUN yarn build

# Remove dev dependencies
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Production stage
FROM node:20-slim AS production

# Install dumb-init for proper signal handling
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Create non-root user
RUN groupadd --gid 1001 --system nodejs && \
    useradd --uid 1001 --system --gid nodejs --shell /bin/bash --create-home nestjs

# Copy built application and production dependencies from builder stage
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /usr/src/app/package.json ./package.json

# Switch to non-root user
USER nestjs

# Expose port
EXPOSE 8080

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "dist/main.js"]