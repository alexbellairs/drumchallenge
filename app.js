let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

let kbBtn = document.getElementsByClassName("kbBtn");

document.addEventListener("keypress", (event) => {
  if (event.key == "a" || event.key == "A") {
    boom.pause();
    boom.currentTime = 0;
    boom.play();
  } else if (event.key == "s" || event.key == "S") {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
  } else if (event.key == "d" || event.key == "D") {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
  } else if (event.key == "f" || event.key == "F") {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
  } else if (event.key == "g" || event.key == "G") {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
  } else if (event.key == "h" || event.key == "H") {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
  } else if (event.key == "j" || event.key == "J") {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
  } else if (event.key == "k" || event.key == "K") {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
  } else if (event.key == "l" || event.key == "L") {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "a" || e.key == "A") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "s" || e.key == "S") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "d" || e.key == "D") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "f" || e.key == "F") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "g" || e.key == "G") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "h" || e.key == "H") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "j" || e.key == "J") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "k" || e.key == "K") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  } else if (e.key == "l" || e.key == "L") {
    kbBtn.style.backgroundColor = "rgba(255, 0, 255, 0.5);";
  }
});

document.addEventListener("keyup", (x) => {
  if (x.key == "a" || x.key == "A") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "s" || x.key == "S") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "d" || x.key == "D") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "f" || x.key == "F") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "g" || x.key == "G") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "h" || x.key == "H") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "j" || x.key == "J") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "k" || x.key == "K") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else if (x.key == "l" || x.key == "L") {
    kbBtn.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
});

let count = 0;

boomDrum.addEventListener("click", () => {
  boom.pause();
  boom.currentTime = 0;
  boom.play();
});

kickDrum.addEventListener("click", () => {
  kick.pause();
  kick.currentTime = 0;
  kick.play();
});

snareDrum.addEventListener("click", () => {
  snare.pause();
  snare.currentTime = 0;
  snare.play();
});

clapDrum.addEventListener("click", () => {
  clap.pause();
  clap.currentTime = 0;
  clap.play();
});

openhatDrum.addEventListener("click", () => {
  openhat.pause();
  openhat.currentTime = 0;
  openhat.play();
});

tinkDrum.addEventListener("click", () => {
  tink.pause();
  tink.currentTime = 0;
  tink.play();
});

hihatDrum.addEventListener("click", () => {
  hihat.pause();
  hihat.currentTime = 0;
  hihat.play();
});

rideDrum.addEventListener("click", () => {
  ride.pause();
  ride.currentTime = 0;
  ride.play();
});

tomDrum.addEventListener("click", () => {
  tom.pause();
  tom.currentTime = 0;
  tom.play();
});
