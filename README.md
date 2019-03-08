# cdlib-ui
The UI library for the California Digital Library website.

## Installation

1. `cd` to your root directory containing the [cdlib repo](https://github.com/cdlib/cdlib).

2. Clone cdlib repo into that directory.

3. `cd` to `cdlib-ui` and run `npm install`.

4. Run `gulp pull-assets-dev` to copy initial UI assets from remote server to the UI library.

UI assets include the compiled stylesheet, fonts, images, and JavaScript. These automatically get updated during development and get pushed to the local and remote instances via the commands below. They don't include the Sass, HTML, or any other files.

## Running Toolkit

* Run `gulp` during development.

* Run `gulp build` to create a finished build of ui assets updated during development. This copies them to within your local cdlib repo for review and prepares them for getting pushed to the remote servers via the `update` commands below.

* `gulp deploy` executes the same process as `gulp build`, but also uploads the updated UI library to the [webprod server](http://webprod.cdlib.org/cdlib/cdlib-ui) for review.

* Run `gulp update-dev` to upload a finished build of the ui assets to the development server. This also executes a `git pull` of the cdlib repo on the server.

* `gulp update-stage` does the same as `gulp update-dev above, but for the staging server.

* `gulp update-prod` does the same as `gulp update-dev above, but for the production server.

## Best Practices

* Please commit to the `dev` branch, not `master`.

* When diagnosing layout issues, be sure to compare the rendering between the UI library and cdlib websites to confirm if the problem is in the UI or if it's related to content in WordPress.

* When planning UI updates, use your browser's DevTools to inspect the code on the cdlib site or UI library site first. Finding UI component class names and HTML is often easier this way than trying to initially locate this within the UI library files.

* If HTML is modified within the cdlib repo along with styles in the cdlib-ui repo, commit and push the cdlib repo changes first. When running one of the `update` commands above, the styles and HTML will get updated on the dev/stage/prod server at the same time.
