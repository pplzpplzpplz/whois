console.log('it works');

const playButton = document.querySelector('#playButton');
const skipButton = document.querySelector('#skipButton');
const turnsCount = document.querySelector('#turnsCount');
const listensCount = document.querySelector('#listensCount');
let song;
let cueStart = 43.5;
let duration = .1;

let turnsCountData = 0;
let listensCountData = 0;
let finalScore;

function preload() {
  song = loadSound('asitwas.mp3');
}

function setup() {
  var calcedHeight = windowWidth * 1.5;
  var canvas = createCanvas(300, calcedHeight);
  canvas.parent('playerContainer');
  angleMode(DEGREES); // Change the mode to DEGREES
  colorMode(HSB);
  fft = new p5.FFT(0.9, 128);
  space_between_lines = width / 128;
}

playButton.addEventListener('click', playSound);

function playSound() {
  gsap.to(playButton, {duration: .05, opacity: 0});
  // play([startTime], [rate], [amp], [cueStart], [duration])
  // cueStart: how far into the song should it start
  // duration: how long should it play for
  listensCountData = listensCountData + 1;
  listensCount.innerHTML = listensCountData;
  song.play(0, 1, 1, cueStart, duration);
  song.onended(function() {
    gsap.to(playButton, {duration: .05, opacity: 1});
  });
}

skipButton.addEventListener('click', skipClicked);

function skipClicked() {
  turnsCountData = turnsCountData + 1;
  turnsCount.innerHTML = turnsCountData;
  duration = duration + .1;
}



// 
// 
// 
// 
// 
// 
// 



let buttton, fft, space_between_lines;

function toggleSong() {
  if(song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}




//Switch to branch symmetric-spectrum using "git checkout symmetric-spectrum" if you want symmetric spectrum.

function draw() {
  background(0);
  
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length; i++) {
    fill(i, 255, 255, spectrum[i]);
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    rect(i * (space_between_lines), y, space_between_lines, height - y, 20);
  }
}

// Chrome 70 will require user gestures to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}

let wCount = 0;

document.addEventListener('keypress', function(e) {
  if(e.key === 'w') {
    wCount = wCount+1
    if (wCount % 2 === 0) {
    document.querySelector('.winner').classList.add('show');
    document.querySelector('iframe').classList.add('show');

    if (turnsCountData === 0 || listensCountData === 0) {
      finalScore = turnsCountData + listensCountData;
    } else {
    finalScore = turnsCountData + listensCountData;
    }


    document.querySelector('#score').innerHTML = `${finalScore}`;
    } else {
      document.querySelector('.winner').classList.remove('show');
      document.querySelector('iframe').classList.remove('show');
    }
  }
});