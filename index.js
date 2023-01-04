let numberOfButtons = document.querySelectorAll(".btn").length
console.log(numberOfButtons);

for (let i = 0; i < numberOfButtons; i++)
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("crash.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("tom-4.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("tom-1.mp3");
                audio.play();
                break;
            case "f":
                var audio = new Audio("snare.mp3");
                audio.play();
                break;
            case "g":
                var audio = new Audio("tom-2.mp3");
                audio.play();
                break;
            default: alert("press the correct button !");
        }
        buttonAnimation(buttonInnerHTML);
    })


// Detecting keypress events

document.addEventListener("keydown", function (event) {
    let key = event.key;
    switch (key) {
        case "w":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        default: alert("press the correct button !");
    }
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}