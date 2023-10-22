function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let ouput = document.getElementById("output");


    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

function myFunctionhtml() {
    let copyText = document.getElementById("html-code");            
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied");
}

function myFunctioncss() {
    let copyText = document.getElementById("css-code");            
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied");
}

function myFunctionjs() {
    let copyText = document.getElementById("js-code");            
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied");
}

function savehtml() {
        var textArea = document.getElementById('html-code');
        var text = textArea.value;
        var blob = new Blob([text], { type: 'text/plain' });
        var anchor = document.createElement('a');
        anchor.download = 'html-code.txt';
        anchor.href = window.URL.createObjectURL(blob);
        anchor.textContent = 'Download html-code.txt';
        anchor.click();
    
}

function savecss() {
    var textArea = document.getElementById('css-code');
    var text = textArea.value;
    var blob = new Blob([text], { type: 'text/plain' });
    var anchor = document.createElement('a');
    anchor.download = 'css-code.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.textContent = 'Download css-code.txt';
    anchor.click();

}

function savejs() {
    var textArea = document.getElementById('js-code');
    var text = textArea.value;
    var blob = new Blob([text], { type: 'text/plain' });
    var anchor = document.createElement('a');
    anchor.download = 'js-code.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.textContent = 'Download js-code.txt';
    anchor.click();

}


let isLocked = false;
let lockBtn = document.getElementById('lockBtn1');
let textArea = document.getElementById('html-code');

lockBtn.addEventListener('click', function() {
 if (isLocked) {
    // Unlock the textarea
    textArea.removeAttribute('readonly');
    lockBtn.textContent = 'Lock';
 } else {
    // Lock the textarea
    textArea.setAttribute('readonly', '');
    lockBtn.textContent = 'Unlock';
 }
 isLocked = !isLocked;
});

let isLocked1 = false;
let lockBtn1 = document.getElementById('lockBtn2');
let textArea1 = document.getElementById('css-code');

lockBtn1.addEventListener('click', function() {
 if (isLocked) {
    // Unlock the textarea
    textArea1.removeAttribute('readonly');
    lockBtn1.textContent = 'Lock';
 } else {
    // Lock the textarea
    textArea1.setAttribute('readonly', '');
    lockBtn1.textContent = 'Unlock';
 }
 isLocked = !isLocked;
});

let isLocked2 = false;
let lockBtn2 = document.getElementById('lockBtn3');
let textArea2= document.getElementById('js-code');

lockBtn2.addEventListener('click', function() {
 if (isLocked) {
    // Unlock the textarea
    textArea2.removeAttribute('readonly');
    lockBtn2.textContent = 'Lock';
 } else {
    // Lock the textarea
    textArea2.setAttribute('readonly', '');
    lockBtn2.textContent = 'Unlock';
 }
 isLocked = !isLocked;
});


