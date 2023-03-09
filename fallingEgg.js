let eggsBasket = document.getElementById("basket"),
    targetEgg = document.querySelector(".targetEgg"),
    messageDiv = document.querySelector(".message"),
    eggcrackAudio = document.querySelector(".lose")
winAudio = document.querySelector(".win");


eggsBasket.style.top = window.innerHeight - eggsBasket.height + 'px';
let left = 0;
function moveRight() {
    left += 10;
    if (left < window.innerWidth - eggsBasket.width)
        eggsBasket.style.left = left + "px";
    else {
        moveLeft();
    }
    return left;
}
function moveLeft() {
    left -= 10;
    if (left > 0)
        eggsBasket.style.left = left + "px";
    else {
        moveRight();
    }
    return left;
}

window.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowRight') {
        moveRight()
    } else if (event.key == 'ArrowLeft') { moveLeft() }
    else { console.log("use right and left arrows") }
})

function dropEgg() {
    let eggArea = window.innerWidth - targetEgg.width;
    let targetImgLeft = Math.random() * eggArea;
    targetEgg.style.left = targetImgLeft + 'px';
    targetEgg.style.top = 0;

}

let downIncrement = 0;
function interval() {
    let timerId = setInterval(function () {
        downIncrement += 10;
        targetEgg.style.opacity = '1';
        targetEgg.style.top = downIncrement;

        if (downIncrement > window.innerHeight - eggsBasket.height) {
            if (eggsBasket.offsetLeft + eggsBasket.width > targetEgg.offsetLeft + targetEgg.width && eggsBasket.offsetLeft < targetEgg.offsetLeft) {
                let soundCrack = new Audio('Success_ win sound effect(MP3_70K).mp3');
                soundCrack.play();
                targetEgg.remove();
                messageDiv.innerHTML = "<h2> &#128151كسبت يلا العب تانى</h2>";
                messageDiv.style.top = 200 + 'px';
                messageDiv.style.left = 500 + 'px';
                messageDiv.style.display = 'block'
                clearInterval(timerId);
            } else {
                let soundWin = new Audio('Bone Crack Sound Effect(MP3_70K).mp3');
                soundWin.play();
                targetEgg.src = "https://i.ibb.co/ZxTTHfs/Uovo-sorridente.png";
                messageDiv.innerHTML = "<h2> &#128148	خسرت </h2>";
                messageDiv.style.top = 200 + 'px';
                messageDiv.style.left = 500 + 'px';
                messageDiv.style.display = 'block'
                clearInterval(timerId);
            }
        }

    }, 100)
}
window.addEventListener('load', function (event) {
    dropEgg();
    interval()
})


