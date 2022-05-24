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

// WINNING SONG INFO ~~~~~~~~~~~~~~
let winningSong = "Beat It by Michael Jackson";
// let winnerSongID = '3fMbdgg4jU18AjLCKBhRSm'
// let winnerSongURL = `https://open.spotify.com/embed/track/${winnerSongID}?utm_source=generator`
// document.querySelector('iframe').src = winnerSongURL
let mp3PreviewURL = 'https://p.scdn.co/mp3-preview/1b0b8d9493dbbdb4c2a4792ce850787ad8052ecb?cid=a46f5c5745a14fbf826186da8da5ecc3'

const audioIncrement = .2;
let cueStart = 2;
let duration = .45;
let currentWidth;

let turnsCountData = 0;
let listensCountData = 0;
let timeCountData = .45;
let finalScore;

timeCount.innerHTML = `${duration.toFixed(1)} s`





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
  timeCount.innerHTML = `${duration.toFixed(1)} s`

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