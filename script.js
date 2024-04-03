function toggleAudio() {
    var audio = document.getElementById("audio");
    var container = document.querySelector(".container-audio");

    if (audio.paused) {
        audio.play();
        container.classList.add("playing");
    } else {
        audio.pause();
        container.classList.remove("playing");
    }
}
