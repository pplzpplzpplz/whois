let wrongAnswerSound;
let winnerSound;


function preload() {
  wrongAnswerSound = loadSound('audio/wrong.mp3');
  winnerSound = loadSound('audio/right.wav');
}

function setup() {
  // do nothing 
}

const playButton = document.querySelector('#playButton');
const skipButton = document.querySelector('#skipButton');
const letsGoButton = document.querySelector('#letsGo');
const waveformId = document.querySelector('#waveform');
const playerContainerDiv = document.querySelector('#playerContainer');

const introScreen = document.querySelector('.intro');
const sorryScreen = document.querySelector('.sorry');
const winnerScreen = document.querySelector('.winner');

const turnsCount = document.querySelector('#turnsCount');
const listensCount = document.querySelector('#listensCount');
const timeCount = document.querySelector('#timeCount');

const form = document.querySelector("form");
const userInput = document.querySelector('#userInput');

// TOP 200 SONGS FROM JSON ~~~~~~~~~
let top200Songs;
let top200SongsTestArr = ['1', '2...']
$.getJSON("./js/top200Songs.json", function (data) {
  top200Songs = [];      // THE ARRAY TO STORE JSON ITEMS.
  $.each(data, function (index, value) {
      top200Songs.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
  });
});



let decodedData = decodeURIComponent('%7B%22album%22%3A%7B%22album_type%22%3A%22compilation%22%2C%22artists%22%3A%5B%7B%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Fartist%2F7CyeXFnOrfC1N6z4naIpgo%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2F7CyeXFnOrfC1N6z4naIpgo%22%2C%22id%22%3A%227CyeXFnOrfC1N6z4naIpgo%22%2C%22name%22%3A%22The%20Ronettes%22%2C%22type%22%3A%22artist%22%2C%22uri%22%3A%22spotify%3Aartist%3A7CyeXFnOrfC1N6z4naIpgo%22%7D%5D%2C%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Falbum%2F3vLFWR3fLqfY82WGvaLuyV%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Falbums%2F3vLFWR3fLqfY82WGvaLuyV%22%2C%22id%22%3A%223vLFWR3fLqfY82WGvaLuyV%22%2C%22images%22%3A%5B%7B%22height%22%3A640%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2734694c5b97d3a88efb5fc71b5%22%2C%22width%22%3A640%7D%2C%7B%22height%22%3A300%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e024694c5b97d3a88efb5fc71b5%22%2C%22width%22%3A300%7D%2C%7B%22height%22%3A64%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d000048514694c5b97d3a88efb5fc71b5%22%2C%22width%22%3A64%7D%5D%2C%22name%22%3A%22Be%20My%20Baby%3A%20The%20Very%20Best%20of%20The%20Ronettes%22%2C%22release_date%22%3A%222011-02-22%22%2C%22release_date_precision%22%3A%22day%22%2C%22total_tracks%22%3A18%2C%22type%22%3A%22album%22%2C%22uri%22%3A%22spotify%3Aalbum%3A3vLFWR3fLqfY82WGvaLuyV%22%7D%2C%22artists%22%3A%5B%7B%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Fartist%2F7CyeXFnOrfC1N6z4naIpgo%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2F7CyeXFnOrfC1N6z4naIpgo%22%2C%22id%22%3A%227CyeXFnOrfC1N6z4naIpgo%22%2C%22name%22%3A%22The%20Ronettes%22%2C%22type%22%3A%22artist%22%2C%22uri%22%3A%22spotify%3Aartist%3A7CyeXFnOrfC1N6z4naIpgo%22%7D%5D%2C%22disc_number%22%3A1%2C%22duration_ms%22%3A160906%2C%22explicit%22%3Afalse%2C%22external_ids%22%3A%7B%22isrc%22%3A%22USQX91100088%22%7D%2C%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Ftrack%2F2G2YzndIA6jeWFPBXhUjh5%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Ftracks%2F2G2YzndIA6jeWFPBXhUjh5%22%2C%22id%22%3A%222G2YzndIA6jeWFPBXhUjh5%22%2C%22is_local%22%3Afalse%2C%22is_playable%22%3Atrue%2C%22name%22%3A%22Be%20My%20Baby%22%2C%22popularity%22%3A66%2C%22preview_url%22%3A%22https%3A%2F%2Fp.scdn.co%2Fmp3-preview%2F756e97556adf82f32e67bc150a0e3bdd6f9bd6b0%3Fcid%3Da46f5c5745a14fbf826186da8da5ecc3%22%2C%22track_number%22%3A2%2C%22type%22%3A%22track%22%2C%22uri%22%3A%22spotify%3Atrack%3A2G2YzndIA6jeWFPBXhUjh5%22%2C%22dominantColor%22%3A%22%23803050%22%7D');
let jsonObject = JSON.parse(decodedData);
console.log(jsonObject );

   
// ~~~~~~~~~~~~ SONG INFO ~~~~~~~~~~~~~~
let winningSong = "Beat It by Michael Jackson";
// let winnerSongID = '3fMbdgg4jU18AjLCKBhRSm'
// let winnerSongEmbedURL = `https://open.spotify.com/embed/track/${winnerSongID}?utm_source=generator`
let mp3PreviewURL = 'https://p.scdn.co/mp3-preview/1b0b8d9493dbbdb4c2a4792ce850787ad8052ecb?cid=a46f5c5745a14fbf826186da8da5ecc3'
// document.querySelector('iframe').src = winnerSongEmbedURL

  // SETTINGS ~~~~~~~~~~~~~~~
  const audioIncrement = .2; // how much they get on each 'skip'
  let cueStart = 2; // how far into the song does the sample start 
  let duration = .45; // starting length of the sample
  let timeCountData = duration;
  
  let turnsCountData = 0;
  let listensCountData = 0;
  let currentWidth;
  let finalScore; 

