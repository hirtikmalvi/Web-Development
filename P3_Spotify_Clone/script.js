// let link = "http://127.0.0.1:5500/P3_Spotify_Clone/songs/.mp3";
let playCurrentSongBtn = document.querySelector(".playCurrentSong");

function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

let currentSong = new Audio();

async function getSong() {
    let response = await fetch("http://127.0.0.1:5500/P3_Spotify_Clone/songs/")
    let data = await response.text()
    let div = document.createElement("div");
    div.innerHTML = data;
    let songs = [];
    let lis = div.getElementsByTagName("li");
    for (let index = 0; index < lis.length; index++) {
        const element = lis[index].getElementsByTagName("a")[0];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}

const playMusic = (track, pause = false) => {
    currentSong.src = `http://127.0.0.1:5500/P3_Spotify_Clone/songs/${track}.mp3`;
    if (!pause) {
        currentSong.play();
        playCurrentSongBtn.src = "pauseCurrentSong.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track).split(".mp3")[0];
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function main() {
    var songs = await getSong();
    // console.log(songs[0]);
    playMusic(songs[0].split(".mp3")[0], true);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20", " ").split(".mp3")[0]}</div>
            <div>${song.replaceAll("%20", " ").split(".mp3")[1]}</div>
        </div>
        <div class="playnow">
            <span>Play now</span>
            <img class="invert" src="playCurrentSong.svg" alt="">
        </div>
    </li>`;
    }

    // console.log();
    let arr = Array.from(document.querySelector(".songList").getElementsByTagName("ul"));
    let insideArr = arr[0].getElementsByTagName("li");
    Array.from(insideArr).forEach(e => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
        });
    });


    playCurrentSongBtn.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            playCurrentSongBtn.src = "pauseCurrentSong.svg";
        }
        else {
            currentSong.pause();
            playCurrentSongBtn.src = "playCurrentSong.svg";
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".seekCircle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
        // document.querySelector(".seekLine2").style.width = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    document.querySelector(".seekLine").addEventListener("click", (e) => {
        let currentPosition = (e.offsetX / e.target.getBoundingClientRect().width);
        document.querySelector(".seekCircle").style.left = (currentPosition * 100) + "%";
        console.log(currentPosition);
        // document.querySelector(".seekLine2").style.width = (currentPosition * 100) + "%";
        currentSong.currentTime = currentSong.duration * currentPosition;
    });

    // [document.querySelector(".seekLine"), document.querySelector(".seekLine2")].forEach((element) => {
    //     console.log(element);
    //     element.addEventListener("click", (e) => {
    //         let currentPosition = (e.offsetX / e.target.getBoundingClientRect().width);
    //         document.querySelector(".seekCircle").style.left = (currentPosition * 100) + "%";
    //         document.querySelector(".seekLine2").style.width = (currentPosition * 100) + "%";
    //         currentSong.currentTime = currentSong.duration * currentPosition;
    //     });
    // });
    
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = 0;
        document.querySelector(".cross").style.display = "block";
    });

    document.querySelector(".cross").addEventListener("click",()=>{
        document.querySelector(".left").style.left = -120 + "%";
    });

}

main();
