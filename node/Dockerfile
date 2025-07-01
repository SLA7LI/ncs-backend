# Use a full Node.js image for dev
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install everything (not just production)
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Install nodemon globally (if not already in your package.json)
RUN npm install -g nodemon

# Expose port
EXPOSE 3000

# Run with nodemon for live reload
CMD ["nodemon", "src/index.js"]
