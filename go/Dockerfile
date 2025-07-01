# Use Go 1.25 RC Alpine image
FROM golang:1.24.4-alpine


# Install dependencies: git, curl, bash (Air + Go tools need these)
RUN apk add --no-cache git curl bash

# Set working directory
WORKDIR /app

# Install Air globally
RUN go install github.com/air-verse/air@latest


# Copy go.mod and go.sum first to leverage cache
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of your source code
COPY . .

# Expose the port your Go app uses
EXPOSE 8085

# Run Air using bash so $PATH and envs are correct
CMD ["bash", "-c", "/go/bin/air"]