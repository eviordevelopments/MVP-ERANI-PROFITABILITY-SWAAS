const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set to mobile viewport
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  
  console.log("Navigating to http://localhost:3000 ...");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 60000 });
  
  // Wait a little for animations to settle
  await page.waitForTimeout(3000);
  
  // Find all elements that overflow the viewport horizontally
  const overflowingElements = await page.evaluate(() => {
    const w = window.innerWidth;
    const elements = document.querySelectorAll('*');
    const logs = [];
    
    for (let el of elements) {
      if (el.tagName === 'BODY' || el.tagName === 'HTML' || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') continue;
      
      const rect = el.getBoundingClientRect();
      // If the right edge of the element goes past the window width
      if (rect.right > w && rect.width > 0 && rect.height > 0) {
        
        // Skip hidden elements and absolute elements if they are just background decoration
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
        if (style.position === 'absolute' && el.className.includes('blur-')) continue;
        
        const id = el.id ? `#${el.id}` : '';
        const cls = el.className && typeof el.className === 'string' ? `.${el.className.split(' ').join('.')}` : '';
        
        logs.push({
          tag: el.tagName,
          id: id,
          cls: cls,
          right: rect.right,
          width: rect.width,
          text: (el.textContent || '').substring(0, 30).replace(/\n/g, ' ')
        });
      }
    }
    return logs;
  });
  
  if (overflowingElements.length > 0) {
    console.log(`Found ${overflowingElements.length} overflowing elements. Top 20:`);
    overflowingElements.sort((a, b) => b.right - a.right);
    console.log(overflowingElements.slice(0, 20));
  } else {
    console.log("No elements found overflowing horizontally!");
  }
  
  await browser.close();
})();
