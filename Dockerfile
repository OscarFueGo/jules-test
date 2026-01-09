# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the static files from the current directory to the Nginx server's root directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
