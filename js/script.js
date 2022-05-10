console.log('it works');

const playButton = document.querySelector('#playButton');
const skipButton = document.querySelector('#skipButton');
const turnsCount = document.querySelector('#turnsCount');
const listensCount = document.querySelector('#listensCount');
const timeCount = document.querySelector('#timeCount');
const audioIncrement = .1;
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


let song;
let cueStart = 43.5;
let duration = .1;

let turnsCountData = 0;
let listensCountData = 0;
let timeCountData = .1;
let finalScore;

function preload() {
  song = loadSound('asitwas.mp3');
}

function setup() {
  var calcedHeight = windowWidth;
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
  listensCountData = listensCountData + 1;
  listensCount.innerHTML = listensCountData;
  // play([startTime], [rate], [amp], [cueStart], [duration])
  song.play(0, 1, 1, cueStart, duration);
  song.onended(function() {
    gsap.to(playButton, {duration: .05, opacity: 1});
  });
}

skipButton.addEventListener('click', skipClicked);

function skipClicked() {
  turnsCountData = turnsCountData + 1;
  turnsCount.innerHTML = turnsCountData;
  duration = duration + audioIncrement;
  timeCountData = timeCountData + audioIncrement
  timeCount.innerHTML = `${timeCountData.toFixed(1)} s`;
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
      gsap.to(playButton, {duration: .05, opacity: 1});
      document.querySelector('.winner').classList.remove('show');
      document.querySelector('iframe').classList.remove('show');
    } else {
      gsap.to(playButton, {duration: .05, opacity: 0});
      document.querySelector('.winner').classList.add('show');
      document.querySelector('iframe').classList.add('show');
      

      finalScore = turnsCountData + listensCountData + timeCountData;
      
      document.querySelector('#score').innerHTML = `${finalScore}`;
      let winnerSongID = '4LRPiXqCikLlN15c3yImP7';
      let winnerSongURL = `https://open.spotify.com/embed/track/${winnerSongID}?utm_source=generator`;
      document.querySelector('iframe').src = winnerSongURL;
    }
  }
});

