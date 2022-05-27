document.getElementById("upper-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value.toUpperCase().split(" ");
    document.querySelector("textarea").value = text.join(" ");
})

document.getElementById("lower-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value.toLowerCase().split(" ");
    document.querySelector("textarea").value = text.join(" ");
})

document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value.toLowerCase().split(" ").map((item) => {
        return item[0].toUpperCase() + item.substring(1);
    });
    document.querySelector("textarea").value = text.join(" ");
})

document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.querySelector("textarea").value.toLowerCase().split(". ").map((sentence) => {
        return sentence[0].toUpperCase() + sentence.substring(1);
    });
    document.querySelector("textarea").value = text.join(". ");
})

let input = document.querySelector("textarea");
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click",function () {
    let string = input.value;
   let filename  = "text.txt";
    download(filename , string);
}, false);
