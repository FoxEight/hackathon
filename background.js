'use strict';

let color = 'magenta';

chrome.runtime.onInstalled.addListern(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to ', `color: ${color}`);
});
