# Use an official Node.js runtime as a base image 
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if you're using npm) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Expose a port for the application to run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]