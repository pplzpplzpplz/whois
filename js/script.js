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



let decodedData = decodeURIComponent('%7B%22album%22%3A%7B%22album_type%22%3A%22album%22%2C%22artists%22%3A%5B%7B%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Fartist%2F3oDbviiivRWhXwIE8hxkVV%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2F3oDbviiivRWhXwIE8hxkVV%22%2C%22id%22%3A%223oDbviiivRWhXwIE8hxkVV%22%2C%22name%22%3A%22The%20Beach%20Boys%22%2C%22type%22%3A%22artist%22%2C%22uri%22%3A%22spotify%3Aartist%3A3oDbviiivRWhXwIE8hxkVV%22%7D%5D%2C%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Falbum%2F37rNuexqEXWeSIOiJtn3A9%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Falbums%2F37rNuexqEXWeSIOiJtn3A9%22%2C%22id%22%3A%2237rNuexqEXWeSIOiJtn3A9%22%2C%22images%22%3A%5B%7B%22height%22%3A640%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b273fb9dac3244b8486758058a81%22%2C%22width%22%3A640%7D%2C%7B%22height%22%3A300%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00001e02fb9dac3244b8486758058a81%22%2C%22width%22%3A300%7D%2C%7B%22height%22%3A64%2C%22url%22%3A%22https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d00004851fb9dac3244b8486758058a81%22%2C%22width%22%3A64%7D%5D%2C%22name%22%3A%22Smiley%20Smile%20(Remastered)%22%2C%22release_date%22%3A%221967-09-18%22%2C%22release_date_precision%22%3A%22day%22%2C%22total_tracks%22%3A11%2C%22type%22%3A%22album%22%2C%22uri%22%3A%22spotify%3Aalbum%3A37rNuexqEXWeSIOiJtn3A9%22%7D%2C%22artists%22%3A%5B%7B%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Fartist%2F3oDbviiivRWhXwIE8hxkVV%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Fartists%2F3oDbviiivRWhXwIE8hxkVV%22%2C%22id%22%3A%223oDbviiivRWhXwIE8hxkVV%22%2C%22name%22%3A%22The%20Beach%20Boys%22%2C%22type%22%3A%22artist%22%2C%22uri%22%3A%22spotify%3Aartist%3A3oDbviiivRWhXwIE8hxkVV%22%7D%5D%2C%22disc_number%22%3A1%2C%22duration_ms%22%3A219026%2C%22explicit%22%3Afalse%2C%22external_ids%22%3A%7B%22isrc%22%3A%22USCA20100360%22%7D%2C%22external_urls%22%3A%7B%22spotify%22%3A%22https%3A%2F%2Fopen.spotify.com%2Ftrack%2F5t9KYe0Fhd5cW6UYT4qP8f%22%7D%2C%22href%22%3A%22https%3A%2F%2Fapi.spotify.com%2Fv1%2Ftracks%2F5t9KYe0Fhd5cW6UYT4qP8f%22%2C%22id%22%3A%225t9KYe0Fhd5cW6UYT4qP8f%22%2C%22is_local%22%3Afalse%2C%22is_playable%22%3Atrue%2C%22name%22%3A%22Good%20Vibrations%20-%20Remastered%202001%22%2C%22popularity%22%3A71%2C%22preview_url%22%3A%22https%3A%2F%2Fp.scdn.co%2Fmp3-preview%2F03292423fe8f4527163a4b1945a3b3a6b047b0de%3Fcid%3Da46f5c5745a14fbf826186da8da5ecc3%22%2C%22track_number%22%3A6%2C%22type%22%3A%22track%22%2C%22uri%22%3A%22spotify%3Atrack%3A5t9KYe0Fhd5cW6UYT4qP8f%22%2C%22dominantColor%22%3A%22%235b8141%22%7D');
let jsonObject = JSON.parse(decodedData);
console.log(jsonObject.preview_url);

   
// ~~~~~~~~~~~~ SONG INFO ~~~~~~~~~~~~~~
let winningSong = "Good Vibrations by The Beach Boys";
let winnerSongID = '5t9KYe0Fhd5cW6UYT4qP8f'
let winnerSongEmbedURL = `https://open.spotify.com/embed/track/${winnerSongID}?utm_source=generator`
let mp3PreviewURL = jsonObject.preview_url
document.querySelector('iframe').src = winnerSongEmbedURL

  // SETTINGS ~~~~~~~~~~~~~~~
  const audioIncrement = .2; // how much they get on each 'skip'
  let cueStart = 1.5; // how far into the song does the sample start 
  let duration = .4; // starting length of the sample
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
    winnerScreen.classList.add('show')

    finalScore = (turnsCountData * 1.25) + listensCountData + timeCountData
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
