//enter button
document.getElementById("enter").onclick = function () {
    location.href = "vue/transition.html";
};

//audio buttons
const music = document.getElementById("music");
const play = document.getElementById("play");
const pause = document.getElementById("pause");

play.onclick = function () {
    music.play();
};
pause.onclick = function () {
    music.pause();
};
