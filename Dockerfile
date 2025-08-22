# Use a lightweight nginx image as the base
FROM nginx:alpine

# Copy the project files to the nginx web root directory
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html
COPY index.js /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
