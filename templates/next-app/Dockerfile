FROM cgr.dev/chainguard/node:18 AS base
# FROM docker.io/node:lts-alpine AS base
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV PORT 3000
RUN npm config set update-notifier false && \
    npm config set fund false && \
    npm config set loglevel error

# -----------------------------------------------------------------------------
# Build dependencies
# -----------------------------------------------------------------------------
FROM base AS deps
WORKDIR /app
COPY --chown=node:node . .
RUN npm install --no-optional && npm run build && rm -Rf node_modules

# -----------------------------------------------------------------------------
# Install production dependencies only
# -----------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app /app
RUN npm install --no-package-lock --omit=dev

# -----------------------------------------------------------------------------
# Production image, copy all the files and run the application
# -----------------------------------------------------------------------------
FROM base AS runner
LABEL org.opencontainers.image.source="https://github.com/feelantera/moonlight"

ARG DATABASE_URL
ENV DATABASE_URL $DATABASE_URL

WORKDIR /app
COPY --from=builder --chown=node:node /app/package.json /app/package.json
COPY --from=builder --chown=node:node /app/package-lock.json /app/package-lock.json
COPY --from=builder --chown=node:node /app/node_modules /app/node_modules

COPY --from=builder --chown=node:node /app/next.config.js ./next.config.js
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/public ./public

EXPOSE 3000

CMD ["server.js"]
