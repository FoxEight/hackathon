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
    console.log(elArray);
    for (const indEl of elArray) {
      const newSpan = document.createElement('span');
      // newSpan.setAttribute('class', 'replacement-span');

      if (/this/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /this/gi,
          '<span class="replacement-span" style="color:red; background-color:gray; font-family: Courier">THE THIS KEYWORD</span>'
        );
        indEl.innerHTML = strToMutate;
        // indEl.innerHTML = indEl.innerText.replace(
        //   /this/gi,
        //   '<span class="replacement-span">THE THIS KEYWORD</span>'
        // );
        console.log(indEl);
      }

      if (/for/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /for/gi,
          '<span class="replacement-span" style="color:red; background-color:gray; font-family: Courier">FOR LOOP</span>'
        );
        indEl.innerHTML = strToMutate;
      }
      if (/while/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /while/gi,
          '<span class="replacement-span" style="color:red; background-color:gray; font-family: Courier">WHILE LOOP</span>'
        );
        indEl.innerHTML = strToMutate;
      }
      if (/new/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /new/gi,
          '<span class="replacement-span" style="color:red; background-color:gray; font-family: Courier">NEW INSTANTIATION</span>'
        );
        indEl.innerHTML = strToMutate;
      }
      if (/\.{3}/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /\.{3}/gi,
          '<span class="replacement-span" style="color:red; background-color:gray; font-family: Courier">REST PARAMETER</span>'
        );
        indEl.innerHTML = strToMutate;

        // indEl.innerText = indEl.innerText.replace(/\.{3}/gi, 'REST PARAMETER');
      }

      if (/\./.test(indEl.innerText)) {
        indEl.innerHTML = indEl.innerText.replace(
          /\./gi,
          '<span class="replacement-span" style="color:red;background-color:gray;font-family: Courier">PROP SELECTOR</span>'
        );
        // indEl.innerText = indEl.innerText.replace(/\./gi, 'PROP SELECTOR');
      }
      if (/#/.test(indEl.innerText))
        indEl.innerText = indEl.innerText.replace(/#/gi, 'THE MF OCTOTHORPE');
    }
  }
}

// p tags
// span tags
// li tags
// a tags
// h1 and h2
// ul s
