// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, {file: 'src/inject/App.js'})
});