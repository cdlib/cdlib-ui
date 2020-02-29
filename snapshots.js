const PercyScript = require('@percy/script');


const options = {
  // uncomment options to visually debug:
  // headless: false,
  // slowMo: 250
};

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/blogindex.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Blog Index');
}, options);

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/blogpost.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Blog Post');
}, options);

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/homepage.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Home');

  await page.setViewport({
    width: 600,
    height: 600,
    isMobile: true
  });
  await percySnapshot('Home at 600px', { widths: [600] });

  await page.setViewport({
    width: 400,
    height: 600,
    isMobile: true
  });
  await percySnapshot('Home at 400px', { widths: [400] });
}, options);

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/program.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Program');

  // reveal first section in global nav:
  await page.hover('.c-headernav > ul > li > a');
  await percySnapshot('Global Nav');

  await page.setViewport({
    width: 800,
    height: 600,
    isMobile: true
  });
  await percySnapshot('Program at 800px', { widths: [800] });

  await page.setViewport({
    width: 600,
    height: 600,
    isMobile: true
  });
  await percySnapshot('Program at 600px', { widths: [600] });

  await page.setViewport({
    width: 400,
    height: 600,
    isMobile: true
  });
  await percySnapshot('Program at 400px', { widths: [400] });

  // open mobile and secondary navs:
  await page.click('.c-header__controls .o-button3');
  await page.click('.c-secondarynav .o-button6');
  await page.hover('.c-mobilenav li a');
  await percySnapshot('Navigations at 400px', { widths: [400] });

  // open mobile search:
  await page.click('.c-header__controls .o-button1');
  await page.waitFor(1000);
  await percySnapshot('Search at 400px', { widths: [400] });
}, options);

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/searchresults.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Search Results');
}, options);

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/staffprofile.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('Staff Profile');
}, options);

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/systemstatus.html', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await percySnapshot('System Status');
}, options);
