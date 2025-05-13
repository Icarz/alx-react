const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',  // Entry point for your app
    output: {
        path: path.resolve(__dirname, 'public'),  // Output directory
        filename: 'bundle.js',  // The bundled file name
    },
    mode: 'production',  // Set the mode to production
};

