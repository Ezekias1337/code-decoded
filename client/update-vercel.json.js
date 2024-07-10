const fs = require('fs');
const path = require('path');

// Read the backend URL from the environment variable
const backendUrl = process.env.VITE_ORIGIN_URL_BASE;

if (!backendUrl) {
console.error('VITE_ORIGIN_URL_BASE is not defined.');
process.exit(1);
}

// Read vercel.json
const vercelConfigPath = path.resolve(__dirname, 'vercel.json');
const vercelConfig = require(vercelConfigPath);

// Update the rewrites section
// Update the rewrites section
vercelConfig.rewrites = [
    {
        source: '/api/(.)',
        destination: `${backendUrl}/api/$1`
    },
    {
        source: '/(.)',
        destination: '/index.html'
    }
];

// Write the updated vercel.json back to the file
fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));

console.log('vercel.json updated successfully');