chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
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