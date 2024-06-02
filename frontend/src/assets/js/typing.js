let list;
let targetElement;

function startTypingAnimation(targetId = "", stringList = undefined) {
  if(stringList != null && stringList != undefined) {
    list = stringList;
    targetElement = document.getElementById(targetId);

    callbackTyping(0);
  }
  else {
    console.error("Error: The list was undefined or null")
  }
}

async function callbackTyping(i) {
  targetElement.innerHTML = "";

  if(list[i] == undefined) {
    return callbackTyping(0);
  }

  const x = await iterateCharString(list[i].split(''));
  callbackTyping(i+1);
  return;
}

function iterateCharString(charList) {
  return new Promise((resolve, reject) => {
    if(charList[0] == undefined) {
      setTimeout(() => {
        reject();
      }, 5000)
    }
    else {
      setTimeout(() => {
        targetElement.insertAdjacentHTML( 'beforeend', charList[0]);
        resolve();
      }, 250);
    }
  }).then(
    async function() { 
      return await iterateCharString(charList.slice(1));
    },
    function() {
      return;
    }
  );
}

export { startTypingAnimation };