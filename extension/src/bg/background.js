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

const doStuffWithDom = (data) => {

  data.forEach(element => {
    const id = element.id;
    const domContent = element.content;


    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3100/update', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
      // do something to response
      alert(`submitted. id: ${id}. domContent: ${domContent}`);
    };
    xhr.send(`id=${id}&content=${domContent}`);
      // alert('I received the following DOM content:\n' + domContent);
  })
}

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});