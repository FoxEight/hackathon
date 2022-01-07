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
      // const newSpan = document.createElement('span');
      // newSpan.setAttribute('class', 'replacement-span');

      if (/\.{3}/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /\.{3}/gi,
          '<div class="replacement-div" style="display: inline; border-radius: 5px; padding: 1px 5px; background-color:#D3D3D3"><span class="replacement-span" style="color:#FFA500; font-family: Courier">REST PARAMETER</span></div>'
        );
        indEl.innerHTML = strToMutate;

        // indEl.innerText = indEl.innerText.replace(/\.{3}/gi, 'REST PARAMETER');
      }

      if (/\./.test(indEl.innerText)) {
        let strToMutate = indEl.innerHTML;
        strToMutate = strToMutate.replace(
          /\./g,
          '<div class="replacement-div" style="display: inline; border-radius: 5px; padding: 1px 5px; background-color:#D3D3D3"><span class="replacement-span" style="color:#A020F0; font-family: Courier">PROP SELECTOR</span></div>'
        );
        indEl.innerHTML = strToMutate;
      }

      if (/this/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /this/gi,
          '<div class="replacement-div" style="display: inline; border-radius: 5px; padding: 1px 5px; background-color:#D3D3D3"><span class="replacement-span" style="color:#191970; font-family: Courier">the THIS keyword</span></div>'
        );
        indEl.innerHTML = strToMutate;

        // console.log(indEl);
      }

      if (/for/.test(indEl.innerText)) {
        let strToMutate = indEl.innerHTML;
        strToMutate = strToMutate.replace(
          /for/gi,
          '<div class="replacement-div" style="display: inline; border-radius: 5px; padding: 1px 5px; background-color:#D3D3D3"><span class="replacement-span" style="color:#FF1493; font-family: Courier">FOR loop</span></div>'
        );
        indEl.innerHTML = strToMutate;
      }
      if (/while/.test(indEl.innerText)) {
        let strToMutate = indEl.innerHTML;
        strToMutate = strToMutate.replace(
          /while/gi,
          '<div class="replacement-div" style="display: inline; border-radius: 5px; padding: 1px 5px; background-color:#D3D3D3"><span class="replacement-span" style="color:#FF1493; font-family: Courier">WHILE loop</span></div>'
        );
        indEl.innerHTML = strToMutate;
      }
      if (/new/.test(indEl.innerText)) {
        let strToMutate = indEl.innerText;
        strToMutate = strToMutate.replace(
          /new/i,
          '<div class="replacement-div" style="display: inline; border-radius: 5px; padding: 1px 5px; background-color:#D3D3D3"><span class="replacement-span" style="color:#228B22; font-family: Courier">the NEW keyword</span></div>'
        );
        indEl.innerHTML = strToMutate;
      }

      // if (/#/.test(indEl.innerText))
      //   indEl.innerText = indEl.innerText.replace(/#/gi, 'THE MF OCTOTHORPE');
    }
  }
}

// p tags
// span tags
// li tags
// a tags
// h1 and h2
// ul s