timeCount.innerHTML = `${duration.toFixed(2)} s`





// IF USER CLICKS LETS GO ~~~~~~~~~~~~~~~~~~~~~~~
letsGoButton.addEventListener('click', function () {
  introScreen.classList.add('hide')

  // currentWidth = duration;
  currentWidth = duration / wavesurfer.getDuration() * 1000;

  waveformId.style.width = `${currentWidth}%`;

  let waveformWave = document.querySelector('wave');
  // waveformWave.style.left = '-10%';
})


// WAVESURFER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'violet',
  barWidth: 2,
  barHeight: 1,
  barGap: null,
  hideScrollbar: true,
  scrollParent: true
});


wavesurfer.load(mp3PreviewURL);

// GENERATE BLOCK DIV after the audio and waveform has loaded ~~~~~~
// wavesurfer.on('ready', function () {
//   var blockDiv = document.createElement('div');
//   playerContainerDiv.appendChild(blockDiv);
//   blockDiv.classList.add('block');
// });





// IF USER CLICKS PLAY ~~~~~~~~~~~~~~~~~~~~~~~
playButton.addEventListener('click', playSound);

function playSound() {
  // refactor gsap animations -- playButton.classList.add('playing'); and then transition in .scss isntead of duration/gsap
  // make a method to do playButton.classList.add('playing')

  gsap.to(waveformId, { duration: duration, x: -waveformId.offsetWidth })
  // gsap.to(playButton, {duration: .05, opacity: 0}); 
  listensCountData += 1;
  listensCount.innerHTML = listensCountData;
  // wavesurfer.play(0, 1, 1, cueStart, duration); 
  // redo above but with wavesurfer!!!
  let songEndTime = duration + cueStart;
  wavesurfer.play(cueStart, songEndTime); 
  console.log(`song is playing for ${duration} seconds`);
  wavesurfer.setVolume( 0.2, 0, 0 );  

  gsap.to(waveformId, { duration: 0, x: 0, delay: duration })


  

  wavesurfer.on('finish', function () {
    gsap.to(playButton, {duration: .05, opacity: 1});
  });
}

// IF USER CLICKS SKIP ~~~~~~~~~~~~~~~~~~~~~~~
skipButton.addEventListener('click', skipClicked);

function skipClicked() {
  console.log('you clicked skip')
  turnsCountData += 1
  turnsCount.innerHTML = turnsCountData
  duration += audioIncrement
  timeCountData += audioIncrement
  timeCount.innerHTML = `${duration.toFixed(2)} s`

  currentWidth = duration / wavesurfer.getDuration() * 1000;
  waveformId.style.width = `${currentWidth}%`;
  // find the width in percentage of the waveform that is displayed
  // currentWidth = duration / wavesurfer.getDuration() * 100;
  // console.log(currentWidth);
  wavesurfer.load(mp3PreviewURL);

}




form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("you submitted an answer");

  ///////////////////////////////////////////////
  // IF THEY WON:::
  if (userInput.value == winningSong) {

    document.querySelector('#x').addEventListener('click', ()=>{
      winnerScreen.classList.remove('show')
    })

    winnerSound.play();
    winnerSound.setVolume( 0.2, 0, 0 ); 
    // gsap.to(playButton, {duration: .05, opacity: 0})
    winnerScreen.classList.add('show')

    finalScore = turnsCountData + listensCountData + timeCountData
    // weight turns higher?
    
    document.querySelector('#score').innerHTML = finalScore
  } else 
  ///////////////////////////////////////////////
  // IF THEY ARE WRONG:::
  {
    wrongAnswerSound.play();
    wrongAnswerSound.setVolume( 0.4, 0, 0 );
    sorryScreen.classList.remove('hide');
    sorryScreen.classList.add('show'); 
    setTimeout(() => {
      form.elements[0].value = "";
      sorryScreen.classList.remove('show');
      sorryScreen.classList.add('hide');
    } , 600)
  }
});

// change text inside skipButton every 1 second:
// setInterval(function(){
//   skipButton.innerHTML = `skip turn <span style="color:#37c400;">⇉</span>`;
// } , 1000);

// setInterval(function(){
//   skipButton.innerHTML = `skip turn <span style="color:#ffffff;">⇉</span>`;
// } , 2000);