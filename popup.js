'use strict';

// const sanitize = document.querySelector('.sanitize');
const sanitize = document.getElementById('sanitize');
console.log(sanitize);

sanitize.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: doStuff,
  });
});

// sanitize.addEventListener('click', () => {
//   console.log('pushed button');
// });

function doStuff() {
  const keywords = {
    this: 'THE THIS KEYWORD',
    for: 'FOR LOOP',
    while: 'WHILE LOOP',
    new: 'NEW INSTANTIATION',
  };
  console.log("I'm doing stuff.");
  const ps = document.querySelectorAll('p');
  // console.log(allThePs);
  //   const spans = document.querySelectorAll('span');
  const lis = document.querySelectorAll('li');
  //   const as = document.querySelectorAll('a');
  const h1s = document.querySelectorAll('h1');
  const h2s = document.querySelectorAll('h2');
  const uls = document.querySelectorAll('ul');

  const textArr = [
    [...ps],
    // [...spans],
    [...lis],
    // [...as],
    [...h1s],
    [...h2s],
    [...uls],
  ];
  console.log(textArr);
  for (const elArray of textArr) {
    for (const indEl of elArray) {
      if (/this/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/this/gi, keywords.this);
      if (/for/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/for/gi, keywords.for);
      if (/while/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/while/gi, keywords.while);
      if (/new/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/new/gi, keywords.new);
      if (/\.{3}/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/\.{3}/gi, 'REST PARAMETER');
      if (/\./.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/\./gi, 'PROP SELECTOR');
      if (/#/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/#/gi, 'THE MF OCTOTHORPE');
      if (/the/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/the/gi, `👾`);
    }
  }
}

// p tags
// span tags
// li tags
// a tags
// h1 and h2
// ul s
