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

console.log("I said YES is running!");

waitForElm('#idSIButton9').then(function(elm) {
  // Find the "Yes" button on the page
  const yesButton = document.querySelector('#idSIButton9');
  
  console.log(`Yes button ${yesButton}`)
  
  // Click the "Yes" button
  if (yesButton) {
    console.log("In click button");
    yesButton.click();
  }
  
});




