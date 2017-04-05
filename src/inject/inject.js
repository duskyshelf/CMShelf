chrome.extension.sendMessage({}, (response) => {
  var readyStateCheckInterval = setInterval(() => {
    const element = document.querySelector('div.section-inner h1');

    if (document.readyState === "complete" && element) {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js");
      // ----------------------------------------------------------

      console.log(element);
      element.setAttribute('contenteditable', "true");
      element.setAttribute("style", "border-style: solid;border-color: red");


    }
  }, 10);
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        const element = document.querySelector('div.section-inner h1').innerHTML;
        console.log(element);

        sendResponse(document.querySelector('div.section-inner h1').innerHTML);
    }
});