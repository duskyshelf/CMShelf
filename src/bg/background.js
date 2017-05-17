// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  (request, sender, sendResponse) => {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

const doStuffWithDom = (domContent) => {


  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/update', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    // do something to response
    alert('submitted');
  };
  xhr.send('id=1&content=' + domContent);
    // alert('I received the following DOM content:\n' + domContent);
}

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});