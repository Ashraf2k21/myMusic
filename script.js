

// initialized to variables 
// let songIndex=0;
let audioElement=new Audio("Songs/Zara-Zara-Bahekta-Hai(PagalWorld).mp3")
let masterPlay=document.getElementById("masterPlay")
let progressBar=document.getElementById("progressBar")
let gif = document.getElementById("gif")
let songItems=Array.from(document.getElementsByClassName("songItem"))
let bottomSongName=document.getElementById("bottomSongName")
let duration=document.getElementById("duration")
let next=document.getElementById("next")
let previous=document.getElementById("previous")
let songs=[
    {songName:"Zara-Zara-Bahekta-Hai", filePath:"Songs/Zara-Zara-Bahekta-Hai(PagalWorld).mp3", coverPath:"Cover/zara.jpg"},
    {songName:"Heeriye-Heeriye-Aa", filePath:"Songs/Heeriye-Heeriye-Aa(PaglaSongs).mp3", coverPath:"Cover/Heeriye.jpg"},
    {songName:"Tere-Vaaste", filePath:"Songs/Tere-Vaaste(PaglaSongs).mp3", coverPath:"Cover/tere vaste.jpg"},
    {songName:"Tum Hi Ho", filePath:"Songs/Tum Hi Ho.mp3", coverPath:"Cover/Tum hi ho.jpg"},
    {songName:"Duniya - Luka Chuppi", filePath:"Songs/Duniya - Luka Chuppi 128 Kbps.mp3", coverPath:"Cover/duniya.jog.jpg"}
]

duration=audioElement.duration
songItems.forEach((e,i)=>{
    const songCover=e.getElementsByTagName("img")[0]
    songCover.src=songs[i].coverPath
   console.log(e,i);
//    e.getElementsByTagName("img")[0].src=songs[i].coverPath
   e.getElementsByClassName("songName")[0].innerText = songs[i].songName
    

})

// song.play()
//handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity=0
    }

})

//Listien to events
audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress
})
progressBar.addEventListener("change",()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100
})
// Array.from(document.getElementsByClassName("playSong")).forEach((element)=>{
//     element.addEventListener("click",(e)=>{
//         console.log(e)
//     })
// })
// Array.from(document.getElementsByClassName("playSong")).forEach((element) => {
//     element.addEventListener("click", (e) => {
        // if (audioElement.paused || audioElement.currentTime === 0) {
        //     audioElement.play();
        //     element.classList.remove("fa-circle-play");
        //     element.classList.add("fa-circle-pause");
        //     gif.style.opacity = 1;
        // } else {
        //     audioElement.pause();
        //     element.classList.remove("fa-circle-pause");
        //     element.classList.add("fa-circle-play");
        //     gif.style.opacity = 0;
        // }
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     songItems.forEach((element, index) => {
//         const playButton = element.querySelector(".playSong");
//         playButton.addEventListener("click", () => {
//             console.log("Play button clicked for song item:", index);
//             // audioElement.src = songs[index].filePath
//             // audioElement.play()
//             console.log(songs[index].filePath)
//             audioElement.src = songs[index].filePath;
//             audioElement.play();
            

//         });

//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    songItems.forEach((element, index) => {
        const playButton = element.querySelector(".playSong");

        playButton.addEventListener("click", () => {
            audioElement.src = songs[index].filePath;
            bottomSongName.innerText=songs[index].songName
            if (audioElement.paused || audioElement.currentTime === 0) {
                // Play logic
                audioElement.play();
                playButton.classList.remove("fa-circle-play");
                playButton.classList.add("fa-circle-pause");
                masterPlay.classList.add("fa-circle-play")
                
                // pauseButton.style.display = "inline"; // Show pause icon
                gif.style.opacity = 1;
            } else {
                // Pause logic
                audioElement.pause();
                playButton.classList.remove("fa-circle-pause");
                playButton.classList.add("fa-circle-play");
                // pauseButton.style.display = "none"; // Hide pause icon
                gif.style.opacity = 0;
            }
        })
    })
})
songItems.forEach((element, index) => {
    next.addEventListener("click",()=>{
        if(index>=4){
            index=0
            audioElement.src=songs[index].filePath
            audioElement.play()
            bottomSongName.innerText=songs[index].songName

        }
        else{
            index+=1
            audioElement.src=songs[index].filePath
            audioElement.play()
            bottomSongName.innerText=songs[index].songName
        }
       
        
    })
})
songItems.forEach((element,index)=>{
    previous.addEventListener('click',()=>{
        if(index===0){
            index=4
            audioElement.src=songs[index].filePath
            audioElement.play()
            bottomSongName.innerText=songs[index].songName
        }
        else{
            index-=1
            audioElement.src=songs[index].filePath
            audioElement.play()
            bottomSongName.innerText=songs[index].songName
        }
    })
})