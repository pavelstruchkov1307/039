const btn = document.querySelector(".btn");

btn.addEventListener("click", myAnimation);

function myAnimation() {
    const box = document.querySelector(".box");
    let pos = 0;
    const timeId = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(timeId);
        } else {
            box.style.top = pos + "px";
            box.style.left = pos + "px";
        }
        pos++;
    }
}