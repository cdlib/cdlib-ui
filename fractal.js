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

// Static asset folder for Fractal development:
fractal.web.set('static.path', path.join(__dirname, 'ui-assets'));

// Static asset folder for Fractal builds:
fractal.web.set('static.mount', 'ui-assets');

// Destination of files on 'build' task:
fractal.web.set('builder.dest', __dirname + '/dist');

// Fractal global preview component handle:
fractal.components.set('default.preview', '@template');

// BrowserSync options:
fractal.web.set('server.syncOptions', {
  // Inject CSS on change w/o reloading the page:
  files: './ui-assets/css/*.css',
  // Open BrowserSync at an external network URL:
  open: 'external'
});

// require the Mandelbrot theme module to enable customizations:
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const CDLIBTheme = mandelbrot({
  panels: ['notes', 'html', 'view', 'context', 'resources', 'info'],
  styles: ['default', '/ui-assets/css/fractal-customizations.css']
});

// tell Fractal to use the configured theme by default
fractal.web.theme(CDLIBTheme);
