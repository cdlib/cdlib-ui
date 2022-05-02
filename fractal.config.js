const path = require('path');

// Create a new Fractal instance:
const fractal = module.exports = require('@frctl/fractal').create();

// Title of Fractal project:
fractal.set('project.title', 'CDLIB UI');

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

// Default Fractal template:
fractal.components.set('default.preview', '@template-default');

// Mandelbrot theme with custom configuration:
const mandelbrot = require('@frctl/mandelbrot');

const CDLIBTheme = mandelbrot({
  panels: ['notes', 'html', 'view', 'context', 'resources', 'info'],
});

fractal.web.theme(CDLIBTheme);
