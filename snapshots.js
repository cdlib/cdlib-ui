const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/blogindex.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Blog Index');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/blogpost.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Blog Post');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/homepage.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Home');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/program.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Program');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/searchresults.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Search Results');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/staffprofile.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Staff Profile');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/systemstatus.html');
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('System Status');
});
