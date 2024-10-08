chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["inject/App.js"],
  });
  chrome.scripting.insertCSS({
    target: {
      tabId: tab.id,
    },
    files: ["inject/App.css"],
  });
});
