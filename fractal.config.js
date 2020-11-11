'use strict';

/*
 * Require the path module
 */
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@frctl/fractal').create());

/*
 * Give your project a title.
 */
fractal.set('project.title', 'SMT 036/049/050 Email Template Patterns/Blocks');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.docs.set('path', path.join(__dirname, 'reference'));

/*
 * Tell Fractal where to look for documentation pages.
 */

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('server.sync', true);
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell the Fractal where to output the build files.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'docs'));

/*
 * Customize Mandelbrot
 */


// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: 'black',
    panels: ['html','notes'],
    styles: [
        'default',
        '/global/app.css'
    ]
    // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);


// const myCustomisedTheme = mandelbrot({
//     skin: "fuchsia",
//     panels: ["info", "resources"]
// });

// fractal.web.theme(myCustomisedTheme);

