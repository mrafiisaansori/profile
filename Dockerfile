# ====== STAGE 1: Build the app ======
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Build project
RUN npm run build


# ====== STAGE 2: Serve the app ======
FROM nginx:alpine

# Copy build output ke folder default Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional, lihat di bawah)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]