// Require the path module:
const path = require('path');

// Require the Fractal module:
const fractal = module.exports = require('@frctl/fractal').create();

// Fractal project title:
fractal.set('project.title', 'CDLIB UI Library');

// Fractal components location:
fractal.components.set('path', path.join(__dirname, 'elements'));

// Fractal documentation pages location:
fractal.docs.set('path', path.join(__dirname, 'docs'));

// Static asset location for Fractal previews:
fractal.web.set('static.path', path.join(__dirname, 'static'));

// Destination of files on 'build' task:
fractal.web.set('builder.dest', __dirname + '/dist');

// Fractal global preview component handle:
fractal.components.set('default.preview', '@template');

// BrowserSync options:
fractal.web.set('server.syncOptions', {
  // Inject CSS on change w/o reloading the page:
  files: './static/css/*.css',
  // Open BrowserSync at an external network URL:
  open: 'external'
});

// require the Mandelbrot theme module to enable customizations:
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const CDLIBTheme = mandelbrot({
    styles: ['default', '/css/fractal-customizations.css']
});

// tell Fractal to use the configured theme by default
fractal.web.theme(CDLIBTheme);
