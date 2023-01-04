# cdlib-ui

The UI for the California Digital Library website.

View at: https://cdlib.github.io/cdlib-ui

## Installation

Requires Node, npm and Font Awesome Pro token

1. Add the Font Awesome Pro token as a [GitHub Actions secret](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md) named `FONTAWESOME_TOKEN`.

2. Add a **.npmrc** file within the project root using the [Per-Project](https://fontawesome.com/v5/docs/web/setup/use-package-managers#per-project) settings for Font Awesome Pro, including your token. This file is automatically ignored by Git and should not be committed.

3. Run `npm install`.

## Developing

1. Run `npm run serve`

This will watch and compile **.hbs**, **.scss**, **.js**, and **/images/** files as you work on them.

2. Go to http://localhost:3000 to view the UI

To test the UI on other devices (phone, tablet, etc.), use the Fractal Server Network URL listed in your CLI at first run.

## Building

Run `npm run build`.

This will create a finished build of all components and pages of this UI at **/dist/**

All UI assets, including minified images, compiled CSS & JS, and font files are copied to **/dist/ui-assets/**.

## Testing

The following tests are run via GitHub Actions with each push to the repository:

* [Pa11y-ci](https://github.com/pa11y/pa11y-ci) (accessibility audit)
* [Percy](https://percy.io) (visual regression)

To run manually:

* `npm run test-pa11y`
* `npm run test-percy`

[View test results](https://github.com/cdlib/cdlib-ui/actions).

Percy requires an active account for uploading visual snapshots and a `PERCY_TOKEN` added as a GitHub repository secret.

## Publishing to GitHub Pages

This requires [GitHub Pages](https://pages.github.com) to be configured.

Run `npm run publish` to publish a finished build of this UI to https://cdlib.github.io/cdlib-ui.

## Deployment

To deploy UI assets to WordPress servers, run:

* `npm run push-assets-dev`
* `npm run push-assets-stage`
* `npm run push-assets-prod`