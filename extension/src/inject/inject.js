chrome.extension.sendMessage({}, (response) => {
  var readyStateCheckInterval = setInterval(() => {
    const elements = document.querySelectorAll('p.App-intro');

    if (document.readyState === "complete" && elements) {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js");
      // ----------------------------------------------------------

      elements.forEach(element => {
        console.log(element);
        element.setAttribute('contenteditable', "true");
        element.setAttribute("style", "border-style: solid;border-color: red");
      })
    }
  }, 10);
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument

        const elements = document.querySelectorAll('p.App-intro');
        let data = []
        elements.forEach(element => {
          data.push({ content: element.innerHTML, id: element.classList[1].split('-')[1]})
        })
        sendResponse(data);
    }
});