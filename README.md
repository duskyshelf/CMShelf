# CMShelf

Extension based CMS designed to allow for browser-based editing without the need for a visible back-end for users to worry about.

The repo is composed of 2 parts:
* [demo] - A docker based application composed of a mongo database, an express based API layer for accessing it, and a example consuming website.
* [extension] - A Chrome extension which both injects the javascript/html required to allow the content blocks to be edited and communicates with the mongo-api layer to update the database when required.

### Installation

Dependencies: Node, Docker, Bash (optional).
* [demo] - To run execute the shell script `./start.sh`.
* [extension] -
  * type `chrome://extensions/` into the chrome search bar.
  * Select `Load unpacked extension...`.
  * Navigate to the application's extension folder and add the extension

### Running

Once you have both the demo running and the extension installed visit http://localhost:3000/

With the extension disabled, the page should appear as a plain website with 3 text fields.
With the extension enabled, the text fields should appear highlighted and the text itself should now be editable.

To update the content, edit the text in browser and then click extension icon in the top right of the chrome browser.

Now when you refresh, the new content should be present.

### How to contribute

I'm new to open-sourcing projects, but feel free to raise issues/ideas/PR's and I'll try to upgrade the contributing guidelines as I figure stuff out.

Thanks! - Dusky
