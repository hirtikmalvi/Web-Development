// let link = "http://127.0.0.1:5500/P3_Spotify_Clone/songs/.mp3";
let playCurrentSongBtn = document.querySelector(".playCurrentSong");

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

async function main() {
    var songs = await getSong();
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20"," ").split(".mp3")[0].split(" -")[1]} by</div>
            <div>${song.replaceAll("%20"," ").split(".mp3")[0].split(" -")[0]}</div>
        </div>
        <div class="playnow">
            <span>Play now</span>
            <img class="invert" src="playCurrentSong.svg" alt="">
        </div>
    </li>`;
    }

    playCurrentSongBtn.addEventListener("click", () => {
        let audio = new Audio(songs[6]);
        audio.play();
    });
}



main();
