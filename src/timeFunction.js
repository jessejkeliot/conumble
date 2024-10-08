// @ts-nocheck
export function getTimeFromFirstConumble() {
  const today = new Date();
  const startDate = new Date("2024-10-07");
  const timeDiff = today.valueOf() - startDate.valueOf(); //in milliseconds
  return timeDiff;
}

export function copy(text) {
    return new Promise((resolve, reject) => {
        if (typeof navigator !== "undefined" && typeof navigator.clipboard !== "undefined" && navigator.permissions !== "undefined") {
            const type = "text/plain";
            const blob = new Blob([text], { type });
            const data = [new ClipboardItem({ [type]: blob })];
            navigator.permissions.query({name: "clipboard-write"}).then((permission) => {
                if (permission.state === "granted" || permission.state === "prompt") {
                    navigator.clipboard.write(data).then(resolve, reject).catch(reject);
                }
                else {
                    reject(new Error("Permission not granted!"));
                }
            });
        }
        else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";
            textarea.style.width = '2em';
            textarea.style.height = '2em';
            textarea.style.padding = 0;
            textarea.style.border = 'none';
            textarea.style.outline = 'none';
            textarea.style.boxShadow = 'none';
            textarea.style.background = 'transparent';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand("copy");
                document.body.removeChild(textarea);
                resolve();
            }
            catch (e) {
                document.body.removeChild(textarea);
                reject(e);
            }
        }
        else {
            reject(new Error("None of copying methods are supported by this browser!"));
        }
    });
    
}

export function createGameRepresenation(attemptsleft, gamestate, index) {
    const character = "★";
    const failcharacter = "☆";
    const retries = 4;
    if (gamestate==0) { //completely failed.
        return failcharacter.repeat(retries+ 1);
    }
    else {
    let rep = character;
    for (let a = 0; a < retries; a++) {
        if(a < attemptsleft){
            rep += character;
        }
        else {
            rep += failcharacter;
        }
        
    }
    return rep;
}
}