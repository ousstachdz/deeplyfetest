# Installation and Setup

Download the code from the project repository.
Install the required dependencies by running the command npm install in the project directory.
Run the command docker-compose up to start the server.

# Usage

After following the installation and setup instructions, you can access the application by navigating to the following URL in your web browser: http://subdomain.localhost.localhost/.

Please note that the application is only accessible at this URL and any attempt to access it from a different URL will result in a 404 error.

# ServiceWorker for offline caching

The Service Worker is a JavaScript file that runs in the background of a user's web browser and acts as a proxy between the web page and the network. Its primary purpose is to enable offline caching of web page assets such as HTML, CSS, JavaScript, images, and other resources.

# Nginx to manage subdomains

To manage subdomains with Nginx, you would create a separate server block for each subdomain that you want to handle. Within each server block, you would specify the domain or subdomain that the block should handle, along with any other configuration directives that are necessary.
