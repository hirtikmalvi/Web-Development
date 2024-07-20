function secondsToMinutesSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

let currentSong = new Audio();
let songs;
let currentFolder;

async function getSong(folder) {
  currentFolder = folder;
  let response = await fetch(`/songs/${currentFolder}`);
  let data = await response.text();
  let div = document.createElement("div");
  div.innerHTML = data;
  songs = [];
  let lis = div.getElementsByTagName("li");
  for (let index = 0; index < lis.length; index++) {
    const element = lis[index].getElementsByTagName("a")[0];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`${currentFolder}/`)[1]);
    }
  }
  let songUL = document.querySelector(".songList ul");
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML += `<li>
        <img class="invert" src="/public/images/music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20", " ").split(".mp3")[0]}</div>
            <div>${song.replaceAll("%20", " ").split(".mp3")[1]}</div>
        </div>
        <div class="playnow">
            <span>Play now</span>
            <img class="invert" src="/public/images/playCurrentSong.svg" alt="">
        </div>
    </li>`;
  }
  let insideArr = Array.from(
    document.querySelector(".songList ul").getElementsByTagName("li")
  );
  insideArr.forEach((e) => {
    e.addEventListener("click", () => {
      playMusic(e.querySelector(".info").firstElementChild.innerHTML);
    });
  });
}

const playMusic = (track, pause = false) => {
  currentSong.src = `/songs/${currentFolder}/${track}.mp3`;
  if (!pause) {
    currentSong.play();
    document.querySelector(".playCurrentSong").src =
      "/public/images/pauseCurrentSong.svg";
  }
  document.querySelector(".songinfo").innerHTML =
    decodeURI(track).split(".mp3")[0];
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function displayAlbums() {
  let response = await fetch(`/songs/`);
  let data = await response.text();
  let div = document.createElement("div");
  div.innerHTML = data;
  let anchors = div.getElementsByTagName("a");
  for (let index = 0; index < anchors.length; index++) {
    const element = anchors[index];
    if (element.href.includes("/songs/")) {
      console.log(element.href);
      let folder = element.href.split("/")[4];
      console.log(folder);
      let response = await fetch(`/songs/${folder}/info.json`);
      let data = await response.json();
      let cardContainer = document.querySelector(".cardContainer");

      cardContainer.innerHTML += `<div data-folder="${folder}" class="card rounded">
            <div class="play">
                <img src="/public/images/playButton.svg" alt="">
            </div>
            <img class="rounded" src="/songs/${folder}/cover.jpeg">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        </div>`;
    }
  }

  Array.from(document.getElementsByClassName("card")).forEach((element) => {
    element.addEventListener("click", async (item) => {
      console.log(item.currentTarget.dataset.folder);
      await getSong(item.currentTarget.dataset.folder);
      console.log(songs);
      playMusic(songs[0].split(".mp3")[0]);
    });
  });
}

async function main() {
  await getSong("cs");
  console.log(songs[0]);
  playMusic(songs[0].split(".mp3")[0], true);

  await displayAlbums();

  document.querySelector(".playCurrentSong").addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      document.querySelector(".playCurrentSong").src =
        "/public/images/pauseCurrentSong.svg";
    } else {
      currentSong.pause();
      document.querySelector(".playCurrentSong").src =
        "/public/images/playCurrentSong.svg";
    }
  });

  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(
      currentSong.currentTime
    )} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".seekCircle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  document.querySelector(".seekLine").addEventListener("click", (e) => {
    let currentPosition = e.offsetX / e.target.getBoundingClientRect().width;
    document.querySelector(".seekCircle").style.left =
      currentPosition * 100 + "%";
    console.log(currentPosition);
    currentSong.currentTime = currentSong.duration * currentPosition;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = 0;
    document.querySelector(".cross").style.display = "block";
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = -120 + "%";
  });

  document.querySelector(".previousSong").addEventListener("click", () => {
    console.log("Inside Prev");
    let indexOfCurrentSong = songs.indexOf(currentSong.src.split("/").pop());
    console.log(currentSong.src.split("/").pop());
    console.log(indexOfCurrentSong);
    if (indexOfCurrentSong - 1 >= 0) {
      playMusic(songs[indexOfCurrentSong - 1].split(".mp3")[0]);
    }
  });

  document.querySelector(".nextSong").addEventListener("click", () => {
    console.log("Inside Next");
    console.log(currentSong.src);
    console.log(
      currentSong.src
        .split(".mp3")[0]
        .split(`${currentFolder}/`)[1]
        .replaceAll("%20", " ")
    );
    let indexOfCurrentSong = songs.indexOf(currentSong.src.split("/").pop());
    console.log(indexOfCurrentSong);

    if (indexOfCurrentSong + 1 < songs.length) {
      playMusic(songs[indexOfCurrentSong + 1].split(".mp3")[0]);
    }
  });

  document
    .querySelector(".volumeLine")
    .addEventListener("change", (element) => {
      currentSong.volume = element.target.value / 100;
      if (currentSong.volume > 0) {
        document.querySelector(".volume").src = "/public/images/volume.svg";
        console.log(document.querySelector(".volume").volume);
      } else if (currentSong.volume <= 0) {
        document.querySelector(".volume").src = "/public/images/mute.svg";
      }
    });

  document.querySelector(".volume").addEventListener("click", (element) => {
    const prevVol = currentSong.volume;
    if (element.target.src.includes("/public/images/volume.svg")) {
      console.log(element.target.src);
      element.target.src = "/public/images/mute.svg";
      currentSong.volume = 0;
    } else {
      element.target.src = "/public/images/volume.svg";
      currentSong.volume = 0.5;
    }
  });
}

main();
