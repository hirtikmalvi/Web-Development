function secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

let currentSong = new Audio();
let songs;
let currentFolder;

async function getSong(folder) {
    currentFolder = folder;
    console.log(currentFolder);
    let response = await fetch(`http://127.0.0.1:5500/P3_Spotify_Clone/${currentFolder}`)
    let data = await response.text()
    let div = document.createElement("div");
    div.innerHTML = data;
    songs = [];
    let lis = div.getElementsByTagName("li");
    for (let index = 0; index < lis.length; index++) {
        const element = lis[index].getElementsByTagName("a")[0];
        if (element.href.endsWith(".mp3")) {
            // console.log(element.href.split("/")[6]);
            songs.push(element.href.split("/")[6]);
        }
    }
    // console.log(songs[0]);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        // console.log(song.replaceAll("%20", " ").split(".mp3")[0].split("/")[2]);
        songUL.innerHTML = songUL.innerHTML + `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
        <div>${song.replaceAll("%20", " ").split(".mp3")[0]}</div>
        </div>
        <div class="playnow">
            <span>Play now</span>
            <img class="invert" src="playCurrentSong.svg" alt="">
        </div>
    </li>`;

        // <div>${song.replaceAll("%20", " ").split(".mp3")[1].replace(`/${currentFolder}/`, '')}</div> // this is second child element of info tag
    }

    // console.log();
    let arr = Array.from(document.querySelector(".songList").getElementsByTagName("ul"));
    let Insidelis = arr[0].getElementsByTagName("li");
    Array.from(Insidelis).forEach(e => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
        });
    });
}

const bgColorOfLi = (indexOfCurrentSong) => {
    document.querySelector(".songList").getElementsByTagName("ul")[0].getElementsByTagName("li")[indexOfCurrentSong].style.backgroundColor = "pink";
}

const playMusic = (track, pause = false) => {
    currentSong.src = `http://127.0.0.1:5500/P3_Spotify_Clone/${currentFolder}/${track}.mp3`;
    if (!pause) {
        // console.log(currentFolder, track);
        currentSong.play();
        document.querySelector(".playCurrentSong").src = "pauseCurrentSong.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track).split(".mp3")[0];
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

// async function displayAlbums() {
//     let response = await fetch(`http://127.0.0.1:5500/P3_Spotify_Clone/songs/`)
//     let data = await response.text()
//     let div = document.createElement("div");
//     div.innerHTML = data;
//     let anchors = div.getElementsByTagName("a");
//     for (let index = 0; index < anchors.length; index++) {
//         const element = anchors[index];
//         if (element.href.includes("/songs/")) {
//             console.log(element.href);
//             let folder = element.href.split("/")[5];
//             let response = await fetch(`http://127.0.0.1:5500/P3_Spotify_Clone/songs/${folder}/info.json`)
//             let data = await response.json()
//             let cardContainer = document.querySelector(".cardContainer");

//             cardContainer.innerHTML += `<div data-folder="${folder}" class="card rounded">
//             <div class="play">
//                 <img src="playButton.svg" alt="">
//             </div>
//             <img class="rounded" src="songs/${folder}/cover.jpeg">
//             <h2>${data.title}</h2>
//             <p>${data.discription}</p>
//         </div>`;
//         }
//     }
// }

async function main() {
    await getSong("/songs/");
    // console.log(songs[0]);
    playMusic(songs[0].split(".mp3")[0], true);

    //Displaying all the albums on Page
    // await displayAlbums();


    document.querySelector(".playCurrentSong").addEventListener("click", () => {
        console.log("Inside Current Button");
        if (currentSong.paused) {
            currentSong.play();
            document.querySelector(".playCurrentSong").src = "pauseCurrentSong.svg";
        }
        else {
            currentSong.pause();
            document.querySelector(".playCurrentSong").src = "playCurrentSong.svg";
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

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = 0;
        document.querySelector(".close").style.display = "block";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = -120 + "%";
    });

    document.querySelector(".previousSong").addEventListener("click", () => {
        console.log(songs);
        let indexOfCurrentSong = songs.indexOf(currentSong.src.split("/")[8]);
        console.log(indexOfCurrentSong);
        if ((indexOfCurrentSong - 1) >= 0) {
            playMusic(songs[indexOfCurrentSong - 1].split(".mp3")[0]);
        }
    });

    document.querySelector(".nextSong").addEventListener("click", () => {
        let indexOfCurrentSong = songs.indexOf(currentSong.src.split("/")[8]);
        if ((indexOfCurrentSong + 1) < songs.length) {
            playMusic(songs[indexOfCurrentSong + 1].split(".mp3")[0]);
        }
    });

    //Setting Up volume Button
    document.querySelector(".volumeLine").addEventListener("change", (element) => {
        currentSong.volume = (element.target.value) / 100;
    });


    //Event Listner on Each Card
    Array.from(document.getElementsByClassName("card")).forEach(element => {
        element.addEventListener("click", async (item) => {
            console.log(item.currentTarget.dataset.folder);
            songs = await getSong(`/songs/${item.currentTarget.dataset.folder}/`);
        });
    });

}

main();