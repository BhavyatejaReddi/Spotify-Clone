console.log("welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("Alone_-_Color_Out.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [

    { songName: "Alone", filePath: "Alone_-_Color_Out.mp3", coverPath: "Alone.jpg" },
    { songName: "Host", filePath: "Color_Out_-_Host.mp3", coverPath: "Host.webp" },
    { songName: "Kinematic Town", filepath: "Kinematic_-_Seaside_Town.mp3", coverPath: "Seaside.jpg" },
    { songName: "LEEONA", filePath: "LEEONA_-_LEEONA_-_Do_I.mp3", coverPath: "LEEONA.jpg" },
    { songName: "Rest", filePath: "No_Rest_Or_Endless_Rest_-_Lisofv.mp3", coverPath: "NO-Rest.jpeg" },
    { songName: "Tab_sake", filePath: "Tab_-_Sake_Bomb_(feat._Jade_Gritty_&amp;_Aurc).mp3", coverPath: "Tab-Sake.jpeg" },
    { songName: "Alone", filePath: "Alone_-_Color_Out.mp3", coverPath: "Alone.jpg" },




]
songItems.forEach((element ,i) => {
    
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
masterPlay.addEventListener('click', () => {
  if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;

  }
})
audioElement.addEventListener('timeupdate', () => {
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
          
          makeAllPlays();

          songIndex=parseInt(e.target.id);
    
          e.target.classList.remove('fa-play-circle');
          e.target.classList.add('fa-pause-circle');
          audioElement.src = 'songs/${songIndex+1}.mp3';
          masterSongName.innerText =songs[songIndex].songName;

          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');


    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText =songs[songIndex].songName;
          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText =songs[songIndex].songName;

          audioElement.currentTime = 0;
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle');
          masterPlay.classList.add('fa-pause-circle');

})
