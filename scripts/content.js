function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

function resizeElement(selector) {
  waitForElm(selector).then(function(elm) {
    // Find the main div on the page
    const selectedElement = document.querySelector(selector);
    
    console.log(`Selected Element ${selectedElement}`)
    
    // Resize element
    if (selectedElement) {
      console.log(`Resizing ${selector}`);
      selectedElement.style.cssText = 'height: 100vh !important';
    }
    
  });
}

console.log("Resize1C is running!");

// GoPerform div
resizeElement('.main');
