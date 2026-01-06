# Step 1: Build the Angular application
FROM node:18 AS build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the entire project
COPY . .

# Build the Angular app for production (browser only)
RUN npm run build -- --configuration=production

# Step 2: Serve with nginx
FROM nginx:alpine AS runtime-stage

# Copy built Angular app to nginx html directory
COPY --from=build-stage /app/dist/epr/browser /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]